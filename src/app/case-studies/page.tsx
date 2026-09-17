import { CaseStudiesPage } from "@/components/case-studies/CaseStudiesPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { collectionPageSchema } from "@/lib/schema";
import { READINESS_FAQS } from "@/data/case-study-readiness";

export const metadata = createPageMetadata({
  title: "Case Studies | FACILITIES MAN",
  description:
    "Case studies will be added as FACILITIES MAN projects complete. Explore example scope profiles by service, industry and location across Newcastle, Sydney, Brisbane and Melbourne.",
  path: "/case-studies/",
  ogTitle: "Case Studies | FACILITIES MAN",
  ogDescription:
    "Example scope profiles for facilities, cleaning and grounds programmes across Newcastle, Sydney, Brisbane and Melbourne. Founding-customer programme available.",
});

function schema() {
  return collectionPageSchema({
    name: "Case Studies — FACILITIES MAN",
    path: "/case-studies/",
    description:
      "Case studies will be added as FACILITIES MAN projects complete. Explore example scope profiles by service, industry and location across Newcastle, Sydney, Brisbane and Melbourne.",
    breadcrumbs: [{ name: "Case Studies", path: "/case-studies/" }],
    faqs: READINESS_FAQS,
    items: [],
  });
}

export default function CaseStudiesRoute() {
  return (
    <>
      <JsonLd data={schema()} />
      <CaseStudiesPage />
    </>
  );
}
