import Image from "next/image";
import Link from "next/link";
import { servicesPageContent } from "@/config/content/services-page";
import { Container } from "@/components/ui/Container";

const { hero } = servicesPageContent;

export function ServicesHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-forest via-[#013d28] to-[#002217] text-white">
      <Container className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90">
            {hero.eyebrow}
          </span>
          <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-[3.25rem]">
            {hero.title}{" "}
            <span className="text-brand-lime">{hero.titleHighlight}</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg">
            {hero.description}
          </p>
          <Link
            href="/contact#estimate"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-lime px-6 py-3 text-sm font-semibold text-brand-forest transition-colors hover:bg-brand-lime/90"
          >
            {hero.cta}
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white text-brand-forest shadow-2xl">
          <div className="relative aspect-[16/10]">
            <Image
              src={hero.showcase.image}
              alt="Modern Melbourne commercial workspace"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-lg font-bold">{hero.showcase.title}</p>
                <p className="mt-1 text-sm text-brand-gray">
                  {hero.showcase.location}
                </p>
              </div>
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-mint/60 text-brand-emerald"
                aria-hidden
              >
                <LeafIcon />
              </span>
            </div>
            <ul className="mt-5 grid grid-cols-3 gap-2">
              {hero.showcase.stats.map((stat) => (
                <li
                  key={stat.label}
                  className="rounded-xl bg-brand-mint/50 px-2 py-3 text-center"
                >
                  <p className="text-lg font-bold text-brand-forest">{stat.value}</p>
                  <p className="mt-1 text-[10px] leading-tight text-brand-charcoal">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function LeafIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21c-5-3-8-7-8-12 0 0 5 1 8-3 3 4 8 3 8 3 0 5-3 9-8 12z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
