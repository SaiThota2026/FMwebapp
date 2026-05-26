import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { JsonLd } from "@/components/ui/JsonLd";
import { strataCleaningData } from "@/data/services/strata-cleaning";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata = createPageMetadata({
  title: strataCleaningData.title,
  description: strataCleaningData.description,
  path: strataCleaningData.path,
  ogTitle: strataCleaningData.ogTitle,
  ogDescription: strataCleaningData.ogDescription,
  ogImage: "/images/og/og-default.jpg",
});

function schema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Strata Cleaning Newcastle",
        serviceType: "Strata Cleaning",
        description: strataCleaningData.description,
        provider: { "@type": "LocalBusiness", "@id": `${SITE.url}/#localbusiness` },
      },
      breadcrumbSchema([
        { name: "Services", path: "/services/" },
        { name: strataCleaningData.name, path: strataCleaningData.path },
      ]),
      faqPageSchema(strataCleaningData.faqs),
    ],
  };
}

export default function StrataCleaningPage() {
  return (
    <>
      <JsonLd data={schema()} />
      <ServicePageTemplate data={strataCleaningData} />
    </>
  );
}

