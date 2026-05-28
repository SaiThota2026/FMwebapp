import Link from "next/link";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { LinkCard } from "@/components/ui/LinkCard";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TrustStrip } from "@/components/ui/TrustStrip";
import { ENGAGEMENT_STEPS } from "@/data/engagement-steps";
import {
  HOME_FAQS,
  HOME_INDUSTRIES_TEASER,
  HOME_LOCATIONS,
  HOME_MAP_IMAGE_LABEL,
  HOME_SERVICES,
  HOME_WHY_CHOOSE,
} from "@/data/home";
import { getIndustryVisual, getLocationVisual } from "@/lib/page-visuals";
import { SITE } from "@/lib/site";

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark text-brand-offwhite">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-brand-cream/15 via-transparent to-brand-teal/25"
        />
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-cream/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl"
        />
        <div className="relative fm-container py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Locally owned and operated in Newcastle
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Newcastle&apos;s Facilities Management &amp; Commercial Cleaning
            Specialists
          </h1>
          <p className="mt-4 max-w-2xl text-base text-brand-offwhite/90 md:text-lg">
            From one office to whole building portfolios — cleaning, grounds,
            maintenance and facilities management under one Newcastle team.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact/"
              className="fm-touch-target inline-flex w-full items-center justify-center rounded-md bg-brand-gold px-6 py-3 font-semibold text-brand-dark fm-hover-lift fm-tap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40 sm:w-auto"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="fm-touch-target inline-flex w-full items-center justify-center rounded-md border-2 border-brand-teal px-6 py-3 font-semibold text-brand-teal fm-hover-lift fm-tap hover:bg-brand-teal hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40 sm:w-auto"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
          <p className="mt-4 text-sm text-brand-offwhite/80">
            24-hour response guaranteed · ABN {SITE.abn} · Fully insured
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-brand-teal/20 bg-brand-dark/40 p-4 fm-fade-up fm-hover-lift">
              <p className="text-sm font-semibold text-brand-gold">
                1) Site walk-through
              </p>
              <p className="mt-2 text-sm text-brand-offwhite/90">
                Under an hour and costs nothing. We see your site first —
                then we scope accurately.
              </p>
            </div>
            <div className="rounded-xl border border-brand-teal/20 bg-brand-dark/40 p-4 fm-fade-up fm-delay-1 fm-hover-lift">
              <p className="text-sm font-semibold text-brand-gold">
                2) Written scope in 48 hours
              </p>
              <p className="mt-2 text-sm text-brand-offwhite/90">
                Plain-English inclusions and frequencies, so your team
                understands the work before contract start.
              </p>
            </div>
            <div className="rounded-xl border border-brand-teal/20 bg-brand-dark/40 p-4 fm-fade-up fm-delay-2 fm-hover-lift">
              <p className="text-sm font-semibold text-brand-gold">
                3) Owner-led delivery
              </p>
              <p className="mt-2 text-sm text-brand-offwhite/90">
                Direct accountability, monthly reporting, and fast escalation
                when something changes.
              </p>
            </div>
          </div>
        </div>
        <TrustStrip variant="dark" />
        <p className="bg-brand-dark px-4 py-3 text-center text-sm text-brand-offwhite/70">
          [TRUST PLACEHOLDER — insert first Google review star rating and text
          when earned]
        </p>
      </section>

      {/* Services */}
      <section className="bg-brand-offwhite py-16 md:py-20">
        <div className="fm-container">
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-bold text-brand-dark md:text-4xl">
              Facilities &amp; Cleaning Services
            </h2>
            <p className="mt-4 max-w-3xl text-brand-dark/90">
              FACILITIES MAN delivers owner-operated facilities and cleaning
              services across Newcastle, the Hunter Valley and the Central Coast.
              We are newly launched, fully insured, and answering the phone
              ourselves — you get direct accountability from enquiry to monthly
              reporting. We are taking on founding clients now with founder-direct
              pricing and our full attention on every contract.
            </p>
          </RevealOnScroll>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_SERVICES.map((service, i) => (
              <RevealOnScroll key={service.href} delayMs={i * 50}>
                <LinkCard
                  href={service.href}
                  title={service.name}
                  description={service.outcome}
                  linkLabel={`Learn more about ${service.name.toLowerCase()}`}
                  imageLabel={service.imageLabel}
                />
              </RevealOnScroll>
            ))}
          </div>
          <p className="mt-8">
            <Link
              href="/services/"
              className="font-semibold text-brand-teal hover:underline"
            >
              View all facilities and cleaning services
            </Link>
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-brand-cream py-16 md:py-20">
        <div className="fm-container">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Industries We Serve
          </h2>
          <p className="mt-4 max-w-3xl text-brand-dark/90">
            We tailor scopes to how each industry uses its buildings — from
            strata common areas to medical tenancies and council facilities.
            Explore dedicated industry pages for sector-specific programmes.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HOME_INDUSTRIES_TEASER.map((industry, i) => {
              const slug = industry.href
                .replace(/^\/industries\//, "")
                .replace(/\/$/, "");
              return (
                <RevealOnScroll key={industry.name} delayMs={i * 50}>
                  <LinkCard
                    href={industry.href}
                    title={industry.name}
                    description={industry.blurb}
                    linkLabel="View industry page"
                    imageLabel={getIndustryVisual(slug).heroLabel}
                  />
                </RevealOnScroll>
              );
            })}
          </div>
          <p className="mt-8">
            <Link
              href="/industries/"
              className="font-semibold text-brand-teal hover:underline"
            >
              Browse all industries we serve
            </Link>
          </p>
        </div>
      </section>

      {/* Where We Work */}
      <section className="bg-brand-offwhite py-16 md:py-20">
        <div className="fm-container">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Where We Work
          </h2>
          <p className="mt-4 max-w-3xl text-brand-dark/90">
            Locally owned in Newcastle — we mobilise across the Hunter, Lake
            Macquarie and the Central Coast with the same documented standards
            and owner oversight on every contract.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_LOCATIONS.map((location, i) => {
              const slug = location.href
                .replace(/^\/locations\//, "")
                .replace(/\/$/, "");
              return (
                <RevealOnScroll key={location.href} delayMs={i * 50}>
                  <LinkCard
                    href={location.href}
                    title={location.name}
                    description={location.blurb}
                    linkLabel={location.linkLabel}
                    badge={location.badge}
                    imageLabel={getLocationVisual(slug).heroLabel}
                  />
                </RevealOnScroll>
              );
            })}
          </div>

          <RevealOnScroll delayMs={80}>
          <div className="mt-8 overflow-hidden rounded-xl border border-brand-teal/15 bg-white shadow-sm fm-hover-lift">
            <div className="border-b border-brand-teal/10 bg-brand-cream px-5 py-4">
              <h3 className="font-display text-lg font-semibold text-brand-dark">
                Service area overview
              </h3>
              <p className="mt-1 text-sm text-brand-dark/80">
                Newcastle HQ with coverage across the wider Hunter and Central
                Coast regions.
              </p>
            </div>
            <ImagePlaceholder label={HOME_MAP_IMAGE_LABEL} aspect="wide" className="rounded-none border-0" />
          </div>
          </RevealOnScroll>
          <p className="mt-8">
            <Link
              href="/locations/"
              className="font-semibold text-brand-teal hover:underline"
            >
              Browse all service areas we cover
            </Link>
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-brand-cream py-16 md:py-20">
        <div className="fm-container">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Why Choose a Newcastle-Owned Facilities Team
          </h2>
          <p className="mt-4 max-w-3xl text-brand-dark/90">
            You get direct access to the owner, modern reporting from day one,
            and a team built for accountability — not a national franchise model.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {HOME_WHY_CHOOSE.map((item, index) => (
              <RevealOnScroll key={item.title} delayMs={index * 60}>
              <article
                className="flex h-full flex-col rounded-xl border border-brand-teal/15 bg-white p-6 shadow-sm fm-hover-lift fm-tap"
              >
                <span className="font-display text-3xl font-bold leading-none text-brand-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-brand-teal">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-dark/90">
                  {item.description}
                </p>
              </article>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delayMs={120}>
          <article className="mt-8 rounded-xl border-2 border-dashed border-brand-teal/35 bg-white/80 p-6 text-center shadow-sm fm-hover-lift">
            <p className="font-display text-lg font-semibold text-brand-dark">
              Meet the owner
            </p>
            <p className="mt-2 text-sm text-brand-dark/80">
              [PLACEHOLDER — insert founder name and headshot photo]
            </p>
          </article>
          </RevealOnScroll>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-brand-offwhite py-16 md:py-20">
        <div className="fm-container">
          <RevealOnScroll>
            <ProcessSteps
              heading="How We Work — Our Process"
              steps={[...ENGAGEMENT_STEPS]}
              footer={
                <>
                  Ready to start?{" "}
                  <Link
                    href="/contact/"
                    className="font-semibold text-brand-teal hover:text-brand-gold"
                  >
                    Request a free quote
                  </Link>{" "}
                  or call {SITE.phoneDisplay}.
                </>
              }
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* Trust placeholders */}
      <section className="bg-brand-dark py-16 text-brand-offwhite">
        <div className="fm-container text-center">
          <h2 className="font-display text-2xl font-bold">
            [TRUST PLACEHOLDER] Reviews &amp; Recognition
          </h2>
          <p className="mx-auto mt-6 max-w-2xl rounded-lg border border-brand-gold/40 p-6 text-brand-offwhite/90">
            [TRUST PLACEHOLDER — insert first Google Business Profile review
            here. Format: star rating (5 stars), reviewer name, review text,
            date, link to Google profile]
          </p>
          <p className="mt-6 text-lg font-semibold">ABN {SITE.abn}</p>
          <p className="mt-4 text-brand-offwhite/80">
            [TRUST PLACEHOLDER — insert first industry certification badge]
          </p>
          <p className="mt-6 font-display text-2xl font-bold text-brand-gold">
            Locally owned and operated in Newcastle, NSW
          </p>
          <p className="mt-4 text-sm">
            Public liability insurance — certificate available on request.
            [PLACEHOLDER — insert public liability insurance amount]
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-offwhite py-16 md:py-20">
        <div className="fm-container">
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-brand-dark/90">
              More answers on our{" "}
              <Link href="/faq/" className="font-semibold text-brand-teal">
                frequently asked questions page
              </Link>
              . Learn more{" "}
              <Link href="/about/" className="font-semibold text-brand-teal">
                about FACILITIES MAN
              </Link>
              .
            </p>
            <div className="mt-8">
              <FaqAccordion faqs={HOME_FAQS} />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CtaSection
        heading="Ready to Get Started?"
        showFormPreview
      />
    </>
  );
}
