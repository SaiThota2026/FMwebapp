import Link from "next/link";
import { QuoteForm } from "@/components/contact/QuoteForm";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CONTACT_FAQS, TRADING_HOURS } from "@/data/contact";
import { SITE } from "@/lib/site";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189784.09778925977!2d151.6682746!3d-32.9192953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b7314250ad5bd97%3A0x6529c4fc25182217!2sNewcastle%20NSW%2C%20Australia!4v1700000000000!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau";

export function ContactPage() {
  return (
    <div className="bg-brand-offwhite">
      <section className="bg-brand-cream py-10 md:py-12">
        <div className="fm-container">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-teal sm:text-sm">
            Locally owned and operated in Newcastle
          </p>
          <h1 className="mt-2 font-display text-2xl font-bold text-brand-dark sm:text-3xl md:text-4xl">
            Get a Free Quote — Newcastle Facilities Management &amp; Cleaning
          </h1>
          <p className="mt-4 max-w-2xl text-base text-brand-dark/90 sm:text-lg">
            You will speak with the owner. Not a call centre. Not a script.
            Direct accountability from your first enquiry.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={`tel:${SITE.phone}`}
              className="fm-touch-target inline-flex w-full items-center justify-center rounded-md border-2 border-brand-teal px-5 py-2 font-semibold text-brand-teal hover:bg-brand-teal hover:text-white sm:w-auto"
            >
              Or Call {SITE.phoneDisplay}
            </a>
            <Link
              href="/services/"
              className="inline-flex items-center text-brand-teal font-semibold hover:underline"
            >
              Browse our services
            </Link>
          </div>
        </div>
      </section>

      <div className="fm-container py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="space-y-10 lg:col-span-1">
            <section>
              <h2 className="font-display text-2xl font-bold text-brand-dark">
                Call Us
              </h2>
              <a
                href={`tel:${SITE.phone}`}
                className="mt-3 block break-all font-display text-2xl font-bold text-brand-teal sm:text-3xl"
              >
                {SITE.phoneDisplay}
              </a>
              <p className="mt-3 text-brand-dark/90">
                Call during business hours and the owner will answer personally.
                No receptionist, no call centre — direct accountability from the
                first contact.
              </p>
              <p className="mt-2 text-sm text-brand-dark/80">
                {SITE.tradingHours}
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-brand-dark">
                Email Us
              </h2>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-3 block font-semibold text-brand-teal hover:underline"
              >
                {SITE.email}
              </a>
              <p className="mt-3 text-brand-dark/90">
                Email us with your site address, the services you need, and your
                preferred frequency. We respond to every email within 24 hours.
              </p>
            </section>

            <section className="rounded-lg bg-brand-cream p-5 border border-brand-teal/20">
              <p className="font-semibold text-brand-dark">
                Owner-operated · ABN {SITE.abn}
              </p>
              <p className="mt-2 text-sm text-brand-dark/85">
                Fully insured · Police-checked staff · 24-hour response
                guaranteed
              </p>
            </section>
          </div>

          <div className="lg:col-span-2">
            <section>
              <h2 className="font-display text-2xl font-bold text-brand-dark">
                Request a Free Quote
              </h2>
              <p className="mt-3 text-brand-dark/90">
                Complete the form below and we will respond within 24 hours. For
                urgent work, call us directly on {SITE.phoneDisplay}.
              </p>
              <div className="mt-6">
                <QuoteForm />
              </div>
              <h3 className="mt-8 font-display text-lg font-semibold text-brand-teal">
                What to Include in Your Enquiry
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-brand-dark/90">
                <li>
                  The type and size of the site (e.g. 500m² office, 20-unit
                  strata complex, 2,000m² warehouse)
                </li>
                <li>The services you need and preferred frequency</li>
                <li>
                  Any specific requirements — after-hours access, security
                  clearances, special product preferences
                </li>
              </ul>
            </section>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold text-brand-dark">
            Our Newcastle Office
          </h2>
          <p className="mt-4 max-w-3xl text-brand-dark/90">
            Our team operates from Newcastle, NSW. We do not currently have a
            public walk-in office but we will come to you — site walk-throughs
            are available across Newcastle, Maitland, Lake Macquarie, Hunter
            Valley and the Central Coast.
          </p>
          <div className="mt-6 overflow-hidden rounded-lg border border-brand-teal/20">
            <iframe
              title="FACILITIES MAN service area — Newcastle NSW"
              src={MAP_EMBED}
              className="h-56 w-full border-0 sm:h-72 md:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold text-brand-dark">
            Trading Hours
          </h2>
          <div className="mt-4 overflow-hidden rounded-lg bg-brand-cream">
            <table className="w-full text-left text-sm md:text-base">
              <tbody>
                {TRADING_HOURS.map((row) => (
                  <tr key={row.day} className="border-b border-brand-teal/10">
                    <th className="px-4 py-3 font-semibold text-brand-dark">
                      {row.day}
                    </th>
                    <td className="px-4 py-3 text-brand-dark/90">
                      {row.hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold text-brand-dark">
            What Happens After You Contact Us
          </h2>
          <ol className="mt-6 space-y-4">
            {[
              "We acknowledge your enquiry within 24 hours — usually the same business day.",
              "We schedule a free site walk-through at a time that suits you.",
              "We deliver a written scope of works and clear pricing within 48 hours of the walk-through.",
              "Once agreed, we can typically onboard your site within the same week.",
            ].map((text, i) => (
              <li key={text} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-teal font-bold text-white">
                  {i + 1}
                </span>
                <p className="pt-1 text-brand-dark/90">{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold text-brand-dark">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-brand-dark/90">
            More on our{" "}
            <Link href="/faq/" className="font-semibold text-brand-teal">
              FAQ page
            </Link>{" "}
            or{" "}
            <Link href="/about/" className="font-semibold text-brand-teal">
              about FACILITIES MAN
            </Link>
            .
          </p>
          <div className="mt-6">
            <FaqAccordion faqs={CONTACT_FAQS} />
          </div>
        </section>
      </div>

      <CtaSection heading="Ready to Get Started?" />
    </div>
  );
}
