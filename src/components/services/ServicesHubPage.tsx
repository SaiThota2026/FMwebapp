import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import {
  CORE_SERVICES,
  HUB_INDUSTRIES,
  HUB_LOCATIONS,
  SERVICES_HUB_FAQS,
  SPECIALIST_SERVICES,
} from "@/data/services-hub";

export function ServicesHubPage() {
  return (
    <>
      <PageIntro
        breadcrumbs={[{ name: "Services", path: "/services/" }]}
        h1="Facilities Management & Cleaning Services — Newcastle & NSW"
        lead="FACILITIES MAN delivers a complete range of facilities management and cleaning services for commercial, strata, industrial and government clients across Newcastle, the Hunter Valley and the Central Coast. Every service runs from our Newcastle base under one ABN — no subcontracted unknowns."
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <p className="max-w-3xl text-brand-dark/90">
          Whether you need a single daily office clean or a fully integrated
          facilities programme covering cleaning, grounds maintenance, trades and
          reactive maintenance, we scope, price and deliver under a single
          contract with a single point of contact.
        </p>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Core Services
          </h2>
          <p className="mt-3 font-semibold text-brand-teal">
            Every service runs from one Newcastle team under one ABN. No
            subcontracted unknowns.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CORE_SERVICES.map((service) => (
              <article
                key={service.href}
                className="rounded-xl border border-brand-teal/15 bg-white p-6 shadow-sm fm-hover-lift fm-tap"
              >
                <h3 className="font-display text-xl font-semibold text-brand-dark">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-dark/85">
                  {service.blurb}
                </p>
                <Link
                  href={service.href}
                  className="mt-4 inline-block font-medium text-brand-teal hover:text-brand-gold"
                >
                  Learn more about {service.name.toLowerCase()}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-xl bg-brand-cream p-8 md:p-10">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Specialist Services
          </h2>
          <p className="mt-3 text-brand-dark/90">
            Additional services available by enquiry — contact us to discuss
            scope and mobilisation.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {SPECIALIST_SERVICES.map((s) => (
              <article
                key={s.name}
                className="rounded-lg border border-brand-teal/20 bg-white p-5 fm-hover-lift fm-tap"
              >
                <h3 className="font-display font-semibold text-brand-dark">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm text-brand-dark/85">{s.blurb}</p>
                <Link
                  href="/contact/"
                  className="mt-3 inline-block text-sm font-semibold text-brand-teal"
                >
                  Enquire via contact form
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Industries We Serve
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HUB_INDUSTRIES.map((industry) => (
              <article
                key={industry.name}
                className="rounded-lg border border-brand-teal/15 bg-brand-offwhite p-5 fm-hover-lift fm-tap"
              >
                <h3 className="font-display font-semibold text-brand-teal">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm text-brand-dark/85">
                  {industry.blurb}
                </p>
                <Link
                  href={industry.href}
                  className="mt-3 inline-block text-sm font-semibold text-brand-dark hover:text-brand-teal"
                >
                  Enquire about {industry.name.toLowerCase()}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Where We Deliver
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {HUB_LOCATIONS.map((loc) => (
              <article key={loc.href}>
                <h3 className="font-display text-lg font-semibold text-brand-teal">
                  <Link href={loc.href} className="hover:underline">
                    {loc.name}
                  </Link>
                </h3>
                <p className="mt-2 text-brand-dark/90">
                  FACILITIES MAN mobilises from Newcastle to service {loc.name}{" "}
                  commercial, strata and industrial sites with the same
                  documented standards and owner oversight.
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-brand-dark/90">
            Enquire about sites in Sydney, Brisbane or further afield — we assess
            on request.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            How We Engage
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "Enquiry",
                text: "Contact us by phone, email or the quote form. We respond within 24 hours.",
              },
              {
                title: "Site Walk-Through",
                text: "Free on-site assessment at a time that suits you — no obligation.",
              },
              {
                title: "Written Scope & Quote",
                text: "Clear pricing and task list delivered within 48 hours of the walk-through.",
              },
              {
                title: "Onboarding",
                text: "We can typically start within the same week once the scope is agreed.",
              },
              {
                title: "Ongoing Reporting",
                text: "Monthly photo reports and completed task records for accountability.",
              },
            ].map((step, i) => (
              <li
                key={step.title}
                className="rounded-lg bg-brand-cream p-5"
              >
                <span className="font-display text-2xl font-bold text-brand-gold">
                  {i + 1}
                </span>
                <h3 className="mt-2 font-semibold text-brand-dark">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-brand-dark/85">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Frequently Asked Questions
          </h2>
          <div className="mt-6">
            <FaqAccordion faqs={SERVICES_HUB_FAQS} />
          </div>
        </section>
      </div>

      <CtaSection />
    </>
  );
}
