import { EstimateSection } from "@/components/sections/EstimateSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { UrgentCtaSection } from "@/components/sections/UrgentCtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <EstimateSection />
      <TestimonialsSection />
      <UrgentCtaSection />
    </>
  );
}
