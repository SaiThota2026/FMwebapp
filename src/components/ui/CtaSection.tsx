import Link from "next/link";
import { SITE } from "@/lib/site";

type CtaSectionProps = {
  heading?: string;
  subCopy?: string;
  showFormPreview?: boolean;
};

export function CtaSection({
  heading = "Get a free quote within 24 hours.",
  subCopy = "No lock-in contracts to start. No call centres. Talk directly with the owner about your facilities needs.",
  showFormPreview = false,
}: CtaSectionProps) {
  return (
    <section className="bg-brand-dark py-16 text-brand-offwhite md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-offwhite/90">
          {subCopy}
        </p>
        <p className="mt-2 text-sm text-brand-gold">
          24-hour response guaranteed · ABN {SITE.abn} · Fully insured
        </p>

        {showFormPreview && (
          <div
            className="mt-8 rounded-lg border border-brand-teal/30 bg-brand-dark/80 p-6"
            aria-label="Quote form preview — submit on Contact page"
          >
            <p className="mb-4 text-sm text-brand-offwhite/80">
              [PLACEHOLDER — full quote form submits on Contact page]
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="h-10 rounded border border-brand-offwhite/20 bg-brand-offwhite/5" />
              <div className="h-10 rounded border border-brand-offwhite/20 bg-brand-offwhite/5" />
              <div className="h-10 rounded border border-brand-offwhite/20 bg-brand-offwhite/5" />
              <div className="h-10 rounded border border-brand-offwhite/20 bg-brand-offwhite/5" />
              <div className="h-10 rounded border border-brand-offwhite/20 bg-brand-offwhite/5 sm:col-span-2" />
              <div className="h-24 rounded border border-brand-offwhite/20 bg-brand-offwhite/5 sm:col-span-2" />
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center rounded-md bg-brand-gold px-6 py-3 font-semibold text-brand-dark fm-hover-lift fm-tap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40"
          >
            Get a Free Quote
          </Link>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center justify-center rounded-md border-2 border-brand-teal px-6 py-3 font-semibold text-brand-teal fm-hover-lift fm-tap hover:bg-brand-teal hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40"
          >
            Call {SITE.phoneDisplay}
          </a>
        </div>
        <p className="mt-4 text-sm text-brand-offwhite/80">
          We respond within 24 hours — guaranteed.
        </p>
      </div>
    </section>
  );
}
