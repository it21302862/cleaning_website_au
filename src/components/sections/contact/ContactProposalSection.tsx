import { contactPageContent } from "@/config/content/contact-page";
import { siteConfig } from "@/config/site";
import { ProposalForm } from "@/components/forms/ProposalForm";
import { Container } from "@/components/ui/Container";

const { proposal, directAssist, coordinates } = contactPageContent;

export function ContactProposalSection() {
  return (
    <section
      id="estimate"
      className="bg-white py-14 lg:py-20"
      aria-labelledby="proposal-title"
    >
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        <div className="rounded-3xl border border-brand-gray/20 bg-white p-6 shadow-sm sm:p-8">
          <h2
            id="proposal-title"
            className="font-serif text-2xl font-normal text-brand-forest sm:text-3xl"
          >
            {proposal.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-charcoal sm:text-base">
            {proposal.description}
          </p>
          <div className="mt-8">
            <ProposalForm />
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-brand-mint/45 p-6 ring-1 ring-brand-emerald/10 sm:p-8">
            <span className="inline-flex rounded-full bg-brand-emerald px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              {directAssist.tag}
            </span>
            <h2 className="mt-4 text-lg font-bold text-brand-forest">
              {directAssist.title}
            </h2>
            <a
              href={siteConfig.phones.mobileHref}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-lime px-5 py-3.5 text-sm font-bold text-brand-forest shadow-sm transition-colors hover:bg-brand-lime/90"
            >
              <PhoneIcon />
              {directAssist.callLabel}
            </a>
          </div>

          <div className="rounded-3xl border border-brand-gray/15 bg-white p-6 sm:p-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-emerald">
              {coordinates.heading}
            </h2>
            <ul className="mt-6 space-y-6 text-sm text-brand-charcoal">
              <CoordinateBlock
                icon="location"
                title={coordinates.headquarters.title}
                lines={coordinates.headquarters.lines}
              />
              <CoordinateBlock
                icon="mail"
                title={coordinates.inquiries.title}
                lines={[siteConfig.email]}
                href={`mailto:${siteConfig.email}`}
              />
              <CoordinateBlock
                icon="clock"
                title={coordinates.operating.title}
                lines={coordinates.operating.lines}
              />
            </ul>
          </div>
        </aside>
      </Container>
    </section>
  );
}

function CoordinateBlock({
  icon,
  title,
  lines,
  href,
}: {
  icon: "location" | "mail" | "clock";
  title: string;
  lines: readonly string[] | string[];
  href?: string;
}) {
  return (
    <li>
      <div className="flex gap-4">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-mint/60 text-brand-emerald"
          aria-hidden
        >
          <CoordIcon type={icon} />
        </span>
        <div>
          <p className="font-bold text-brand-forest">{title}</p>
          {lines.map((line) =>
            href ? (
              <a
                key={line}
                href={href}
                className="mt-1 block hover:text-brand-emerald"
              >
                {line}
              </a>
            ) : (
              <p key={line} className="mt-1">
                {line}
              </p>
            ),
          )}
        </div>
      </div>
    </li>
  );
}

function CoordIcon({ type }: { type: "location" | "mail" | "clock" }) {
  const props = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" as const };
  switch (type) {
    case "location":
      return (
        <svg {...props}>
          <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <path d="M4 6h16v12H4V6zm0 0l8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 4h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3a2 2 0 01-2 2A16 16 0 015 6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
