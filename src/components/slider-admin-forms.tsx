"use client";

import { useActionState } from "react";
import Image from "next/image";

import {
  addHomeSlide,
  removeHomeSlide,
  type SliderAdminState,
} from "@/actions/slider-admin";
import type { HomeSlide } from "@/lib/slider-types";

type SliderAdminFormsProps = {
  slides: HomeSlide[];
};

const addInitial: SliderAdminState = { ok: false };

export function SliderAdminForms({ slides }: SliderAdminFormsProps) {
  const [addState, addAction, addPending] = useActionState(
    addHomeSlide,
    addInitial,
  );

  return (
    <div className="space-y-10">
      <section className="rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 p-6">
        <h2 className="font-heading text-lg font-semibold text-[var(--foreground)]">
          Ongeza picha
        </h2>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">
          Bandika URL ya picha (HTTPS). Unaweza kutumia mazingira ya kuhifadhi
          picha kama Supabase Storage au huduma nyingine.
        </p>
        <form action={addAction} className="mt-4 space-y-4">
          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium">
              URL ya picha
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="url"
              required
              placeholder="https://"
              className="mt-1 w-full min-h-11 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
            />
          </div>
          <div>
            <label htmlFor="alt" className="block text-sm font-medium">
              Maelezo mafupi (alt)
            </label>
            <input
              id="alt"
              name="alt"
              type="text"
              required
              className="mt-1 w-full min-h-11 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
            />
          </div>
          <div>
            <label htmlFor="caption" className="block text-sm font-medium">
              Maelezo chini ya picha{" "}
              <span className="font-normal text-[var(--muted-foreground)]">
                (si lazima)
              </span>
            </label>
            <input
              id="caption"
              name="caption"
              type="text"
              className="mt-1 w-full min-h-11 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
            />
          </div>
          {addState.error ? (
            <p className="text-sm text-[var(--destructive)]" role="alert">
              {addState.error}
            </p>
          ) : null}
          {addState.ok ? (
            <p className="text-sm text-[var(--foreground)]" role="status">
              Picha imeongezwa.
            </p>
          ) : null}
          <button
            type="submit"
            disabled={addPending}
            className="min-h-11 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] shadow-sm transition hover:opacity-90 disabled:opacity-60"
          >
            {addPending ? "Inaongeza…" : "Ongeza picha"}
          </button>
        </form>
      </section>

      <section>
        <h2 className="font-heading text-lg font-semibold text-[var(--foreground)]">
          Picha zilizopo ({slides.length})
        </h2>
        <ul className="mt-4 space-y-4">
          {slides.map((slide) => (
            <li
              key={slide.id}
              className="flex flex-col gap-3 rounded-xl border border-[var(--border)] p-4 sm:flex-row sm:items-center"
            >
              <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg bg-[var(--muted)] sm:h-20 sm:w-32">
                {slide.mediaType === "video" ? (
                  <video
                    src={slide.imageUrl}
                    className="h-full w-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <Image
                    src={slide.imageUrl}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                )}
              </div>
              <div className="min-w-0 flex-1 text-sm">
                <p className="truncate font-medium text-[var(--foreground)]">
                  {slide.imageUrl}
                </p>
                <p className="text-[var(--muted-foreground)]">{slide.alt}</p>
                {slide.caption ? (
                  <p className="mt-1 text-[var(--muted-foreground)]">
                    {slide.caption}
                  </p>
                ) : null}
              </div>
              {slide.id.startsWith("fallback-") ? (
                <p className="text-xs text-[var(--muted-foreground)] sm:text-right">
                  Picha za msingi — ongeza kwenye Supabase ili zibadilishwe hapa.
                </p>
              ) : (
                <form action={removeHomeSlide}>
                  <input type="hidden" name="id" value={slide.id} />
                  <button
                    type="submit"
                    className="text-sm font-semibold text-[var(--destructive)] underline-offset-4 hover:underline"
                  >
                    Futa
                  </button>
                </form>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
