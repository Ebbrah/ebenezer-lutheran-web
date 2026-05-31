import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PagePhotoRow } from "@/components/page-photos";
import { VipaumbeleCommitteeSections } from "@/components/vipaumbele-committee-sections";
import { vipaumbeleItems } from "@/data/about-content";
import { vipaumbeleCommitteeSections } from "@/data/vipaumbele-content";
import { vipaumbeleGallery } from "@/data/page-photos";

export const metadata: Metadata = {
  title: "Vipaumbele",
  description:
    "Vipaumbele vya usharika chini ya mpango mkakati wa Dayosisi ya Dodoma.",
};

export default function VipaumbelePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-4xl">
      <PageIntro title="Vipaumbele" />

      <section className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/30 p-5 sm:p-6">
        <h2 className="font-heading text-lg font-semibold tracking-wide text-[var(--foreground)]">
          Vipaumbele vya Usharika chini ya Mpango Mkakati wa Dayosisi
        </h2>
        <ol className="mt-4 list-[lower-roman] space-y-2 pl-6 text-base leading-relaxed text-[var(--muted-foreground)] marker:text-[var(--foreground)]">
          {vipaumbeleItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <PagePhotoRow photos={vipaumbeleGallery} />
      </section>

      <section
        className="mt-12"
        aria-labelledby="vipaumbele-kamati-heading"
      >
        <h2
          id="vipaumbele-kamati-heading"
          className="font-heading text-xl font-semibold tracking-tight text-[var(--primary)] sm:text-2xl"
        >
          VIPAUMBELE VYA KAMATI ZA USHARIKA KIMKAKATI
        </h2>
        <div className="mt-8">
          <VipaumbeleCommitteeSections sections={vipaumbeleCommitteeSections} />
        </div>
      </section>
    </div>
  );
}
