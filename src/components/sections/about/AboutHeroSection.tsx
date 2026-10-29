import Link from "next/link";
import { aboutPageContent } from "@/config/content/about-page";
import { Container } from "@/components/ui/Container";

const { hero } = aboutPageContent;

export function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-forest via-[#013d28] to-[#002217] text-white">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-brand-lime/10 blur-3xl"
        aria-hidden
      />
      <Container className="relative py-14 lg:py-20">
        <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-white/90">
          {hero.eyebrow}
        </span>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl lg:text-[3.25rem]">
          {hero.title}{" "}
          <span className="text-brand-lime">{hero.titleHighlight}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          {hero.description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="#achievements"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-lime px-6 py-3 text-sm font-semibold text-brand-forest transition-colors hover:bg-brand-lime/90"
          >
            {hero.primaryCta}
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="#green-guarantee"
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {hero.secondaryCta}
          </Link>
        </div>
      </Container>
    </section>
  );
}
