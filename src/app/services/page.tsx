import { ServicesAdvantageSection } from "@/components/sections/services/ServicesAdvantageSection";
import { ServicesAuditSection } from "@/components/sections/services/ServicesAuditSection";
import { ServicesGridSection } from "@/components/sections/services/ServicesGridSection";
import { ServicesHeroSection } from "@/components/sections/services/ServicesHeroSection";
import { ServicesSustainabilitySection } from "@/components/sections/services/ServicesSustainabilitySection";
import { servicesPageContent } from "@/config/content/services-page";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Commercial Cleaning Services",
  description: servicesPageContent.hero.description,
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesGridSection />
      <ServicesAdvantageSection />
      <ServicesSustainabilitySection />
      <ServicesAuditSection />
    </>
  );
}
