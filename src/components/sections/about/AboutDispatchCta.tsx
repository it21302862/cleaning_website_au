import { aboutPageContent } from "@/config/content/about-page";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

const { cta } = aboutPageContent;

export function AboutDispatchCta() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="grid items-center gap-8 rounded-[2rem] bg-brand-lime/75 px-6 py-10 sm:px-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-emerald">
              {cta.eyebrow}
            </p>
            <h2 className="mt-2 font-serif text-2xl text-brand-forest sm:text-3xl">
              {cta.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm text-brand-charcoal sm:text-base">
              {cta.description}
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-end">
            <a
              href={siteConfig.phones.mobileHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-forest px-8 py-4 text-lg font-bold text-white shadow-md transition-colors hover:bg-brand-forest-light"
            >
              <PhoneIcon />
              {siteConfig.phones.mobile}
            </a>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-emerald">
              {cta.phoneLabel}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 4h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3a2 2 0 01-2 2A16 16 0 015 6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
