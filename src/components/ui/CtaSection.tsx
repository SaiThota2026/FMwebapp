import Link from "next/link";
import { SITE } from "@/lib/site";

type CtaSectionProps = {
  heading?: string;
  subCopy?: string;
  showFormPreview?: boolean;
};

const PREVIEW_FIELDS: {
  label: string;
  placeholder: string;
  span?: boolean;
  multiline?: boolean;
}[] = [
  { label: "Full name", placeholder: "Jane Smith" },
  { label: "Business / organisation", placeholder: "Acme Property Group" },
  { label: "Phone", placeholder: "04xx xxx xxx" },
  { label: "Email", placeholder: "you@company.com.au" },
  {
    label: "Site address",
    placeholder: "Building name, suburb, postcode",
    span: true,
  },
  {
    label: "Additional info",
    placeholder: "Services needed, frequency, access notes…",
    span: true,
    multiline: true,
  },
];

export function CtaSection({
  heading = "Get a free quote within 24 hours.",
  subCopy = "No lock-in contracts to start. No call centres. Talk directly with the owner about your facilities needs.",
  showFormPreview = false,
}: CtaSectionProps) {
  return (
    <section className="bg-brand-dark py-16 text-brand-offwhite md:py-20">
      <div className="fm-container">
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
            <p className="mb-5 text-sm text-brand-offwhite/80">
              Preview of what we ask on the{" "}
              <Link
                href="/contact/"
                className="font-semibold text-brand-gold underline-offset-2 hover:underline"
              >
                Contact page
              </Link>
              . Submit the full form there for a free walk-through and written
              scope within 24 hours.
            </p>
            <div
              className="pointer-events-none grid gap-4 sm:grid-cols-2"
              aria-hidden="true"
            >
              {PREVIEW_FIELDS.map((field) => (
                <div
                  key={field.label}
                  className={field.span ? "sm:col-span-2" : undefined}
                >
                  <p className="mb-1.5 text-xs font-medium text-brand-offwhite/70">
                    {field.label}
                  </p>
                  {field.multiline ? (
                    <div className="flex min-h-24 items-start rounded border border-brand-offwhite/25 bg-brand-offwhite/5 px-3 py-2.5 text-sm text-brand-offwhite/45">
                      {field.placeholder}
                    </div>
                  ) : (
                    <div className="flex h-10 items-center rounded border border-brand-offwhite/25 bg-brand-offwhite/5 px-3 text-sm text-brand-offwhite/45">
                      {field.placeholder}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Link
              href="/contact/"
              className="fm-touch-target mt-5 inline-flex w-full items-center justify-center rounded-md bg-brand-gold px-6 py-3 font-semibold text-brand-dark fm-hover-lift fm-tap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40 sm:w-auto"
            >
              Go to the full quote form
            </Link>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <Link
            href="/contact/"
            className="fm-touch-target inline-flex w-full items-center justify-center rounded-md bg-brand-gold px-6 py-3 font-semibold text-brand-dark fm-hover-lift fm-tap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40 sm:w-auto"
          >
            Get a Free Quote
          </Link>
          <a
            href={`tel:${SITE.phone}`}
            className="fm-touch-target inline-flex w-full items-center justify-center rounded-md border-2 border-brand-teal px-6 py-3 font-semibold text-brand-teal fm-hover-lift fm-tap hover:bg-brand-teal hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40 sm:w-auto"
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
