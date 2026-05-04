import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sermons",
  description: "Recent sermons and teaching — Ebenezer Lutheran Church.",
};

export default function SermonsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="Sermons"
        description="Point visitors to your YouTube channel or podcast. You can embed recent videos below."
      />

      <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 p-6">
        <h2 className="font-heading text-lg font-semibold text-[var(--foreground)]">
          Watch online
        </h2>
        <p className="mt-2 text-[var(--muted-foreground)]">
          Subscribe for live streams and archives of Sunday preaching.
        </p>
        <a
          href={siteConfig.youtubeChannelUrl}
          className="mt-4 inline-flex min-h-11 items-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
          rel="noopener noreferrer"
        >
          Open YouTube channel
        </a>
      </div>

      <p className="mt-10 text-sm text-[var(--muted-foreground)]">
        Optional: add a Server Component that lists the latest videos via the
        YouTube Data API, or hand-pick three recent sermon URLs for embeds.
      </p>
    </div>
  );
}
