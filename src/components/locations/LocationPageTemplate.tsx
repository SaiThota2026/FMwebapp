import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { ContentSection } from "@/components/ui/ContentSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { LocationPageData } from "@/data/locations/types";
import {
  getHomeServiceImageLabel,
  getLocationSectionLabel,
  getLocationVisual,
  serviceSlugFromHref,
} from "@/lib/page-visuals";
import { SERVICES } from "@/lib/site";

export function LocationPageTemplate({ data }: { data: LocationPageData }) {
  const visual = getLocationVisual(data.slug);

  return (
    <>
      <PageHero
        breadcrumbs={[{ name: data.name, path: data.path }]}
        h1={data.h1}
        lead={data.intro}
        visual={visual}
      />

      <div className="fm-container py-12 md:py-16">
        <RevealOnScroll>
          <ProcessSteps
            heading={`What you can expect for ${data.name}`}
            steps={[
              {
                title: "Local assessment",
                description:
                  "We visit your site to confirm access, frequency, and presentation expectations.",
              },
              {
                title: "A clear scope",
                description:
                  "You receive a documented scope and quote within 48 hours of the walk-through.",
              },
              {
                title: "Owner-led delivery",
                description:
                  "Delivery is supported by direct owner oversight, with monthly reporting for accountability.",
              },
            ]}
            footer={
              <>
                If you want a fast start, include your{" "}
                <Link
                  href="/contact/"
                  className="font-semibold text-brand-teal hover:text-brand-gold"
                >
                  site address
                </Link>{" "}
                and preferred frequency in your enquiry.
              </>
            }
          />
        </RevealOnScroll>

        <RevealOnScroll delayMs={60}>
          <section className="mt-16">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-display text-3xl font-bold text-brand-dark">
                  Facilities &amp; Cleaning Services in {data.name}
                </h2>
                <p className="mt-4 max-w-3xl text-brand-dark/90">
                  {data.servicesIntro}
                </p>
              </div>
              <ImagePlaceholder
                label={visual.regionLabel}
                aspect="wide"
                className="max-w-md shrink-0 md:w-72"
              />
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {data.services.map((service) => {
                const slug = serviceSlugFromHref(service.href);

                return (
                  <article
                    key={service.href}
                    className="overflow-hidden rounded-xl border border-brand-teal/15 bg-white shadow-sm fm-hover-lift fm-tap"
                  >
                    <ImagePlaceholder
                      label={getHomeServiceImageLabel(slug)}
                      aspect="video"
                      className="rounded-b-none"
                    />
                    <div className="p-5">
                      <h3 className="font-display text-lg font-semibold text-brand-teal">
                        {service.name}
                      </h3>
                      <p className="mt-2 text-sm text-brand-dark/85">
                        {service.blurb}
                      </p>
                      <Link
                        href={service.href}
                        className="mt-3 inline-block text-sm font-semibold text-brand-dark hover:text-brand-teal"
                      >
                        View {service.name.toLowerCase()} services
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
            <p className="mt-6">
              <Link href="/services/" className="font-semibold text-brand-teal">
                View all FACILITIES MAN services
              </Link>
            </p>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={80}>
          <section className="mt-16">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Suburbs &amp; Areas We Cover
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {data.suburbClusters.map((cluster, index) => (
                <article
                  key={cluster.heading}
                  className="overflow-hidden rounded-xl border border-brand-teal/15 bg-brand-cream fm-hover-lift fm-tap"
                >
                  <ImagePlaceholder
                    label={`${cluster.heading} coverage — locations-${data.slug}-cluster-${index + 1}.webp`}
                    aspect="video"
                    className="rounded-b-none"
                  />
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-brand-teal">
                      {cluster.heading}
                    </h3>
                    <p className="mt-2 text-brand-dark/90">{cluster.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={100}>
          <ContentSection
            heading={`Why a Locally-Based Team Matters in ${data.name}`}
            body={data.localTeamBody}
            imageLabel={getLocationSectionLabel(data.slug, 2)}
            imagePosition="right"
          />
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <ContentSection
            heading={`Industries We Service in ${data.name}`}
            body={data.industriesBody}
            imageLabel={getLocationSectionLabel(data.slug, 3)}
            imagePosition="left"
          />
        </RevealOnScroll>

        <RevealOnScroll delayMs={140}>
          <section className="mt-16 overflow-hidden rounded-xl border border-brand-teal/20 shadow-md fm-hover-lift">
            <div className="bg-brand-cream px-5 py-4">
              <h2 className="font-display text-lg font-semibold text-brand-dark">
                {data.mapTitle}
              </h2>
              <p className="mt-1 text-sm text-brand-dark/75">
                Locally coordinated from Newcastle — fast mobilisation across{" "}
                {data.name}.
              </p>
            </div>
            <iframe
              title={data.mapTitle}
              src={data.mapEmbed}
              className="h-56 w-full border-0 sm:h-72 md:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={160}>
          <section className="mt-16">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Frequently Asked Questions
            </h2>
            <div className="mt-6">
              <FaqAccordion faqs={data.faqs} />
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={180}>
          <section className="mt-12 rounded-xl border border-brand-gold/30 bg-brand-cream p-6 md:p-8">
            <p className="font-semibold text-brand-dark">
              All core services available in {data.name}:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="inline-block rounded-full bg-white px-4 py-2 font-medium text-brand-teal shadow-sm fm-hover-lift fm-tap hover:text-brand-gold"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </RevealOnScroll>
      </div>

      <CtaSection
        heading={data.ctaHeading}
        subCopy="Tell us your suburb and service needs. We respond within 24 hours and can usually schedule a free site walk-through within 2-3 business days."
      />
    </>
  );
}
