import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Core values",
  description:
    "Core values za usharika la K.K.K.T Ebenezer — thamani zinazoongoza utumishi.",
};

export default function CoreValuesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="Core values"
        description="Orodhesha thamani tunazothamini (mfano: uaminifu, upendo, huduma) na jinsi zinavyoonekana katika maisha ya usharika."
      />
      <p className="leading-relaxed text-[var(--muted-foreground)]">
        Maudhui ya ukurasa huu yatawekwa hapa na uongozi.
      </p>
    </div>
  );
}
