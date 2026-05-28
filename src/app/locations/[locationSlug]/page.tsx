import { notFound } from "next/navigation";
import { LocationPageTemplate } from "@/components/locations/LocationPageTemplate";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  getLocationBySlug,
  LOCATION_SLUGS,
} from "@/data/locations";
import { createPageMetadata } from "@/lib/metadata";
import { locationPageSchema } from "@/lib/schema";

type Props = { params: Promise<{ locationSlug: string }> };

export function generateStaticParams() {
  return LOCATION_SLUGS.map((locationSlug) => ({ locationSlug }));
}

export async function generateMetadata({ params }: Props) {
  const { locationSlug } = await params;
  const data = getLocationBySlug(locationSlug);
  if (!data) return {};

  return createPageMetadata({
    title: data.title,
    description: data.description,
    path: data.path,
    ogTitle: data.ogTitle,
    ogDescription: data.ogDescription,
    ogImage: "/images/og/og-default.jpg",
  });
}

export default async function LocationRoute({ params }: Props) {
  const { locationSlug } = await params;
  const data = getLocationBySlug(locationSlug);
  if (!data) notFound();

  return (
    <>
      <JsonLd
        data={locationPageSchema({
          name: data.name,
          path: data.path,
          areaServed: data.schemaAreaServed,
          faqs: data.faqs,
        })}
      />
      <LocationPageTemplate data={data} />
    </>
  );
}
