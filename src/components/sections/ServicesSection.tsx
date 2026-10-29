import Image from "next/image";
import Link from "next/link";
import { homePageContent } from "@/config/content/home-page";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const { services } = homePageContent;

export function ServicesSection() {
  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          subtitle={services.subtitle}
          align="center"
          titleClassName="text-balance max-w-4xl mx-auto"
          className="max-w-4xl"
        />
        <h2 id="services-heading" className="sr-only">
          Our services
        </h2>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service) => (
            <li
              key={service.slug}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-brand-emerald px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  {service.badge}
                </span>
              </div>
              <div className="flex flex-col p-6">
                <h3 className="font-serif text-xl text-brand-forest">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-slate">
                  {service.description}
                </p>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-brand-gray/15 pt-4 text-sm">
                  <span className="text-brand-gray">{service.footer}</span>
                  <Link
                    href={`/contact#estimate`}
                    className="inline-flex shrink-0 items-center gap-1 font-semibold text-brand-emerald hover:underline"
                  >
                    Book Service
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
