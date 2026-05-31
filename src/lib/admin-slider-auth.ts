import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";

const COOKIE = "slider_admin";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function getSecret(): string | null {
  const s = process.env.ADMIN_SLIDER_SECRET?.trim();
  return s || null;
}

function sign(secret: string): string {
  return createHmac("sha256", secret).update("home-slider-admin").digest("base64url");
}

export function isSliderAdminConfigured(): boolean {
  return Boolean(getSecret() && process.env.SUPABASE_SERVICE_ROLE_KEY?.trim());
}

export async function setSliderAdminSession(): Promise<void> {
  const secret = getSecret();
  if (!secret) return;
  const token = sign(secret);
  const jar = await cookies();
  jar.set(COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function clearSliderAdminSession(): Promise<void> {
  const jar = await cookies();
  jar.delete(COOKIE);
}

export async function isSliderAdminAuthenticated(): Promise<boolean> {
  const secret = getSecret();
  if (!secret) return false;
  const jar = await cookies();
  const raw = jar.get(COOKIE)?.value;
  if (!raw) return false;
  const expected = sign(secret);
  if (raw.length !== expected.length) return false;
  try {
    return timingSafeEqual(Buffer.from(raw), Buffer.from(expected));
  } catch {
    return false;
  }
}
