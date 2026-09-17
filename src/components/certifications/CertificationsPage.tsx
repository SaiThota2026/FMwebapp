import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FeaturePanel } from "@/components/ui/FeaturePanel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  SectionHeading,
  SectionPanel,
} from "@/components/ui/SectionPanel";
import type { FaqItem } from "@/lib/schema";
import { contentImg } from "@/lib/content-images";
import { SITE } from "@/lib/site";

const CERTIFICATIONS_FAQS: FaqItem[] = [
  {
    question: "What insurance does FACILITIES MAN carry?",
    answer:
      "FACILITIES MAN holds public liability insurance. The current certificate amount is [PLACEHOLDER — insert public liability insurance amount]. Professional indemnity cover is [PLACEHOLDER — confirm if held]. Certificates of currency are available on request with your quote or contract enquiry.",
  },
  {
    question: "Are all staff police-checked and WWVP-checked?",
    answer:
      "Yes. All staff who access client sites undergo National Police Checks before mobilisation. Staff working in education, childcare or other regulated environments also hold current Working With Vulnerable People (WWVP) clearances where required by the site.",
  },
  {
    question: "Do you hold ISO certifications?",
    answer:
      "We are on an ISO certification roadmap — ISO 9001 (Quality Management) is targeted by [PLACEHOLDER — ISO 9001 target date]. Current compliance documentation including WHS packs, SWMS templates and insurance certificates is available on request while certification is in progress.",
  },
  {
    question: "Can you supply WHS documentation for our site?",
    answer:
      "Yes. We can provide SWMS, induction records, insurance certificates and staff clearance summaries for your site compliance file. Request our compliance pack via the contact page and we will respond within 5 business days.",
  },
  {
    question: "How current is your insurance certificate?",
    answer:
      "Our insurance certificates are renewed annually. The current certificate was issued on [PLACEHOLDER — insurance certificate issue date] and is available as a PDF on request. We notify active clients before renewal dates.",
  },
];

const CERTIFICATIONS_VISUAL = {
  heroLabel:
    "FACILITIES MAN compliance documentation and safety gear — about-certifications-hero.webp",
  sectionLabels: [
    "Public liability insurance certificate excerpt — about-certifications-section-1.webp",
    "ISO certification roadmap and WHS documentation — about-certifications-section-2.webp",
  ],
  regionLabel: "",
};

