import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type PageIntroProps = {
  title: string;
  description: string;
};

export function PageIntro({ title, description }: PageIntroProps) {
  return (
    <section className="bg-brand-cream py-14 lg:py-16">
      <Container>
        <Reveal variant="center" className="max-w-3xl">
          <h1 className="font-serif text-4xl text-brand-forest">{title}</h1>
          <p className="mt-4 text-lg text-brand-slate">{description}</p>
        </Reveal>
      </Container>
    </section>
  );
}