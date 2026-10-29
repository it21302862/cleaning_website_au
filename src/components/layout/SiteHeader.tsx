"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav } from "@/config/navigation";
import { Logo } from "@/components/layout/Logo";
import { TopBar } from "@/components/layout/TopBar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navLinkClass = (href: string) =>
    cn(
      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
      isActive(href)
        ? "bg-brand-forest text-white"
        : "text-brand-forest hover:bg-brand-seafoam/15",
    );

  const headerCta = "Request a Free Estimate";
  const headerCtaHref = "/contact#estimate";

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      <TopBar />
      <div className="border-b border-brand-gray/10 bg-white py-3">
        <Container as="nav" aria-label="Main">
          <div className="flex h-14 items-center justify-between gap-4 lg:h-16">
            <Logo />

            <ul className="hidden items-center gap-1 rounded-full bg-brand-mint/50 px-2 py-1.5 lg:flex">
              {primaryNav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={navLinkClass(item.href)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <Button href={headerCtaHref} variant="dark">
                {headerCta}
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-mint text-brand-forest lg:hidden"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </Container>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 top-[7.5rem] z-40 flex flex-col bg-white lg:hidden">
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="space-y-1">
              {primaryNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-lg px-2 py-3 text-base font-medium text-brand-forest hover:bg-brand-mint/40",
                      isActive(item.href) && "bg-brand-forest text-white",
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-brand-mint p-4">
            <Button
              href={headerCtaHref}
              variant="dark"
              className="w-full"
              onClick={() => setMobileOpen(false)}
            >
              {headerCta}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M3 5h14M3 10h14M3 15h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M5 5l10 10M15 5L5 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
