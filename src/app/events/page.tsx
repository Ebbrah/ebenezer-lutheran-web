import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming parish events, festivals, and community gatherings.",
};

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="Events"
        description="Embed your parish calendar below, or link out to Google Calendar / ChurchDesk."
      />

      <div className="mt-8 rounded-xl border border-dashed border-[var(--border)] bg-[var(--muted)]/20 p-6 text-[var(--muted-foreground)]">
        <p className="font-medium text-[var(--foreground)]">
          Calendar placeholder
        </p>
        <p className="mt-2 text-sm leading-relaxed">
          In Google Calendar: Settings → Integrate calendar → copy the embed
          code. Paste it into a small Client Component, or replace this section
          with an iframe `src` from your calendar provider. See{" "}
          <code className="rounded bg-[var(--muted)] px-1 py-0.5 text-xs">
            WORKFLOW-PLAN.md
          </code>{" "}
          for steps.
        </p>
      </div>

      <ul className="mt-10 space-y-3 text-[var(--muted-foreground)]">
        <li className="flex gap-3 rounded-lg border border-[var(--border)] p-4">
          <span className="font-heading text-sm font-semibold text-[var(--primary)] w-24 shrink-0">
            TBD
          </span>
          <span>Example: Parish council — replace with real events.</span>
        </li>
      </ul>
    </div>
  );
}
