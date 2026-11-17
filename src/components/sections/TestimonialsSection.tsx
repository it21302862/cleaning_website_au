"use client";

import { useMemo, useState } from "react";
import { homePageContent } from "@/config/content/home-page";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils/cn";

const { testimonials } = homePageContent;

const PAIRS_PER_PAGE = 2;
const DOT_COUNT = 3;

type Testimonial = (typeof testimonials.items)[number];

function chunkPairs(items: readonly Testimonial[]) {
  const slides: Testimonial[][] = [];
  for (let i = 0; i < items.length; i += PAIRS_PER_PAGE) {
    slides.push([...items.slice(i, i + PAIRS_PER_PAGE)]);
  }
  return slides;
}

export function TestimonialsSection() {
  const slides = useMemo(() => chunkPairs(testimonials.items), []);
  const [activeSlide, setActiveSlide] = useState(0);

  const activeDot = Math.min(activeSlide, DOT_COUNT - 1);

  function goToDot(dot: number) {
    setActiveSlide(dot);
  }

  function goNext() {
    setActiveSlide((s) => (s + 1) % slides.length);
  }

  function goPrev() {
    setActiveSlide((s) => (s - 1 + slides.length) % slides.length);
  }

  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="testimonials-title">
      <Container>
        <Reveal variant="center" className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-emerald underline decoration-brand-emerald/40 underline-offset-4">
            {testimonials.eyebrow}
          </p>
          <h2
            id="testimonials-title"
            className="mt-4 font-serif text-3xl leading-tight text-brand-forest sm:text-4xl lg:text-[2.5rem]"
          >
            {testimonials.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-slate">
            {testimonials.description}
          </p>
        </Reveal>

        <Reveal variant="up" className="relative mt-12" delay={100}>
          <div
            key={activeSlide}
            className="motion-fade-in grid gap-6 lg:grid-cols-2"
            aria-live="polite"
          >
            {slides[activeSlide]?.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-gray/25 text-brand-forest transition-[color,background-color,transform,border-color] duration-300 hover:border-brand-emerald hover:bg-brand-mint/30 hover:text-brand-emerald active:scale-95"
              aria-label="Previous testimonials"
            >
              <ChevronLeft />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonial pages">
              {Array.from({ length: DOT_COUNT }).map((_, dot) => (
                <button
                  key={dot}
                  type="button"
                  role="tab"
                  aria-selected={activeDot === dot}
                  aria-label={`Show testimonial page ${dot + 1}`}
                  onClick={() => goToDot(dot)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-colors",
                    activeDot === dot
                      ? "scale-125 bg-brand-emerald"
                      : "bg-brand-gray/30 hover:bg-brand-gray/50",
                    "transition-all duration-300",
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-gray/25 text-brand-forest transition-[color,background-color,transform,border-color] duration-300 hover:border-brand-emerald hover:bg-brand-mint/30 hover:text-brand-emerald active:scale-95"
              aria-label="Next testimonials"
            >
              <ChevronRight />
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="motion-lift rounded-3xl border border-brand-gray/15 bg-white p-8 shadow-sm hover:shadow-md">
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
          <cite className="not-italic font-bold text-brand-forest">{item.name}</cite>
          <p className="text-sm text-brand-slate">{item.role}</p>
        </div>
      </footer>
    </article>
  );
}

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M12 5l-5 5 5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M8 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
