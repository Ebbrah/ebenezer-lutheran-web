import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PagePhotoHero, PagePhotoRow } from "@/components/page-photos";
import {
  historiaParagraphs,
  historiaVisionQuote,
} from "@/data/about-content";
import { historiaPhotos } from "@/data/page-photos";

export const metadata: Metadata = {
  title: "Historia",
  description:
    "Hadithi ya Usharika wa Ebenezer — sehemu ya Kanisa la Kiinjili la Kilutheri Tanzania (KKKT) katika Dayosisi ya Dodoma.",
};

export default function HistoriaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro title="Historia" />

      <PagePhotoHero photo={historiaPhotos.hero} />

      <article className="space-y-6 text-[15px] leading-relaxed text-[var(--muted-foreground)] sm:text-base sm:leading-[1.75]">
        {historiaParagraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
        <p className="border-l-4 border-[var(--primary)]/90 pl-5 text-[var(--foreground)]/95">
          {historiaVisionQuote}
        </p>
      </article>

      <section className="mt-12 border-t border-[var(--border)] pt-10">
        <h2 className="mb-6 text-center font-heading text-lg font-semibold text-[var(--foreground)]">
          Picha za shughuli
        </h2>
        <PagePhotoRow photos={historiaPhotos.gallery} />
      </section>
    </div>
  );
}
