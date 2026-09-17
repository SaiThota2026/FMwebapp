import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  SectionHeading,
  SectionPanel,
} from "@/components/ui/SectionPanel";
import type { BlogPost } from "@/lib/blog";
import { contentImg } from "@/lib/content-images";

export function BlogHubTemplate({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Blog", path: "/blog/" }]}
        h1="Facilities Management & Cleaning Insights"
        lead="Practical guides for Newcastle and Hunter Region businesses — commercial cleaning, strata, facilities management and compliance topics."
        visual={{
          heroLabel:
            "FACILITIES MAN blog hub — facilities management insights Newcastle — blog-hub-hero.webp",
          regionLabel: "",
          sectionLabels: [],
        }}
        imageSrc={contentImg("blog-hub-hero")}
      />

      <div className="fm-container py-12 md:py-16">
        <RevealOnScroll>
          <p className="max-w-3xl text-brand-dark/90">
            Articles written for facility managers, strata committees and business
            owners who need clear, actionable guidance — not generic cleaning
            industry filler.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delayMs={40}>
          <SectionPanel tone="cream" className="mt-12">
            <div className="grid min-w-0 grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="min-w-0">
                <SectionHeading>Practical guidance for Newcastle &amp; NSW</SectionHeading>
                <p className="mt-4 leading-relaxed text-brand-dark/90 sm:mt-5">
                  Each article covers a specific facilities or cleaning topic with
                  actionable advice for Hunter-region businesses — scope planning,
                  compliance, strata governance and service selection.
                </p>
              </div>
              <ImagePlaceholder
                label="Blog hub mid-section — facilities management insights — blog-hub-mid.webp"
                src={contentImg("blog-hub-mid")}
                aspect="photo"
                className="rounded-xl shadow-sm"
              />
            </div>
          </SectionPanel>
        </RevealOnScroll>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <RevealOnScroll key={post.slug} delayMs={i * 50}>
              <article className="fm-hover-lift fm-tap flex h-full flex-col overflow-hidden rounded-xl border border-brand-teal/15 bg-white shadow-sm">
                <ImagePlaceholder
                  label={`Blog hub card — ${post.title} — blog-hub-card-${post.slug}.webp`}
                  src={contentImg(`blog-hub-card-${post.slug}`)}
                  aspect="video"
                  className="rounded-b-none border-0"
                />
                <div className="border-b border-brand-teal/10 bg-gradient-to-r from-brand-cream to-brand-offwhite px-5 py-4">
                  <time
                    dateTime={post.date}
                    className="text-xs font-medium uppercase tracking-wider text-brand-teal"
                  >
                    {new Date(post.date).toLocaleDateString("en-AU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-xl font-bold leading-snug text-brand-dark">
                    <Link href={`/blog/${post.slug}/`} className="hover:text-brand-teal">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-dark/80">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-brand-teal/10 pt-4">
                    <span className="text-xs font-medium text-brand-dark/55">
                      {post.readingTime}
                    </span>
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="text-sm font-semibold text-brand-teal hover:text-brand-gold"
                    >
                      Read article →
                    </Link>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delayMs={80}>
          <p className="mt-12 text-center text-sm text-brand-dark/80">
            Need hands-on support?{" "}
            <Link href="/services/" className="font-semibold text-brand-teal hover:text-brand-gold">
              Explore our services
            </Link>{" "}
            or{" "}
            <Link href="/contact/" className="font-semibold text-brand-teal hover:text-brand-gold">
              request a quote
            </Link>
            .
          </p>
        </RevealOnScroll>
      </div>

      <CtaSection
        heading="Need Facilities or Cleaning Support?"
        subCopy="We respond within 24 hours and can usually schedule a free site walk-through within the same week."
      />
    </>
  );
}
