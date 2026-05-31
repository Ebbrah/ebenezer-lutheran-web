"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createServiceClient } from "@/lib/supabase/service";
import {
  clearSliderAdminSession,
  isSliderAdminAuthenticated,
  isSliderAdminConfigured,
  setSliderAdminSession,
} from "@/lib/admin-slider-auth";

export type SliderAdminState = { ok: boolean; error?: string };

export async function loginSliderAdmin(
  _prev: SliderAdminState | undefined,
  formData: FormData,
): Promise<SliderAdminState> {
  const password = String(formData.get("password") ?? "");
  if (!isSliderAdminConfigured()) {
    return {
      ok: false,
      error: "Msimamizi haujasajiliwa: weka ADMIN_SLIDER_SECRET na SUPABASE_SERVICE_ROLE_KEY.",
    };
  }
  const secret = process.env.ADMIN_SLIDER_SECRET?.trim() ?? "";
  if (!password || password !== secret) {
    return { ok: false, error: "Nenosiri si sahihi." };
  }
  await setSliderAdminSession();
  revalidatePath("/admin/slider");
  redirect("/admin/slider");
}

export async function logoutSliderAdmin(): Promise<void> {
  await clearSliderAdminSession();
  revalidatePath("/admin/slider");
}

const addSchema = z.object({
  imageUrl: z.string().url("URL si sahihi."),
  alt: z.string().min(1, "Maelezo ya picha yanahitajika."),
  caption: z.string().optional(),
});

export async function addHomeSlide(
  _prev: SliderAdminState | undefined,
  formData: FormData,
): Promise<SliderAdminState> {
  if (!(await isSliderAdminAuthenticated())) {
    return { ok: false, error: "Ingia tena." };
  }
  const supabase = createServiceClient();
  if (!supabase) {
    return { ok: false, error: "Seva ya data haijasajiliwa." };
  }
  const parsed = addSchema.safeParse({
    imageUrl: formData.get("imageUrl"),
    alt: formData.get("alt"),
    caption: String(formData.get("caption") ?? ""),
  });
  if (!parsed.success) {
    const msg = parsed.error.issues[0]?.message ?? "Ombi si halali.";
    return { ok: false, error: msg };
  }
  const { data: maxRow } = await supabase
    .from("home_slider_images")
    .select("sort_order")
    .order("sort_order", { ascending: false })
    .limit(1)
    .maybeSingle();

  const nextOrder = (maxRow?.sort_order ?? -1) + 1;

  const { error } = await supabase.from("home_slider_images").insert({
    image_url: parsed.data.imageUrl,
    alt_text: parsed.data.alt,
    caption: parsed.data.caption?.trim() ? parsed.data.caption.trim() : null,
    sort_order: nextOrder,
  });

  if (error) {
    console.error("[slider-admin]", error.message);
    return {
      ok: false,
      error:
        "Imeshindwa kuongeza picha. Hakikisha jedwali `home_slider_images` limewekwa kwenye Supabase.",
    };
  }

  revalidatePath("/");
  revalidatePath("/admin/slider");
  return { ok: true };
}

export async function removeHomeSlide(formData: FormData): Promise<void> {
  if (!(await isSliderAdminAuthenticated())) return;
  const id = z.string().uuid().safeParse(formData.get("id"));
  if (!id.success) return;

  const supabase = createServiceClient();
  if (!supabase) return;

  await supabase.from("home_slider_images").delete().eq("id", id.data);

  revalidatePath("/");
  revalidatePath("/admin/slider");
}
