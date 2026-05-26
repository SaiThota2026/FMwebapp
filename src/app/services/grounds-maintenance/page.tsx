import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { JsonLd } from "@/components/ui/JsonLd";
import { groundsMaintenanceData } from "@/data/services/grounds-maintenance";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata = createPageMetadata({
  title: groundsMaintenanceData.title,
  description: groundsMaintenanceData.description,
  path: groundsMaintenanceData.path,
  ogTitle: groundsMaintenanceData.ogTitle,
  ogDescription: groundsMaintenanceData.ogDescription,
  ogImage: "/images/og/og-default.jpg",
});

function schema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Grounds & Garden Maintenance Newcastle",
        serviceType: "Grounds & Garden Maintenance",
        description: groundsMaintenanceData.description,
        provider: { "@type": "LocalBusiness", "@id": `${SITE.url}/#localbusiness` },
      },
      breadcrumbSchema([
        { name: "Services", path: "/services/" },
        { name: groundsMaintenanceData.name, path: groundsMaintenanceData.path },
      ]),
      faqPageSchema(groundsMaintenanceData.faqs),
    ],
  };
}

export default function GroundsMaintenancePage() {
  return (
    <>
      <JsonLd data={schema()} />
      <ServicePageTemplate data={groundsMaintenanceData} />
    </>
  );
}

