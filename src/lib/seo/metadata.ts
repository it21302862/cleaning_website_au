import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

const defaultOgImage = `${siteConfig.url}/og-default.jpg`;

type PageSeo = {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description = siteConfig.description,
  path = "",
  noIndex = false,
}: PageSeo): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    path === "" || path === "/"
      ? `${title} | Commercial Cleaning Melbourne`
      : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_AU",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [{ url: defaultOgImage, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [defaultOgImage],
    },
    other: {
      "geo.region": siteConfig.region,
      "geo.placename": siteConfig.address.addressLocality,
    },
  };
}
