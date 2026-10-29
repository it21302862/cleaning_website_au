import { servicesPageContent } from "@/config/content/services-page";
import { ServicesAuditForm } from "@/components/forms/ServicesAuditForm";
import { Container } from "@/components/ui/Container";

const { audit } = servicesPageContent;

export function ServicesAuditSection() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="grid gap-10 rounded-[2rem] bg-brand-lime/70 px-6 py-10 sm:px-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-charcoal/80">
              {audit.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-2xl text-brand-forest sm:text-3xl">
              {audit.title}
            </h2>
            <p className="mt-4 text-sm text-brand-charcoal sm:text-base">
              {audit.description}
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {audit.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-2 text-sm font-medium text-brand-forest"
                >
                  <span className="text-brand-emerald" aria-hidden>
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-lg sm:p-8">
            <ServicesAuditForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
