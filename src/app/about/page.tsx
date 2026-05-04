import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ebenezer Lutheran Church — our story, leadership, and mission.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="About us"
        description="Share your congregation’s history, pastoral leadership, and partnerships here."
      />
      <div className="prose prose-neutral max-w-none text-[var(--muted-foreground)]">
        <p>
          This page is ready for your content: when the parish started, how you
          serve the community, and what it means to belong. Use short paragraphs
          and meaningful headings so visitors on mobile can scan quickly.
        </p>
        <h2 className="font-heading mt-10 text-xl font-semibold text-[var(--foreground)]">
          Leadership
        </h2>
        <p>
          List your pastor(s), council leadership, and office hours. Update this
          section when calls change.
        </p>
        <h2 className="font-heading mt-10 text-xl font-semibold text-[var(--foreground)]">
          Mission in daily life
        </h2>
        <p>
          Describe outreach, schools, diaconal work, or partnerships — whatever
          tells your story faithfully.
        </p>
      </div>
    </div>
  );
}
