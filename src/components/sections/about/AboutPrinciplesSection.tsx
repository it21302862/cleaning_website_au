import { aboutPageContent } from "@/config/content/about-page";
import { Container } from "@/components/ui/Container";

const { principles } = aboutPageContent;

export function AboutPrinciplesSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-emerald">
          {principles.eyebrow}
        </p>
        <h2 className="mt-4 text-center font-serif text-3xl text-brand-forest sm:text-4xl">
          {principles.title}
        </h2>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {principles.items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl bg-brand-surface p-8 ring-1 ring-brand-gray/15"
            >
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-mint/70 text-brand-emerald"
                aria-hidden
              >
                <PrincipleIcon type={item.icon} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand-forest">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function PrincipleIcon({
  type,
}: {
  type: (typeof principles.items)[number]["icon"];
}) {
  switch (type) {
    case "heart":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 20s-6-4.5-6-10a4 4 0 017-2 5 4 4 0 017 2c0 5.5-6 10-6 10z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M12 11v4M10 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "globe":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 12h16M12 4c2 3 2 13 0 16M12 4c-2 3-2 13 0 16" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "document":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M8 4h8v16H8V4z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 8h6M10 12h6M10 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
}
