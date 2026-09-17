import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FeatureCardGrid } from "@/components/ui/FeatureCardGrid";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  SectionHeading,
  SectionPanel,
} from "@/components/ui/SectionPanel";
import type { ServicePageData } from "@/data/services/types";
import { contentImg } from "@/lib/content-images";
import {
  getServiceSectionLabel,
  getServiceVisual,
} from "@/lib/page-visuals";

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const visual = getServiceVisual(data.slug);

  const featureCards = data.sections.map((section, index) => ({
    heading: section.heading,
    body: section.body,
    imageLabel: getServiceSectionLabel(data.slug, index),
    imageSrc: contentImg(`services-${data.slug}-section-${index + 1}`),
  }));

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
        imageSrc={contentImg(`services-${data.slug}-hero`)}
      />

      <div className="fm-container py-12 md:py-16">
        <div className="fm-section-stack">
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

          <RevealOnScroll>
            <FeatureCardGrid items={featureCards} />
          </RevealOnScroll>

          <RevealOnScroll>
            <SectionPanel tone="cream" padding="none">
              <div className="grid min-w-0 lg:grid-cols-2 lg:items-stretch">
                <div className="flex flex-col justify-center fm-panel-pad">
                  <SectionHeading>Areas We Serve</SectionHeading>
                  <p className="mt-4 leading-relaxed text-brand-dark/90 sm:mt-5">
                    We deliver this service across Newcastle, Maitland, Lake
                    Macquarie, the Hunter Valley and the Central Coast, with
                    broader NSW support on request.
                  </p>
                  <ul className="mt-5 grid gap-2 text-brand-dark/90 sm:grid-cols-2">
                    {data.areas.map((area) => (
                      <li
                        key={area}
                        className="flex items-start gap-2 rounded-lg bg-white/90 px-3 py-2 text-sm leading-snug fm-hover-lift fm-tap"
                      >
                        <span className="text-brand-gold" aria-hidden="true">
                          ✓
                        </span>
                        {area}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm leading-relaxed text-brand-dark/90">
                    Not on this list?{" "}
                    <Link
                      href="/contact/"
                      className="font-semibold text-brand-teal"
                    >
                      Contact us
                    </Link>{" "}
                    and we will assess your site.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-dark/90">
                    Looking for all service options?{" "}
                    <Link
                      href="/services/"
                      className="font-semibold text-brand-teal"
                    >
                      View the full services hub
                    </Link>
                    .
                  </p>
                </div>
                <div className="relative min-h-[240px] border-t border-brand-teal/10 lg:border-t-0 lg:border-l lg:border-brand-teal/10">
                  <ImagePlaceholder
                    label={visual.regionLabel}
                    src={contentImg(`services-${data.slug}-areas`)}
                    aspect="square"
                    className="h-full min-h-[240px] rounded-none"
                  />
                </div>
              </div>
            </SectionPanel>
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
