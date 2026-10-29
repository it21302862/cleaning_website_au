import Image from "next/image";
import { homePageContent } from "@/config/content/home-page";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

const { urgentCta } = homePageContent;

export function UrgentCtaSection() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="grid items-center gap-8 rounded-[2rem] bg-brand-lime/75 px-6 py-8 sm:px-10 lg:grid-cols-[1fr_auto] lg:py-10">
          <div className="rounded-3xl bg-white/90 p-8 shadow-sm lg:max-w-md">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-emerald">
              {urgentCta.eyebrow}
            </p>
            <h2 className="mt-2 font-serif text-2xl text-brand-forest sm:text-3xl">
              {urgentCta.title}
            </h2>
            <p className="mt-1 text-sm font-medium text-brand-charcoal/70">
              {urgentCta.sublabel}
            </p>
            <a
              href={siteConfig.phones.mobileHref}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-forest px-8 py-4 text-lg font-bold text-white shadow-md transition-colors hover:bg-brand-forest-light sm:w-auto"
            >
              <PhoneIcon />
              {siteConfig.phones.mobile}
            </a>
          </div>
          <div className="relative mx-auto flex h-48 w-48 items-center justify-center lg:mx-0 lg:h-56 lg:w-56">
            <div
              className="absolute inset-0 rounded-full bg-white/80 shadow-inner"
              aria-hidden
            />
            <div className="relative h-[85%] w-[85%]">
              <Image
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=400&q=80"
                alt=""
                fill
                className="rounded-full object-cover"
                sizes="224px"
              />
            </div>
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
