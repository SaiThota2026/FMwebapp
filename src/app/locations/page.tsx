import { LocationsHubTemplate } from "@/components/locations/LocationsHubTemplate";
import { JsonLd } from "@/components/ui/JsonLd";
import { LOCATIONS_HUB_FAQS } from "@/data/locations-hub";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { LOCATIONS, SITE } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Service Areas — Newcastle, Hunter Valley & Central Coast",
  description:
    "FACILITIES MAN service areas across Newcastle, Maitland, Lake Macquarie, Hunter Valley, Central Coast and regional NSW. Owner-operated cleaning and facilities.",
  path: "/locations/",
  ogTitle: "Facilities & Cleaning Service Areas — FACILITIES MAN",
  ogDescription:
    "Browse all FACILITIES MAN service regions — Newcastle-based coverage across the Hunter, Lake Macquarie and Central Coast.",
  ogImage: "/images/og/og-default.jpg",
});

function locationsHubSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        url: `${SITE.url}/locations/`,
        name: "Facilities & Cleaning Service Areas — Newcastle, Hunter & Central Coast",
        description:
          "Regional coverage for FACILITIES MAN facilities management and commercial cleaning across Newcastle and NSW.",
        hasPart: LOCATIONS.map((l) => ({
          "@type": "WebPage",
          name: l.name,
          url: `${SITE.url}${l.href}`,
        })),
      },
      breadcrumbSchema([{ name: "Locations", path: "/locations/" }]),
      faqPageSchema(LOCATIONS_HUB_FAQS),
    ],
  };
}

export default function LocationsHubPage() {
  return (
    <>
      <JsonLd data={locationsHubSchema()} />
      <LocationsHubTemplate />
    </>
  );
}
