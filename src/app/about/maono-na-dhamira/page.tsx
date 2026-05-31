import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PagePhotoRow } from "@/components/page-photos";
import { dhamiraText, maonoText } from "@/data/about-content";
import { maonoDhamiraGallery } from "@/data/page-photos";

export const metadata: Metadata = {
  title: "Maono na Dhamira",
  description: "Maono na dhamira ya Usharika wa Ebenezer.",
};

export default function MaonoNaDhamiraPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro title="Maono na Dhamira" />

      <div className="space-y-4">
        <section className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/30 p-5 sm:p-6">
          <h2 className="font-heading text-lg font-semibold tracking-wide text-[var(--foreground)]">
            Maono
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--muted-foreground)]">
            {maonoText}
          </p>
        </section>

        <section className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/30 p-5 sm:p-6">
          <h2 className="font-heading text-lg font-semibold tracking-wide text-[var(--foreground)]">
            Dhamira
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--muted-foreground)]">
            {dhamiraText}
          </p>
        </section>
      </div>

      <section className="mt-10">
        <PagePhotoRow photos={maonoDhamiraGallery} />
      </section>
    </div>
  );
}
