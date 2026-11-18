import Image from "next/image";
import { servicesPageContent } from "@/config/content/services-page";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { revealVariantAt } from "@/lib/motion/reveal-variant";
import { cn } from "@/lib/utils/cn";

const { grid } = servicesPageContent;
const serviceCount = grid.items.length;
const lastRowPair = serviceCount % 3 === 2;

export function ServicesGridSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <Reveal variant="center" className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-emerald">
            {grid.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-3xl text-brand-forest sm:text-4xl">
            {grid.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-brand-slate">
            {grid.subtitle}
          </p>
        </Reveal>
        <ul className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
          {grid.items.map((service, index) => (
            <li
              id={service.slug}
              key={service.slug}
              className={cn(
                "scroll-mt-32 lg:col-span-2",
                lastRowPair &&
                  index === serviceCount - 2 &&
                  "lg:col-start-2",
                lastRowPair &&
                  index === serviceCount - 1 &&
                  "lg:col-start-4",
                serviceCount % 2 === 1 &&
                  index === serviceCount - 1 &&
                  "md:col-span-2 md:mx-auto md:max-w-lg md:justify-self-center",
              )}
            >
              <Reveal
                variant={revealVariantAt(index)}
                delay={(index % 3) * 80}
                className="h-full"
              >
              <article className="motion-lift flex h-full w-full flex-col overflow-hidden rounded-2xl border border-brand-gray/15 bg-white shadow-sm hover:shadow-lg">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand-emerald">
                  <TagIcon />
                  {service.tag}
                </p>
                <h3 className="mt-3 font-serif text-xl text-brand-forest">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-charcoal">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2 rounded-xl bg-brand-surface p-4">
                  {service.checklist.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-brand-charcoal"
                    >
                      <span className="text-brand-emerald" aria-hidden>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function TagIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16v10H4V7zm4-4h8v4H8V3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
