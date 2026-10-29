import { homePageContent } from "@/config/content/home-page";
import { Container } from "@/components/ui/Container";

const { testimonials } = homePageContent;

export function TestimonialsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-emerald underline decoration-brand-emerald/40 underline-offset-4">
            {testimonials.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-brand-forest sm:text-4xl lg:text-[2.5rem]">
            {testimonials.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-slate">
            {testimonials.description}
          </p>
        </div>
        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.items.map((item) => (
            <li
              key={item.name}
              className="rounded-3xl border border-brand-gray/15 bg-white p-8 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex gap-0.5 text-brand-seafoam" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} aria-hidden>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-xs text-brand-gray">{item.tenure}</span>
              </div>
              <blockquote className="mt-4 font-serif text-lg italic leading-relaxed text-brand-forest">
                <p>&ldquo;{item.quote}&rdquo;</p>
              </blockquote>
              <footer className="mt-6 flex items-center gap-3 border-t border-brand-gray/10 pt-5">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-mint/80 text-sm font-bold text-brand-emerald"
                  aria-hidden
                >
                  {item.initials}
                </span>
                <div>
                  <cite className="not-italic font-bold text-brand-forest">
                    {item.name}
                  </cite>
                  <p className="text-sm text-brand-slate">{item.role}</p>
                </div>
              </footer>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center gap-2" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-brand-gray/30" />
          <span className="h-2 w-2 rounded-full bg-brand-emerald" />
          <span className="h-2 w-2 rounded-full bg-brand-gray/30" />
        </div>
      </Container>
    </section>
  );
}
