import { homePageContent } from "@/config/content/home-page";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const { features } = homePageContent;

export function FeaturesSection() {
  return (
    <section id="how-we-work" className="bg-white py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={features.eyebrow}
          title={features.title}
          subtitle={features.subtitle}
          align="left"
          layout="split"
          className="max-w-none"
        />
        <ul className="mt-12 grid gap-5 lg:grid-cols-2">
          {features.items.map((feature, index) => (
            <li
              key={feature.title}
              className={
                index === 2 ? "lg:col-start-2" : undefined
              }
            >
              <article className="flex h-full flex-col rounded-3xl bg-brand-mint/45 p-8 text-brand-forest ring-1 ring-brand-emerald/10">
                <div className="flex items-start justify-between gap-4">
                  <FeatureIcon type={feature.icon} />
                  <span className="shrink-0 rounded-full bg-brand-emerald px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl">{feature.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-slate">
                  {feature.description}
                </p>
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-brand-emerald/15 pt-4 text-xs font-medium text-brand-slate">
                  <span>{feature.footer}</span>
                  <FooterIcon type={feature.footerIcon} />
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function FeatureIcon({
  type,
}: {
  type: (typeof features.items)[number]["icon"];
}) {
  const className = "text-brand-forest";
  switch (type) {
    case "badge":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 17h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "piggy":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path d="M6 12a6 6 0 0112 0c0 2-1 3-2 4h-1v2h-4v-2H9c-1-1-2-2-2-4z" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="15" cy="11" r="1" fill="currentColor" />
        </svg>
      );
    case "gauge":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path d="M12 14l3-5M12 4a8 8 0 108 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
  }
}

function FooterIcon({
  type,
}: {
  type: (typeof features.items)[number]["footerIcon"];
}) {
  switch (type) {
    case "check":
      return (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-emerald/15 text-brand-emerald">
          ✓
        </span>
      );
    case "trend":
      return <span className="text-lg text-brand-emerald" aria-hidden>↘</span>;
    case "bolt":
      return <span className="text-lg text-brand-emerald" aria-hidden>⚡</span>;
  }
}
