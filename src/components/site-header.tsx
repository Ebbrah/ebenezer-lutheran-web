"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

const ABOUT_CHILDREN = [
  { href: "/about/historia", label: "Historia" },
  { href: "/about/watumishi-waliohudumu", label: "Watumishi Waliohudumu" },
  { href: "/about/maono-na-dhamira", label: "Maono na Dhamira" },
  { href: "/about/miiko", label: "Miiko" },
  { href: "/about/vipaumbele", label: "Vipaumbele" },
  { href: "/about/huduma", label: "Huduma" },
] as const;

const UONGOZI_CHILDREN = [
  { href: "/uongozi/baraza", label: "Baraza la Wazee" },
  { href: "/uongozi/kamati", label: "Kamati ya Utendaji" },
  { href: "/uongozi/watendaji", label: "Muundo wa Utendaji" },
  { href: "/uongozi/watumishi", label: "Watumishi wa Usharika" },
  { href: "/uongozi/jumuiya", label: "Jumuiya" },
  { href: "/uongozi/vikundi", label: "Vikundi" },
] as const;

const SIMPLE_NAV = [
  { href: "/", label: "Nyumbani" },
  { href: "/wajibu", label: "Wajibu" },
  { href: "/services", label: "Ibada" },
  { href: "/events", label: "Matukio" },
  { href: "/sermons", label: "Mahubiri" },
  { href: "/contact", label: "Wasiliana" },
] as const;

type SiteHeaderProps = {
  chmsAppUrl: string;
  churchName: string;
};

function aboutActive(path: string): boolean {
  return path.startsWith("/about");
}

function uongoziActive(path: string): boolean {
  return path.startsWith("/uongozi");
}

const dropdownInactive =
  "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]";
const dropdownActive = "bg-[var(--muted)] text-[var(--foreground)]";

