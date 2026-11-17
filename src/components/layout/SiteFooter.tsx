import Link from "next/link";
import { aboutPageContent } from "@/config/content/about-page";
import { footerLegalLinks, footerQuickLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="bg-brand-forest text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-lg font-bold">{siteConfig.name}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            {aboutPageContent.footerBlurb}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {siteConfig.certifications.map((badge) => (
              <li
                key={badge}
                className="rounded-lg bg-black/25 px-3 py-1.5 text-[10px] font-medium text-brand-lime"
              >
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/75 hover:text-brand-lime"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold text-white">{siteConfig.address.label}</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex gap-2">
              <LocationIcon />
              <span>{siteConfig.address.hubLine}</span>
            </li>
            <li className="flex gap-2">
              <PhoneIcon />
              <a href={siteConfig.phones.landlineHref} className="hover:text-brand-lime">
                {siteConfig.phones.display}
              </a>
            </li>
            <li className="flex gap-2">
              <MailIcon />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-lime">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-2">
              <ClockIcon />
              <span>{siteConfig.businessHours}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-brand-lime"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-brand-lime" aria-hidden>
      <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-brand-lime" aria-hidden>
      <path d="M5 4h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3a2 2 0 01-2 2A16 16 0 015 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-brand-lime" aria-hidden>
      <path d="M4 6h16v12H4V6zm0 0l8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-brand-lime" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
