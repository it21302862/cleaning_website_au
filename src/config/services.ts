import { servicesPageContent } from "@/config/content/services-page";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
};

/** Catalogue for homepage and anchors on the single /services page */
export const services: Service[] = servicesPageContent.grid.items.map(
  (item) => ({
    slug: item.slug,
    title: item.title,
    shortDescription: item.description,
    image: item.image,
  }),
);
