import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Ebenezer Lutheran Church handles personal data on this website.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="Privacy"
        description="Publish a concise notice if you collect names, emails, or analytics data."
      />

      <div className="prose prose-neutral max-w-none text-[var(--muted-foreground)]">
        <p>
          This is a starter template. Replace it with text approved by your
          parish leadership and (if applicable) your synod or legal counsel.
        </p>
        <h2 className="font-heading mt-10 text-xl font-semibold text-[var(--foreground)]">
          What we collect
        </h2>
        <p>
          The contact form may store your name, email, phone, and message in our
          database (Supabase) so staff can respond. We do not sell personal data.
        </p>
        <h2 className="font-heading mt-10 text-xl font-semibold text-[var(--foreground)]">
          Analytics
        </h2>
        <p>
          If you enable Vercel Analytics or another tool, describe what is
          measured and how visitors can opt out.
        </p>
        <h2 className="font-heading mt-10 text-xl font-semibold text-[var(--foreground)]">
          Contact
        </h2>
        <p>
          Questions about this policy: contact the church office using details on
          the Contact page.
        </p>
      </div>
    </div>
  );
}
