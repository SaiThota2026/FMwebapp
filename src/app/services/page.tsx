import { ServicesHubPage } from "@/components/services/ServicesHubPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { SERVICES_HUB_FAQS } from "@/data/services-hub";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { SERVICES, SITE } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Commercial Cleaning & Facilities Services Newcastle",
  description:
    "Commercial cleaning, strata, office, industrial and grounds services across Newcastle and NSW. Get a free quote.",
  path: "/services/",
  ogTitle: "Facilities Management & Cleaning Services — Newcastle NSW",
  ogDescription:
    "Browse all FACILITIES MAN services — commercial cleaning, strata, facilities management, office cleaning, grounds maintenance, industrial cleaning. Newcastle-based, NSW-wide. Free quote within 24 hours.",
  ogImage: "/images/og/og-default.jpg",
});

function servicesHubSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        url: `${SITE.url}/services/`,
        name: "Facilities Management & Cleaning Services — Newcastle & NSW",
        description:
          "Complete range of commercial cleaning, strata, facilities management, office cleaning, grounds maintenance and industrial cleaning services. Newcastle-based, NSW-wide.",
        hasPart: SERVICES.map((s) => ({
          "@type": "Service",
          name: s.name,
          url: `${SITE.url}${s.href}`,
        })),
      },
      breadcrumbSchema([{ name: "Services", path: "/services/" }]),
      faqPageSchema(SERVICES_HUB_FAQS),
    ],
  };
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesHubSchema()} />
      <ServicesHubPage />
    </>
  );
}
