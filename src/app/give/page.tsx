import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Give",
  description: "Support the ministry of Ebenezer Lutheran Church.",
};

export default function GivePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="Give"
        description="Tithes and offerings support worship, mercy work, and parish life. Replace the placeholders below with your real banking and mobile-money instructions."
      />

      <div className="mt-8 space-y-8 text-[var(--muted-foreground)]">
        <section>
          <h2 className="font-heading text-xl font-semibold text-[var(--foreground)]">
            Bank transfer
          </h2>
          <p className="mt-3">
            Account name, bank, branch, account number, and SWIFT (if applicable).
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-[var(--foreground)]">
            Mobile money
          </h2>
          <p className="mt-3">
            M-Pesa / other providers — publish only what your treasurer authorizes.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-[var(--foreground)]">
            Online via ChMS
          </h2>
          <p className="mt-3">
            If recurring giving or pledges are handled in your ChMS app, link to
            that flow from the member portal button on the home page.
          </p>
        </section>
      </div>
    </div>
  );
}
