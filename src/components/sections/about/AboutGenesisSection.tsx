import Image from "next/image";
import { aboutPageContent } from "@/config/content/about-page";
import { Container } from "@/components/ui/Container";

const { genesis } = aboutPageContent;

export function AboutGenesisSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-emerald">
            {genesis.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-brand-forest sm:text-4xl">
            {genesis.title}
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-brand-charcoal sm:text-base">
            {genesis.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <blockquote className="mt-8 border-l-4 border-brand-lime bg-brand-surface px-5 py-4 text-sm font-semibold leading-relaxed text-brand-forest sm:text-base">
            &ldquo;{genesis.quote}&rdquo;
          </blockquote>
        </div>

        <div className="relative">
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-brand-surface">
            <Image
              src={genesis.image}
              alt="Professional cleaning team in a modern Melbourne office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="relative z-10 -mt-12 mx-4 rounded-2xl bg-brand-mint/50 p-5 ring-1 ring-brand-emerald/10 sm:mx-8">
            <div className="flex gap-4">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-emerald text-white"
                aria-hidden
              >
                <ShieldIcon />
              </span>
              <div>
                <p className="font-bold text-brand-forest">
                  {genesis.specialistCard.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-brand-charcoal">
                  {genesis.specialistCard.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
