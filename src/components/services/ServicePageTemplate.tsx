import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import type { ServicePageData } from "@/data/services/types";

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  return (
    <>
      <PageIntro
        breadcrumbs={[
          { name: "Services", path: "/services/" },
          { name: data.name, path: data.path },
        ]}
        h1={data.h1}
        lead={data.lead}
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <section className="rounded-xl border border-brand-teal/20 bg-brand-cream p-6 md:p-8">
          <h3 className="font-display text-xl font-semibold text-brand-dark">
            What happens after you enquire?
          </h3>
          <ol className="mt-4 grid gap-4 md:grid-cols-3">
            <li className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-brand-teal">
                1) We confirm scope
              </p>
              <p className="mt-2 text-sm text-brand-dark/90">
                We understand your site, access and frequency needs, then confirm what will be delivered.
              </p>
            </li>
            <li className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-brand-teal">
                2) You receive a written plan
              </p>
              <p className="mt-2 text-sm text-brand-dark/90">
                You get a documented scope and quote within 48 hours, in plain English.
              </p>
            </li>
            <li className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-brand-teal">
                3) Delivery starts
              </p>
              <p className="mt-2 text-sm text-brand-dark/90">
                We mobilise fast, report monthly, and escalate issues with direct owner accountability.
              </p>
            </li>
          </ol>
          <p className="mt-5 text-sm text-brand-dark/90">
            Want the quickest path? Use the{" "}
            <Link href="/contact/" className="font-semibold text-brand-teal hover:text-brand-gold">
              quote form
            </Link>{" "}
            and include your site address and preferred frequency.
          </p>
        </section>

        {data.sections.map((section) => (
          <section key={section.heading} className="mt-12 first:mt-0">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4 text-brand-dark/90">
              {section.body.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-12 rounded-xl bg-brand-cream p-6 md:p-8">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Areas We Serve
          </h2>
          <p className="mt-3 text-brand-dark/90">
            We deliver this service across Newcastle, Maitland, Lake Macquarie,
            the Hunter Valley and the Central Coast, with broader NSW support on
            request.
          </p>
          <ul className="mt-4 grid gap-2 text-brand-dark/90 md:grid-cols-2">
            {data.areas.map((area) => (
              <li key={area} className="list-inside list-disc">
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            Not on this list? <Link href="/contact/" className="font-semibold text-brand-teal">Contact us</Link> and we will assess your site.
          </p>
          <p className="mt-2 text-sm">
            Looking for all service options?{" "}
            <Link href="/services/" className="font-semibold text-brand-teal">
              View the full services hub
            </Link>
            .
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Frequently Asked Questions
          </h2>
          <div className="mt-6">
            <FaqAccordion faqs={data.faqs} />
          </div>
        </section>
      </div>

      <CtaSection heading={data.ctaHeading} subCopy={data.ctaSubCopy} />
    </>
  );
}

