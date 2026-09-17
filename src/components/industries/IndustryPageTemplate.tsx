import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { FeaturePanel } from "@/components/ui/FeaturePanel";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  SectionHeading,
  SectionPanel,
} from "@/components/ui/SectionPanel";
import { ENGAGEMENT_STEPS } from "@/data/engagement-steps";
import type { IndustryPageData } from "@/data/industries/types";
import { contentImg } from "@/lib/content-images";
import { getIndustryVisual } from "@/lib/page-visuals";

export function IndustryPageTemplate({ data }: { data: IndustryPageData }) {
  const visual = getIndustryVisual(data.slug);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Industries", path: "/industries/" },
          { name: data.name, path: data.path },
        ]}
        h1={data.h1}
        lead={data.lead}
        visual={visual}
        imageSrc={contentImg(`industries-${data.slug}-hero`)}
      />

      <div className="fm-container py-12 md:py-16">
        <div className="fm-section-stack">
          <RevealOnScroll>
            <ProcessSteps
              heading={`What to expect for ${data.name}`}
              steps={[...ENGAGEMENT_STEPS]}
              footer={
                <>
                  Start with a{" "}
                  <Link
                    href="/contact/"
                    className="font-semibold text-brand-teal hover:text-brand-gold"
                  >
                    free quote
                  </Link>{" "}
                  — we scope to your sector&apos;s compliance and scheduling
                  needs.
                </>
              }
            />
          </RevealOnScroll>

          <RevealOnScroll>
            <FeaturePanel
              heading={data.whoWeServeHeading}
              body={data.whoWeServeBody}
              imageLabel={visual.sectionLabels[0]}
              imageSrc={contentImg(`industries-${data.slug}-section-1`)}
              mediaFooter={
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {data.whoWeServePoints.map((point) => (
                    <li
                      key={point}
                      className="fm-hover-lift flex items-start gap-2 rounded-lg border border-brand-teal/15 bg-brand-cream px-3 py-2 text-sm text-brand-dark/90"
                    >
                      <span className="text-brand-gold" aria-hidden="true">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              }
            />
          </RevealOnScroll>

          <RevealOnScroll>
            <SectionPanel>
              <SectionHeading>{data.servicesHeading}</SectionHeading>
              <p className="mt-4 max-w-3xl leading-relaxed text-brand-dark/90 sm:mt-5">
                {data.servicesIntro}
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {data.services.map((service) => (
                  <article
                    key={service.href}
                    className="overflow-hidden rounded-xl border border-brand-teal/15 bg-brand-cream/50 shadow-sm fm-hover-lift fm-tap"
                  >
                    <div className="p-5">
                      <h3 className="font-display text-lg font-semibold text-brand-teal">
                        {service.name}
                      </h3>
                      <p className="mt-2 text-sm text-brand-dark/85">
                        {service.blurb}
                      </p>
                      <Link
                        href={service.href}
                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:text-brand-teal"
                      >
                        Learn more
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              <p className="mt-6 text-sm">
                <Link
                  href="/services/"
                  className="font-semibold text-brand-teal hover:text-brand-gold"
                >
                  View all FACILITIES MAN services →
                </Link>
              </p>
            </SectionPanel>
          </RevealOnScroll>

          <RevealOnScroll>
            <FeaturePanel
              heading={data.whyUsHeading}
              body={data.whyUsBody}
              imageLabel={visual.sectionLabels[1]}
              imageSrc={contentImg(`industries-${data.slug}-section-2`)}
              tone="cream"
              mediaFooter={
                <ul className="space-y-2">
                  {data.whyUsPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-brand-dark/90"
                    >
                      <span className="text-brand-gold" aria-hidden="true">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              }
            />
          </RevealOnScroll>

          <RevealOnScroll>
            <FeaturePanel
              heading={data.complianceHeading}
              body={data.complianceBody}
              imageLabel={visual.sectionLabels[2]}
              imageSrc={contentImg(`industries-${data.slug}-section-3`)}
              mediaFooter={
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {data.compliancePoints.map((point) => (
                    <li
                      key={point}
                      className="fm-hover-lift flex items-start gap-2 rounded-lg border border-brand-teal/15 bg-brand-cream px-3 py-2 text-sm text-brand-dark/90"
                    >
                      <span className="text-brand-gold" aria-hidden="true">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              }
            />
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
