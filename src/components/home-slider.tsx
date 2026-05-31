"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { HomeSlide } from "@/lib/slider-types";

type HomeSliderProps = {
  slides: HomeSlide[];
};

/** Auto-advance interval — slightly slower feels calmer with crossfade */
const INTERVAL_MS = 6500;

export function HomeSlider({ slides }: HomeSliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const count = slides.length;
  const safeIndex = count ? index % count : 0;
  const current = slides[safeIndex];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const go = useCallback(
    (dir: -1 | 1) => {
      if (!count) return;
      setIndex((i) => (i + dir + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (count <= 1 || paused || reduceMotion) return;
    const t = window.setInterval(() => go(1), INTERVAL_MS);
    return () => window.clearInterval(t);
  }, [count, paused, reduceMotion, go]);

  if (!count || !current) {
    return null;
  }

  return (
    <section
      className="w-full border-b border-[var(--border)] bg-[var(--background)]"
      aria-roledescription="carousel"
      aria-label="Picha za ukurasa wa mwanzo"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      <div className="relative w-full max-w-none">
        <div
          className="relative aspect-[21/9] min-h-[min(32vh,280px)] max-h-[min(72vh,640px)] w-full overflow-hidden bg-[var(--muted)] shadow-[0_8px_30px_-10px_rgba(0,0,0,0.18)]"
          role="group"
          aria-live={reduceMotion ? "off" : "polite"}
          aria-atomic="true"
          aria-label={`${safeIndex + 1} kati ya ${count}`}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                i === safeIndex
                  ? "z-10 opacity-100 scale-100"
                  : "z-0 opacity-0 scale-[1.02] motion-reduce:scale-100",
              )}
              aria-hidden={i !== safeIndex}
            >
              {slide.mediaType === "video" ? (
                <video
                  src={slide.imageUrl}
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload={i === safeIndex ? "metadata" : "none"}
                  aria-label={slide.alt}
                />
              ) : (
                <Image
                  src={slide.imageUrl}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={i === 0}
                  unoptimized
                />
              )}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                aria-hidden
              />
              {slide.caption ? (
                <p className="absolute bottom-0 left-0 right-0 z-20 px-5 pb-5 pt-12 text-center font-heading text-lg font-semibold text-white drop-shadow sm:px-10 sm:text-xl">
                  {slide.caption}
                </p>
              ) : null}
            </div>
          ))}

          {count > 1 ? (
            <>
              <button
                type="button"
                className="absolute left-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-5 md:left-8"
                onClick={() => go(-1)}
                aria-label="Picha iliyotangulia"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                className="absolute right-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-5 md:right-8"
                onClick={() => go(1)}
                aria-label="Picha inayofuata"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          ) : null}
        </div>

        {count > 1 ? (
          <div
            className="mt-4 flex justify-center gap-2 px-4 pb-4 sm:px-6"
            role="tablist"
            aria-label="Chagua picha"
          >
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={i === safeIndex}
                aria-label={`Picha ${i + 1}`}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]",
                  i === safeIndex
                    ? "scale-110 bg-[var(--primary)]"
                    : "bg-[var(--border)] hover:bg-[var(--muted-foreground)]",
                )}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
