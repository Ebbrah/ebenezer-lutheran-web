"use client";

import { cn } from "@/lib/utils";

function YoutubeLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("shrink-0", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8M9.6 15.6V8.4L16 12z" />
    </svg>
  );
}

export type YoutubeChannelLiveButtonProps = {
  /** Destination: channel home offline, watch or /live URL when broadcasting */
  href: string;
  liveNow: boolean;
  variant: "hero" | "default";
  /** Homepage uses short label; sermons uses “YouTube Channel” */
  label: "youtube" | "youtube-channel";
};

export function YoutubeChannelLiveButton({
  href,
  liveNow,
  variant,
  label,
}: YoutubeChannelLiveButtonProps) {
  const hero = variant === "hero";

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      aria-label={
        liveNow
          ? "YouTube — live stream in progress, open playback"
          : "Open Ebenezer YouTube channel"
      }
      className={cn(
        "relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#FF0000] font-semibold text-white shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF0000] hover:brightness-[1.05]",
        hero
          ? "min-h-11 shrink-0 justify-center whitespace-nowrap px-5 py-2.5 text-sm sm:min-h-12 sm:text-base"
          : "min-h-11 justify-center whitespace-nowrap px-6 py-3 text-sm",
        liveNow &&
          "shadow-[0_0_26px_rgba(255,255,255,0.45)] ring-2 ring-white/95 ring-offset-2 ring-offset-[#FF0000]",
      )}
    >
      {liveNow ? (
        <span
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-80 motion-reduce:opacity-0"
          aria-hidden
        />
      ) : null}
      <YoutubeLogo className={hero ? "h-5 w-5" : "h-4 w-4"} />
      <span className="relative z-[1] flex items-center gap-2">
        {label === "youtube" ? "YouTube" : "YouTube Channel"}
        {liveNow ? (
          <>
            <span className="h-5 w-px shrink-0 bg-white/55" aria-hidden />
            <span className="font-black uppercase tracking-[0.12em]">
              LIVE
            </span>
          </>
        ) : null}
      </span>
    </a>
  );
}
