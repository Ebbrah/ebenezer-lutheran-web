import Link from "next/link";
import { PagePhotoFrame } from "@/components/page-photos";
import type { VikundiGroup } from "@/data/vikundi-groups";

export function VikundiGroupCard({ group }: { group: VikundiGroup }) {
  return (
    <article className="flex flex-col">
      <Link
        href={group.href}
        className="flex min-h-20 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--muted)]/20 px-6 py-5 text-center font-heading text-lg font-semibold text-[var(--foreground)] shadow-sm transition hover:border-[var(--primary)]/45 hover:bg-[var(--muted)]/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
      >
        {group.name}
      </Link>
      <PagePhotoFrame
        photo={group.photo}
        aspect="video"
        sizes="(max-width: 640px) 100vw, 50vw"
        className="mt-4"
      />
    </article>
  );
}
