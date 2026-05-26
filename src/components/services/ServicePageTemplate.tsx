import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { ContentSection } from "@/components/ui/ContentSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { ServicePageData } from "@/data/services/types";
import {
  getServiceSectionLabel,
  getServiceVisual,
} from "@/lib/page-visuals";

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const visual = getServiceVisual(data.slug);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Services", path: "/services/" },
          { name: data.name, path: data.path },
        ]}
        h1={data.h1}
        lead={data.lead}
        visual={visual}
      />

      <div className="fm-container py-12 md:py-16">
        <RevealOnScroll>
          <ProcessSteps
            heading="What happens after you enquire?"
            steps={[
              {
                title: "We confirm scope",
                description:
                  "We understand your site, access and frequency needs, then confirm what will be delivered.",
              },
              {
                title: "You receive a written plan",
                description:
                  "You get a documented scope and quote within 48 hours, in plain English.",
              },
              {
                title: "Delivery starts",
                description:
                  "We mobilise fast, report monthly, and escalate issues with direct owner accountability.",
              },
            ]}
            footer={
              <>
                Want the quickest path? Use the{" "}
                <Link
                  href="/contact/"
                  className="font-semibold text-brand-teal hover:text-brand-gold"
                >
                  quote form
                </Link>{" "}
                and include your site address and preferred frequency.
              </>
            }
          />
        </RevealOnScroll>

        {data.sections.map((section, index) => (
          <RevealOnScroll key={section.heading} delayMs={index * 60}>
            <ContentSection
              heading={section.heading}
              body={section.body}
              imageLabel={getServiceSectionLabel(data.slug, index)}
              imagePosition={index % 2 === 0 ? "right" : "left"}
            />
          </RevealOnScroll>
        ))}

        <RevealOnScroll delayMs={80}>
          <section className="mt-12 overflow-hidden rounded-xl border border-brand-teal/15 bg-brand-cream sm:mt-16">
            <div className="grid min-w-0 lg:grid-cols-2">
              <div className="p-6 md:p-8">
                <h2 className="font-display text-3xl font-bold text-brand-dark">
                  Areas We Serve
                </h2>
                <p className="mt-3 text-brand-dark/90">
                  We deliver this service across Newcastle, Maitland, Lake
                  Macquarie, the Hunter Valley and the Central Coast, with
                  broader NSW support on request.
                </p>
                <ul className="mt-4 grid gap-2 text-brand-dark/90 md:grid-cols-2">
                  {data.areas.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-2 rounded-lg bg-white/80 px-3 py-2 text-sm fm-hover-lift"
                    >
                      <span className="text-brand-gold" aria-hidden="true">
                        ✓
                      </span>
                      {area}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm">
                  Not on this list?{" "}
                  <Link
                    href="/contact/"
                    className="font-semibold text-brand-teal"
                  >
                    Contact us
                  </Link>{" "}
                  and we will assess your site.
                </p>
                <p className="mt-2 text-sm">
                  Looking for all service options?{" "}
                  <Link href="/services/" className="font-semibold text-brand-teal">
                    View the full services hub
                  </Link>
                  .
                </p>
              </div>
              <div className="relative min-h-[240px] border-t border-brand-teal/10 lg:border-t-0 lg:border-l">
                <ImagePlaceholder
                  label={visual.regionLabel}
                  aspect="square"
                  className="h-full min-h-[240px] rounded-none"
                />
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
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
