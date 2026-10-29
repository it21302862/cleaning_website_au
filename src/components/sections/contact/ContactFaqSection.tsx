"use client";

import { useState } from "react";
import { contactPageContent } from "@/config/content/contact-page";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

const { faq } = contactPageContent;

export function ContactFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="faq-title">
      <Container className="max-w-4xl">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-emerald">
          {faq.eyebrow}
        </p>
        <h2
          id="faq-title"
          className="mt-4 text-center font-serif text-3xl text-brand-forest sm:text-4xl"
        >
          {faq.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-brand-charcoal sm:text-base">
          {faq.subtitle}
        </p>
        <ul className="mt-10 space-y-3">
          {faq.items.map((item, index) => {
            const open = openIndex === index;
            return (
              <li
                key={item.question}
                className="overflow-hidden rounded-2xl border border-brand-gray/20 bg-white"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-brand-forest sm:text-base"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  {item.question}
                  <Chevron open={open} />
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-200",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-brand-gray/10 px-5 pb-4 pt-3 text-sm leading-relaxed text-brand-charcoal">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(
        "shrink-0 text-brand-emerald transition-transform",
        open && "rotate-180",
      )}
      aria-hidden
    >
      <path
        d="M5 8l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
