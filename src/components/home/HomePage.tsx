import Link from "next/link";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { TrustStrip } from "@/components/ui/TrustStrip";
import {
  HOME_FAQS,
  HOME_INDUSTRIES,
  HOME_LOCATIONS,
  HOME_MAP_IMAGE_LABEL,
  HOME_SERVICES,
  HOME_WHY_CHOOSE,
} from "@/data/home";
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
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_SERVICES.map((service) => (
              <article
                key={service.href}
                className="flex flex-col rounded-lg bg-brand-cream p-6 shadow-sm"
              >
                <ImagePlaceholder
                  label={service.imageLabel}
                  aspect="video"
                  className="mb-4"
                />
                <h3 className="font-display text-xl font-semibold text-brand-dark">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-brand-dark/85">
                  {service.outcome}
                </p>
                <Link
                  href={service.href}
                  className="mt-4 font-semibold text-brand-teal hover:text-brand-dark"
                >
                  Learn more about {service.name.toLowerCase()}
                </Link>
              </article>
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
            Dedicated industry pages are coming in Phase 2; contact us now for
            sector-specific programmes.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HOME_INDUSTRIES.map((industry) => (
              <article
                key={industry.name}
                className="rounded-lg border border-brand-teal/20 bg-white p-6"
              >
                <h3 className="font-display text-lg font-semibold text-brand-teal">
                  {industry.name}
                </h3>
                <p className="mt-2 text-brand-dark/85">{industry.blurb}</p>
                <Link
                  href={industry.href}
                  className="mt-4 inline-block font-semibold text-brand-dark hover:text-brand-teal"
                >
                  Enquire about {industry.name.toLowerCase()} services
                </Link>
              </article>
            ))}
          </div>
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
            {HOME_LOCATIONS.map((location) => (
              <article
                key={location.href}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-brand-teal/15 bg-white shadow-sm fm-hover-lift"
              >
                <div className="border-b border-brand-teal/10 bg-brand-cream/80 px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    {location.badge}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-brand-teal">
                    {location.name}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="flex-1 text-sm leading-relaxed text-brand-dark/90">
                    {location.blurb}
                  </p>
                  <Link
                    href={location.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:text-brand-teal"
                  >
                    {location.linkLabel}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-brand-teal/15 bg-white shadow-sm">
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
              <article
                key={item.title}
                className="flex h-full flex-col rounded-xl border border-brand-teal/15 bg-white p-6 shadow-sm fm-hover-lift"
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
            ))}
          </div>

          <article className="mt-8 rounded-xl border-2 border-dashed border-brand-teal/35 bg-white/80 p-6 text-center shadow-sm">
            <p className="font-display text-lg font-semibold text-brand-dark">
              Meet the owner
            </p>
            <p className="mt-2 text-sm text-brand-dark/80">
              [PLACEHOLDER — insert founder name and headshot photo]
            </p>
          </article>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-brand-offwhite py-16 md:py-20">
        <div className="fm-container">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            How We Work — Our Process
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "Enquire",
                text: "Contact us by phone, email or the quote form. We respond within 24 hours — the owner reads every enquiry personally.",
              },
              {
                step: "Site Walk-Through",
                text: "We visit your site at a time that suits you. The walk-through is at no cost and takes us through every area you need serviced.",
              },
              {
                step: "Scope & Quote",
                text: "We deliver a written scope of works and clear pricing — no hidden fees, no vague line items. You know exactly what you are getting.",
              },
              {
                step: "Service & Report",
                text: "We begin on the agreed date. You receive a monthly report with photos and completed task records for full accountability.",
              },
            ].map((item, i) => (
              <li
                key={item.step}
                className="rounded-lg border border-brand-teal/20 bg-white p-6"
              >
                <span className="font-display text-3xl font-bold text-brand-gold">
                  {i + 1}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold">
                  {item.step}
                </h3>
                <p className="mt-2 text-sm text-brand-dark/85">{item.text}</p>
              </li>
            ))}
          </ol>
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
        </div>
      </section>

      <CtaSection
        heading="Ready to Get Started?"
        showFormPreview
      />
    </>
  );
}
