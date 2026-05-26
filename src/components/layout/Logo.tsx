import Link from "next/link";
import { SITE } from "@/lib/site";

type LogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

const LOGO_ALT =
  "FACILITIES MAN — facilities management and cleaning services Newcastle";

export function Logo({ variant = "header", className = "" }: LogoProps) {
  const isHeader = variant === "header";

  return (
    <Link
      href="/"
      className={`flex shrink-0 items-center ${className} ${
        isHeader
          ? "rounded-md bg-brand-offwhite/5 p-1"
          : ""
      }`}
      aria-label={`${SITE.name} — home`}
    >
      {/* Native img: static brand asset; Next/Image optimizer caused endless spinner in Chrome. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SITE.logoPath}
        alt={LOGO_ALT}
        width={1024}
        height={640}
        decoding={isHeader ? "sync" : "async"}
        fetchPriority={isHeader ? "high" : "auto"}
        className={`block w-auto max-w-[min(100%,12rem)] object-contain object-left drop-shadow-[0_6px_16px_rgba(0,0,0,0.35)] sm:max-w-none ${
          isHeader ? "h-12 sm:h-16 md:h-24" : "h-14 sm:h-16 md:h-20"
        }`}
      />
    </Link>
  );
}
