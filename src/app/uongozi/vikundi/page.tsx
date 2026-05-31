import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { VikundiGroupCard } from "@/components/vikundi-group-card";
import { vikundiGroups } from "@/data/vikundi-groups";

export const metadata: Metadata = {
  title: "Vikundi",
  description: "Vikundi vya huduma na kiroho vya Usharika wa Ebenezer.",
};

export default function VikundiPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="Vikundi"
        description="Makundi mbalimbali yanayochangia ibada, uimbaji na huduma za kijamii. Bofya kikundi kuona ukurasa wake."
      />

      <ul className="grid list-none grid-cols-1 gap-8 sm:grid-cols-2">
        {vikundiGroups.map((group) => (
          <li key={group.slug}>
            <VikundiGroupCard group={group} />
          </li>
        ))}
      </ul>
    </div>
  );
}
