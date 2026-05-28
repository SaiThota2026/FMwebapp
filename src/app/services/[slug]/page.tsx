import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { JsonLd } from "@/components/ui/JsonLd";
import { getServiceBySlug, SERVICE_SLUGS } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { servicePageSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const data = getServiceBySlug(slug);
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

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const data = getServiceBySlug(slug);
  if (!data) notFound();

  return (
    <>
      <JsonLd
        data={servicePageSchema({
          name: data.name,
          description: data.description,
          path: data.path,
          areas: data.areas,
          faqs: data.faqs,
        })}
      />
      <ServicePageTemplate data={data} />
    </>
  );
}
