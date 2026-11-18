import { dehyphenateCopy } from "@/lib/text/dehyphenate-copy";

const siteConfigSource = {
  name: "Green Planet Services",
  legalName: "Green Planet Services Pty Ltd",
  description:
    "Melbourne commercial facilities management and eco-friendly cleaning for offices, retail, and workplaces.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.greenplanetservices.com.au",
  locale: "en-AU",
  region: "AU-VIC",
  phones: {
    display: "03 5164 4006 / 0422 104 633",
    landline: "03 5164 4006",
    landlineHref: "tel:+61351644006",
    mobile: "0422 104 633",
    mobileHref: "tel:+61422104633",
  },
  email: "contact@greenplanetservices.com.au",
  address: {
    label: "Melbourne Hub",
    streetAddress: "132 Forrest St",
    addressLocality: "Ardeer",
    addressRegion: "VIC",
    postalCode: "3022",
    addressCountry: "AU",
    formatted: ["132 Forrest St", "Ardeer VIC 3022"],
    hubLine: "132 Forrest St, Ardeer VIC 3022",
  },
  geo: {
    latitude: -37.7747,
    longitude: 144.7979,
  },
  businessHours: "Mon-Sat: 9:00 AM – 7:00 PM",
  emergencyDispatch:
    "24/7 Emergency Dispatch Available for Triage Clients",
  serviceArea: "Servicing Greater Melbourne & Victoria",
  foundedYear: 2008,
  copyrightYear: 2026,
  social: {
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
  certifications: [
    // "ISO 14001 Compliant",
    // "100% Carbon Neutral",
    // "GECA Certified",
  ],
} as const;

export const siteConfig = dehyphenateCopy(siteConfigSource);

export type SiteConfig = typeof siteConfigSource;
