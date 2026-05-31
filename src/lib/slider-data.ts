import fs from "node:fs";
import path from "node:path";

import homeSliderFallback from "@/data/home-slider.json";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/env";
import type { HomeSlide } from "@/lib/slider-types";

type FallbackSlide = {
  mediaType?: "image" | "video";
  imageUrl: string;
  fallbackUrl?: string;
  alt: string;
  caption?: string;
};

type FallbackFile = { slides: FallbackSlide[] };

function publicFileExists(urlPath: string): boolean {
  if (!urlPath.startsWith("/")) return false;
  const relative = urlPath.replace(/^\//, "");
  const full = path.join(process.cwd(), "public", relative);
  try {
    return fs.existsSync(full);
  } catch {
    return false;
  }
}

function resolveSlideUrl(slide: FallbackSlide): string {
  const primary = slide.imageUrl;
  if (primary.startsWith("http://") || primary.startsWith("https://")) {
    return primary;
  }
  if (publicFileExists(primary)) {
    return primary;
  }
  if (slide.fallbackUrl) {
    return slide.fallbackUrl;
  }
  return primary;
}

function inferMediaType(url: string): "image" | "video" {
  const normalized = url.toLowerCase();
  if (
    normalized.includes(".mp4") ||
    normalized.includes(".webm") ||
    normalized.includes(".mov")
  ) {
    return "video";
  }
  return "image";
}

function fromFallback(): HomeSlide[] {
  const raw = homeSliderFallback as FallbackFile;
  return raw.slides.map((s, i) => ({
    id: `fallback-${i}`,
    mediaType: s.mediaType ?? inferMediaType(s.imageUrl),
    imageUrl: resolveSlideUrl(s),
    alt: s.alt,
    caption: s.caption ?? null,
    sortOrder: i,
  }));
}

/** Slides for the home page — Supabase when configured and rows exist, else JSON fallback. */
export async function getHomeSlides(): Promise<HomeSlide[]> {
  if (!isSupabaseConfigured()) {
    return fromFallback();
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("home_slider_images")
      .select("id, image_url, alt_text, caption, sort_order")
      .order("sort_order", { ascending: true });

    if (error || !data?.length) {
      return fromFallback();
    }

    return data.map((row) => ({
      id: row.id,
      mediaType: inferMediaType(row.image_url),
      imageUrl: row.image_url,
      alt: row.alt_text ?? "",
      caption: row.caption,
      sortOrder: row.sort_order ?? 0,
    }));
  } catch {
    return fromFallback();
  }
}
