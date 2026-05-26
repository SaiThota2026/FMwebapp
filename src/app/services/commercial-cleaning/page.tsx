import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { JsonLd } from "@/components/ui/JsonLd";
import { commercialCleaningData } from "@/data/services/commercial-cleaning";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata = createPageMetadata({
  title: commercialCleaningData.title,
  description: commercialCleaningData.description,
  path: commercialCleaningData.path,
  ogTitle: commercialCleaningData.ogTitle,
  ogDescription: commercialCleaningData.ogDescription,
  ogImage: "/images/og/og-default.jpg",
});

function schema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Commercial Cleaning Newcastle",
        serviceType: "Commercial Cleaning",
        description: commercialCleaningData.description,
        provider: { "@type": "LocalBusiness", "@id": `${SITE.url}/#localbusiness` },
        areaServed: commercialCleaningData.areas.map((name) => ({ "@type": "AdministrativeArea", name })),
        offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "AUD", url: `${SITE.url}${commercialCleaningData.path}` },
      },
      breadcrumbSchema([
        { name: "Services", path: "/services/" },
        { name: commercialCleaningData.name, path: commercialCleaningData.path },
      ]),
      faqPageSchema(commercialCleaningData.faqs),
    ],
  };
}

export default function CommercialCleaningPage() {
  return (
    <>
      <JsonLd data={schema()} />
      <ServicePageTemplate data={commercialCleaningData} />
    </>
  );
}

