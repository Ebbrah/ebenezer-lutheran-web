import Link from "next/link";
import { Clock3, HandCoins } from "lucide-react";
import { YoutubeChannelLiveButton } from "@/components/youtube-channel-live-button";
import { getChmsAppUrl } from "@/lib/env";
import { getHomeSlides } from "@/lib/slider-data";
import { HomeSlider } from "@/components/home-slider";
import { getYoutubeLiveBannerState } from "@/lib/youtube";

const heroCtaClass =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full whitespace-nowrap min-h-11 px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:min-h-12 sm:px-6 sm:text-base";

const serviceTimes = [
  { label: "Ibada ya kwanza", time: "01:00 Asb – 03:30 Asb" },
  { label: "Ibada ya pili", time: "04:00 Asb – 06:00 Mch" },
] as const;

export default async function HomePage() {
  const chmsAppUrl = getChmsAppUrl();
  const [slides, ytBanner] = await Promise.all([
    getHomeSlides(),
    getYoutubeLiveBannerState(),
  ]);

  return (
    <>
      <HomeSlider slides={slides} />

      <section
        className="border-b border-[var(--border)] bg-gradient-to-b from-[var(--muted)]/50 to-[var(--background)]"
        aria-labelledby="hero-heading"
      >
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20 lg:max-w-5xl">
          <p className="font-heading text-sm font-medium uppercase tracking-[0.12em] text-[var(--primary)]">
            Karibu
          </p>
          <h1
            id="hero-heading"
            className="font-heading mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl"
          >
            K.K.K.T Ebenezer — Imani, Tumaini, na Upendo
          </h1>
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-left text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg lg:max-w-3xl">
            <p>
              Tunaamini katika utatu mtakatifu wa Mungu; Mungu Baba, Mwana na Roho
              Mtakatifu. Tumejengwa ndani ya msingi wa Yesu Kristo mwenyewe — msingi
              ulio wa pekee na usiokosea kwa mafundisho na maisha ya kanisa, kama
              ilivyo katika Maandiko Matakatifu ya Agano la Kale na Agano Jipya.
            </p>
            <p>
              Pia tunaamini katika Imani ya Mitume, Nikea, Athanasio na maungamo ya
              kanisa la Kilutheri, hasa katika Ungamo lisilobadilishwa la Augsburg na
              Katekisimo Ndogo ya Dk. Martin Luther.
            </p>
            <p className="text-[var(--foreground)] font-medium">
              Tunakukaribisha ushiriki pamoja nasi katika ibada — karibu.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <a
              href={chmsAppUrl}
              className={`${heroCtaClass} bg-[var(--primary)] text-[var(--primary-foreground)] shadow-md hover:opacity-90 focus-visible:outline-[var(--ring)]`}
              rel="noopener noreferrer"
            >
              ChMS / Member&apos;s Portal
            </a>
            <Link
              href="/services#times"
              className={`${heroCtaClass} border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--muted)] focus-visible:outline-[var(--ring)]`}
            >
              <Clock3 className="h-4 w-4" aria-hidden />
              Saa za Ibada
            </Link>
            <YoutubeChannelLiveButton
              href={ytBanner.href}
              liveNow={ytBanner.liveNow}
              variant="hero"
              label="youtube"
            />
            <Link
              href="/give"
              className={`${heroCtaClass} border-2 border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-foreground)] hover:opacity-90 focus-visible:outline-[var(--ring)]`}
            >
              <HandCoins className="h-4 w-4" aria-hidden />
              Sadaka
            </Link>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16"
        aria-labelledby="intro-heading"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="min-w-0">
            <h2
              id="intro-heading"
              className="font-heading text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl"
            >
              Ebenezer
            </h2>
            <blockquote className="mt-5 border-l-4 border-[var(--primary)] pl-5">
              <p className="font-heading text-lg font-medium italic leading-relaxed text-[var(--foreground)] sm:text-xl">
                &ldquo;… Hata sasa BWANA ametusaidia.&rdquo;
              </p>
              <footer className="mt-2 font-sans text-sm font-normal not-italic text-[var(--muted-foreground)]">
                1 Samueli 7:12b (SUV)
              </footer>
            </blockquote>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-[var(--muted-foreground)]">
              <p>
                Usharika wa Ebenezer ni miongoni mwa sharika 53 za Kanisa la
                Kiinjili la Kilutheri Tanzania (K.K.K.T) Dayosisi ya Dodoma.
              </p>
              <p>
                Vilevile, Usharika huu ni miongoni mwa sharika 27 za Jimbo la
                makao makuu ndani ya Dayosisi ya Dodoma. Usharika wa Ebenezer
                ulianzishwa tarehe 21 Februari 2015 ukiwa ni mtaa chini ya Usharika
                wa Arusha Road...
              </p>
            </div>
            <Link
              href="/about"
              className="mt-6 inline-flex min-h-11 items-center font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
            >
              Soma zaidi kuhusu sisi
            </Link>
          </div>

          <aside className="rounded-xl border border-[var(--border)] bg-[var(--muted)]/30 p-6 sm:p-7">
            <h3 className="font-heading text-lg font-semibold text-[var(--foreground)] sm:text-xl">
              Jumapili hili
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
              Usharika una ibada mbili na ibada moja katika mitaa. Ibada za jumuiya
              (nyumba kwa nyumba) hufanyika kila Jumamosi. Pia tuna ibada za masifu
              za asubuhi (morning glory), jioni (evening glory) na ushirika na Bwana
              (fellowship).
            </p>
            <ul className="mt-5 space-y-3" role="list">
              {serviceTimes.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col gap-0.5 border-b border-[var(--border)]/80 pb-3 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <span className="text-sm font-semibold text-[var(--foreground)]">
                    {item.label}
                  </span>
                  <span className="text-sm tabular-nums text-[var(--muted-foreground)]">
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[var(--muted-foreground)]">
              Ratiba kamili iko kwenye ukurasa wa Ibada.
            </p>
            <Link
              href="/services"
              className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
            >
              Ibada na ratiba
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
