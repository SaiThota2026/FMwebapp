import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

type LinkCardProps = {
  href: string;
  title: string;
  description: string;
  linkLabel: string;
  imageLabel?: string;
  badge?: string;
  className?: string;
};

/** Hub / grid card — matches homepage service & location card styling. */
export function LinkCard({
  href,
  title,
  description,
  linkLabel,
  imageLabel,
  badge,
  className = "",
}: LinkCardProps) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-xl border border-brand-teal/15 bg-white shadow-sm fm-hover-lift fm-tap ${className}`}
    >
      {imageLabel && (
        <ImagePlaceholder
          label={imageLabel}
          aspect="video"
          className="rounded-b-none border-0"
        />
      )}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        {badge && (
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
            {badge}
          </p>
        )}
        <h3
          className={`font-display text-lg font-semibold text-brand-teal ${badge ? "mt-1" : ""}`}
        >
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-dark/85">
          {description}
        </p>
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:text-brand-teal"
        >
          {linkLabel}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
