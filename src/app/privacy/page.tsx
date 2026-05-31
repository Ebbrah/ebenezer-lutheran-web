import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Faragha",
  description:
    "Jinsi Kanisa la Kilutheri la Ebenezer linavyoshughulikia data ya kibinafsi kwenye wavuti hii.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="Faragha"
        description="Chapisha taarifa fupi ikiwa unakusanya majina, barua pepe, au takwimu za matumizi."
      />

      <div className="prose prose-neutral max-w-none text-[var(--muted-foreground)]">
        <p>
          Hii ni kiolezo cha kuanzia. Badilisha kwa maandishi yaliyoidhinishwa
          na uongozi wa usharika na (ikiwa kuna) ushauri wa kisheria.
        </p>
        <h2 className="font-heading mt-10 text-xl font-semibold text-[var(--foreground)]">
          Tunakusanya nini
        </h2>
        <p>
          Fomu ya mawasiliano inaweza kuhifadhi jina, barua pepe, simu, na ujumbe
          kwenye hifadhidata yetu (Supabase) ili ofisi iweze kujibu. Hatuuzi
          data ya kibinafsi.
        </p>
        <h2 className="font-heading mt-10 text-xl font-semibold text-[var(--foreground)]">
          Takwimu
        </h2>
        <p>
          Ukiamsha Vercel Analytics au zana nyingine, eleza kinachopimwa na jinsi
          mgeni anavyoweza kujiondoa.
        </p>
        <h2 className="font-heading mt-10 text-xl font-semibold text-[var(--foreground)]">
          Mawasiliano
        </h2>
        <p>
          Maswali kuhusu sera hii: tumia ofisi ya usharika kwa maelezo kwenye
          ukurasa wa Mawasiliano.
        </p>
      </div>
    </div>
  );
}
