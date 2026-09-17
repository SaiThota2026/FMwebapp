import { CaseStudiesPage } from "@/components/case-studies/CaseStudiesPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { collectionPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Case Studies — FACILITIES MAN",
  description:
    "Real outcomes from Newcastle and NSW facilities, cleaning and grounds contracts. New case studies added as projects complete.",
  path: "/case-studies/",
  ogTitle: "Case Studies | FACILITIES MAN",
  ogDescription:
    "FACILITIES MAN case studies — honest project outcomes from founding contracts.",
});

const FAQS = [
  {
    question: "Why are there no case studies yet?",
    answer: "FACILITIES MAN is newly established and publishes case studies only as founding contracts complete.",
  },
  {
    question: "How do you build a case study?",
    answer: "We document scope and outcomes with client approval at each stage.",
  },
  {
    question: "Will my business be named in a case study?",
    answer: "Only with your explicit written approval.",
  },
  {
    question: "Can I see references instead?",
    answer: "Reference contacts may be available with mutual client consent.",
  },
  {
    question: "How can I become a founding-customer case study?",
    answer: "Enquire via the contact page and mention the founding-customer programme.",
  },
];

function schema() {
  return collectionPageSchema({
    name: "Case Studies — FACILITIES MAN",
    path: "/case-studies/",
    description:
      "Real outcomes from Newcastle and NSW facilities, cleaning and grounds contracts.",
    breadcrumbs: [{ name: "Case Studies", path: "/case-studies/" }],
    faqs: FAQS,
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
