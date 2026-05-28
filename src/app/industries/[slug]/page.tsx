import { notFound } from "next/navigation";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { JsonLd } from "@/components/ui/JsonLd";
import { getIndustryBySlug, INDUSTRY_SLUGS } from "@/data/industries";
import { createPageMetadata } from "@/lib/metadata";
import { industryPageSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const data = getIndustryBySlug(slug);
  if (!data) return {};
  return createPageMetadata({
    title: data.title,
    description: data.description,
    path: data.path,
    ogTitle: data.ogTitle,
    ogDescription: data.ogDescription,
  });
}

export default async function IndustrySlugPage({ params }: Props) {
  const { slug } = await params;
  const data = getIndustryBySlug(slug);
  if (!data) notFound();

  return (
    <>
      <JsonLd
        data={industryPageSchema({
          name: data.name,
          description: data.description,
          path: data.path,
          faqs: data.faqs,
        })}
      />
      <IndustryPageTemplate data={data} />
    </>
  );
}
