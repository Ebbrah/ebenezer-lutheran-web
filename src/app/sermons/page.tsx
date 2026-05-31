import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { YoutubeChannelLiveButton } from "@/components/youtube-channel-live-button";
import { siteConfig } from "@/lib/site-config";
import {
  getYoutubeChannelFeed,
  getYoutubeLiveUrl,
} from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Mahubiri",
  description: "Mahubiri na mafundisho — Kanisa la Kilutheri la Ebenezer.",
};

export default async function SermonsPage() {
  const feed = await getYoutubeChannelFeed(6);
  const { videos, liveNow, fetchFailed, liveVideoId } = feed;

  const youtubeHref =
    liveNow && liveVideoId
      ? `https://www.youtube.com/watch?v=${liveVideoId}`
      : liveNow
        ? getYoutubeLiveUrl()
        : siteConfig.youtubeChannelUrl;

  const showEnglishFallback =
    fetchFailed || videos.length === 0;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        title="Mahubiri"
        description="Ili kupata mahubiri mbalimbali kupitia ibada zilizokwishafanyika hapa usharikani na ukitaka kupata mahubiri ya moja kwa moja wakati wa ibada tafadhali tembelea Youtube chanel yetu kwa kubofya kitufe hapo chini."
      />

      <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 p-6">
        <h2 className="font-heading text-lg font-semibold text-[var(--foreground)]">
          Tazama mtandaoni
        </h2>
        <p className="mt-2 text-[var(--muted-foreground)]">
          Jiunge ili upate matangazo ya moja kwa moja na maktaba ya mahubiri ya
          Jumapili.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <YoutubeChannelLiveButton
            href={youtubeHref}
            liveNow={liveNow}
            variant="default"
            label="youtube-channel"
          />
        </div>
      </div>

      <section className="mt-10" aria-labelledby="recent-videos-heading">
        <h2
          id="recent-videos-heading"
          className="font-heading text-xl font-semibold text-[var(--foreground)]"
        >
          Video za hivi karibuni
        </h2>
        {showEnglishFallback ? (
          <p
            className="mt-4 rounded-lg border border-amber-200/80 bg-amber-50/90 px-4 py-3 text-sm leading-relaxed text-amber-950"
            lang="en"
          >
            We could not load recent videos from YouTube right now. Please use
            the YouTube Channel button above or try again later.
          </p>
        ) : null}
        {!showEnglishFallback ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <a
                key={video.id}
                href={video.url}
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background)] transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative aspect-video w-full bg-[var(--muted)]">
                  <Image
                    src={video.thumbnailUrl}
                    alt={video.title}
                    fill
                    className="object-cover transition group-hover:scale-[1.02]"
                    unoptimized
                  />
                  {video.isLive ? (
                    <span className="absolute left-2 top-2 inline-flex items-center rounded bg-red-600 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-white shadow-sm ring-2 ring-white/80 sm:text-xs">
                      LIVE
                    </span>
                  ) : null}
                </div>
                <p className="line-clamp-2 px-3 py-2 text-sm text-[var(--foreground)]">
                  {video.title}
                </p>
              </a>
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
}
