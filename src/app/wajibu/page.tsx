import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { WajibuSections } from "@/components/wajibu-sections";
import { wajibuSections } from "@/data/wajibu-content";

export const metadata: Metadata = {
  title: "Wajibu",
  description:
    "Wajibu wa Mkutano Mkuu, Baraza la Wazee, Kamati ya Utendaji, na kamati za Usharika wa Ebenezer.",
};

export default function WajibuPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-4xl">
      <PageIntro
        title="Wajibu"
        description="Wajibu wa vikao na kamati za uongozi wa Usharika wa Ebenezer."
      />
      <WajibuSections sections={wajibuSections} />
    </div>
  );
}
