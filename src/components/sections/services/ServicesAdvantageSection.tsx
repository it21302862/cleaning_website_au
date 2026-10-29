import { servicesPageContent } from "@/config/content/services-page";
import { Container } from "@/components/ui/Container";

const { advantage } = servicesPageContent;

export function ServicesAdvantageSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-emerald">
          {advantage.eyebrow}
        </p>
        <h2 className="mt-4 text-center font-serif text-3xl text-brand-forest sm:text-4xl">
          {advantage.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-brand-charcoal sm:text-base">
          {advantage.intro}
        </p>
        <div className="mt-10 overflow-x-auto rounded-3xl border border-brand-gray/15 bg-white shadow-sm">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-brand-gray/15">
                <th className="px-5 py-4 font-bold text-brand-forest sm:px-6">
                  {advantage.columns[0]}
                </th>
                <th className="px-5 py-4 font-semibold text-brand-charcoal sm:px-6">
                  {advantage.columns[1]}
                </th>
                <th className="bg-brand-mint/40 px-5 py-4 font-semibold text-brand-forest sm:px-6">
                  <span className="inline-flex items-center gap-2">
                    <span className="text-brand-emerald" aria-hidden>
                      ✓
                    </span>
                    {advantage.columns[2]}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {advantage.rows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-brand-gray/10 last:border-0"
                >
                  <td className="px-5 py-5 font-medium text-brand-forest sm:px-6">
                    <span className="flex items-center gap-3">
                      <RowIcon type={row.icon} />
                      {row.feature}
                    </span>
                  </td>
                  <td className="px-5 py-5 text-brand-charcoal sm:px-6">
                    <span className="flex gap-2">
                      <span className="text-red-500" aria-hidden>
                        ✕
                      </span>
                      {row.conventional}
                    </span>
                  </td>
                  <td className="bg-brand-mint/20 px-5 py-5 sm:px-6">
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-mint/60 px-3 py-2 font-medium text-brand-forest">
                      <span className="text-brand-emerald" aria-hidden>
                        ✓
                      </span>
                      {row.greenPlanet}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

function RowIcon({
  type,
}: {
  type: (typeof advantage.rows)[number]["icon"];
}) {
  const className = "shrink-0 text-brand-emerald";
  switch (type) {
    case "flask":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path d="M10 3h4v4l3 8H7l3-8V3z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "person":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 20c0-3 2.5-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "clock":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "document":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path d="M8 4h8v16H8V4z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 8h6M10 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
}
