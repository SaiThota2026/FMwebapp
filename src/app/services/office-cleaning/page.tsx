import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { JsonLd } from "@/components/ui/JsonLd";
import { officeCleaningData } from "@/data/services/office-cleaning";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata = createPageMetadata({
  title: officeCleaningData.title,
  description: officeCleaningData.description,
  path: officeCleaningData.path,
  ogTitle: officeCleaningData.ogTitle,
  ogDescription: officeCleaningData.ogDescription,
  ogImage: "/images/og/og-default.jpg",
});

function schema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Office Cleaning Newcastle",
        serviceType: "Office Cleaning",
        description: officeCleaningData.description,
        provider: { "@type": "LocalBusiness", "@id": `${SITE.url}/#localbusiness` },
      },
      breadcrumbSchema([
        { name: "Services", path: "/services/" },
        { name: officeCleaningData.name, path: officeCleaningData.path },
      ]),
      faqPageSchema(officeCleaningData.faqs),
    ],
  };
}

export default function OfficeCleaningPage() {
  return (
    <>
      <JsonLd data={schema()} />
      <ServicePageTemplate data={officeCleaningData} />
    </>
  );
}

