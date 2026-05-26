import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import type { LocationPageData } from "@/data/locations/types";
import { SERVICES } from "@/lib/site";

export function LocationPageTemplate({ data }: { data: LocationPageData }) {
  return (
    <>
      <PageIntro
        breadcrumbs={[{ name: data.name, path: data.path }]}
        h1={data.h1}
        lead={data.intro}
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <section className="rounded-xl border border-brand-teal/20 bg-brand-cream p-6 md:p-8">
          <h3 className="font-display text-xl font-semibold text-brand-dark">
            What you can expect for {data.name}
          </h3>
          <ol className="mt-4 grid gap-4 md:grid-cols-3">
            <li className="rounded-lg bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <p className="text-sm font-semibold text-brand-teal">
                1) Local assessment
              </p>
              <p className="mt-2 text-sm text-brand-dark/90">
                We visit your site to confirm access, frequency, and presentation expectations.
              </p>
            </li>
            <li className="rounded-lg bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <p className="text-sm font-semibold text-brand-teal">
                2) A clear scope
              </p>
              <p className="mt-2 text-sm text-brand-dark/90">
                You receive a documented scope and quote within 48 hours of the walk-through.
              </p>
            </li>
            <li className="rounded-lg bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <p className="text-sm font-semibold text-brand-teal">
                3) Owner-led delivery
              </p>
              <p className="mt-2 text-sm text-brand-dark/90">
                Delivery is supported by direct owner oversight, with monthly reporting for accountability.
              </p>
            </li>
          </ol>
          <p className="mt-5 text-sm text-brand-dark/90">
            If you want a fast start, include your{" "}
            <Link href="/contact/" className="font-semibold text-brand-teal hover:text-brand-gold">
              site address
            </Link>{" "}
            and preferred frequency in your enquiry.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Facilities &amp; Cleaning Services in {data.name}
          </h2>
          <p className="mt-4 text-brand-dark/90">{data.servicesIntro}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {data.services.map((service) => (
              <article
                key={service.href}
                className="rounded-lg border border-brand-teal/15 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-teal/40 hover:shadow-lg"
              >
                <h3 className="font-display text-lg font-semibold text-brand-teal">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-brand-dark/85">{service.blurb}</p>
                <Link
                  href={service.href}
                  className="mt-3 inline-block text-sm font-semibold text-brand-dark hover:text-brand-teal"
                >
                  View {service.name.toLowerCase()} services
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-6">
            <Link href="/services/" className="font-semibold text-brand-teal">
              View all FACILITIES MAN services
            </Link>
          </p>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Suburbs &amp; Areas We Cover
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {data.suburbClusters.map((cluster) => (
              <article
                key={cluster.heading}
                className="rounded-lg bg-brand-cream p-5"
              >
                <h3 className="font-display text-lg font-semibold text-brand-teal">
                  {cluster.heading}
                </h3>
                <p className="mt-2 text-brand-dark/90">{cluster.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Why a Locally-Based Team Matters in {data.name}
          </h2>
          <div className="mt-4 space-y-4 text-brand-dark/90">
            {data.localTeamBody.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Industries We Service in {data.name}
          </h2>
          <div className="mt-4 space-y-4 text-brand-dark/90">
            {data.industriesBody.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-lg border border-brand-teal/20">
          <iframe
            title={data.mapTitle}
            src={data.mapEmbed}
            className="h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Frequently Asked Questions
          </h2>
          <div className="mt-6">
            <FaqAccordion faqs={data.faqs} />
          </div>
        </section>

        <section className="mt-12 rounded-xl border border-brand-gold/30 bg-brand-cream p-6">
          <p className="font-semibold text-brand-dark">
            All core services available in {data.name}:
          </p>
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
      </div>

      <CtaSection
        heading={data.ctaHeading}
        subCopy="Tell us your suburb and service needs. We respond within 24 hours and can usually schedule a free site walk-through within 2-3 business days."
      />
    </>
  );
}
