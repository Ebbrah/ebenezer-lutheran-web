import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/15 bg-[var(--primary)] text-[color-mix(in_srgb,var(--primary-foreground)_90%,transparent)]">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <p className="text-sm font-medium leading-snug text-[color-mix(in_srgb,var(--primary-foreground)_80%,transparent)]">
            {siteConfig.footerOrgSubtitle}
          </p>
          <p className="font-heading mt-1.5 text-lg font-semibold leading-snug text-[var(--primary-foreground)]">
            {siteConfig.footerOrgTitle}
          </p>
          <p className="mt-2 text-sm text-[color-mix(in_srgb,var(--primary-foreground)_82%,transparent)]">
            {siteConfig.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex min-h-10 items-center text-sm font-semibold text-[var(--primary-foreground)] underline-offset-4 hover:underline"
          >
            Mawasiliano — tuma ujumbe au ombi
          </Link>
        </div>

        <div>
          <p className="text-sm font-semibold text-[var(--primary-foreground)]">
            Quick links
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                className="text-[color-mix(in_srgb,var(--primary-foreground)_92%,transparent)] underline-offset-4 hover:text-[var(--primary-foreground)] hover:underline"
                href="/services"
              >
                Saa za ibada
              </Link>
            </li>
            <li>
              <Link
                className="text-[color-mix(in_srgb,var(--primary-foreground)_92%,transparent)] underline-offset-4 hover:text-[var(--primary-foreground)] hover:underline"
                href="/contact"
              >
                Mawasiliano
              </Link>
            </li>
            <li>
              <Link
                className="text-[color-mix(in_srgb,var(--primary-foreground)_92%,transparent)] underline-offset-4 hover:text-[var(--primary-foreground)] hover:underline"
                href="/give"
              >
                Sadaka
              </Link>
            </li>
            <li>
              <Link
                className="text-[color-mix(in_srgb,var(--primary-foreground)_92%,transparent)] underline-offset-4 hover:text-[var(--primary-foreground)] hover:underline"
                href="/privacy"
              >
                Faragha
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-[var(--primary-foreground)]">
            Tovuti Mashuhuri
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {siteConfig.famousWebsites.map((site) => (
              <li key={site.href}>
                <a
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color-mix(in_srgb,var(--primary-foreground)_92%,transparent)] underline-offset-4 hover:text-[var(--primary-foreground)] hover:underline"
                >
                  {site.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-[var(--primary-foreground)]">
            Mawasiliano
          </p>
          <p className="mt-3 text-sm text-[color-mix(in_srgb,var(--primary-foreground)_88%,transparent)]">
            <a
              className="underline-offset-4 hover:text-[var(--primary-foreground)] hover:underline"
              href={`mailto:${siteConfig.contactEmail}`}
            >
              {siteConfig.contactEmail}
            </a>
            <br />
            <span>{siteConfig.phone}</span>
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={siteConfig.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--primary-foreground)] underline-offset-4 hover:underline"
              >
                YouTube — {siteConfig.shortName}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--primary-foreground)] underline-offset-4 hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15 py-4 text-center text-xs text-[color-mix(in_srgb,var(--primary-foreground)_72%,transparent)]">
        © {year} {siteConfig.footerOrgTitle}. Haki zote zimehifadhiwa.
      </div>
    </footer>
  );
}
