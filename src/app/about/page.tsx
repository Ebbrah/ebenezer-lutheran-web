import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Kuhusu sisi",
  description:
    "Hadithi, maono, huduma na taarifa za Usharika wa Ebenezer — KKKT Dayosisi ya Dodoma.",
};

const sections = [
  { href: "/about/historia", label: "Historia" },
  { href: "/about/watumishi-waliohudumu", label: "Watumishi Waliohudumu" },
  { href: "/about/maono-na-dhamira", label: "Maono na Dhamira" },
  { href: "/about/miiko", label: "Miiko" },
  { href: "/about/vipaumbele", label: "Vipaumbele" },
  { href: "/about/huduma", label: "Huduma" },
] as const;

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="Kuhusu sisi"
        description="Jifunze zaidi kuhusu Usharika wa Ebenezer — historia, watumishi, maono, na huduma zetu."
      />

      <ul className="grid gap-3 sm:grid-cols-2">
        {sections.map((section) => (
          <li key={section.href}>
            <Link
              href={section.href}
              className="flex min-h-11 items-center rounded-lg border border-[var(--border)] bg-[var(--muted)]/20 px-4 py-3 font-medium text-[var(--foreground)] transition hover:bg-[var(--muted)]/50"
            >
              {section.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
