import Image from "next/image";
import { homePageContent } from "@/config/content/home-page";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const { hero } = homePageContent;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-forest via-[#013d28] to-[#002217] text-white">
      <div
        className="pointer-events-none absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-brand-lime/10 blur-3xl"
        aria-hidden
      />
      <Container className="relative grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">
        <div>
          <div className="flex flex-wrap gap-2">
            {hero.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/90"
              >
                <span className="text-brand-lime" aria-hidden>
                  •
                </span>
                {badge}
              </span>
            ))}
          </div>
          <h1 className="mt-6 font-serif text-4xl leading-[1.15] sm:text-5xl lg:text-[3.25rem]">
            {hero.title}{" "}
            <span className="text-brand-lime">{hero.titleHighlight}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/contact#estimate">
              {hero.primaryCta}
              <span aria-hidden>→</span>
            </Button>
            <Button href="/services" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black/25 ring-1 ring-white/10"
              aria-hidden
            >
              <PhoneIcon />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                {hero.dispatchLabel}
              </p>
              <a
                href={siteConfig.phones.landlineHref}
                className="text-lg font-semibold text-white hover:text-brand-lime sm:text-xl"
              >
                {siteConfig.phones.display}
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-xs lg:max-w-sm">
          <div
            className="absolute inset-0 scale-[1.08] rounded-full bg-sky-200/25"
            aria-hidden
          />
          <div className="relative aspect-square w-full overflow-hidden rounded-full ring-1 ring-white/15 shadow-2xl">
            <Image
              src={hero.illustration}
              alt="Professional commercial cleaning team"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 72vw, 384px"
              priority
            />
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 bg-black/15">
        <Container className="grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {hero.trustBar.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-3 text-sm font-medium leading-snug text-white/90"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-lime/15 text-brand-lime"
                aria-hidden
              >
                <TrustIcon type={item.icon} />
              </span>
              {item.label}
            </div>
          ))}
        </Container>
      </div>
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

function TrustIcon({ type }: { type: (typeof hero.trustBar)[number]["icon"] }) {
  switch (type) {
    case "calendar":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 9h16M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "shield":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "trophy":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M8 4h8v5a4 4 0 01-8 0V4zM6 4H4v2a2 2 0 002 2M18 4h2v2a2 2 0 01-2 2M12 13v3M9 20h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "bottle":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M10 3h4v3l2 4v10a2 2 0 01-2 2h-4a2 2 0 01-2-2V10l2-4V3z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
}
