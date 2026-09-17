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
import { SERVICES, SITE } from "@/lib/site";

const CASE_STUDIES_FAQS: FaqItem[] = [
  {
    question: "Why are there no case studies yet?",
    answer:
      "FACILITIES MAN is a newly established business. We do not publish fabricated case studies or borrowed testimonials. Our first case studies will appear here as founding contracts complete and clients approve publication.",
  },
  {
    question: "How do you build a case study?",
    answer:
      "We document scope, mobilisation, outcomes and measurable results with client approval at each stage. Photography and quotes are only published with written consent. The process typically takes 4–8 weeks after contract stabilisation.",
  },
  {
    question: "Will my business be named in a case study?",
    answer:
      "Only with your explicit written approval. We can publish anonymised case studies (industry and region only) if you prefer confidentiality. You control what appears publicly.",
  },
  {
    question: "Can I see references instead?",
    answer:
      "As we grow, we can provide reference contacts for prospects with mutual consent from existing clients. Contact us to discuss what is available for your enquiry type.",
  },
  {
    question: "How can I become a founding-customer case study?",
    answer:
      "Our founding-customer offer includes discounted contract pricing in exchange for case study rights and a reference contact. The first five clients in each region qualify — enquire via the contact page and mention the founding-customer programme.",
  },
];

const CASE_STUDIES_VISUAL = {
  heroLabel:
    "Founding-customer case studies coming soon — case-studies-hero.webp",
  sectionLabels: [
    "Empty state — case studies in production — case-studies-section-1.webp",
    "Founding-customer programme overview — case-studies-section-2.webp",
  ],
  regionLabel: "",
};

export function CaseStudiesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Case Studies", path: "/case-studies/" }]}
        h1="Case Studies"
        lead="Real outcomes from Newcastle and NSW facilities, cleaning and grounds contracts. New case studies added as founding projects complete — no fabricated content."
        visual={CASE_STUDIES_VISUAL}
        imageSrc={contentImg("case-studies-hero")}
      />

      <div className="fm-container py-12 md:py-16">
        <div className="fm-section-stack">
          <RevealOnScroll>
            <SectionPanel tone="cream">
              <SectionHeading>Featured Case Studies</SectionHeading>
              <p className="mt-5 text-brand-dark/90">
                Our first case studies will appear here as our founding contracts
                complete — see the founding-customer offer below. We build each
                case study with client approval, documented scope and honest
                outcomes. Real projects · Honest outcomes · No fabricated reviews.
              </p>
            </SectionPanel>
          </RevealOnScroll>

          <RevealOnScroll>
            <FeaturePanel
              heading="By Service"
              body={[
                "Case studies will be organised by service type — commercial cleaning, strata cleaning, facilities management and specialist programmes — so you can find relevant examples for your property type.",
                "Until our first cases publish, browse our service pages for scope detail and inclusions.",
              ]}
              imageLabel={CASE_STUDIES_VISUAL.sectionLabels[0]}
              imageSrc={contentImg("case-studies-section-1")}
              footer={
                <Link href="/services/" className="font-semibold text-brand-teal">
                  Browse all services →
                </Link>
              }
            />
          </RevealOnScroll>

          <RevealOnScroll>
            <FeaturePanel
              heading="By Industry & Location"
              body={[
                "Future case studies will be filterable by industry (strata, healthcare, commercial property and more) and by location across Newcastle, Hunter and national metro delivery.",
                "Multi-site portfolio clients can request anonymised scope summaries while formal case studies are in production.",
              ]}
              imageLabel={CASE_STUDIES_VISUAL.sectionLabels[1]}
              imageSrc={contentImg("case-studies-section-2")}
              tone="cream"
              mediaPosition="left"
              footer={
                <Link href="/locations/" className="font-semibold text-brand-teal">
                  View all locations →
                </Link>
              }
            />
          </RevealOnScroll>

          <RevealOnScroll>
            <SectionPanel tone="gold">
              <SectionHeading>Want to Be Our Next Case Study?</SectionHeading>
              <div className="mt-5 space-y-4 text-brand-dark/90">
                <p>
                  Founding-customer offer: discounted contract pricing in
                  exchange for case study rights and a reference contact. We
                  produce the case study at no extra cost — photography,
                  write-up and client approval managed by our team.
                </p>
                <p>
                  ABN {SITE.abn}. Fully insured.{" "}
                  <Link href="/about/certifications/" className="font-semibold text-brand-teal">
                    View certifications & compliance
                  </Link>
                  .
                </p>
                <p>
                  <Link href="/contact/" className="font-semibold text-brand-teal">
                    Become a founding-customer case study →
                  </Link>
                </p>
              </div>
            </SectionPanel>
          </RevealOnScroll>

          <RevealOnScroll>
            <SectionPanel>
              <SectionHeading>Frequently Asked Questions</SectionHeading>
              <div className="mt-6">
                <FaqAccordion faqs={CASE_STUDIES_FAQS} />
              </div>
            </SectionPanel>
          </RevealOnScroll>

          <RevealOnScroll>
            <SectionPanel>
              <p className="font-semibold text-brand-dark">Related services:</p>
              <ul className="mt-4 flex flex-wrap gap-2 text-sm">
                {SERVICES.slice(0, 6).map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="inline-block rounded-full bg-brand-cream px-4 py-2 font-medium text-brand-teal shadow-sm fm-hover-lift fm-tap hover:text-brand-gold"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionPanel>
          </RevealOnScroll>
        </div>
      </div>

      <CtaSection
        heading="Become a Founding-Customer Case Study"
        subCopy="Discounted founding pricing · Professional case study production · No fabricated content"
      />
    </>
  );
}
