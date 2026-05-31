import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { LeadershipHierarchy } from "@/components/leadership-hierarchy";

export const metadata: Metadata = {
  title: "Muundo wa Utendaji",
  description:
    "Muundo wa uongozi wa Usharika wa Ebenezer — Mkutano Mkuu, Baraza la Wazee, na Kamati ya Utendaji.",
};

export default function MuundoWaUtendajiPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="Muundo wa Utendaji"
        description="Muundo wa uongozi wa usharika — kutoka Mkutano Mkuu hadi matawi ya Kamati ya Utendaji."
      />
      <LeadershipHierarchy />
    </div>
  );
}
