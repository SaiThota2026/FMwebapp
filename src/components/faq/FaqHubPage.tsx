import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ENGAGEMENT_STEPS } from "@/data/engagement-steps";
import {
  FAQ_HUB_INTRO,
  FAQ_HUB_FEATURED,
  FAQ_HUB_SECTIONS,
} from "@/data/faq-hub";
import { SERVICES, SITE } from "@/lib/site";

const FAQ_VISUAL = {
  heroLabel:
    "Commercial cleaning team in a Newcastle office — faq-hub-hero.webp",
  sectionLabels: [],
  regionLabel: "Newcastle Hunter service area — faq-hub-map.webp",
};

export function FaqHubPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "FAQ", path: "/faq/" }]}
        h1="Frequently Asked Questions — Commercial Cleaning & Facilities Management Newcastle"
        lead={FAQ_HUB_INTRO}
        visual={FAQ_VISUAL}
        showTrustStrip={false}
      />

      <div className="fm-container py-12 md:py-16">
        <RevealOnScroll>
          <section className="rounded-xl border border-brand-teal/20 bg-brand-cream p-6 md:p-8">
            <h3 className="font-display text-xl font-semibold text-brand-dark">
              Start here: the top questions
            </h3>
            <p className="mt-3 text-sm text-brand-dark/90">
              If you only read one part of this page, read the answers below first.
              Then scroll to the detailed sections for pricing, scope and compliance.
            </p>
            <div className="mt-6">
              <FaqAccordion faqs={FAQ_HUB_FEATURED} />
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={60}>
          <div className="mt-12">
            <ProcessSteps
              heading="How we work with new clients"
              steps={[...ENGAGEMENT_STEPS]}
            />
          </div>
        </RevealOnScroll>

        {FAQ_HUB_SECTIONS.map((section, i) => (
          <RevealOnScroll key={section.heading} delayMs={80 + i * 40}>
            <section className="mt-16">
              <h2 className="font-display text-3xl font-bold text-brand-dark">
                {section.heading}
              </h2>

              {section.faqs && (
                <div className="mt-6">
                  <FaqAccordion faqs={section.faqs} />
                </div>
              )}

              {section.subsections?.map((sub) => (
                <div key={sub.heading} className="mt-10">
                  <h3 className="font-display text-xl font-semibold text-brand-teal">
                    {sub.heading}
                  </h3>
                  <div className="mt-4">
                    <FaqAccordion faqs={sub.faqs} />
                  </div>
                </div>
              ))}
            </section>
          </RevealOnScroll>
        ))}

        <RevealOnScroll delayMs={120}>
          <section className="mt-16 rounded-xl border border-brand-gold/30 bg-brand-cream p-6 md:p-8">
            <p className="font-semibold text-brand-dark">Related services:</p>
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

        <RevealOnScroll delayMs={140}>
          <section className="mt-16 overflow-hidden rounded-xl border border-brand-teal/15 bg-white p-8 text-center shadow-sm md:p-10">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Still Have Questions?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-dark/90">
              Call{" "}
              <a
                href={`tel:${SITE.phone}`}
                className="font-semibold text-brand-teal hover:text-brand-gold"
              >
                {SITE.phoneDisplay}
              </a>{" "}
              — the owner answers during business hours. Email{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-semibold text-brand-teal hover:text-brand-gold"
              >
                {SITE.email}
              </a>{" "}
              and we will respond within 24 hours.
            </p>
            <p className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-semibold">
              <Link
                href="/contact/"
                className="text-brand-teal hover:text-brand-gold"
              >
                Get a free quote
              </Link>
              <Link
                href="/about/"
                className="text-brand-teal hover:text-brand-gold"
              >
                About FACILITIES MAN
              </Link>
              <Link
                href="/locations/newcastle/"
                className="text-brand-teal hover:text-brand-gold"
              >
                Cleaning services in Newcastle
              </Link>
            </p>
          </section>
        </RevealOnScroll>
      </div>

      <CtaSection
        heading="Need a quote instead of an FAQ?"
        subCopy="Free site walk-through · Written scope within 48 hours · 24-hour response promise"
      />
    </>
  );
}
