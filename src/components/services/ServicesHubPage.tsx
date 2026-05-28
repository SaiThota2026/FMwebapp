import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { LinkCard } from "@/components/ui/LinkCard";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ENGAGEMENT_STEPS } from "@/data/engagement-steps";
import {
  CORE_SERVICES,
  HUB_INDUSTRIES,
  HUB_LOCATIONS,
  SERVICES_HUB_FAQS,
  SPECIALIST_SERVICES,
} from "@/data/services-hub";
import { getHomeServiceImageLabel, getIndustryVisual, getLocationVisual } from "@/lib/page-visuals";

export function ServicesHubPage() {
  return (
    <>
      <PageIntro
        breadcrumbs={[{ name: "Services", path: "/services/" }]}
        h1="Facilities Management & Cleaning Services — Newcastle & NSW"
        lead="FACILITIES MAN delivers a complete range of facilities management and cleaning services for commercial, strata, industrial and government clients across Newcastle, the Hunter Valley and the Central Coast. Every service runs from our Newcastle base under one ABN — no subcontracted unknowns."
      />

      <div className="fm-container py-10 sm:py-12 md:py-16">
        <RevealOnScroll>
          <p className="max-w-3xl text-brand-dark/90">
            Whether you need a single daily office clean or a fully integrated
            facilities programme covering cleaning, grounds maintenance, trades and
            reactive maintenance, we scope, price and deliver under a single
            contract with a single point of contact.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delayMs={40}>
          <ProcessSteps
            className="mt-12"
            heading="How we engage new clients"
            steps={[...ENGAGEMENT_STEPS]}
            footer={
              <>
                Ready to start? Use the{" "}
                <Link href="/contact/" className="font-semibold text-brand-teal hover:text-brand-gold">
                  quote form
                </Link>{" "}
                or call us directly.
              </>
            }
          />
        </RevealOnScroll>

        <RevealOnScroll delayMs={60}>
          <section className="mt-16">
            <h2 className="font-display text-3xl font-bold text-brand-dark md:text-4xl">
              Core Services
            </h2>
            <p className="mt-3 font-semibold text-brand-teal">
              Every service runs from one Newcastle team under one ABN. No
              subcontracted unknowns.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CORE_SERVICES.map((service, i) => (
                <RevealOnScroll key={service.href} delayMs={i * 40}>
                  <LinkCard
                    href={service.href}
                    title={service.name}
                    description={service.blurb}
                    linkLabel={`Learn more about ${service.name.toLowerCase()}`}
                    imageLabel={getHomeServiceImageLabel(service.slug)}
                  />
                </RevealOnScroll>
              ))}
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={80}>
          <section className="mt-16 rounded-xl border border-brand-teal/15 bg-brand-cream p-8 md:p-10">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Specialist Services
            </h2>
            <p className="mt-3 max-w-3xl text-brand-dark/90">
              Additional capabilities for healthcare, childcare, exterior works,
              warehouses and maintenance coordination — all under the same
              owner-led quality framework.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {SPECIALIST_SERVICES.map((service, i) => (
                <RevealOnScroll key={service.href} delayMs={i * 35}>
                  <LinkCard
                    href={service.href}
                    title={service.name}
                    description={service.blurb}
                    linkLabel={`View ${service.name.toLowerCase()}`}
                    imageLabel={getHomeServiceImageLabel(service.slug)}
                  />
                </RevealOnScroll>
              ))}
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={100}>
          <section className="mt-16">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Industries We Serve
            </h2>
            <p className="mt-4 max-w-3xl text-brand-dark/90">
              Sector-specific programmes for strata, healthcare, education,
              commercial property and government facilities.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {HUB_INDUSTRIES.map((industry, i) => (
                <RevealOnScroll key={industry.href} delayMs={i * 40}>
                  <LinkCard
                    href={industry.href}
                    title={industry.name}
                    description={industry.blurb}
                    linkLabel="View industry page"
                    imageLabel={getIndustryVisual(industry.slug).heroLabel}
                  />
                </RevealOnScroll>
              ))}
            </div>
            <p className="mt-6">
              <Link href="/industries/" className="font-semibold text-brand-teal hover:text-brand-gold">
                Browse all industries →
              </Link>
            </p>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <section className="mt-16 rounded-xl bg-brand-offwhite p-8 md:p-10">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Where We Deliver
            </h2>
            <p className="mt-4 max-w-3xl text-brand-dark/90">
              Locally owned in Newcastle — we mobilise across the Hunter, Lake
              Macquarie and the Central Coast with documented standards on every
              contract.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {HUB_LOCATIONS.map((loc, i) => (
                <RevealOnScroll key={loc.href} delayMs={i * 35}>
                  <LinkCard
                    href={loc.href}
                    title={loc.name}
                    description={`FACILITIES MAN mobilises from Newcastle to service ${loc.name} commercial, strata and industrial sites with owner oversight and practical reporting.`}
                    linkLabel={`Facilities services in ${loc.name}`}
                    imageLabel={getLocationVisual(
                      loc.href.replace(/^\/locations\//, "").replace(/\/$/, ""),
                    ).heroLabel}
                  />
                </RevealOnScroll>
              ))}
            </div>
            <p className="mt-6">
              <Link
                href="/locations/"
                className="font-semibold text-brand-teal hover:text-brand-gold"
              >
                Browse all service areas →
              </Link>
            </p>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={140}>
          <section className="mt-16">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Frequently Asked Questions
            </h2>
            <div className="mt-6">
              <FaqAccordion faqs={SERVICES_HUB_FAQS} />
            </div>
          </section>
        </RevealOnScroll>
      </div>

      <CtaSection />
    </>
  );
}
