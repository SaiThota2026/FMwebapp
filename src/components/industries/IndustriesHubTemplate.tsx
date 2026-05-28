import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { CtaSection } from "@/components/ui/CtaSection";
import { LinkCard } from "@/components/ui/LinkCard";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ENGAGEMENT_STEPS } from "@/data/engagement-steps";
import { INDUSTRY_PAGES } from "@/data/industries";
import { getIndustryVisual } from "@/lib/page-visuals";

export function IndustriesHubTemplate() {
  return (
    <>
      <PageIntro
        breadcrumbs={[{ name: "Industries", path: "/industries/" }]}
        h1="Industries We Serve"
        lead="Sector-specific delivery for facilities managers, property teams and committees across Newcastle, Hunter Valley and the Central Coast — with documented scopes and owner-led accountability."
      />

      <div className="fm-container py-10 sm:py-12 md:py-16">
        <RevealOnScroll>
          <p className="max-w-3xl text-brand-dark/90">
            Every industry has different compliance, scheduling and presentation
            requirements. We tailor service design and reporting to how your sector
            actually operates — not a one-size-fits-all cleaning template.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delayMs={40}>
          <ProcessSteps
            className="mt-12"
            heading="How we onboard industry clients"
            steps={[...ENGAGEMENT_STEPS]}
            footer={
              <>
                Not sure which industry page fits your site?{" "}
                <Link href="/contact/" className="font-semibold text-brand-teal hover:text-brand-gold">
                  Contact us
                </Link>{" "}
                for a walk-through.
              </>
            }
          />
        </RevealOnScroll>

        <RevealOnScroll delayMs={60}>
          <section className="mt-16">
            <h2 className="font-display text-3xl font-bold text-brand-dark md:text-4xl">
              Industry verticals
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {INDUSTRY_PAGES.map((industry, i) => (
                <RevealOnScroll key={industry.slug} delayMs={i * 45}>
                  <LinkCard
                    href={industry.path}
                    title={industry.name}
                    description={industry.description}
                    linkLabel="View industry page"
                    imageLabel={getIndustryVisual(industry.slug).heroLabel}
                  />
                </RevealOnScroll>
              ))}
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={80}>
          <section className="mt-16 rounded-xl border border-brand-gold/25 bg-brand-cream p-8 md:p-10">
            <h2 className="font-display text-2xl font-bold text-brand-dark">
              All services, one team
            </h2>
            <p className="mt-3 text-brand-dark/90">
              Industry pages link to our full service range — cleaning, grounds,
              facilities management and specialist programmes.
            </p>
            <Link
              href="/services/"
              className="fm-touch-target mt-6 inline-flex items-center justify-center rounded-md bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-dark fm-hover-lift fm-tap"
            >
              View all services
            </Link>
          </section>
        </RevealOnScroll>
      </div>

      <CtaSection
        heading="Discuss your industry requirements"
        subCopy="We respond within 24 hours and can usually schedule a site walk-through in the same week."
      />
    </>
  );
}
