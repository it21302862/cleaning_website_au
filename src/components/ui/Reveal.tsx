"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";

export type RevealVariant = "up" | "left" | "right" | "center";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in ms when the element enters view */
  delay?: number;
  /** Entrance direction — keep offsets subtle for a professional feel */
  variant?: RevealVariant;
};

const hidden: Record<RevealVariant, string> = {
  up: "translate-y-6 opacity-0",
  left: "-translate-x-6 opacity-0",
  right: "translate-x-6 opacity-0",
  center: "scale-[0.98] opacity-0",
};

const shown: Record<RevealVariant, string> = {
  up: "translate-y-0 opacity-100",
  left: "translate-x-0 opacity-100",
  right: "translate-x-0 opacity-100",
  center: "scale-100 opacity-100",
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -4% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible || undefined}
      data-motion={variant}
      className={cn(
        "motion-reveal transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform]",
        visible ? shown[variant] : hidden[variant],
        className,
      )}
      style={delay > 0 ? { transitionDelay: visible ? `${delay}ms` : "0ms" } : undefined}
    >
      {children}
    </div>
  );
}
