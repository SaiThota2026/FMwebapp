import { notFound } from "next/navigation";
import { LocationPageTemplate } from "@/components/locations/LocationPageTemplate";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  getLocationBySlug,
  LOCATION_SLUGS,
} from "@/data/locations";
import { createPageMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  faqPageSchema,
  locationLocalBusinessSchema,
} from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return LOCATION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const data = getLocationBySlug(slug);
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

function schema(data: NonNullable<ReturnType<typeof getLocationBySlug>>) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      locationLocalBusinessSchema({
        name: data.name,
        path: data.path,
        areaServed: data.schemaAreaServed,
      }),
      breadcrumbSchema([{ name: data.name, path: data.path }]),
      faqPageSchema(data.faqs),
    ],
  };
}

export default async function LocationRoute({ params }: Props) {
  const { slug } = await params;
  const data = getLocationBySlug(slug);
  if (!data) notFound();

  return (
    <>
      <JsonLd data={schema(data)} />
      <LocationPageTemplate data={data} />
    </>
  );
}
