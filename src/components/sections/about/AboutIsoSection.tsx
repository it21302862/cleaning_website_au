import Image from "next/image";
import { aboutPageContent } from "@/config/content/about-page";
import { Container } from "@/components/ui/Container";

const { iso } = aboutPageContent;

export function AboutIsoSection() {
  return (
    <section
      id="green-guarantee"
      className="bg-brand-forest py-16 text-white lg:py-24"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-lime">
            {iso.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
            {iso.title}
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-white/85 sm:text-base">
            {iso.description}
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {iso.badges.map((badge) => (
              <li
                key={badge}
                className="rounded-full bg-black/40 px-4 py-2 text-xs font-medium text-white"
              >
                {badge}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src={iso.image}
            alt="Modern eco-friendly Melbourne workplace"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </Container>
    </section>
  );
}
