import { PageIntro } from "@/components/layout/PageIntro";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Case Studies",
  description: "Melbourne commercial cleaning case studies and client outcomes.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageIntro
        title="Case Studies"
        description="Client success stories will be published here as you share additional designs."
      />
      <Container className="pb-16 text-brand-slate">Coming soon.</Container>
    </>
  );
}
