import { AboutPage } from "@/components/about/AboutPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { ABOUT_FAQS } from "@/data/about";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About FACILITIES MAN — Newcastle's Facilities Team",
  description:
    "Meet the team behind FACILITIES MAN — Newcastle's owner-operated facilities management and cleaning company. ABN 72 697 453 937. Fully insured.",
  path: "/about/",
  ogTitle: "About FACILITIES MAN — Owner-Operated Facilities Management Newcastle",
  ogDescription:
    "FACILITIES MAN is a locally owned and operated facilities management and cleaning company based in Newcastle, NSW.",
  ogImage: "/images/og/og-default.jpg",
});

function schema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        url: `${SITE.url}/about/`,
        name: "About FACILITIES MAN — Newcastle's Owner-Operated Facilities Team",
        description:
          "FACILITIES MAN is a locally owned and operated facilities management and cleaning company based in Newcastle, NSW.",
        mainEntity: {
          "@type": "Person",
          name: "FACILITIES MAN Founder",
          jobTitle: "Founder & Director",
          worksFor: { "@id": `${SITE.url}/#org` },
          telephone: SITE.phone,
          email: SITE.email,
        },
      },
      breadcrumbSchema([{ name: "About", path: "/about/" }]),
      faqPageSchema(ABOUT_FAQS),
    ],
  };
}

export default function AboutRoute() {
  return (
    <>
      <JsonLd data={schema()} />
      <AboutPage />
    </>
  );
}
