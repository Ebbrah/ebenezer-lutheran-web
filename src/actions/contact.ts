"use server";

import { z } from "zod";
import { siteConfig } from "@/lib/site-config";
import { isSupabaseConfigured } from "@/lib/env";
import { createClient } from "@/lib/supabase/server";

const schema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("Valid email required").max(320),
  phone: z.string().max(40),
  message: z.string().min(1, "Message is required").max(5000),
});

export type ContactState =
  | { ok: true; mode: "saved" | "fallback" }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> };

export async function submitContact(
  _prev: ContactState | undefined,
  formData: FormData,
): Promise<ContactState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: String(formData.get("phone") ?? ""),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      ok: false,
      error: "Please check the form.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  const data = parsed.data;

  if (!isSupabaseConfigured()) {
    return {
      ok: true,
      mode: "fallback",
    };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      phone: data.phone.trim() ? data.phone.trim() : null,
      message: data.message,
      source: "website",
    });

    if (error) {
      console.error("[contact]", error.message);
      return {
        ok: false,
        error: `Could not save your message. Please email ${siteConfig.contactEmail}.`,
      };
    }

    return { ok: true, mode: "saved" };
  } catch (e) {
    console.error("[contact]", e);
    return {
      ok: false,
      error: `Something went wrong. Please email ${siteConfig.contactEmail}.`,
    };
  }
}
