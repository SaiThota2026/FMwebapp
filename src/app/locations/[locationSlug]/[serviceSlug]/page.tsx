import { notFound } from "next/navigation";
import { ServiceLocationTemplate } from "@/components/combos/ServiceLocationTemplate";
import { JsonLd } from "@/components/ui/JsonLd";
import { COMBO_STATIC_PARAMS, getComboBySlugs } from "@/data/combos";
import { createPageMetadata } from "@/lib/metadata";
import { comboPageSchema } from "@/lib/schema";

type Props = { params: Promise<{ locationSlug: string; serviceSlug: string }> };

export function generateStaticParams() {
  return COMBO_STATIC_PARAMS;
}

export async function generateMetadata({ params }: Props) {
  const { locationSlug, serviceSlug } = await params;
  const data = getComboBySlugs(locationSlug, serviceSlug);
  if (!data) return {};
  return createPageMetadata({
    title: data.title,
    description: data.description,
    path: data.path,
    ogTitle: data.ogTitle,
    ogDescription: data.ogDescription,
  });
}

export default async function ComboPage({ params }: Props) {
  const { locationSlug, serviceSlug } = await params;
  const data = getComboBySlugs(locationSlug, serviceSlug);
  if (!data) notFound();

  return (
    <>
      <JsonLd
        data={comboPageSchema({
          serviceName: data.serviceName,
          locationName: data.locationName,
          description: data.description,
          path: data.path,
          faqs: data.faqs,
        })}
      />
      <ServiceLocationTemplate data={data} />
    </>
  );
}
