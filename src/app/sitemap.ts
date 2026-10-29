import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/case-studies",
  "/contact",
  "/careers",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-01-01";

  return staticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: path === "" ? 1 : path === "/services" ? 0.9 : 0.7,
  }));
}
