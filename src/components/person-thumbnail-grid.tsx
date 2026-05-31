"use client";

import Image from "next/image";
import { useState } from "react";
import type { PersonEntry } from "@/data/uongozi-content";
import { personPhotoSrc } from "@/lib/person-photo";
import { cn } from "@/lib/utils";

type PersonThumbnailGridProps = {
  people: readonly PersonEntry[];
  columns?: "compact" | "default" | "wide";
  showNumber?: boolean;
};

export function PersonThumbnailGrid({
  people,
  columns = "default",
  showNumber = false,
}: PersonThumbnailGridProps) {
  const gridClass = cn(
    "grid list-none gap-6",
    columns === "compact" &&
      "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
    columns === "default" &&
      "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
    columns === "wide" && "grid-cols-1 sm:grid-cols-2",
  );

  return (
    <ul className={gridClass}>
      {people.map((person, index) => (
        <li
          key={`${person.name}-${person.role ?? index}`}
          className="flex flex-col items-center rounded-xl border border-[var(--border)] bg-[var(--muted)]/15 p-4 text-center shadow-sm transition hover:border-[var(--primary)]/30 hover:bg-[var(--muted)]/30"
        >
          <PersonAvatar
            name={person.name}
            photoSrc={person.photoSrc}
            sizes="(max-width: 640px) 96px, 112px"
            className="h-24 w-24 sm:h-28 sm:w-28"
          />
          {showNumber ? (
            <span className="mt-3 text-xs font-medium tabular-nums text-[var(--muted-foreground)]">
              {index + 1}
            </span>
          ) : null}
          <p className="mt-2 font-heading text-sm font-semibold leading-snug text-[var(--foreground)] sm:text-base">
            {person.name}
          </p>
          {person.role ? (
            <p className="mt-1.5 text-xs leading-snug text-[var(--muted-foreground)] sm:text-sm">
              {person.role}
            </p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

function PersonAvatar({
  name,
  photoSrc,
  className,
  sizes,
}: {
  name: string;
  photoSrc?: string;
  className: string;
  sizes: string;
}) {
  const [failed, setFailed] = useState(false);
  const src = photoSrc ?? personPhotoSrc(name);

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full border-4 border-[var(--background)] bg-[var(--muted)] shadow-md ring-2 ring-[var(--border)]",
        className,
      )}
    >
      {failed ? null : (
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover"
          sizes={sizes}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
