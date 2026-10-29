import { PageIntro } from "@/components/layout/PageIntro";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions for Green Planet Services commercial cleaning agreements.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageIntro
        title="Terms & Conditions"
        description="Legal copy to be supplied by your client — placeholder route for footer and SEO."
      />
      <Container className="pb-16 text-brand-slate">Coming soon.</Container>
    </>
  );
}
