"use client";

import Image from "next/image";
import { useState } from "react";
import type { BarazaJumuiyaGroup } from "@/data/uongozi-content";
import { personPhotoSrc } from "@/lib/person-photo";

type BarazaJumuiyaSectionsProps = {
  groups: readonly BarazaJumuiyaGroup[];
};

export function BarazaJumuiyaSections({ groups }: BarazaJumuiyaSectionsProps) {
  return (
    <div className="space-y-12">
      {groups.map((group) => (
        <section
          key={group.jumuiya}
          aria-labelledby={`baraza-${group.jumuiya.replace(/\s+/g, "-").toLowerCase()}`}
        >
          <div className="mb-6 flex flex-col gap-1 border-b border-[var(--border)] pb-4 sm:flex-row sm:items-end sm:justify-between">
            <h2
              id={`baraza-${group.jumuiya.replace(/\s+/g, "-").toLowerCase()}`}
              className="font-heading text-xl font-semibold tracking-tight text-[var(--primary)] sm:text-2xl"
            >
              {group.jumuiya}
            </h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              Wazee {group.members.length}
            </p>
          </div>
          <ul className="grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {group.members.map((member, index) => (
              <li
                key={`${group.jumuiya}-${member.name}-${index}`}
                className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--muted)]/20 px-4 py-3 shadow-sm transition hover:border-[var(--primary)]/35 hover:bg-[var(--muted)]/40"
              >
                <MemberAvatar name={member.name} photoSrc={member.photoSrc} />
                <div className="min-w-0 text-left">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                    Mzee wa Baraza
                  </p>
                  <p className="font-heading text-sm font-semibold leading-snug text-[var(--foreground)] sm:text-base">
                    {member.name}
                  </p>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-[var(--primary)]">
                    Jumuiya: {group.jumuiya}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function MemberAvatar({ name, photoSrc }: { name: string; photoSrc?: string }) {
  const [failed, setFailed] = useState(false);
  const src = photoSrc ?? personPhotoSrc(name);

  return (
    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[var(--background)] bg-[var(--muted)] ring-2 ring-[var(--border)]">
      {failed ? null : (
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover"
          sizes="56px"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
