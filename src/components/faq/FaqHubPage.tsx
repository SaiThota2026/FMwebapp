import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import {
  FAQ_HUB_INTRO,
  FAQ_HUB_FEATURED,
  FAQ_HUB_SECTIONS,
} from "@/data/faq-hub";
import { SERVICES, SITE } from "@/lib/site";

export function FaqHubPage() {
  return (
    <>
      <PageIntro
        breadcrumbs={[{ name: "FAQ", path: "/faq/" }]}
        h1="Frequently Asked Questions — Commercial Cleaning & Facilities Management Newcastle"
        lead={FAQ_HUB_INTRO}
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <section className="mb-16 rounded-xl border border-brand-teal/20 bg-brand-cream p-6 md:p-8">
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

        {FAQ_HUB_SECTIONS.map((section) => (
          <section key={section.heading} className="mb-16">
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
        ))}

        <section className="rounded-xl border border-brand-gold/30 bg-brand-cream p-6">
          <p className="font-semibold text-brand-dark">Related services:</p>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="rounded-full bg-white px-3 py-1 text-brand-teal hover:text-brand-gold"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-brand-dark/90">
            Call{" "}
            <a
              href={`tel:${SITE.phone}`}
              className="font-semibold text-brand-teal"
            >
              {SITE.phoneDisplay}
            </a>{" "}
            — the owner answers during business hours. Email{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="font-semibold text-brand-teal"
            >
              {SITE.email}
            </a>{" "}
            and we will respond within 24 hours.
          </p>
          <p className="mt-4">
            <Link
              href="/contact/"
              className="font-semibold text-brand-teal hover:text-brand-gold"
            >
              Get a free quote
            </Link>
            {" · "}
            <Link
              href="/about/"
              className="font-semibold text-brand-teal hover:text-brand-gold"
            >
              About FACILITIES MAN
            </Link>
            {" · "}
            <Link
              href="/locations/newcastle/"
              className="font-semibold text-brand-teal hover:text-brand-gold"
            >
              Cleaning services in Newcastle
            </Link>
          </p>
        </section>
      </div>

      <CtaSection
        heading="Need a quote instead of an FAQ?"
        subCopy="Free site walk-through · Written scope within 48 hours · 24-hour response promise"
      />
    </>
  );
}