function NavDropdown({
  label,
  href,
  items,
  isActive,
  linkBase,
  active,
  inactive,
  pathname,
  dropdownOpen,
  setDropdownOpen,
}: {
  label: string;
  href: string;
  items: readonly { href: string; label: string }[];
  isActive: boolean;
  linkBase: string;
  active: string;
  inactive: string;
  pathname: string;
  dropdownOpen: null | "about" | "uongozi";
  setDropdownOpen: (value: null | "about" | "uongozi") => void;
}) {
  const id = href === "/about" ? "about" : "uongozi";
  const open = dropdownOpen === id;

  return (
    <div
      className="relative"
      onMouseEnter={() => setDropdownOpen(id)}
      onMouseLeave={() => setDropdownOpen(null)}
      onBlurCapture={(e) => {
        if (
          !(e.currentTarget as HTMLElement).contains(e.relatedTarget as Node | null)
        ) {
          setDropdownOpen(null);
        }
      }}
    >
      <Link
        href={href}
        className={cn(
          `${linkBase} inline-flex items-center gap-1`,
          isActive ? active : inactive,
        )}
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 opacity-80" aria-hidden />
      </Link>
      <div
        className={cn(
          "absolute left-0 top-full z-50 min-w-[14rem] pt-1 transition-opacity duration-150",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
        role="presentation"
      >
        <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] py-2 shadow-lg ring-1 ring-black/5">
          {items.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={cn(
                "flex min-h-10 items-center px-4 py-2 text-sm",
                pathname === child.href ? dropdownActive : dropdownInactive,
              )}
              onClick={() => setDropdownOpen(null)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader({ chmsAppUrl, churchName }: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<null | "about" | "uongozi">(null);
  const [dropdownOpen, setDropdownOpen] = useState<null | "about" | "uongozi">(
    null,
  );

  useEffect(() => {
    setOpen(false);
    setMobileSub(null);
    setDropdownOpen(null);
  }, [pathname]);

  const linkBase =
    "rounded-md px-3 py-2 text-sm font-medium transition-colors";
  const inactive =
    "text-white/90 hover:bg-white/15 hover:text-white";
  const active = "bg-white/20 text-white font-semibold";
  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[var(--primary)] shadow-sm backdrop-blur supports-[backdrop-filter]:bg-[var(--primary)]">
      <div className="mx-auto flex max-w-5xl flex-nowrap items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 sm:gap-2.5 font-heading text-base font-semibold tracking-tight text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-lg"
        >
          <Image
            src={siteConfig.logo.src}
            alt=""
            width={siteConfig.logo.width}
            height={siteConfig.logo.height}
            className="h-8 w-auto shrink-0 select-none sm:h-9"
            priority
            aria-hidden
          />
          <span className="whitespace-nowrap">{churchName}</span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Mwongozo mkuu"
        >
          {SIMPLE_NAV.slice(0, 1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                linkBase,
                pathname === item.href ? active : inactive,
              )}
            >
              {item.label}
            </Link>
          ))}

          <NavDropdown
            label="Kuhusu"
            href="/about"
            items={ABOUT_CHILDREN}
            isActive={aboutActive(pathname)}
            linkBase={linkBase}
            active={active}
            inactive={inactive}
            pathname={pathname}
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
          />

          <NavDropdown
            label="Uongozi"
            href="/uongozi"
            items={UONGOZI_CHILDREN}
            isActive={uongoziActive(pathname)}
            linkBase={linkBase}
            active={active}
            inactive={inactive}
            pathname={pathname}
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
          />

          {SIMPLE_NAV.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                linkBase,
                pathname === item.href ? active : inactive,
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={chmsAppUrl}
            className="hidden min-h-11 items-center justify-center whitespace-nowrap rounded-full bg-[var(--accent)] px-3 py-2.5 text-sm font-semibold text-[var(--accent-foreground)] shadow-sm transition hover:opacity-92 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-foreground)] sm:inline-flex sm:px-4"
            rel="noopener noreferrer"
          >
            ChMS / Member&apos;s Portal
          </a>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/35 text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Fungua menu</span>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/15 bg-[var(--primary)] md:hidden"
        >
          <nav className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-3 sm:px-6">
            <Link
              href="/"
              className={cn(
                "min-h-11 rounded-md px-3 py-3 text-base font-medium",
                pathname === "/" ? active : inactive,
              )}
              onClick={() => setOpen(false)}
            >
              Nyumbani
            </Link>

            <MobileNavSection
              label="Kuhusu"
              href="/about"
              sectionId="about"
              items={ABOUT_CHILDREN}
              isActive={aboutActive(pathname)}
              mobileSub={mobileSub}
              setMobileSub={setMobileSub}
              pathname={pathname}
              active={active}
              inactive={inactive}
              onNavigate={() => setOpen(false)}
            />

            <MobileNavSection
              label="Uongozi"
              href="/uongozi"
              sectionId="uongozi"
              items={UONGOZI_CHILDREN}
              isActive={uongoziActive(pathname)}
              mobileSub={mobileSub}
              setMobileSub={setMobileSub}
              pathname={pathname}
              active={active}
              inactive={inactive}
              onNavigate={() => setOpen(false)}
            />

            {SIMPLE_NAV.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "min-h-11 rounded-md px-3 py-3 text-base font-medium",
                  pathname === item.href ? active : inactive,
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={chmsAppUrl}
              className="mt-2 flex min-h-11 items-center justify-center whitespace-nowrap rounded-full bg-[var(--accent)] px-4 py-3 text-center text-base font-semibold text-[var(--accent-foreground)]"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              ChMS / Member portal
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function MobileNavSection({
  label,
  href,
  sectionId,
  items,
  isActive,
  mobileSub,
  setMobileSub,
  pathname,
  active,
  inactive,
  onNavigate,
}: {
  label: string;
  href: string;
  sectionId: "about" | "uongozi";
  items: readonly { href: string; label: string }[];
  isActive: boolean;
  mobileSub: null | "about" | "uongozi";
  setMobileSub: (fn: (v: null | "about" | "uongozi") => null | "about" | "uongozi") => void;
  pathname: string;
  active: string;
  inactive: string;
  onNavigate: () => void;
}) {
  const expanded = mobileSub === sectionId;
  const subId = `mobile-sub-${sectionId}`;

  return (
    <div>
      <div className="flex">
        <Link
          href={href}
          className={cn(
            "min-h-11 flex-1 rounded-md px-3 py-3 text-base font-medium",
            isActive ? active : inactive,
          )}
          onClick={onNavigate}
        >
          {label}
        </Link>
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={subId}
          className="inline-flex items-center px-4 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={() =>
            setMobileSub((v) => (v === sectionId ? null : sectionId))
          }
        >
          <span className="sr-only">Chaguua kipengele cha {label}</span>
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-transform",
              expanded && "rotate-180",
            )}
            aria-hidden
          />
        </button>
      </div>
      {expanded ? (
        <div
          id={subId}
          className="mt-1 flex flex-col gap-0.5 border-l-2 border-white/25 pb-3 pl-4"
        >
          {items.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={cn(
                "min-h-11 rounded-md py-3 pl-2 text-base font-medium",
                pathname === child.href ? active : inactive,
              )}
              onClick={onNavigate}
            >
              {child.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
