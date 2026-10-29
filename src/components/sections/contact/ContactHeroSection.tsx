import { contactPageContent } from "@/config/content/contact-page";
import { Container } from "@/components/ui/Container";

const { hero } = contactPageContent;

export function ContactHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-forest via-[#013d28] to-[#002217] text-white">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-brand-lime/10 blur-3xl"
        aria-hidden
      />
      <Container className="relative py-14 lg:py-20">
        <span className="inline-flex rounded-full border border-brand-lime/35 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-lime">
          {hero.eyebrow}
        </span>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl lg:text-[3.25rem]">
          {hero.title}{" "}
          <span className="text-brand-lime">{hero.titleHighlight}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          {hero.description}
        </p>
      </Container>
    </section>
  );
}
