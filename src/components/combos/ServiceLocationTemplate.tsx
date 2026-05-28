import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ContentSection } from "@/components/ui/ContentSection";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ENGAGEMENT_STEPS } from "@/data/engagement-steps";
import type { ComboPageData } from "@/data/combos/types";
import { getComboVisual } from "@/lib/page-visuals";

export function ServiceLocationTemplate({ data }: { data: ComboPageData }) {
  const comboKey = `${data.locationSlug}-${data.serviceSlug}`;
  const visual = getComboVisual(comboKey);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Locations", path: "/locations/" },
          { name: data.locationName, path: data.parentLocationHref },
          { name: data.serviceName, path: data.path },
        ]}
        h1={data.h1}
        lead={data.lead}
        visual={visual}
      />

      <div className="fm-container py-12 md:py-16">
        <RevealOnScroll>
          <ProcessSteps
            heading="What happens after you enquire?"
            steps={[...ENGAGEMENT_STEPS]}
            footer={
              <>
                Request a local quote for {data.locationName} on the{" "}
                <Link href="/contact/" className="font-semibold text-brand-teal hover:text-brand-gold">
                  contact page
                </Link>
                .
              </>
            }
          />
        </RevealOnScroll>

        <RevealOnScroll delayMs={60}>
          <section className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-brand-dark">
                {data.serviceName} in {data.locationName}
              </h2>
              <div className="mt-6 space-y-4">
                {data.localServiceBody.map((para) => (
                  <p key={para} className="text-brand-dark/90">
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <ImagePlaceholder
              label={visual.heroLabel}
              aspect="video"
              className="rounded-xl shadow-sm"
            />
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={80}>
          <section className="mt-16 overflow-hidden rounded-xl border border-brand-teal/15 bg-brand-cream p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display text-3xl font-bold text-brand-dark">
                What&apos;s Included
              </h2>
              <ImagePlaceholder
                label={visual.regionLabel}
                aspect="wide"
                className="max-w-md shrink-0 md:w-64"
              />
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {data.inclusions.map((item) => (
                <li
                  key={item}
                  className="fm-hover-lift flex items-start gap-2 rounded-lg bg-white px-3 py-2 text-sm text-brand-dark/90 shadow-sm"
                >
                  <span className="text-brand-gold" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={100}>
          <ContentSection
            heading={`Why Local Matters for ${data.serviceName}`}
            body={data.whyLocalBody}
            imageLabel={visual.sectionLabels[0]}
            imagePosition="left"
          />
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <section className="mt-16 grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden rounded-xl border border-brand-teal/15 bg-white shadow-sm fm-hover-lift fm-tap">
              <div className="border-b border-brand-teal/10 bg-brand-cream/80 px-5 py-3">
                <h3 className="font-display text-lg font-semibold text-brand-dark">
                  About Our {data.serviceName} Service
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-brand-dark/85">
                  Learn about our full {data.serviceName.toLowerCase()} programme — scope,
                  inclusions, frequencies and pricing.
                </p>
                <Link
                  href={data.parentServiceHref}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-teal hover:text-brand-gold"
                >
                  View {data.serviceName} service
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
            <article className="overflow-hidden rounded-xl border border-brand-teal/15 bg-white shadow-sm fm-hover-lift fm-tap">
              <div className="border-b border-brand-teal/10 bg-brand-cream/80 px-5 py-3">
                <h3 className="font-display text-lg font-semibold text-brand-dark">
                  All Services in {data.locationName}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-brand-dark/85">
                  See the full range of cleaning and facilities services we deliver in{" "}
                  {data.locationName} and surrounding areas.
                </p>
                <Link
                  href={data.parentLocationHref}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-teal hover:text-brand-gold"
                >
                  View {data.locationName} services
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={140}>
          <section className="mt-16">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Frequently Asked Questions
            </h2>
            <div className="mt-6">
              <FaqAccordion faqs={data.faqs} />
            </div>
          </section>
        </RevealOnScroll>
      </div>

      <CtaSection heading={data.ctaHeading} subCopy={data.ctaSubCopy} />
    </>
  );
}
