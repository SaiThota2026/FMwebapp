import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import type { FaqItem } from "@/lib/schema";
import { SITE } from "@/lib/site";

const PRIVACY_FAQS: FaqItem[] = [
  {
    question: "What personal information does FACILITIES MAN collect?",
    answer:
      "We collect contact details (name, email, phone, business name), service enquiry information (site address, service type, uploaded photos), communication records, and anonymised website usage data via Google Analytics. We do not collect sensitive personal information unless you specifically provide it in relation to a service requirement.",
  },
  {
    question: "How does FACILITIES MAN use my information?",
    answer:
      "We use your information to respond to enquiries, provide quotes, deliver contracted services, and send service-related communications. We may use anonymised, aggregated data to improve our website and services. We do not use your information for marketing purposes without your explicit consent, and we never sell personal data.",
  },
  {
    question: "Does FACILITIES MAN share my information with third parties?",
    answer:
      "We share information only with service providers required to operate our business — Google Analytics (website usage data), email service providers (for quote and service communications), and contracted staff on a need-to-know basis. We do not share your information with advertising networks or data brokers.",
  },
  {
    question: "How can I request access to or deletion of my data?",
    answer:
      "Email support@facilitiesman.com.au with your request. We will respond within 5 business days. Deletion requests will be processed subject to any legal retention obligations. You will receive written confirmation of any deletion.",
  },
  {
    question: "Does FACILITIES MAN use cookies and analytics?",
    answer:
      "Yes. We use Google Analytics 4 (GA4) to track anonymised website usage data — pages visited, session duration, device type. GA4 uses cookies (_ga, _ga_[container]) to distinguish users. No personally identifiable information is sent to Google. You can opt out of GA4 tracking using Google's opt-out browser add-on.",
  },
];

export function PrivacyPage() {
  return (
    <>
      <PageIntro
        breadcrumbs={[{ name: "Privacy Policy", path: "/privacy-policy/" }]}
        h1="Privacy Policy"
        lead={`Last updated: ${new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}`}
      />

      <div className="mx-auto max-w-3xl px-4 -mt-2">
        <section className="not-prose rounded-xl border border-brand-teal/20 bg-brand-cream p-6">
          <h3 className="font-display text-xl font-semibold text-brand-dark">
            Privacy at a glance
          </h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-brand-dark/90">
            <li>ABN and contact details are shown for enquiries</li>
            <li>We use Google Analytics (GA4) in anonymised form</li>
            <li>We do not sell personal information</li>
            <li>Retention follows contractual and tax requirements</li>
            <li>We respond to privacy requests within 5 business days</li>
            <li>You can opt out of GA4 tracking via Google&apos;s tool</li>
          </ul>
          <p className="mt-4 text-sm text-brand-dark/90">
            Want help understanding this policy? Contact us with your request and we will respond within 5 business days.
          </p>
        </section>
      </div>

      <div className="prose prose-neutral mx-auto max-w-3xl px-4 py-12 prose-headings:font-display prose-headings:text-brand-dark prose-a:text-brand-teal">
        <section>
          <h2>About This Policy</h2>
          <p>
            FACILITIES MAN (ABN {SITE.abn}) protects the privacy of individuals
            who interact with our website and engage our services. This Privacy
            Policy explains what personal information we collect, how we use it,
            and your rights under the Australian Privacy Principles (APPs)
            contained in the Privacy Act 1988 (Cth).
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <h3>Information you provide to us</h3>
          <ul>
            <li>Contact details: name, email, phone number, business name</li>
            <li>
              Service enquiry details: site address, service type, frequency
              preference, uploaded photos
            </li>
            <li>Communication records: email threads, call logs</li>
          </ul>
          <h3>Information we collect automatically</h3>
          <ul>
            <li>
              Website usage data: pages visited, time on site, device type (via
              Google Analytics GA4)
            </li>
          </ul>
          <p>
            We do not collect sensitive information (health, financial) unless
            explicitly provided by you for service purposes.
          </p>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to enquiries and provide quotes</li>
            <li>To deliver contracted services</li>
            <li>
              To send service-related communications (not marketing, unless opted
              in)
            </li>
            <li>
              To improve our website and service offering using anonymised
              analytics data
            </li>
          </ul>
          <p>
            We do not sell personal information. We do not share it with third
            parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2>How We Store and Protect Your Information</h2>
          <ul>
            <li>SSL encryption on our website</li>
            <li>Limited staff access on a need-to-know basis</li>
            <li>
              Data retained for 7 years for contractual and tax purposes, then
              securely deleted
            </li>
            <li>No data is transferred offshore without consent</li>
          </ul>
        </section>

        <section>
          <h2>Sharing Your Information</h2>
          <p>We may share information with:</p>
          <ul>
            <li>Google (GA4 analytics)</li>
            <li>Email service providers (for quote communications)</li>
            <li>Contracted staff where required for service delivery</li>
          </ul>
          <p>We do not share with advertising platforms.</p>
        </section>

        <section>
          <h2>Your Rights Under Australian Privacy Law</h2>
          <h3>Accessing your information</h3>
          <p>
            You have the right to request access to personal information we hold
            about you.
          </p>
          <h3>Correcting your information</h3>
          <p>
            You may request correction of inaccurate or incomplete information.
          </p>
          <h3>Requesting deletion</h3>
          <p>
            You may request deletion subject to legal retention obligations
            (e.g., financial records retained for 7 years under Australian tax
            law).
          </p>
          <p>
            Contact{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> to exercise any
            right.
          </p>
        </section>

        <section>
          <h2>Cookies &amp; Analytics</h2>
          <h3>Google Analytics (GA4)</h3>
          <p>
            GA4 tracks page views, session data and user behaviour in anonymised
            form. Cookies used include _ga and _ga_[container].
          </p>
          <h3>What cookies we use</h3>
          <p>
            GA4 analytics cookies only. Users can opt out of GA4 tracking via
            Google&apos;s opt-out tool.
          </p>
        </section>

        <section>
          <h2>Contact Us About Privacy</h2>
          <p>
            Email{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Response within 5
            business days. You can also{" "}
            <Link href="/about/">learn about FACILITIES MAN</Link> or{" "}
            <Link href="/contact/">contact us about privacy</Link>.
          </p>
        </section>

        <section className="not-prose mt-16">
          <h2 className="font-display text-2xl font-bold text-brand-dark">
            Privacy FAQs
          </h2>
          <div className="mt-6">
            <FaqAccordion faqs={PRIVACY_FAQS} />
          </div>
        </section>
      </div>
    </>
  );
}
