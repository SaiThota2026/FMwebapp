import { CertificationsPage } from "@/components/certifications/CertificationsPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { webPageWithFaqSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Certifications, Insurance & Compliance — FACILITIES MAN",
  description:
    "Public liability, WWVP, police checks, WHS and certification roadmap for FACILITIES MAN. Transparent, current and verifiable.",
  path: "/about/certifications/",
  ogTitle: "Certifications, Insurance & Compliance | FACILITIES MAN",
  ogDescription:
    "Insurance, background checks, WHS documentation and ISO roadmap for FACILITIES MAN Newcastle facilities contracts.",
});

const FAQS = [
  {
    question: "What insurance does FACILITIES MAN carry?",
    answer:
      "FACILITIES MAN holds public liability insurance with certificates available on request.",
  },
  {
    question: "Are all staff police-checked and WWVP-checked?",
    answer: "Yes — all site-access staff undergo National Police Checks.",
  },
  {
    question: "Do you hold ISO certifications?",
    answer: "We are on an ISO certification roadmap with target dates published on this page.",
  },
  {
    question: "Can you supply WHS documentation for our site?",
    answer: "Yes — SWMS, induction records and insurance certificates are available on request.",
  },
  {
    question: "How current is your insurance certificate?",
    answer: "Certificates are renewed annually and available as PDF on request.",
  },
];

function schema() {
  return webPageWithFaqSchema({
    name: "Certifications, Insurance & Compliance — FACILITIES MAN",
    path: "/about/certifications/",
    description:
      "Public liability, WWVP, police checks, WHS and certification roadmap for FACILITIES MAN.",
    breadcrumbs: [
      { name: "About", path: "/about/" },
      { name: "Certifications", path: "/about/certifications/" },
    ],
    faqs: FAQS,
  });
}

export default function CertificationsRoute() {
  return (
    <>
      <JsonLd data={schema()} />
      <CertificationsPage />
    </>
  );
}
