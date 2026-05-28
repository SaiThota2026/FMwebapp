import { IndustriesHubTemplate } from "@/components/industries/IndustriesHubTemplate";
import { JsonLd } from "@/components/ui/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Industries We Serve — FACILITIES MAN",
  description:
    "Industry-specific cleaning and facilities services for strata, healthcare, education, commercial property and government sites.",
  path: "/industries/",
  ogTitle: "Industries We Serve — FACILITIES MAN",
  ogDescription:
    "See how FACILITIES MAN supports key industry sectors across Newcastle and the Hunter region.",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Industries", path: "/industries/" }])} />
      <IndustriesHubTemplate />
    </>
  );
}
