import { siteConfig } from "@/lib/site-config";

function stripTrailingSlash(url: string) {
  return url.replace(/\/$/, "");
}

/** Canonical site URL for metadata and OG tags */
export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ??
    `https://${siteConfig.domain}`;
  return stripTrailingSlash(raw);
}

/**
 * ChMS / Member's Portal.
 * Chaguo-msingi: mazingira ya uzalishaji (Vercel) yaliyowekwa na mtaa.
 * Unaweza kubadilisha kwa `NEXT_PUBLIC_CHMS_APP_URL`.
 */
export function getChmsAppUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_CHMS_APP_URL?.trim() ?? "https://chms-prod.vercel.app";
  return stripTrailingSlash(raw);
}

export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim(),
  );
}
