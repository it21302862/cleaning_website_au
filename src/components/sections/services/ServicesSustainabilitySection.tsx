import { servicesPageContent } from "@/config/content/services-page";
import { Container } from "@/components/ui/Container";

const { sustainability } = servicesPageContent;

export function ServicesSustainabilitySection() {
  return (
    <section className="bg-brand-forest py-16 text-white lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-lime/30 bg-white/5 px-3 py-1 text-xs font-medium text-brand-lime">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-lime" aria-hidden />
            {sustainability.badge}
          </span>
          <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">
            {sustainability.title}
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-white/85 sm:text-base">
            {sustainability.description}
          </p>
        </div>
        <ul className="space-y-4">
          {sustainability.cards.map((card) => (
            <li
              key={card.title}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5"
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-brand-emerald"
                aria-hidden
              >
                <CardIcon type={card.icon} />
              </span>
              <h3 className="font-semibold text-white">{card.title}</h3>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function CardIcon({
  type,
}: {
  type: (typeof sustainability.cards)[number]["icon"];
}) {
  switch (type) {
    case "shield":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "recycle":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M7 7l4-4 4 4M17 17l-4 4-4-4M7 17h10M17 7H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "star":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 3l2.5 6.5L21 10l-5 4.5L17.5 21 12 17.5 6.5 21 8 14.5 3 10l6.5-.5L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
  }
}
