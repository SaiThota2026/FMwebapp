import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { JsonLd } from "@/components/ui/JsonLd";
import { industrialCleaningData } from "@/data/services/industrial-cleaning";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata = createPageMetadata({
  title: industrialCleaningData.title,
  description: industrialCleaningData.description,
  path: industrialCleaningData.path,
  ogTitle: industrialCleaningData.ogTitle,
  ogDescription: industrialCleaningData.ogDescription,
  ogImage: "/images/og/og-default.jpg",
});

function schema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Industrial Cleaning Newcastle",
        serviceType: "Industrial Cleaning",
        description: industrialCleaningData.description,
        provider: { "@type": "LocalBusiness", "@id": `${SITE.url}/#localbusiness` },
      },
      breadcrumbSchema([
        { name: "Services", path: "/services/" },
        { name: industrialCleaningData.name, path: industrialCleaningData.path },
      ]),
      faqPageSchema(industrialCleaningData.faqs),
    ],
  };
}

export default function IndustrialCleaningPage() {
  return (
    <>
      <JsonLd data={schema()} />
      <ServicePageTemplate data={industrialCleaningData} />
    </>
  );
}

