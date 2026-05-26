import { FaqHubPage } from "@/components/faq/FaqHubPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { FAQ_HUB_FEATURED } from "@/data/faq-hub";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Cleaning & Facilities FAQs — FACILITIES MAN Newcastle",
  description:
    "Answers to common questions about commercial cleaning, strata cleaning and facilities management in Newcastle and across NSW. Free quotes available.",
  path: "/faq/",
  ogTitle: "Cleaning & Facilities Management FAQs — Newcastle NSW",
  ogDescription:
    "Find answers to pricing, scope, compliance, onboarding and service-specific questions. FACILITIES MAN — Newcastle's owner-operated facilities partner.",
  ogImage: "/images/og/og-default.jpg",
});

function schema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...faqPageSchema(FAQ_HUB_FEATURED),
        url: "https://www.facilitiesman.com.au/faq/",
        name: "Frequently Asked Questions — FACILITIES MAN",
      },
      breadcrumbSchema([{ name: "FAQ", path: "/faq/" }]),
    ],
  };
}

export default function FaqRoute() {
  return (
    <>
      <JsonLd data={schema()} />
      <FaqHubPage />
    </>
  );
}
