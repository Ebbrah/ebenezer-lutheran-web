"use client";

import Image from "next/image";
import { useState } from "react";
import type { StaffWaliohudumuEntry } from "@/data/about-content";
import { personPhotoSrc } from "@/lib/person-photo";

export function StaffWaliohudumuGrid({
  people,
}: {
  people: readonly StaffWaliohudumuEntry[];
}) {
  return (
    <ul className="grid list-none gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <li
          key={`${person.name}-${person.title}`}
          className="flex flex-col items-center text-center"
        >
          <StaffAvatar
            name={person.name}
            photoSrc={person.photoSrc}
          />
          <p className="mt-4 font-heading text-sm font-semibold text-[var(--foreground)] sm:text-base">
            {person.name}
          </p>
          <p className="mt-1.5 max-w-[14rem] text-sm leading-snug text-[var(--muted-foreground)]">
            {person.title}
          </p>
        </li>
      ))}
    </ul>
  );
}

function StaffAvatar({
  name,
  photoSrc,
}: {
  name: string;
  photoSrc?: string;
}) {
  const [failed, setFailed] = useState(false);
  const src = photoSrc ?? personPhotoSrc(name);

  return (
    <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full border-4 border-[var(--background)] bg-[var(--muted)] shadow-md ring-2 ring-[var(--border)] sm:h-40 sm:w-40">
      {failed ? null : (
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 144px, 160px"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
