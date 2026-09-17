"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FeaturePanel } from "@/components/ui/FeaturePanel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  SectionHeading,
  SectionPanel,
} from "@/components/ui/SectionPanel";
import { contentImg } from "@/lib/content-images";
import { SERVICES, SITE } from "@/lib/site";
import {
  EXAMPLE_SCOPES,
  SCOPE_FILTERS,
  READINESS_FAQS,
} from "@/data/case-study-readiness";

const CASE_STUDIES_VISUAL = {
  heroLabel:
    "Example scope profiles for Newcastle, Sydney, Brisbane and Melbourne — case-studies-hero.webp",
  sectionLabels: [
    "Service filter overview — case-studies-section-1.webp",
    "Founding-customer programme overview — case-studies-section-2.webp",
  ],
  regionLabel: "",
};

export function CaseStudiesPage() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);

  const filteredScopes = EXAMPLE_SCOPES.filter((scope) => {
    if (activeService && scope.serviceSlug !== activeService) return false;
    if (activeLocation && scope.locationSlug !== activeLocation) return false;
    if (activeIndustry && scope.industry !== activeIndustry) return false;
    return true;
  });

  const hasFilters = activeService || activeLocation || activeIndustry;

  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Case Studies", path: "/case-studies/" }]}
        h1="Case Studies & Example Scope Profiles"
        lead="Explore the type of facilities, cleaning and grounds programmes FACILITIES MAN delivers across Newcastle, Sydney, Brisbane and Melbourne. Each profile outlines scope, approach, and what a future published case study will include — real projects, honest outcomes, no fabricated content."
        visual={CASE_STUDIES_VISUAL}
        imageSrc={contentImg("case-studies-hero")}
      />

      <div className="fm-container py-12 md:py-16">
        <div className="fm-section-stack">
          {/* Readiness explainer */}
          <RevealOnScroll>
            <SectionPanel tone="cream">
              <SectionHeading>Example Scope Profiles</SectionHeading>
              <p className="mt-5 text-brand-dark/90">
                FACILITIES MAN is a newly established, owner-operated business
                based in Newcastle, NSW. The profiles below describe the type of
                projects we are equipped to deliver in each market we service.
                They are not completed case studies — they are transparent
                examples of scope, approach, and documentation standards. Our
                first published case studies will appear here as founding
                contracts complete and clients approve publication.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-brand-teal/15 bg-white p-4">
                  <p className="font-display text-sm font-semibold text-brand-teal">
                    Real projects
                  </p>
                  <p className="mt-1 text-sm text-brand-dark/75">
                    Documented scope, not invented outcomes
                  </p>
                </div>
                <div className="rounded-lg border border-brand-teal/15 bg-white p-4">
                  <p className="font-display text-sm font-semibold text-brand-teal">
                    Honest outcomes
                  </p>
                  <p className="mt-1 text-sm text-brand-dark/75">
                    Measurable results published with client consent
                  </p>
                </div>
                <div className="rounded-lg border border-brand-teal/15 bg-white p-4">
                  <p className="font-display text-sm font-semibold text-brand-teal">
                    No fabricated reviews
                  </p>
                  <p className="mt-1 text-sm text-brand-dark/75">
                    Client references only, with written approval
                  </p>
                </div>
              </div>
            </SectionPanel>
          </RevealOnScroll>

          {/* Filterable scope profiles */}
          <RevealOnScroll>
            <SectionPanel>
              <SectionHeading>Filter by Service, Industry &amp; Location</SectionHeading>
              <p className="mt-4 text-sm text-brand-dark/75">
                Narrow profiles by service, industry, or location to find
                relevant examples for your property and market.
              </p>

              {/* Service filters */}
              <div className="mt-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-dark/60">
                  Service
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveService(null)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      !activeService
                        ? "bg-brand-teal text-white"
                        : "bg-brand-cream text-brand-teal hover:text-brand-gold"
                    }`}
                  >
                    All services
                  </button>
                  {SCOPE_FILTERS.services.map((s) => (
                    <button
                      key={s.slug}
                      onClick={() =>
                        setActiveService(
                          activeService === s.slug ? null : s.slug,
                        )
                      }
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        activeService === s.slug
                          ? "bg-brand-teal text-white"
                          : "bg-brand-cream text-brand-teal hover:text-brand-gold"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location filters */}
              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-dark/60">
                  Location
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveLocation(null)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      !activeLocation
                        ? "bg-brand-teal text-white"
                        : "bg-brand-cream text-brand-teal hover:text-brand-gold"
                    }`}
                  >
                    All locations
                  </button>
                  {SCOPE_FILTERS.locations.map((l) => (
                    <button
                      key={l.slug}
                      onClick={() =>
                        setActiveLocation(
                          activeLocation === l.slug ? null : l.slug,
                        )
                      }
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        activeLocation === l.slug
                          ? "bg-brand-teal text-white"
                          : "bg-brand-cream text-brand-teal hover:text-brand-gold"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Industry filters */}
              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-dark/60">
                  Industry
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveIndustry(null)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      !activeIndustry
                        ? "bg-brand-teal text-white"
                        : "bg-brand-cream text-brand-teal hover:text-brand-gold"
                    }`}
                  >
                    All industries
                  </button>
                  {SCOPE_FILTERS.industries.map((ind) => (
                    <button
                      key={ind.slug}
                      onClick={() =>
                        setActiveIndustry(
                          activeIndustry === ind.label ? null : ind.label,
                        )
                      }
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        activeIndustry === ind.label
                          ? "bg-brand-teal text-white"
                          : "bg-brand-cream text-brand-teal hover:text-brand-gold"
                      }`}
                    >
                      {ind.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasFilters && (
                <button
                  onClick={() => {
                    setActiveService(null);
                    setActiveLocation(null);
                    setActiveIndustry(null);
                  }}
                  className="mt-4 text-sm font-semibold text-brand-gold hover:underline"
                >
                  Clear all filters
                </button>
              )}

              <p className="mt-4 text-sm text-brand-dark/60">
                Showing {filteredScopes.length}{" "}
                {filteredScopes.length === 1 ? "profile" : "profiles"}
              </p>
            </SectionPanel>
          </RevealOnScroll>

          {/* Scope profile cards — not wrapped in a single RevealOnScroll:
              a tall multi-card grid could never meet the old intersection
              threshold and stayed opacity:0. */}
          <div className="grid gap-6 md:grid-cols-2">
              {filteredScopes.map((scope) => (
                <article
                  key={scope.id}
                  className="flex flex-col overflow-hidden rounded-xl border border-brand-teal/15 bg-brand-cream/60 shadow-sm fm-hover-lift"
                >
                  <div className="border-b border-brand-teal/10 bg-white px-5 py-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block rounded-full bg-brand-dark/10 px-3 py-1 text-xs font-semibold text-brand-dark">
                        Example scope
                      </span>
                      <span className="inline-block rounded-full bg-brand-teal/10 px-3 py-1 text-xs font-semibold text-brand-teal">
                        {scope.service}
                      </span>
                      <span className="inline-block rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold">
                        {scope.location}
                      </span>
                      <span className="inline-block rounded-full bg-brand-dark/5 px-3 py-1 text-xs font-medium text-brand-dark/70">
                        {scope.industry}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-semibold text-brand-dark">
                      {scope.title}
                    </h3>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-sm text-brand-dark/85">
                      {scope.summary}
                    </p>

                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
                        Scope detail
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {scope.scopeDetail.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-brand-dark/80"
                          >
                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-gold" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
                        Our approach
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {scope.approach.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-brand-dark/80"
                          >
                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-teal" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 rounded-lg bg-white/60 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-dark/60">
                        What a future case study will include
                      </p>
                      <ul className="mt-2 space-y-1">
                        {scope.whatCaseStudyWillInclude.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-xs text-brand-dark/70"
                          >
                            <span className="mt-0.5 text-brand-gold">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto flex gap-3 pt-4">
                      <Link
                        href={`/services/${scope.serviceSlug}/`}
                        className="text-sm font-semibold text-brand-teal hover:text-brand-gold"
                      >
                        View {scope.service} services →
                      </Link>
                      <Link
                        href={`/locations/${scope.locationSlug}/`}
                        className="text-sm font-semibold text-brand-teal hover:text-brand-gold"
                      >
                        {scope.location} location →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

          {filteredScopes.length === 0 && (
            <SectionPanel>
              <p className="text-center text-brand-dark/70">
                No profiles match the current filters. Try clearing filters or
                browsing all services and locations.
              </p>
            </SectionPanel>
          )}

          {/* By industry & location overview */}
          <RevealOnScroll>
            <FeaturePanel
              heading="By Industry & Location"
              body={[
                "Our example scope profiles span commercial property, strata and body corporate, and industrial sectors — across Newcastle, Lake Macquarie, Hunter Valley, Sydney, Brisbane and Melbourne.",
                "Use the filters above to find profiles relevant to your property type and market. Each profile links to the relevant service and location pages for detailed scope information.",
              ]}
              imageLabel={CASE_STUDIES_VISUAL.sectionLabels[0]}
              imageSrc={contentImg("case-studies-section-1")}
              tone="cream"
              mediaPosition="left"
              footer={
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/services/"
                    className="font-semibold text-brand-teal"
                  >
                    Browse all services →
                  </Link>
                  <Link
                    href="/locations/"
                    className="font-semibold text-brand-teal"
                  >
                    View all locations →
                  </Link>
                </div>
              }
            />
          </RevealOnScroll>

          {/* Founding-customer offer */}
          <RevealOnScroll>
            <FeaturePanel
              heading="Become a Founding-Customer Case Study"
              body={[
                "Our founding-customer programme offers discounted contract pricing in exchange for case study rights and a reference contact. We produce the case study at no extra cost — photography, write-up, and client approval managed by our team. The first five clients in each region qualify.",
                `ABN ${SITE.abn}. Fully insured.`,
              ]}
              imageLabel={CASE_STUDIES_VISUAL.sectionLabels[1]}
              imageSrc={contentImg("case-studies-section-2")}
              tone="gold"
              mediaPosition="right"
              footer={
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/about/certifications/"
                    className="font-semibold text-brand-teal"
                  >
                    View certifications &amp; compliance →
                  </Link>
                  <Link
                    href="/contact/"
                    className="font-semibold text-brand-teal"
                  >
                    Enquire about the founding-customer programme →
                  </Link>
                </div>
              }
            />
          </RevealOnScroll>

          {/* FAQs */}
          <RevealOnScroll>
            <SectionPanel>
              <SectionHeading>Frequently Asked Questions</SectionHeading>
              <div className="mt-6 w-full">
                <FaqAccordion faqs={READINESS_FAQS} />
              </div>
            </SectionPanel>
          </RevealOnScroll>

          {/* Related services */}
          <RevealOnScroll>
            <SectionPanel>
              <p className="font-semibold text-brand-dark">Related services:</p>
              <ul className="mt-4 flex flex-wrap gap-2 text-sm">
                {SERVICES.slice(0, 6).map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="inline-block rounded-full bg-brand-cream px-4 py-2 font-medium text-brand-teal shadow-sm fm-hover-lift fm-tap hover:text-brand-gold"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionPanel>
          </RevealOnScroll>
        </div>
      </div>

      <CtaSection
        heading="Ready to Discuss Your Project Scope?"
        subCopy="Tell us about your site, services needed, and preferred frequency. We respond within 24 hours and can usually schedule a free site walk-through within 2-3 business days."
      />
    </>
  );
}
