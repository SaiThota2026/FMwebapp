import { CaseStudiesPage } from "@/components/case-studies/CaseStudiesPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { collectionPageSchema } from "@/lib/schema";
import { READINESS_FAQS } from "@/data/case-study-readiness";

export const metadata = createPageMetadata({
  title: "Case Studies & Example Scope Profiles — FACILITIES MAN",
  description:
    "Explore example scope profiles for facilities management, commercial cleaning, strata cleaning and industrial cleaning across Newcastle, Sydney, Brisbane and Melbourne. Real projects, honest outcomes, no fabricated content.",
  path: "/case-studies/",
  ogTitle: "Case Studies & Example Scope Profiles | FACILITIES MAN",
  ogDescription:
    "Example scope profiles for facilities, cleaning and grounds programmes across Newcastle, Sydney, Brisbane and Melbourne. Founding-customer programme available.",
});

function schema() {
  return collectionPageSchema({
    name: "Case Studies & Example Scope Profiles — FACILITIES MAN",
    path: "/case-studies/",
    description:
      "Example scope profiles for facilities management, commercial cleaning, strata cleaning and industrial cleaning across Newcastle, Sydney, Brisbane and Melbourne.",
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
