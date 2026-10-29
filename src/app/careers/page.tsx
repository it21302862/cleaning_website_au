import { PageIntro } from "@/components/layout/PageIntro";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Careers",
  description: "Join Green Planet Services — commercial cleaning careers in Melbourne.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageIntro
        title="Careers"
        description="We're building a careers hub for cleaners and supervisors across Melbourne."
      />
      <Container className="pb-16 text-brand-slate">Coming soon.</Container>
    </>
  );
}
