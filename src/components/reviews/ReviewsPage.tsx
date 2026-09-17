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

const GBP_REVIEW_URL = "[PLACEHOLDER — Google Business Profile review URL]";

const REVIEWS_FAQS: FaqItem[] = [
  {
    question: "Why don't you have any reviews yet?",
    answer:
      "FACILITIES MAN is a newly established business. We have not yet completed enough contracts for clients to leave public reviews. We grow our review count honestly — one client at a time — and never publish fabricated testimonials.",
  },
  {
    question: "How can I leave a review?",
    answer:
      "Once you are an active client, you can leave a Google review via our Google Business Profile. The review link will be shared after your first service month. We do not incentivise reviews or ask for stars before work is complete.",
  },
  {
    question: "Where do your reviews come from?",
    answer:
      "All reviews come from verified Google Business Profile submissions by real clients. We do not scrape, import or rewrite third-party reviews. Website testimonials, when added, will match verified GBP feedback only.",
  },
  {
    question: "Will you ever invent reviews?",
    answer:
      "No. We will never invent, purchase or incentivise fake reviews. Our reputation is built on documented scopes, insurance, compliance and honest delivery — not manufactured social proof.",
  },
  {
    question: "How quickly do you expect to grow your review count?",
    answer:
      "Review growth follows contract completion and client satisfaction. We expect our first verified reviews within the first few months of active contracts. Founding customers who are happy with delivery are welcome to share feedback via Google.",
  },
];

const REVIEWS_VISUAL = {
  heroLabel: "FACILITIES MAN earning its first reviews — reviews-hero.webp",
  sectionLabels: [
    "Google reviews placeholder — reviews-section-1.webp",
    "Honest reviews policy — reviews-section-2.webp",
  ],
  regionLabel: "",
};

export function ReviewsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Reviews", path: "/reviews/" }]}
        h1="Reviews & Testimonials"
        lead="Real client feedback on our Newcastle facilities and cleaning services. Reviews added as customers share them — honest reviews only, no fakes, no incentivised stars."
        visual={REVIEWS_VISUAL}
        imageSrc={contentImg("reviews-hero")}
      />

      <div className="fm-container py-12 md:py-16">
        <div className="fm-section-stack">
          <RevealOnScroll>
            <SectionPanel tone="cream">
              <SectionHeading>Google Reviews</SectionHeading>
              <p className="mt-5 text-brand-dark/90">
                Our Google Business Profile review widget will appear here as
                verified reviews are submitted. We are newly established and
                building our review count honestly from founding contracts.
              </p>
              <p className="mt-4 rounded-lg border border-brand-teal/20 bg-white px-4 py-3 text-sm text-brand-dark/75">
                [TRUST PLACEHOLDER — Google Reviews embed will display here once
                GBP reviews exist]
              </p>
            </SectionPanel>
          </RevealOnScroll>

          <RevealOnScroll>
            <FeaturePanel
              heading="Client Testimonials"
              body={[
                "Written testimonials will be added here only when they match verified Google reviews or direct client feedback with written approval.",
                "Until then, we encourage prospective clients to review our certifications, scope documentation process and founding-customer programme instead of relying on manufactured social proof.",
              ]}
              imageLabel={REVIEWS_VISUAL.sectionLabels[0]}
              imageSrc={contentImg("reviews-section-1")}
            />
          </RevealOnScroll>

          <RevealOnScroll>
            <FeaturePanel
              heading="Why We Don't Show Fake Reviews"
              body={[
                "Many cleaning companies display reviews that cannot be verified or were written before the business existed. FACILITIES MAN takes the opposite approach — we publish only what is real.",
                "We earn each review one client at a time. If you need confidence before we have public reviews, request our compliance pack, speak directly with the owner, or ask about our founding-customer reference programme.",
              ]}
              imageLabel={REVIEWS_VISUAL.sectionLabels[1]}
              imageSrc={contentImg("reviews-section-2")}
              tone="cream"
              mediaPosition="left"
            />
          </RevealOnScroll>

          <RevealOnScroll>
            <SectionPanel tone="gold">
              <SectionHeading>Leave a Review</SectionHeading>
              <div className="mt-5 space-y-4 text-brand-dark/90">
                <p>
                  Active clients can leave a Google review using our Business
                  Profile link:
                </p>
                <p>
                  <span className="font-mono text-sm text-brand-dark/70">
                    {GBP_REVIEW_URL}
                  </span>
                </p>
                <p className="text-sm">
                  Honest reviews only · No fakes · No incentivised stars · ABN{" "}
                  {SITE.abn}
                </p>
                <p>
                  Not yet a client?{" "}
                  <Link href="/contact/" className="font-semibold text-brand-teal">
                    Become a founding customer
                  </Link>{" "}
                  or{" "}
                  <Link href="/about/" className="font-semibold text-brand-teal">
                    learn why we operate honestly
                  </Link>
                  .
                </p>
              </div>
            </SectionPanel>
          </RevealOnScroll>

          <RevealOnScroll>
            <SectionPanel>
              <SectionHeading>Frequently Asked Questions</SectionHeading>
              <div className="mt-6">
                <FaqAccordion faqs={REVIEWS_FAQS} />
              </div>
            </SectionPanel>
          </RevealOnScroll>
        </div>
      </div>

      <CtaSection
        heading="Become a Founding Customer"
        subCopy="Help us earn our first honest reviews — direct owner contact, documented scope, fully insured."
      />
    </>
  );
}
