import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Beliefs",
  description:
    "What we believe — Lutheran confession, scripture, and sacraments at Ebenezer Lutheran Church.",
};

export default function BeliefsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="What we believe"
        description="Ground your summary in the Lutheran confessions and invite deeper conversation."
      />
      <ul className="mt-8 space-y-4 text-[var(--muted-foreground)]">
        <li className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/30 p-4">
          <strong className="text-[var(--foreground)]">Scripture alone</strong>
          <span className="block mt-1">
            God&apos;s word is the final authority for faith and life — edit to
            match your parish summary.
          </span>
        </li>
        <li className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/30 p-4">
          <strong className="text-[var(--foreground)]">Grace alone</strong>
          <span className="block mt-1">
            We are saved by grace through faith — not our works — in Jesus
            Christ.
          </span>
        </li>
        <li className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/30 p-4">
          <strong className="text-[var(--foreground)]">Faith alone</strong>
          <span className="block mt-1">
            The Holy Spirit creates faith through the gospel and strengthens us
            in worship.
          </span>
        </li>
        <li className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/30 p-4">
          <strong className="text-[var(--foreground)]">Sacraments</strong>
          <span className="block mt-1">
            Baptism and the Lord&apos;s Supper — describe how often you commune
            and welcome policies for visitors.
          </span>
        </li>
      </ul>
    </div>
  );
}
