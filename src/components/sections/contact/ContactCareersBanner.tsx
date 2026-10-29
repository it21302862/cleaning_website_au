import Link from "next/link";
import { contactPageContent } from "@/config/content/contact-page";
import { Container } from "@/components/ui/Container";

const { careers } = contactPageContent;

export function ContactCareersBanner() {
  return (
    <section className="pb-12 lg:pb-16">
      <Container>
        <div className="grid items-center gap-8 rounded-[2rem] bg-brand-lime/70 px-6 py-10 sm:px-10 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="inline-flex rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-forest">
              {careers.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-2xl text-brand-forest sm:text-3xl">
              {careers.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-brand-charcoal sm:text-base">
              {careers.description}
            </p>
          </div>
          <Link
            href="/careers"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-forest px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-forest-light"
          >
            {careers.cta}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
