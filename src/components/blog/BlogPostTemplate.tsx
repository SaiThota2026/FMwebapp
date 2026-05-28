import type { HTMLAttributes } from "react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { BlogPost } from "@/lib/blog";
import { SERVICES } from "@/lib/site";

const mdxComponents = {
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mb-4 mt-10 font-display text-2xl font-bold text-brand-dark" {...props} />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mb-3 mt-8 font-display text-xl font-semibold text-brand-dark" {...props} />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 leading-relaxed text-brand-dark/90" {...props} />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 list-inside list-disc space-y-2 text-brand-dark/90" {...props} />
  ),
  ol: (props: HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-4 list-inside list-decimal space-y-2 text-brand-dark/90" {...props} />
  ),
  li: (props: HTMLAttributes<HTMLLIElement>) => <li className="ml-4" {...props} />,
  a: (props: HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="font-semibold text-brand-teal underline underline-offset-2 hover:text-brand-gold"
      {...props}
    />
  ),
  strong: (props: HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-brand-dark" {...props} />
  ),
};

export function BlogPostTemplate({ post }: { post: BlogPost }) {
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Blog", path: "/blog/" },
          { name: post.title, path: `/blog/${post.slug}/` },
        ]}
        h1={post.title}
        lead={post.description}
        visual={{
          heroLabel: `${post.title} — blog-${post.slug}-hero.webp`,
          regionLabel: "",
          sectionLabels: [],
        }}
      />

      <div className="fm-container py-12 md:py-16">
        <div className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <RevealOnScroll>
            <article className="min-w-0 max-w-prose">
              <div className="mb-8 flex flex-wrap items-center gap-3 rounded-lg border border-brand-teal/15 bg-brand-cream px-4 py-3 text-sm text-brand-dark/70">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-AU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span aria-hidden="true">·</span>
                <span>{post.readingTime}</span>
                <span aria-hidden="true">·</span>
                <span>By {post.author}</span>
              </div>
              <div className="prose-content">
                <MDXRemote source={post.content} components={mdxComponents} />
              </div>
            </article>
          </RevealOnScroll>

          <aside className="min-w-0 space-y-6 self-start lg:sticky lg:top-24">
            <RevealOnScroll delayMs={60}>
              <div className="overflow-hidden rounded-xl border border-brand-teal/15 bg-brand-cream shadow-sm fm-hover-lift">
                <ImagePlaceholder
                  label={`Quote CTA — blog-${post.slug}-sidebar.webp`}
                  aspect="video"
                  className="rounded-b-none border-0"
                />
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-brand-dark">
                    Get a Free Quote
                  </h3>
                  <p className="mt-2 text-sm text-brand-dark/85">
                    Speak directly with the owner. We respond within 24 hours.
                  </p>
                  <Link
                    href="/contact/"
                    className="fm-touch-target mt-4 inline-flex items-center justify-center rounded-md bg-brand-gold px-4 py-2.5 text-sm font-semibold text-brand-dark fm-hover-lift fm-tap"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={100}>
              <div className="rounded-xl border border-brand-teal/15 bg-white p-6 shadow-sm fm-hover-lift">
                <h3 className="font-display text-lg font-bold text-brand-dark">
                  Our Services
                </h3>
                <ul className="mt-3 space-y-2">
                  {featuredServices.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="text-sm font-semibold text-brand-teal hover:text-brand-gold"
                      >
                        {s.name} →
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services/"
                  className="mt-4 inline-block text-sm font-semibold text-brand-dark hover:text-brand-teal"
                >
                  View all services →
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={140}>
              <div className="rounded-xl border border-brand-teal/15 bg-white p-6 shadow-sm fm-hover-lift">
                <h3 className="font-display text-lg font-bold text-brand-dark">
                  More Articles
                </h3>
                <Link
                  href="/blog/"
                  className="mt-3 inline-block text-sm font-semibold text-brand-teal hover:text-brand-gold"
                >
                  View all articles →
                </Link>
              </div>
            </RevealOnScroll>
          </aside>
        </div>
      </div>

      <CtaSection
        heading="Ready to Improve Your Site Standards?"
        subCopy="Get a written scope within 48 hours and direct owner accountability from day one."
      />
    </>
  );
}
