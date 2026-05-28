import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ENGAGEMENT_STEPS } from "@/data/engagement-steps";
import type { IndustryPageData } from "@/data/industries/types";
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
      />

      <div className="fm-container py-12 md:py-16">
        <RevealOnScroll>
          <ProcessSteps
            heading={`What to expect for ${data.name}`}
            steps={[...ENGAGEMENT_STEPS]}
            footer={
              <>
                Start with a{" "}
                <Link href="/contact/" className="font-semibold text-brand-teal hover:text-brand-gold">
                  free quote
                </Link>{" "}
                — we scope to your sector&apos;s compliance and scheduling needs.
              </>
            }
          />
        </RevealOnScroll>

        <RevealOnScroll delayMs={60}>
          <section className="mt-16">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              {data.whoWeServeHeading}
            </h2>
            <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="space-y-4">
                {data.whoWeServeBody.map((para) => (
                  <p key={para} className="text-brand-dark/90">
                    {para}
                  </p>
                ))}
              </div>
              <div className="overflow-hidden rounded-xl">
                <ImagePlaceholder label={visual.sectionLabels[0]} aspect="video" />
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
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
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={80}>
          <section className="mt-16">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              {data.servicesHeading}
            </h2>
            <p className="mt-4 max-w-3xl text-brand-dark/90">{data.servicesIntro}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.services.map((service) => (
                <article
                  key={service.href}
                  className="overflow-hidden rounded-xl border border-brand-teal/15 bg-white shadow-sm fm-hover-lift fm-tap"
                >
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-brand-teal">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm text-brand-dark/85">{service.blurb}</p>
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
              <Link href="/services/" className="font-semibold text-brand-teal hover:text-brand-gold">
                View all FACILITIES MAN services →
              </Link>
            </p>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={100}>
          <section className="mt-16 overflow-hidden rounded-xl border border-brand-teal/15 bg-brand-cream p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-3xl font-bold text-brand-dark">
                  {data.whyUsHeading}
                </h2>
                <div className="mt-4 space-y-4">
                  {data.whyUsBody.map((para) => (
                    <p key={para} className="text-brand-dark/90">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <ImagePlaceholder
                  label={visual.sectionLabels[1]}
                  aspect="video"
                  className="rounded-xl"
                />
                <ul className="mt-4 space-y-2">
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
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <section className="mt-16">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              {data.complianceHeading}
            </h2>
            <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="space-y-4">
                {data.complianceBody.map((para) => (
                  <p key={para} className="text-brand-dark/90">
                    {para}
                  </p>
                ))}
              </div>
              <div>
                <ImagePlaceholder
                  label={visual.sectionLabels[2]}
                  aspect="video"
                  className="rounded-xl"
                />
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {data.compliancePoints.map((point) => (
                    <li
                      key={point}
                      className="fm-hover-lift flex items-start gap-2 rounded-lg border border-brand-teal/15 bg-white px-3 py-2 text-sm text-brand-dark/90"
                    >
                      <span className="text-brand-gold" aria-hidden="true">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
