import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PersonThumbnailGrid } from "@/components/person-thumbnail-grid";
import { watumishiWaUsharika } from "@/data/uongozi-content";

export const metadata: Metadata = {
  title: "Watumishi wa Usharika",
  description:
    "Watumishi wa kila siku wa Usharika wa Ebenezer — mchungaji, wainjilisti, na huduma za usharika.",
};

export default function WatumishiPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="Watumishi wa Usharika"
        description="Watumishi wanaohudumu katika shughuli za kila siku za usharika."
      />
      <PersonThumbnailGrid people={watumishiWaUsharika} columns="default" />
    </div>
  );
}
