import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PagePhotoRow } from "@/components/page-photos";
import { miikoItems } from "@/data/about-content";
import { miikoGallery } from "@/data/page-photos";

export const metadata: Metadata = {
  title: "Miiko",
  description: "Miiko ya usharika chini ya Dayosisi ya Dodoma.",
};

export default function MiikoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro title="Miiko" />

      <section className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/30 p-5 sm:p-6">
        <h2 className="font-heading text-lg font-semibold tracking-wide text-[var(--foreground)]">
          Miiko ya Usharika chini ya Dayosisi
        </h2>
        <ol className="mt-4 list-[lower-roman] space-y-2 pl-6 text-base leading-relaxed text-[var(--muted-foreground)] marker:text-[var(--foreground)]">
          {miikoItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <PagePhotoRow photos={miikoGallery} />
      </section>
    </div>
  );
}
