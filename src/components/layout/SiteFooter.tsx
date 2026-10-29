import Link from "next/link";
import { aboutPageContent } from "@/config/content/about-page";
import { footerLegalLinks, footerQuickLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="bg-brand-forest text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
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

        <div>
          <h3 className="text-sm font-bold text-white">Follow Us</h3>
          <div className="mt-4 flex gap-3">
            {(
              [
                ["LinkedIn", siteConfig.social.linkedin],
                ["Twitter", siteConfig.social.twitter],
                ["Facebook", siteConfig.social.facebook],
                ["Instagram", siteConfig.social.instagram],
              ] as const
            ).map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/90 hover:text-brand-lime"
                aria-label={label}
              >
                <SocialIcon network={label} />
              </a>
            ))}
          </div>
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

function SocialIcon({ network }: { network: string }) {
  switch (network) {
    case "LinkedIn":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M6 9h3v12H6V9zm1.5-4.5a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zM11 9h2.9v1.6h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.74V21h-3V9z" />
        </svg>
      );
    case "Twitter":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.2 4h3.3l-7.2 8.2 8.5 11.8h-6.6l-5.2-6.8-5.9 6.8H2l7.7-8.8L2 4h6.8l4.7 6.2L18.2 4zm-1.2 17.2h1.8L7.1 5.7H5.2l11.8 15.5z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M14 9h3V6h-3c-2.8 0-5 2.2-5 5v2H7v3h4v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M7 4h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm5 4a5 5 0 100 10 5 5 0 000-10zm6.5-.8a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
        </svg>
      );
    default:
      return null;
  }
}
