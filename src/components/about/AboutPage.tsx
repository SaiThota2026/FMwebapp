import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ABOUT_FAQS, ABOUT_PROCESS_STEPS } from "@/data/about";
import { LOCATIONS, SITE } from "@/lib/site";

export function AboutPage() {
  return (
    <>
      <PageIntro
        breadcrumbs={[{ name: "About", path: "/about/" }]}
        h1="About FACILITIES MAN — Newcastle's Owner-Operated Facilities Team"
        lead="Locally owned, owner-operated facilities management and commercial cleaning — built in Newcastle for businesses that want accountability, not a call centre."
      />

      <div className="fm-container py-10 sm:py-12 md:py-16">
        <section>
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Who We Are
          </h2>
          <div className="mt-4 space-y-4 text-brand-dark/90">
            <p>
              FACILITIES MAN is a Newcastle-based, owner-operated facilities
              management and cleaning company. We are not a national franchise
              with a distant account manager — we are built here, and we
              service the Hunter region first.
            </p>
            <p>
              Our founder brings hands-on experience in facilities operations
              and commercial service delivery. Every enquiry, every site
              walk-through, and every client relationship is handled personally.
              ABN {SITE.abn}.
            </p>
            <p>
              Whether you manage a strata scheme in Lake Macquarie, an office in
              Newcastle CBD, or an industrial site in the Hunter Valley, you get
              the same standard: documented scopes, consistent teams, and a
              direct line to the person accountable for your contract.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Why We Started FACILITIES MAN
          </h2>
          <div className="mt-4 space-y-4 text-brand-dark/90">
            <p>
              We started FACILITIES MAN because we saw a gap — businesses in
              Newcastle deserved a facilities partner who actually showed up,
              answered the phone, and could explain exactly what was cleaned and
              when.
            </p>
            <p>
              Too many cleaning companies rely on call-centre client service, no
              site accountability, and templated scopes that do not reflect the
              actual building. Property managers and facility owners end up
              chasing issues instead of receiving proactive service.
            </p>
            <p>
              We are a new business. That means no inherited bad habits, no
              legacy systems, and no 14-level management chain between you and
              the person who delivers the service. If you want a facilities
              partner who treats your building like it matters, we built
              FACILITIES MAN for you.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            How We Work
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {ABOUT_PROCESS_STEPS.map((step) => (
              <article
                key={step.title}
                className="rounded-lg border border-brand-teal/15 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-teal/40 hover:shadow-lg"
              >
                <h3 className="font-display text-lg font-semibold text-brand-teal">
                  {step.title}
                </h3>
                <p className="mt-2 text-brand-dark/90">{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Our Standards &amp; Insurance
          </h2>
          <div className="mt-8 space-y-8">
            <article>
              <h3 className="font-display text-xl font-semibold text-brand-teal">
                Insurance &amp; Public Liability
              </h3>
              <p className="mt-2 text-brand-dark/90">
                FACILITIES MAN holds public liability insurance. A certificate
                of currency is available on request. ABN {SITE.abn}. We are
                registered for GST.
              </p>
            </article>
            <article>
              <h3 className="font-display text-xl font-semibold text-brand-teal">
                Police Checks &amp; WWVP
              </h3>
              <p className="mt-2 text-brand-dark/90">
                All staff hold current national police checks. Staff working in
                childcare, education, aged care or healthcare also hold Working
                With Vulnerable People (WWVP) clearances where required.
              </p>
            </article>
            <article>
              <h3 className="font-display text-xl font-semibold text-brand-teal">
                Workplace Health &amp; Safety (WHS)
              </h3>
              <p className="mt-2 text-brand-dark/90">
                Safe Work Method Statements (SWMS) are prepared for non-standard
                work. We are induction-ready for client sites and hold relevant
                tickets including EWP and confined-space where applicable. We do
                not currently hold ISO 9001 certification but are working toward
                it.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-xl border border-brand-teal/20 bg-brand-cream p-6">
            <h3 className="font-display text-xl font-semibold text-brand-dark">
              Standards you can request anytime
            </h3>
            <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2 text-brand-dark/90">
              <li>Public liability certificate of currency</li>
              <li>Police check confirmation where applicable</li>
              <li>WWVP details for regulated environments</li>
              <li>SWMS and induction-ready documentation approach</li>
            </ul>
            <p className="mt-4 text-sm text-brand-dark/90">
              If you need compliance evidence for procurement, ask in your enquiry and we will provide what is appropriate for your site category.
            </p>
            <p className="mt-4 text-sm font-semibold">
              <Link href="/contact/" className="text-brand-teal hover:text-brand-gold">
                Send your request via the quote form
              </Link>
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Our Service Area
          </h2>
          <p className="mt-4 text-brand-dark/90">
            We service all Phase 1 regions from our Newcastle base:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {LOCATIONS.map((loc) => (
              <li key={loc.href}>
                <Link
                  href={loc.href}
                  className="font-semibold text-brand-teal hover:text-brand-gold"
                >
                  {loc.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-brand-dark/90">
            Sydney and broader NSW are available on request for multi-site
            portfolios. See our{" "}
            <Link href="/faq/" className="text-brand-teal hover:text-brand-gold">
              frequently asked questions
            </Link>{" "}
            or{" "}
            <Link
              href="/services/"
              className="text-brand-teal hover:text-brand-gold"
            >
              our services
            </Link>{" "}
            for detail.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Get In Touch
          </h2>
          <p className="mt-4 text-brand-dark/90">
            Call{" "}
            <a
              href={`tel:${SITE.phone}`}
              className="font-semibold text-brand-teal"
            >
              {SITE.phoneDisplay}
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="font-semibold text-brand-teal"
            >
              {SITE.email}
            </a>
            . We respond to all enquiries within 24 hours.
          </p>
          <p className="mt-4">
            <Link
              href="/contact/"
              className="inline-flex rounded-lg bg-brand-teal px-5 py-3 font-semibold text-white hover:bg-brand-teal/90"
            >
              Get a free quote
            </Link>
          </p>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Frequently Asked Questions
          </h2>
          <div className="mt-6">
            <FaqAccordion faqs={ABOUT_FAQS} />
          </div>
        </section>
      </div>

      <CtaSection
        heading="Ready to work with a local facilities partner?"
        subCopy="Owner answers every call · ABN 72 697 453 937 · Fully insured"
      />
    </>
  );
}
