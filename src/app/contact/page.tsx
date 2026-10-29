import { ContactHeroSection } from "@/components/sections/contact/ContactHeroSection";
import { ContactCareersBanner } from "@/components/sections/contact/ContactCareersBanner";
import { ContactFaqSection } from "@/components/sections/contact/ContactFaqSection";
import { ContactMapSection } from "@/components/sections/contact/ContactMapSection";
import { ContactProposalSection } from "@/components/sections/contact/ContactProposalSection";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact Green Planet Services in Melbourne — request a proposal, call 0422 104 633, or visit Collins Square. Fast response within 2 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactProposalSection />
      <ContactFaqSection />
      <ContactCareersBanner />
      <ContactMapSection />
    </>
  );
}
