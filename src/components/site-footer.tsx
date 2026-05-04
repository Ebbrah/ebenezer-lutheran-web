import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--muted)]/40">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            {siteConfig.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--foreground)]">
            Quick links
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="underline-offset-4 hover:underline" href="/services">
                Service times
              </Link>
            </li>
            <li>
              <Link className="underline-offset-4 hover:underline" href="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="underline-offset-4 hover:underline" href="/give">
                Give
              </Link>
            </li>
            <li>
              <Link className="underline-offset-4 hover:underline" href="/privacy">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-sm font-semibold text-[var(--foreground)]">
            Contact
          </p>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">
            <a
              className="underline-offset-4 hover:underline"
              href={`mailto:${siteConfig.contactEmail}`}
            >
              {siteConfig.contactEmail}
            </a>
            <br />
            <span>{siteConfig.phone}</span>
          </p>
        </div>
      </div>
      <div className="border-t border-[var(--border)] py-4 text-center text-xs text-[var(--muted-foreground)]">
        © {year} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
