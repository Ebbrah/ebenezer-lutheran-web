import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { siteConfig } from "@/lib/site-config";
import { getChmsAppUrl } from "@/lib/env";

export const metadata: Metadata = {
  title: "Services & times",
  description: "Worship times, languages, and what to expect when you visit.",
};

export default function ServicesPage() {
  const chmsAppUrl = getChmsAppUrl();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="Services & times"
        description="Keep this page current — most visitors check times before they visit."
      />

      <section id="times" className="scroll-mt-24" aria-labelledby="times-heading">
        <h2
          id="times-heading"
          className="font-heading text-2xl font-semibold text-[var(--foreground)]"
        >
          Regular schedule
        </h2>
        <div className="mt-6 space-y-4 text-[var(--muted-foreground)]">
          <p>
            <strong className="text-[var(--foreground)]">Sunday worship</strong>
            — Replace with your real times (e.g. 8:00 AM / 10:30 AM).
          </p>
          <p>
            <strong className="text-[var(--foreground)]">Midweek</strong> —
            Bible study or prayer — optional.
          </p>
          <p>{siteConfig.languages}</p>
        </div>
      </section>

      <section className="mt-12" aria-labelledby="visit-heading">
        <h2
          id="visit-heading"
          className="font-heading text-2xl font-semibold text-[var(--foreground)]"
        >
          Visit us
        </h2>
        <p className="mt-4 text-[var(--muted-foreground)]">
          Parking, accessibility, dress, and children — a short paragraph reduces
          anxiety for first-time guests.
        </p>
        <a
          href={siteConfig.mapUrl}
          className="mt-4 inline-flex min-h-11 items-center font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
          rel="noopener noreferrer"
        >
          Open map
        </a>
      </section>

      <section className="mt-12 rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 p-6">
        <h2 className="font-heading text-lg font-semibold text-[var(--foreground)]">
          Members
        </h2>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          Rosters, giving, and pastoral care requests can live in your ChMS app.
        </p>
        <a
          href={chmsAppUrl}
          className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
          rel="noopener noreferrer"
        >
          Open ChMS / Member portal
        </a>
      </section>
    </div>
  );
}
