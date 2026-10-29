import { homePageContent } from "@/config/content/home-page";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { Container } from "@/components/ui/Container";

const { estimate } = homePageContent;

export function EstimateSection() {
  return (
    <section
      id="estimate"
      className="bg-brand-forest py-16 text-white lg:py-24"
      aria-labelledby="estimate-title"
    >
      <Container className="grid items-start gap-12 lg:grid-cols-2">
        <div className="flex flex-col">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-lime/40 bg-white/5 px-4 py-2 text-xs font-medium text-brand-lime">
            <span aria-hidden>✓</span>
            {estimate.badge}
          </span>
          <h2
            id="estimate-title"
            className="mt-6 font-serif text-3xl sm:text-4xl lg:text-[2.5rem]"
          >
            {estimate.title}
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
            {estimate.description}
          </p>
          <div className="relative mx-auto mt-10 flex h-44 w-44 flex-col items-center justify-center rounded-full border-2 border-brand-lime text-center shadow-[0_0_0_8px_rgba(134,239,172,0.12)] sm:mx-0">
            <LeafIcon />
            <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-brand-lime">
              {estimate.seal.guarantee}
            </p>
            <p className="mt-1 text-sm font-bold leading-tight">
              {estimate.seal.headline}
            </p>
            <p className="mt-1 text-[10px] text-white/70">{estimate.seal.subline}</p>
          </div>
          <ul className="mt-10 space-y-3 text-sm text-white/85">
            {estimate.trust.map((item) => (
              <li key={item.label} className="flex items-center gap-2">
                {item.icon === "check" ? (
                  <span className="text-brand-lime" aria-hidden>
                    ✓
                  </span>
                ) : (
                  <ClockSmall />
                )}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <EstimateForm />
      </Container>
    </section>
  );
}

function LeafIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-brand-lime" aria-hidden>
      <path
        d="M12 21c-5-3-8-7-8-12 0 0 5 1 8-3 3 4 8 3 8 3 0 5-3 9-8 12z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 9v6M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ClockSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-brand-lime" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
