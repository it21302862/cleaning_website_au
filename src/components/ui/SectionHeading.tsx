import { cn } from "@/lib/utils/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  layout?: "stacked" | "split";
  className?: string;
  titleClassName?: string;
  eyebrowClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  layout = "stacked",
  className,
  titleClassName,
  eyebrowClassName,
}: SectionHeadingProps) {
  const eyebrowEl = eyebrow ? (
    <p
      className={cn(
        "text-xs font-bold uppercase tracking-[0.2em] text-brand-emerald",
        align === "center" && layout === "stacked" && "mx-auto",
        eyebrowClassName,
      )}
    >
      {eyebrow}
    </p>
  ) : null;

  if (layout === "split" && subtitle) {
    return (
      <div className={cn("grid gap-8 lg:grid-cols-2 lg:items-end", className)}>
        <div>
          {eyebrowEl}
          <h2
            className={cn(
              "font-serif text-3xl font-normal leading-tight text-brand-forest sm:text-4xl lg:text-[2.5rem]",
              eyebrow && "mt-3",
              titleClassName,
            )}
          >
            {title}
          </h2>
        </div>
        <p className="text-base leading-relaxed text-brand-slate sm:text-lg">
          {subtitle}
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrowEl}
      <h2
        className={cn(
          "font-serif text-3xl font-normal leading-tight text-brand-forest sm:text-4xl lg:text-[2.5rem]",
          eyebrow && "mt-3",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-brand-slate sm:text-lg",
            align === "center" &&
              "mx-auto max-w-2xl border-b border-brand-seafoam/40 pb-1 text-brand-charcoal/90",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
