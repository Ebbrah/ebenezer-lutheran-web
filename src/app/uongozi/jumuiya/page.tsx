import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { JumuiyaTable } from "@/components/jumuiya-table";
import { jumuiyaRows } from "@/data/uongozi-content";

export const metadata: Metadata = {
  title: "Jumuiya",
  description: "Jumuiya za Usharika wa Ebenezer — mwenyekiti na wazee wa kanisa.",
};

export default function JumuiyaPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="Jumuiya"
        description="Orodha ya jumuiya za ibada za nyumba kwa nyumba na viongozi wao."
      />
      <JumuiyaTable rows={jumuiyaRows} />
    </div>
  );
}
