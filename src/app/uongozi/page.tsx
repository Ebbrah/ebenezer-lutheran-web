import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

const LINKS = [
  { href: "/uongozi/baraza", label: "Baraza la Wazee" },
  { href: "/uongozi/kamati", label: "Kamati ya Utendaji" },
  { href: "/uongozi/watendaji", label: "Muundo wa Utendaji" },
  { href: "/uongozi/watumishi", label: "Watumishi wa Usharika" },
  { href: "/uongozi/jumuiya", label: "Jumuiya" },
  { href: "/uongozi/vikundi", label: "Vikundi" },
] as const;

export const metadata: Metadata = {
  title: "Uongozi",
  description: "Muundo wa uongozi wa usharika la Ebenezer.",
};

export default function UongoziHubPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="Uongozi"
        description="Chagua sehemu ya chini ili kusoma kuhusu vikundi na kamati mbalimbali za usharika."
      />
      <ul className="mt-8 space-y-3">
        {LINKS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-flex min-h-11 items-center font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
