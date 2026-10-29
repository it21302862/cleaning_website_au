import Link from "next/link";
import { cn } from "@/lib/utils/cn";

const variants = {
  primary:
    "bg-brand-lime text-brand-forest hover:bg-brand-lime/90 shadow-sm",
  secondary:
    "border-2 border-white/80 bg-transparent text-white hover:bg-white/10",
  dark: "bg-brand-forest text-white hover:bg-brand-forest-light",
  outline:
    "border-2 border-brand-forest text-brand-forest hover:bg-brand-mint/40",
} as const;

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: keyof typeof variants;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime";

  if (href) {
    return (
      <Link
        href={href}
        className={cn(base, variants[variant], className)}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </button>
  );
}
