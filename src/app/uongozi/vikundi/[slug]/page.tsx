import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { PagePhotoFrame } from "@/components/page-photos";
import { getVikundiGroup, vikundiSlugs } from "@/data/vikundi-groups";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return vikundiSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const group = getVikundiGroup(slug);
  if (!group) return { title: "Vikundi" };
  return {
    title: group.name,
    description: `Kikundi cha ${group.name} — Usharika wa Ebenezer.`,
  };
}

export default async function VikundiGroupPage({ params }: Props) {
  const { slug } = await params;
  const group = getVikundiGroup(slug);
  if (!group) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="mb-6">
        <Link
          href="/uongozi/vikundi"
          className="text-sm font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
        >
          ← Rudi Vikundi
        </Link>
      </p>

      <PageIntro title={group.name} />

      <PagePhotoFrame
        photo={group.photo}
        aspect="video"
        priority
        sizes="(max-width: 768px) 100vw, 672px"
      />

      <p className="mt-8 text-[15px] leading-relaxed text-[var(--muted-foreground)] sm:text-base">
        Maelezo ya kikundi hiki yataongezwa hapa. Wasiliana na ofisi ya usharika
        kwa habari zaidi kuhusu shughuli za {group.name}.
      </p>
    </div>
  );
}
