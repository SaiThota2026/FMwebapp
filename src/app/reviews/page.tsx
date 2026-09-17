import { ReviewsPage } from "@/components/reviews/ReviewsPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { webPageWithFaqSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Reviews & Testimonials — FACILITIES MAN",
  description:
    "Real client feedback on our Newcastle facilities and cleaning services. Reviews added as customers share them.",
  path: "/reviews/",
  ogTitle: "Reviews & Testimonials | FACILITIES MAN",
  ogDescription:
    "Honest reviews from FACILITIES MAN clients — no fabricated testimonials.",
});

const FAQS = [
  {
    question: "Why don't you have any reviews yet?",
    answer: "FACILITIES MAN is newly established and builds review count honestly from real clients.",
  },
  {
    question: "How can I leave a review?",
    answer: "Active clients can leave a Google review via our Business Profile link.",
  },
  {
    question: "Where do your reviews come from?",
    answer: "All reviews come from verified Google Business Profile submissions.",
  },
  {
    question: "Will you ever invent reviews?",
    answer: "No — we never invent, purchase or incentivise fake reviews.",
  },
  {
    question: "How quickly do you expect to grow your review count?",
    answer: "Review growth follows contract completion and client satisfaction.",
  },
];

function schema() {
  return webPageWithFaqSchema({
    name: "Reviews & Testimonials — FACILITIES MAN",
    path: "/reviews/",
    description:
      "Real client feedback on FACILITIES MAN facilities and cleaning services.",
    breadcrumbs: [{ name: "Reviews", path: "/reviews/" }],
    faqs: FAQS,
  });
}

export default function ReviewsRoute() {
  return (
    <>
      <JsonLd data={schema()} />
      <ReviewsPage />
    </>
  );
}
