import { AboutDispatchCta } from "@/components/sections/about/AboutDispatchCta";
import { AboutGenesisSection } from "@/components/sections/about/AboutGenesisSection";
import { AboutHeroSection } from "@/components/sections/about/AboutHeroSection";
import { AboutIsoSection } from "@/components/sections/about/AboutIsoSection";
import { AboutPrinciplesSection } from "@/components/sections/about/AboutPrinciplesSection";
import { AboutStatsRibbon } from "@/components/sections/about/AboutStatsRibbon";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Pioneering commercial hygiene in Melbourne since 2008 — ISO compliant, carbon-smart facilities management rooted in absolute sustainability.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutGenesisSection />
      <AboutStatsRibbon />
      <AboutPrinciplesSection />
      <AboutIsoSection />
      <AboutDispatchCta />
    </>
  );
}
