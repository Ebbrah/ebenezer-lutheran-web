import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PagePhotoHero, PagePhotoRow } from "@/components/page-photos";
import { hudumaItems } from "@/data/about-content";
import { hudumaPhotos } from "@/data/page-photos";

export const metadata: Metadata = {
  title: "Huduma",
  description: "Huduma utakazopata ukitembelea Usharika wa Ebenezer.",
};

export default function HudumaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro title="Huduma" />

      <PagePhotoHero photo={hudumaPhotos.hero} />

      <div className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/25 p-5 text-[var(--muted-foreground)] sm:p-6">
        <p className="font-medium text-[var(--foreground)]">
          Huduma utakazopata ukitembelea Usharika wa Ebenezer:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {hudumaItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <section className="mt-10">
        <PagePhotoRow photos={hudumaPhotos.gallery} />
      </section>
    </div>
  );
}
