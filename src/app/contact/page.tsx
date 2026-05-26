import { ContactPage } from "@/components/contact/ContactPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { CONTACT_FAQS } from "@/data/contact";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact FACILITIES MAN — Free Quote Newcastle",
  description:
    "Get a free facilities management or commercial cleaning quote in Newcastle. Call 0450 924 377 or complete the form — 24-hour response guaranteed.",
  path: "/contact/",
  ogTitle: "Contact FACILITIES MAN — Get a Free Quote in Newcastle",
  ogDescription:
    "Call 0450 924 377 or use our online form to request a free quote for commercial cleaning, strata, grounds or facilities management in Newcastle and the Hunter Valley. 24-hour response guaranteed.",
  ogImage: "/images/og/og-default.jpg",
});

function contactSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        url: `${SITE.url}/contact/`,
        name: "Contact FACILITIES MAN — Free Quote Newcastle",
        mainEntity: { "@id": `${SITE.url}/#localbusiness` },
      },
      breadcrumbSchema([
        { name: "Contact & Quote", path: "/contact/" },
      ]),
      faqPageSchema(CONTACT_FAQS),
    ],
  };
}

export default function Contact() {
  return (
    <>
      <JsonLd data={contactSchema()} />
      <ContactPage />
    </>
  );
}
