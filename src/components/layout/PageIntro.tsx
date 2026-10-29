import { Container } from "@/components/ui/Container";

type PageIntroProps = {
  title: string;
  description: string;
};

export function PageIntro({ title, description }: PageIntroProps) {
  return (
    <section className="bg-brand-cream py-14 lg:py-16">
      <Container>
        <h1 className="font-serif text-4xl text-brand-forest">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-brand-slate">{description}</p>
      </Container>
    </section>
  );
}
