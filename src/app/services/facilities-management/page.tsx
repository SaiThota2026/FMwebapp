import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { JsonLd } from "@/components/ui/JsonLd";
import { facilitiesManagementData } from "@/data/services/facilities-management";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata = createPageMetadata({
  title: facilitiesManagementData.title,
  description: facilitiesManagementData.description,
  path: facilitiesManagementData.path,
  ogTitle: facilitiesManagementData.ogTitle,
  ogDescription: facilitiesManagementData.ogDescription,
  ogImage: "/images/og/og-default.jpg",
});

function schema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Facilities Management Newcastle",
        serviceType: "Facilities Management",
        description: facilitiesManagementData.description,
        provider: { "@type": "LocalBusiness", "@id": `${SITE.url}/#localbusiness` },
      },
      breadcrumbSchema([
        { name: "Services", path: "/services/" },
        { name: facilitiesManagementData.name, path: facilitiesManagementData.path },
      ]),
      faqPageSchema(facilitiesManagementData.faqs),
    ],
  };
}

export default function FacilitiesManagementPage() {
  return (
    <>
      <JsonLd data={schema()} />
      <ServicePageTemplate data={facilitiesManagementData} />
    </>
  );
}

