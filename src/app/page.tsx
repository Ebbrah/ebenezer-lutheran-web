import Link from "next/link";
import { getChmsAppUrl } from "@/lib/env";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  const chmsAppUrl = getChmsAppUrl();

  return (
    <>
      <section
        className="border-b border-[var(--border)] bg-gradient-to-b from-[var(--muted)]/80 to-[var(--background)]"
        aria-labelledby="hero-heading"
      >
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="font-heading text-sm font-medium uppercase tracking-wide text-[var(--primary)]">
            Welcome
          </p>
          <h1
            id="hero-heading"
            className="font-heading mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl"
          >
            Faith, hope, and love — together at {siteConfig.shortName}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-[var(--muted-foreground)]">
            We gather around God&apos;s word and sacraments. Whether you are
            visiting Dar es Salaam or looking for a church home, you are welcome
            here.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={chmsAppUrl}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--primary)] px-8 py-3 text-center text-base font-semibold text-[var(--primary-foreground)] shadow-md transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
              rel="noopener noreferrer"
            >
              ChMS / Member portal
            </a>
            <Link
              href="/services#times"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[var(--primary)] px-8 py-3 text-center text-base font-semibold text-[var(--primary)] transition hover:bg-[var(--muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
            >
              Visit — service times
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--accent)] px-8 py-3 text-center text-base font-semibold text-[var(--accent-foreground)] transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
            >
              Contact us
            </Link>
            <Link
              href="/give"
              className="inline-flex min-h-12 items-center justify-center text-center text-base font-semibold text-[var(--primary)] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
            >
              Give
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6" aria-labelledby="intro-heading">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2
              id="intro-heading"
              className="font-heading text-2xl font-semibold text-[var(--foreground)]"
            >
              Who we are
            </h2>
            <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
              We are a Lutheran congregation seeking to proclaim Christ crucified
              and risen, serve our neighbours, and grow as disciples. Replace
              this paragraph with your parish story, founding date, and what
              newcomers can expect on a Sunday.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex min-h-11 items-center font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
            >
              Read more about us
            </Link>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 p-6">
            <h3 className="font-heading text-lg font-semibold text-[var(--foreground)]">
              This Sunday
            </h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Update this card weekly — time, location, and language.{" "}
              {siteConfig.languages}
            </p>
            <p className="mt-4 font-medium text-[var(--foreground)]">
              Holy Communion — 10:00 AM
            </p>
            <p className="text-sm text-[var(--muted-foreground)]">
              See full schedule on the Services page.
            </p>
            <Link
              href="/services"
              className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
            >
              Services &amp; times
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
