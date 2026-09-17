import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { FeaturePanel } from "@/components/ui/FeaturePanel";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  SectionHeading,
  SectionPanel,
} from "@/components/ui/SectionPanel";
import { ENGAGEMENT_STEPS } from "@/data/engagement-steps";
import type { ComboPageData } from "@/data/combos/types";
import { contentImg } from "@/lib/content-images";
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
        imageSrc={contentImg(`combos-${comboKey}-hero`)}
      />

      <div className="fm-container py-12 md:py-16">
        <div className="fm-section-stack">
          <RevealOnScroll>
            <ProcessSteps
              heading="What happens after you enquire?"
              steps={[...ENGAGEMENT_STEPS]}
              footer={
                <>
                  Request a local quote for {data.locationName} on the{" "}
                  <Link
                    href="/contact/"
                    className="font-semibold text-brand-teal hover:text-brand-gold"
                  >
                    contact page
                  </Link>
                  .
                </>
              }
            />
          </RevealOnScroll>

          <RevealOnScroll>
            <FeaturePanel
              heading={`${data.serviceName} in ${data.locationName}`}
              body={data.localServiceBody}
              imageLabel={visual.heroLabel}
              imageSrc={contentImg(`combos-${comboKey}-body`)}
            />
          </RevealOnScroll>

          <RevealOnScroll>
            <SectionPanel tone="cream">
              <div className="grid min-w-0 grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-10">
                <div className="min-w-0">
                  <SectionHeading>What&apos;s Included</SectionHeading>
                  <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
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
                </div>
                <div className="min-w-0">
                  <ImagePlaceholder
                    label={visual.regionLabel}
                    src={contentImg(`combos-${comboKey}-region`)}
                    aspect="photo"
                    className="rounded-xl shadow-sm"
                  />
                </div>
              </div>
            </SectionPanel>
          </RevealOnScroll>

          <RevealOnScroll>
            <FeaturePanel
              heading={`Why Local Matters for ${data.serviceName}`}
              body={data.whyLocalBody}
              imageLabel={visual.sectionLabels[0]}
              imageSrc={contentImg(`combos-${comboKey}-section-1`)}
            />
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="fm-panel overflow-hidden border-brand-teal/15 bg-white shadow-sm fm-hover-lift fm-tap">
                <div className="border-b border-brand-teal/10 bg-brand-cream/80 px-5 py-3">
                  <h3 className="font-display text-lg font-semibold text-brand-dark">
                    About Our {data.serviceName} Service
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-sm text-brand-dark/85">
                    Learn about our full {data.serviceName.toLowerCase()}{" "}
                    programme — scope, inclusions, frequencies and pricing.
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
              <article className="fm-panel overflow-hidden border-brand-teal/15 bg-white shadow-sm fm-hover-lift fm-tap">
                <div className="border-b border-brand-teal/10 bg-brand-cream/80 px-5 py-3">
                  <h3 className="font-display text-lg font-semibold text-brand-dark">
                    All Services in {data.locationName}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-sm text-brand-dark/85">
                    See the full range of cleaning and facilities services we
                    deliver in {data.locationName} and surrounding areas.
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
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <SectionPanel>
              <SectionHeading>Frequently Asked Questions</SectionHeading>
              <div className="mt-6 w-full">
                <FaqAccordion faqs={data.faqs} />
              </div>
            </SectionPanel>
          </RevealOnScroll>
        </div>
      </div>

      <CtaSection heading={data.ctaHeading} subCopy={data.ctaSubCopy} />
    </>
  );
}