export function CertificationsPage() {
  const lastUpdated = new Date().toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "About", path: "/about/" },
          { name: "Certifications", path: "/about/certifications/" },
        ]}
        h1="Certifications, Insurance & Compliance"
        lead="Transparent, verifiable compliance for Newcastle and national facilities contracts — insurance, background checks, WHS documentation and an honest certification roadmap."
        visual={CERTIFICATIONS_VISUAL}
        imageSrc={contentImg("about-certifications-hero")}
      />

      <div className="fm-container py-12 md:py-16">
        <div className="fm-section-stack">
          <RevealOnScroll>
            <FeaturePanel
              heading="Insurance"
              body={[
                "FACILITIES MAN carries public liability insurance suitable for commercial cleaning and facilities management contracts. The current certificate amount is [PLACEHOLDER — insert public liability insurance amount].",
                "Professional indemnity cover is [PLACEHOLDER — confirm if held]. Insurance certificates of currency are available as PDF downloads on request — ask for our compliance pack when you enquire.",
                "We notify active clients before renewal dates and can supply updated certificates for your site compliance file within 5 business days of request.",
              ]}
              imageLabel={CERTIFICATIONS_VISUAL.sectionLabels[0]}
              imageSrc={contentImg("about-certifications-section-1")}
            />
          </RevealOnScroll>

          <RevealOnScroll>
            <FeaturePanel
              heading="Background Checks (Police & WWVP)"
              body={[
                "Every staff member who accesses a client site undergoes a National Police Check before their first shift. Clearance records are maintained and available for site compliance files on request.",
                "Staff working in education, childcare or other regulated environments hold current Working With Vulnerable People (WWVP) clearances where required.",
                "We do not subcontract to unvetted labour — all personnel on your site are known, inducted and documented.",
              ]}
              imageLabel={CERTIFICATIONS_VISUAL.sectionLabels[1]}
              imageSrc={contentImg("about-certifications-section-2")}
              tone="cream"
              mediaPosition="left"
            />
          </RevealOnScroll>

          <RevealOnScroll>
            <SectionPanel tone="cream">
              <SectionHeading>Workplace Health & Safety</SectionHeading>
              <div className="mt-5 space-y-4 text-brand-dark/90">
                <p>
                  We prepare Safe Work Method Statements (SWMS) for tasks involving
                  elevated work, confined spaces, chemical handling and other
                  higher-risk activities. Site-specific inductions are completed
                  before mobilisation.
                </p>
                <p>
                  Staff hold relevant tickets where required — including EWP and
                  confined-space qualifications for applicable scopes. WHS
                  documentation packs are available on request for facility
                  managers and strata committees.
                </p>
              </div>
            </SectionPanel>
          </RevealOnScroll>

          <RevealOnScroll>
            <SectionPanel>
              <SectionHeading>Certifications We Hold</SectionHeading>
              <ul className="mt-5 space-y-3 text-brand-dark/90">
                <li>
                  Public liability insurance — [PLACEHOLDER — insert amount]{" "}
                  <span className="text-brand-dark/60">
                    ([PLACEHOLDER — PDF link to insurance certificate])
                  </span>
                </li>
                <li>National Police Checks — all site-access staff</li>
                <li>
                  WWVP clearances — staff on education and childcare sites
                </li>
                <li>ABN {SITE.abn} — registered Australian business</li>
              </ul>
            </SectionPanel>
          </RevealOnScroll>

          <RevealOnScroll>
            <SectionPanel tone="gold">
              <SectionHeading>Certifications In Progress</SectionHeading>
              <div className="mt-5 space-y-4 text-brand-dark/90">
                <p>
                  We are on an ISO certification roadmap and publish our progress
                  openly:
                </p>
                <ul className="space-y-2">
                  <li>
                    ISO 9001 (Quality Management) — targeted by [PLACEHOLDER —
                    ISO 9001 target date]
                  </li>
                  <li>
                    ISO 14001 (Environmental Management) — targeted by
                    [PLACEHOLDER — ISO 14001 target date]
                  </li>
                  <li>
                    ISO 45001 (Occupational Health & Safety) — targeted by
                    [PLACEHOLDER — ISO 45001 target date]
                  </li>
                </ul>
                <p className="text-sm">
                  Last updated: {lastUpdated}.{" "}
                  <Link href="/contact/" className="font-semibold text-brand-teal">
                    Request our compliance pack
                  </Link>{" "}
                  for current documentation while certification is in progress.
                </p>
              </div>
            </SectionPanel>
          </RevealOnScroll>

          <RevealOnScroll>
            <SectionPanel>
              <SectionHeading>Documentation Available on Request</SectionHeading>
              <p className="mt-5 text-brand-dark/90">
                Email{" "}
                <a href={`mailto:${SITE.email}`} className="text-brand-teal">
                  {SITE.email}
                </a>{" "}
                or use our{" "}
                <Link href="/contact/" className="font-semibold text-brand-teal">
                  contact form
                </Link>{" "}
                to request: public liability certificate (PDF), WHS pack, staff
                clearance summary, SWMS templates and contract onboarding
                documentation. We respond within 5 business days.
              </p>
            </SectionPanel>
          </RevealOnScroll>

          <RevealOnScroll>
            <SectionPanel>
              <SectionHeading>Frequently Asked Questions</SectionHeading>
              <div className="mt-6">
                <FaqAccordion faqs={CERTIFICATIONS_FAQS} />
              </div>
            </SectionPanel>
          </RevealOnScroll>
        </div>
      </div>

      <CtaSection
        heading="Request Our Compliance Pack"
        subCopy="Verifiable · Transparent · Up to date — insurance, police checks and WHS documentation available on request."
      />
    </>
  );
}
