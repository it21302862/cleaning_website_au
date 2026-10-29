import { aboutPageContent } from "@/config/content/about-page";
import { Container } from "@/components/ui/Container";

export function AboutStatsRibbon() {
  return (
    <section
      id="achievements"
      className="bg-gradient-to-r from-brand-forest via-[#013d28] to-brand-forest py-12 text-white lg:py-14"
      aria-label="Company achievements"
    >
      <Container>
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {aboutPageContent.stats.map((stat) => (
            <li key={stat.value}>
              <p className="text-xl font-bold tracking-wide text-white sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-brand-lime">
                ({stat.label})
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {stat.detail}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
