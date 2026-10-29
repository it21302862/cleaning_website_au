import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center"
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/logo.png"
        alt={siteConfig.name}
        width={140}
        height={140}
        className={
          compact
            ? "h-10 w-auto"
            : "h-12 w-auto sm:h-14"
        }
        priority
      />
    </Link>
  );
}
