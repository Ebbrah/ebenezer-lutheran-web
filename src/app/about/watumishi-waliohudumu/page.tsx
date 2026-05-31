import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { StaffWaliohudumuGrid } from "@/components/staff-waliohudumu-grid";
import {
  wachungajiWaliohudumu,
  wainjilistiWaliohudumu,
  watumishiWelcome,
} from "@/data/about-content";

export const metadata: Metadata = {
  title: "Watumishi Waliohudumu",
  description:
    "Wachungaji na wainjilisti waliohudumu katika Usharika wa Ebenezer tangu kuanzishwa kwake.",
};

export default function WatumishiWaliohudumuPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro title="Watumishi Waliohudumu" />

      <p className="mb-10 text-[15px] leading-relaxed text-[var(--muted-foreground)] sm:text-base sm:leading-[1.75]">
        {watumishiWelcome}
      </p>

      <section className="space-y-12">
        <div>
          <div className="mb-6 flex flex-col gap-1 border-b border-[var(--border)] pb-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-heading text-xl font-semibold tracking-tight text-[var(--primary)] sm:text-2xl">
              Wachungaji
            </h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              Watumishi {wachungajiWaliohudumu.length}
            </p>
          </div>
          <StaffWaliohudumuGrid people={wachungajiWaliohudumu} />
        </div>

        <div>
          <div className="mb-6 flex flex-col gap-1 border-b border-[var(--border)] pb-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-heading text-xl font-semibold tracking-tight text-[var(--primary)] sm:text-2xl">
              Wainjilisti
            </h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              Watumishi {wainjilistiWaliohudumu.length}
            </p>
          </div>
          <StaffWaliohudumuGrid people={wainjilistiWaliohudumu} />
        </div>
      </section>
    </div>
  );
}
