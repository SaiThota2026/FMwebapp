import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { LinkCard } from "@/components/ui/LinkCard";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ABOUT_FAQS, ABOUT_PROCESS_STEPS } from "@/data/about";
import { getLocationVisual } from "@/lib/page-visuals";
import { LOCATIONS, SITE } from "@/lib/site";

const ABOUT_VISUAL = {
  heroLabel:
    "FACILITIES MAN founder and team on a Newcastle commercial site — about-founder.webp",
  sectionLabels: [
    "Owner conducting a facilities site walk-through in Newcastle — about-walkthrough.webp",
    "Compliance documentation and insurance certificates — about-compliance.webp",
  ],
  regionLabel:
    "Newcastle Hunter and Central Coast service area — about-service-area.webp",
};

export function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "About", path: "/about/" }]}
        h1="About FACILITIES MAN — Newcastle's Owner-Operated Facilities Team"
        lead="Locally owned, owner-operated facilities management and commercial cleaning — built in Newcastle for businesses that want accountability, not a call centre."
        visual={ABOUT_VISUAL}
      />

      <div className="fm-container py-12 md:py-16">
        <RevealOnScroll>
          <section>
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Who We Are
            </h2>
            <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="space-y-4 text-brand-dark/90">
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
              <ImagePlaceholder
                label={ABOUT_VISUAL.sectionLabels[0]}
                aspect="video"
                className="rounded-xl"
              />
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={60}>
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
        </RevealOnScroll>

        <RevealOnScroll delayMs={80}>
          <div className="mt-16">
            <ProcessSteps
              heading="How We Work"
              steps={ABOUT_PROCESS_STEPS.map((step) => ({
                title: step.title,
                description: step.body,
              }))}
              footer={
                <>
                  <Link
                    href="/contact/"
                    className="font-semibold text-brand-teal hover:text-brand-gold"
                  >
                    Book a free site walk-through
                  </Link>{" "}
                  — we respond within 24 hours.
                </>
              }
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={100}>
          <section className="mt-16">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Our Standards &amp; Insurance
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Insurance & Public Liability",
                  body: `FACILITIES MAN holds public liability insurance. A certificate of currency is available on request. ABN ${SITE.abn}. We are registered for GST.`,
                },
                {
                  title: "Police Checks & WWVP",
                  body: "All staff hold current national police checks. Staff working in childcare, education, aged care or healthcare also hold Working With Vulnerable People (WWVP) clearances where required.",
                },
                {
                  title: "Workplace Health & Safety (WHS)",
                  body: "Safe Work Method Statements (SWMS) are prepared for non-standard work. We are induction-ready for client sites and hold relevant tickets including EWP and confined-space where applicable.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-brand-teal/15 bg-white p-5 shadow-sm fm-hover-lift fm-tap"
                >
                  <h3 className="font-display text-lg font-semibold text-brand-teal">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-dark/90">{item.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-brand-teal/20 bg-brand-cream p-6 md:p-8 fm-hover-lift">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
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
                    If you need compliance evidence for procurement, ask in your
                    enquiry and we will provide what is appropriate for your site
                    category.
                  </p>
                  <p className="mt-4 text-sm font-semibold">
                    <Link
                      href="/contact/"
                      className="text-brand-teal hover:text-brand-gold"
                    >
                      Send your request via the quote form
                    </Link>
                  </p>
                </div>
                <ImagePlaceholder
                  label={ABOUT_VISUAL.sectionLabels[1]}
                  aspect="video"
                  className="rounded-xl"
                />
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <section className="mt-16">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Our Service Area
            </h2>
            <p className="mt-4 max-w-3xl text-brand-dark/90">
              We service Newcastle, the Hunter, Lake Macquarie and the Central
              Coast from our Newcastle base — with the same documented standards on
              every contract.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {LOCATIONS.map((loc, i) => {
                const slug = loc.href.replace(/^\/locations\//, "").replace(/\/$/, "");
                return (
                  <RevealOnScroll key={loc.href} delayMs={i * 40}>
                    <LinkCard
                      href={loc.href}
                      title={loc.name}
                      description={`Facilities and cleaning services in ${loc.name}.`}
                      linkLabel={`View ${loc.name} services`}
                      imageLabel={getLocationVisual(slug).heroLabel}
                    />
                  </RevealOnScroll>
                );
              })}
            </div>
            <p className="mt-6 text-brand-dark/90">
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
        </RevealOnScroll>

        <RevealOnScroll delayMs={140}>
          <section className="mt-16 overflow-hidden rounded-xl border border-brand-teal/15 bg-brand-cream p-8 text-center md:p-10">
            <h2 className="font-display text-2xl font-bold text-brand-dark">
              Get In Touch
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-dark/90">
              Call{" "}
              <a
                href={`tel:${SITE.phone}`}
                className="font-semibold text-brand-teal hover:text-brand-gold"
              >
                {SITE.phoneDisplay}
              </a>{" "}
              or email{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-semibold text-brand-teal hover:text-brand-gold"
              >
                {SITE.email}
              </a>
              . We respond to all enquiries within 24 hours.
            </p>
            <Link
              href="/contact/"
              className="fm-touch-target mt-6 inline-flex rounded-md bg-brand-gold px-6 py-3 font-semibold text-brand-dark fm-hover-lift fm-tap"
            >
              Get a free quote
            </Link>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={160}>
          <section className="mt-16">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Frequently Asked Questions
            </h2>
            <div className="mt-6">
              <FaqAccordion faqs={ABOUT_FAQS} />
            </div>
          </section>
        </RevealOnScroll>
      </div>

      <CtaSection
        heading="Ready to work with a local facilities partner?"
        subCopy="Owner answers every call · ABN 72 697 453 937 · Fully insured"
      />
    </>
  );
}
