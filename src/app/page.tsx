import { HomePage } from "@/components/home/HomePage";
import { JsonLd } from "@/components/ui/JsonLd";
import { HOME_FAQS } from "@/data/home";
import { createPageMetadata } from "@/lib/metadata";
import { faqPageSchema, globalSchemaGraph } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Facilities Management & Cleaning Newcastle | FACILITIES MAN",
  description:
    "Owner-operated facilities management and commercial cleaning in Newcastle. Fully insured, police-checked, 24hr response. Get a free quote today.",
  path: "/",
  ogTitle: "Facilities Management & Commercial Cleaning — Newcastle NSW",
  ogDescription:
    "FACILITIES MAN delivers facilities management, commercial cleaning, strata, grounds and industrial services across Newcastle, Hunter Valley and Central Coast. Locally owned. Fully insured.",
  ogImage: "/images/og/og-homepage.jpg",
});

function homePageSchema() {
  const global = globalSchemaGraph();
  const faq = faqPageSchema(HOME_FAQS);
  return {
    "@context": "https://schema.org",
    "@graph": [...(global["@graph"] as object[]), faq],
  };
}

export default function Home() {
  return (
    <>
      <JsonLd data={homePageSchema()} />
      <HomePage />
    </>
  );
}
