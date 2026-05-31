import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";
import { getChmsAppUrl, getSiteUrl } from "@/lib/env";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.domain}`,
    template: `%s — ${siteConfig.shortName}`,
  },
  description:
    "Karibu Kanisa la Kilutheri la Ebenezer. Saa za ibada, imani, matukio, na Member's Portal (ChMS).",
  openGraph: {
    type: "website",
    locale: "sw_TZ",
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description:
      "Jumuiya ya imani nchini Tanzania — ibada, neno, na huduma.",
  },
  icons: {
    icon: siteConfig.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const chmsAppUrl = getChmsAppUrl();

  return (
    <html lang="sw">
      <body
        className={`${dmSans.variable} ${fraunces.variable} font-sans antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Ruka hadi maudhui makuu
        </a>
        <div className="flex min-h-screen flex-col">
          <SiteHeader chmsAppUrl={chmsAppUrl} churchName={siteConfig.shortName} />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
