import type { Metadata } from "next";
import { BarazaJumuiyaSections } from "@/components/baraza-jumuiya-sections";
import { PageIntro } from "@/components/page-intro";
import { barazaByJumuiya, barazaMemberCount } from "@/data/uongozi-content";

export const metadata: Metadata = {
  title: "Baraza la Wazee",
  description: `Wazee wa Baraza la Wazee (${barazaMemberCount}) — Usharika wa Ebenezer.`,
};

export default function BarazaPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="Baraza la Wazee"
        description={`Usharika unasimamiwa na Baraza la Wazee lenye wajumbe ${barazaMemberCount} waliochaguliwa na Mkutano Mkuu. Kila mzee wa baraza anatokana na jumuiya zinazounda Usharika.`}
      />
      <BarazaJumuiyaSections groups={barazaByJumuiya} />
    </div>
  );
}
