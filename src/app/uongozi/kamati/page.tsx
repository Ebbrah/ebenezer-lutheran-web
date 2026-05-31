import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PersonThumbnailGrid } from "@/components/person-thumbnail-grid";
import { kamatiTendajiMembers } from "@/data/uongozi-content";

export const metadata: Metadata = {
  title: "Kamati ya Utendaji",
  description:
    "Wenyeviti na katibu wa Kamati ya Utendaji — Usharika wa Ebenezer.",
};

export default function KamatiPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="Kamati ya Utendaji"
        description="Kamati ya Utendaji ya Usharika inaundwa na Mchungaji Kiongozi, Mchungaji Msaidizi, Mwinjilisti wa Usharika, Mwinjilisti mmoja mwakilishi toka katika kila Mtaa wa Usharika, Wenyeviti wa Kamati za Usharika, Katibu wa Baraza la Wazee, Katibu msaidizi na Mtunza Hazina wa Usharika."
      />
      <PersonThumbnailGrid people={kamatiTendajiMembers} columns="wide" />
    </div>
  );
}
