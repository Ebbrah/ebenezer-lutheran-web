import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mawasiliano",
  description: "Wasiliana na ofisi ya usharika — Kanisa la Kilutheri la Ebenezer.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="Mawasiliano"
        description="Tuma ujumbe kwa ofisi. Kwa dharura ya utunzaji wa kiroho, jumuisha nambari ya simu."
      />

      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="font-heading text-lg font-semibold text-[var(--foreground)]">
            Ofisi ya usharika
          </h2>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">
            <a
              className="font-medium text-[var(--primary)] underline-offset-4 hover:underline"
              href={`mailto:${siteConfig.contactEmail}`}
            >
              {siteConfig.contactEmail}
            </a>
            <br />
            <span>{siteConfig.phone}</span>
          </p>
          <p className="mt-6 text-sm text-[var(--muted-foreground)]">
            {siteConfig.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
