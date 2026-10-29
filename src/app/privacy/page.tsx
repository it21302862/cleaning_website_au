import { PageIntro } from "@/components/layout/PageIntro";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Green Planet Services — Australian Privacy Act compliant notice.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        title="Privacy Policy"
        description="Legal copy to be supplied by your client — placeholder route for footer and SEO."
      />
      <Container className="pb-16 text-brand-slate">Coming soon.</Container>
    </>
  );
}
