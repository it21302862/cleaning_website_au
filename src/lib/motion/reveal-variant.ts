import type { RevealVariant } from "@/components/ui/Reveal";

/** Cycle left → center → right for grid tiles */
export function revealVariantAt(index: number): RevealVariant {
  return (["left", "center", "right"] as const)[index % 3];
}