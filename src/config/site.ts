export const siteConfig = {
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
    streetAddress: "727 Collins St, Level 23, Collins Square",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    postalCode: "3008",
    addressCountry: "AU",
    formatted: [
      "Collins Square, Melbourne CBD & Greater Victoria Operations",
    ],
    hubLine:
      "Collins Square, Melbourne CBD & Greater Victoria Operations",
  },
  geo: {
    latitude: -37.8136,
    longitude: 144.9631,
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
    "ISO 14001 Compliant",
    "100% Carbon Neutral",
    "GECA Certified",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
