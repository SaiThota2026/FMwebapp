import { PrivacyPage } from "@/components/privacy/PrivacyPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const privacyFaqs = [
  {
    question: "What personal information does FACILITIES MAN collect?",
    answer:
      "We collect contact details, service enquiry information, communication records and anonymised website usage data via Google Analytics. We do not collect sensitive personal information unless specifically provided in relation to a service requirement.",
  },
  {
    question: "Does FACILITIES MAN share my information with third parties?",
    answer:
      "We share information only with service providers required to operate our business — Google Analytics, email providers and contracted staff on a need-to-know basis. We do not share with advertising networks or data brokers.",
  },
  {
    question: "How can I request access to or deletion of my data?",
    answer:
      "Email support@facilitiesman.com.au with your request. We will respond within 5 business days. Deletion is processed subject to legal retention obligations.",
  },
];

export const metadata = createPageMetadata({
  title: "Privacy Policy — FACILITIES MAN",
  description:
    "Privacy policy for FACILITIES MAN. How we collect, use and protect personal information in line with the Australian Privacy Principles.",
  path: "/privacy-policy/",
  robots: { index: false, follow: true },
});

function schema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Privacy Policy — FACILITIES MAN",
        url: `${SITE.url}/privacy-policy/`,
        description:
          "Privacy policy for FACILITIES MAN. How we collect, use and protect personal information in line with the Australian Privacy Principles.",
        publisher: { "@type": "Organization", "@id": `${SITE.url}/#org` },
      },
      breadcrumbSchema([{ name: "Privacy Policy", path: "/privacy-policy/" }]),
      faqPageSchema(privacyFaqs),
    ],
  };
}

export default function PrivacyRoute() {
  return (
    <>
      <JsonLd data={schema()} />
      <PrivacyPage />
    </>
  );
}
