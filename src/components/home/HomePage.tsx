import Link from "next/link";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { TrustStrip } from "@/components/ui/TrustStrip";
import {
  HOME_FAQS,
  HOME_INDUSTRIES,
  HOME_SERVICES,
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
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Locally owned and operated in Newcastle
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
            Newcastle&apos;s Facilities Management &amp; Commercial Cleaning
            Specialists
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-offwhite/90">
            From one office to whole building portfolios — cleaning, grounds,
            maintenance and facilities management under one Newcastle team.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center rounded-md bg-brand-gold px-6 py-3 font-semibold text-brand-dark fm-hover-lift fm-tap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center rounded-md border-2 border-brand-teal px-6 py-3 font-semibold text-brand-teal fm-hover-lift fm-tap hover:bg-brand-teal hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40"
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
        <div className="mx-auto max-w-6xl px-4">
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
        <div className="mx-auto max-w-6xl px-4">
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
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Where We Work
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <article>
                <h3 className="font-display text-xl font-semibold text-brand-teal">
                  Newcastle
                </h3>
                <p className="mt-2 text-brand-dark/90">
                  Our home base covers Newcastle CBD, the Honeysuckle precinct,
                  Hunter River waterfront, The Junction, Kotara, Mayfield and
                  Charlestown. We mobilise quickly for commercial, strata and
                  industrial sites near Newcastle Interchange and the port
                  corridor.
                </p>
                <Link
                  href="/locations/newcastle/"
                  className="mt-2 inline-block font-semibold text-brand-teal"
                >
                  Newcastle facilities services
                </Link>
              </article>
              <article>
                <h3 className="font-display text-xl font-semibold text-brand-teal">
                  Maitland
                </h3>
                <p className="mt-2 text-brand-dark/90">
                  We service the Hunter corridor growth areas including
                  Thornton, Rutherford industrial estate and East Maitland
                  aged-care and retail strips. Commercial cleaning and industrial
                  programmes are tailored to Maitland&apos;s expanding commercial
                  footprint.
                </p>
                <Link
                  href="/locations/maitland/"
                  className="mt-2 inline-block font-semibold text-brand-teal"
                >
                  Facilities services in Maitland
                </Link>
              </article>
              <article>
                <h3 className="font-display text-xl font-semibold text-brand-teal">
                  Lake Macquarie
                </h3>
                <p className="mt-2 text-brand-dark/90">
                  Australia&apos;s largest local government area includes
                  Charlestown commercial centre, Warners Bay and Belmont. We
                  deliver strata, office and grounds programmes across the lake
                  suburbs with Newcastle-based coordination.
                </p>
                <Link
                  href="/locations/lake-macquarie/"
                  className="mt-2 inline-block font-semibold text-brand-teal"
                >
                  Lake Macquarie cleaning services
                </Link>
              </article>
            </div>
            <div className="space-y-8">
              <article>
                <h3 className="font-display text-xl font-semibold text-brand-teal">
                  Hunter Valley
                </h3>
                <p className="mt-2 text-brand-dark/90">
                  From Cessnock and Singleton mining and processing sites to
                  Pokolbin wineries, we cover industrial cleaning and facilities
                  support across the valley. Scopes account for dust, traffic
                  and seasonal vineyard operations.
                </p>
                <Link
                  href="/locations/hunter-valley/"
                  className="mt-2 inline-block font-semibold text-brand-teal"
                >
                  Hunter Valley facilities services
                </Link>
              </article>
              <article>
                <h3 className="font-display text-xl font-semibold text-brand-teal">
                  Central Coast
                </h3>
                <p className="mt-2 text-brand-dark/90">
                  Gosford CBD, Tuggerah commercial precinct, Erina and Terrigal
                  hospitality sites receive the same documented standards we
                  apply in Newcastle. Contact us for Central Coast mobilisation
                  and pricing.
                </p>
                <Link
                  href="/locations/central-coast/"
                  className="mt-2 inline-block font-semibold text-brand-teal"
                >
                  Central Coast cleaning services
                </Link>
              </article>
              <ImagePlaceholder
                label="newcastle-facilities-services-map.webp — Map showing FACILITIES MAN service areas"
                aspect="video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-brand-cream py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Why Choose a Newcastle-Owned Facilities Team
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <article>
              <h3 className="font-display text-xl font-semibold text-brand-teal">
                Owner-Operated Accountability
              </h3>
              <p className="mt-3 text-brand-dark/90">
                The owner answers the phone — not a call centre. You speak
                directly with the decision-maker who scopes your site and
                oversees delivery. Every contract is personally managed, so
                issues are resolved quickly without ticket queues.
              </p>
            </article>
            <article>
              <h3 className="font-display text-xl font-semibold text-brand-teal">
                Fully Insured &amp; Compliant
              </h3>
              <p className="mt-3 text-brand-dark/90">
                ABN {SITE.abn}. Public liability insurance certificate available
                on request — [PLACEHOLDER — insert public liability insurance
                amount, e.g. $20 million]. All staff are police-checked; WWVP
                checks are held for childcare and education sites.
              </p>
            </article>
            <article>
              <h3 className="font-display text-xl font-semibold text-brand-teal">
                Modern Systems from Day One
              </h3>
              <p className="mt-3 text-brand-dark/90">
                Digital scopes of work, photo reporting and clear task records
                from your first service — no legacy paperwork. You receive
                monthly reports your committee or facilities manager can audit
                without chasing updates.
              </p>
            </article>
          </div>
          <p className="mt-8 rounded-lg border border-dashed border-brand-teal/40 bg-white p-4 text-center text-sm">
            [PLACEHOLDER — insert founder name and headshot photo]
          </p>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-brand-offwhite py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
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
        <div className="mx-auto max-w-6xl px-4 text-center">
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
        <div className="mx-auto max-w-6xl px-4">
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
