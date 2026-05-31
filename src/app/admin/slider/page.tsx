import type { Metadata } from "next";

import { logoutSliderAdmin } from "@/actions/slider-admin";
import {
  isSliderAdminAuthenticated,
  isSliderAdminConfigured,
} from "@/lib/admin-slider-auth";
import { getHomeSlides } from "@/lib/slider-data";
import { SliderAdminForms } from "@/components/slider-admin-forms";
import { SliderLoginForm } from "@/components/slider-login-form";

export const metadata: Metadata = {
  title: "Msimamizi — slider",
  robots: { index: false, follow: false },
};

export default async function SliderAdminPage() {
  const configured = isSliderAdminConfigured();
  const authed = await isSliderAdminAuthenticated();
  const slides = await getHomeSlides();

  if (configured && authed) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <header className="mb-8">
          <h1 className="font-heading text-3xl font-semibold text-[var(--foreground)]">
            Msimamizi wa picha za ukurasa wa mwanzo
          </h1>
          <p className="mt-2 text-[var(--muted-foreground)]">
            Ongeza au futa picha bila kubadilisha nambari ya programu. Badiliko
            linaonekana mara moja ukurasa wa mwanzo unaaposasishwa.
          </p>
        </header>

        <SliderAdminForms slides={slides} />

        <form action={logoutSliderAdmin} className="mt-10">
          <button
            type="submit"
            className="text-sm font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
          >
            Toka
          </button>
        </form>
      </div>
    );
  }

  if (!configured) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <h1 className="font-heading text-3xl font-semibold text-[var(--foreground)]">
          Kusanidi slider ya matukio
        </h1>
        <div className="prose prose-neutral mt-6 max-w-none text-[var(--muted-foreground)]">
          <p>
            Ili kuweza kuongeza au kufuta picha kutoka kwenye wavuti bila
            deploy, weka mabadiliko haya kwenye seva (Vercel):
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <code className="rounded bg-[var(--muted)] px-1">ADMIN_SLIDER_SECRET</code>{" "}
              — nenosiri la msimamizi (siri).
            </li>
            <li>
              <code className="rounded bg-[var(--muted)] px-1">
                SUPABASE_SERVICE_ROLE_KEY
              </code>{" "}
              — ufunguo wa huduma wa Supabase (usiwashi kwenye kivinjari).
            </li>
            <li>
              Endesha SQL kutoka faili{" "}
              <code className="rounded bg-[var(--muted)] px-1">
                supabase/migrations/20260505120000_home_slider_images.sql
              </code>{" "}
              kwenye Supabase SQL Editor.
            </li>
          </ol>
          <p className="mt-4">
            Bila haya, tovuti inaendelea kuonyesha picha za msingi kutoka faili{" "}
            <code className="rounded bg-[var(--muted)] px-1">
              src/data/home-slider.json
            </code>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
      <h1 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
        Ingia kama msimamizi
      </h1>
      <p className="mt-2 text-sm text-[var(--muted-foreground)]">
        Ingiza nenosiri la{" "}
        <code className="rounded bg-[var(--muted)] px-1">ADMIN_SLIDER_SECRET</code>.
      </p>
      <SliderLoginForm />
    </div>
  );
}
