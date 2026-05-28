import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { LinkCard } from "@/components/ui/LinkCard";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ENGAGEMENT_STEPS } from "@/data/engagement-steps";
import {
  HUB_LOCATION_CARDS,
  HOME_MAP_IMAGE_LABEL,
  LOCATIONS_HUB_FAQS,
} from "@/data/locations-hub";
import { getLocationVisual } from "@/lib/page-visuals";

export function LocationsHubTemplate() {
  const hubVisual = {
    ...getLocationVisual("newcastle"),
    regionLabel: HOME_MAP_IMAGE_LABEL,
  };

  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Locations", path: "/locations/" }]}
        h1="Facilities & Cleaning Service Areas — Newcastle, Hunter & Central Coast"
        lead="Locally owned in Newcastle — we mobilise across the Hunter, Lake Macquarie and the Central Coast with documented scopes and owner-led accountability on every contract."
        visual={hubVisual}
        showTrustStrip={false}
      />

      <div className="fm-container py-12 md:py-16">
        <RevealOnScroll>
          <p className="max-w-3xl text-brand-dark/90">
            Choose your region below for suburb coverage, local service detail and
            FAQs. Every location page links to our full service range — cleaning,
            strata, facilities management, grounds and specialist programmes.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delayMs={40}>
          <ProcessSteps
            className="mt-12"
            heading="How we onboard regional clients"
            steps={[...ENGAGEMENT_STEPS]}
            footer={
              <>
                Not sure which region fits your site?{" "}
                <Link
                  href="/contact/"
                  className="font-semibold text-brand-teal hover:text-brand-gold"
                >
                  Contact us
                </Link>{" "}
                with your address — we respond within 24 hours.
              </>
            }
          />
        </RevealOnScroll>

        <RevealOnScroll delayMs={60}>
          <section className="mt-16">
            <h2 className="font-display text-3xl font-bold text-brand-dark md:text-4xl">
              Service regions
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {HUB_LOCATION_CARDS.map((location, i) => (
                <RevealOnScroll key={location.slug} delayMs={i * 45}>
                  <LinkCard
                    href={location.href}
                    title={location.name}
                    description={location.description}
                    linkLabel={location.linkLabel}
                    badge={location.badge}
                    imageLabel={getLocationVisual(location.slug).heroLabel}
                  />
                </RevealOnScroll>
              ))}
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={80}>
          <section className="mt-16 overflow-hidden rounded-xl border border-brand-teal/15 bg-white shadow-sm fm-hover-lift">
            <div className="border-b border-brand-teal/10 bg-brand-cream px-5 py-4">
              <h2 className="font-display text-lg font-semibold text-brand-dark">
                Service area overview
              </h2>
              <p className="mt-1 text-sm text-brand-dark/80">
                Newcastle HQ with coverage across the wider Hunter and Central Coast.
              </p>
            </div>
            <ImagePlaceholder
              label={HOME_MAP_IMAGE_LABEL}
              aspect="wide"
              className="rounded-none border-0"
            />
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={100}>
          <section className="mt-16 rounded-xl border border-brand-gold/25 bg-brand-cream p-8 md:p-10">
            <h2 className="font-display text-2xl font-bold text-brand-dark">
              All services, one Newcastle team
            </h2>
            <p className="mt-3 text-brand-dark/90">
              Every region is serviced by the same owner-led team — one ABN, one
              scope format, one reporting standard.
            </p>
            <Link
              href="/services/"
              className="fm-touch-target mt-6 inline-flex items-center justify-center rounded-md bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-dark fm-hover-lift fm-tap"
            >
              View all services
            </Link>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <section className="mt-16">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Frequently Asked Questions
            </h2>
            <div className="mt-6">
              <FaqAccordion faqs={LOCATIONS_HUB_FAQS} />
            </div>
          </section>
        </RevealOnScroll>
      </div>

      <CtaSection
        heading="Request a quote for your suburb"
        subCopy="Free site walk-through · Written scope within 48 hours · 24-hour response promise"
      />
    </>
  );
}
