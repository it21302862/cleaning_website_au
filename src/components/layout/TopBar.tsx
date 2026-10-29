"use client";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function TopBar() {
  return (
    <div className="hidden bg-brand-forest text-xs text-white md:block">
      <Container className="flex flex-wrap items-center justify-between gap-3 py-2.5">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={siteConfig.phones.landlineHref}
            className="flex items-center gap-2 hover:text-brand-lime"
          >
            <PhoneIcon />
            <span>{siteConfig.phones.display}</span>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 text-white/90 hover:text-brand-lime"
          >
            <MailIcon />
            <span>{siteConfig.email}</span>
          </a>
          <span className="flex items-center gap-2 text-white/80">
            <ClockIcon />
            {siteConfig.businessHours}
          </span>
        </div>
        <p className="rounded-full bg-brand-emerald/25 px-3 py-1 text-[11px] font-medium text-brand-lime">
          • {siteConfig.serviceArea}
        </p>
      </Container>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 4h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3a2 2 0 01-2 2A16 16 0 015 6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16v12H4V6zm0 0l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
