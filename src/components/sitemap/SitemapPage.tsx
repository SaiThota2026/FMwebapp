import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/components/ui/CtaSection";
import { FeaturePanel } from "@/components/ui/FeaturePanel";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  SectionHeading,
  SectionPanel,
} from "@/components/ui/SectionPanel";
import { COMBO_PAGES } from "@/data/combos";
import { ALL_LOCATIONS } from "@/data/locations";
import type { BlogPost } from "@/lib/blog";
import { contentImg } from "@/lib/content-images";
import { COMPANY_LINKS, INDUSTRIES, SERVICES, SITE } from "@/lib/site";

const SITEMAP_VISUAL = {
  heroLabel: "FACILITIES MAN website sitemap overview — sitemap-hero.webp",
  sectionLabels: [
    "Services and locations navigation — sitemap-section-1.webp",
    "Blog and trust pages navigation — sitemap-section-2.webp",
  ],
  regionLabel: "",
};

type SitemapSection = {
  heading: string;
  links: { name: string; href: string }[];
};

function buildSections(posts: BlogPost[]): SitemapSection[] {
  const coreLinks = [
    { name: "Home", href: "/" },
    { name: "About FACILITIES MAN", href: "/about/" },
    { name: "Contact & Quote", href: "/contact/" },
    { name: "FAQ", href: "/faq/" },
    { name: "Services Hub", href: "/services/" },
    { name: "Locations Hub", href: "/locations/" },
    { name: "Industries Hub", href: "/industries/" },
    { name: "Blog", href: "/blog/" },
  ];

  const trustLinks = COMPANY_LINKS.filter(
    (l) =>
      l.name === "Certifications" ||
      l.name === "Case Studies" ||
      l.name === "Reviews" ||
      l.name === "Privacy Policy" ||
      l.name === "Sitemap",
  ).map((l) => ({ name: l.name, href: l.href }));

  return [
    { heading: "Core", links: coreLinks },
    {
      heading: "Services",
      links: SERVICES.map((s) => ({ name: s.name, href: s.href })),
    },
    {
      heading: "Industries",
      links: INDUSTRIES.map((i) => ({ name: i.name, href: i.href })),
    },
    {
      heading: "Locations",
      links: ALL_LOCATIONS.map((l) => ({ name: l.name, href: l.path })),
    },
    {
      heading: "Combos",
      links: COMBO_PAGES.map((c) => ({
        name: `${c.serviceName} — ${c.locationName}`,
        href: c.path,
      })),
    },
    {
      heading: "Blog",
      links: posts.map((p) => ({
        name: p.title,
        href: `/blog/${p.slug}/`,
      })),
    },
    { heading: "Trust", links: trustLinks },
  ];
}

function SitemapLinkList({ links }: { links: { name: string; href: string }[] }) {
  return (
    <ul className="mt-4 columns-1 gap-x-8 space-y-2 text-sm sm:columns-2 lg:columns-3">
      {links.map((link) => (
        <li key={link.href} className="break-inside-avoid">
          <Link
            href={link.href}
            className="text-brand-teal hover:text-brand-gold"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SitemapPage({ posts }: { posts: BlogPost[] }) {
  const sections = buildSections(posts);

  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Sitemap", path: "/sitemap/" }]}
        h1="Site Map"
        lead="Browse every page on the FACILITIES MAN website — services, locations, industries, blog posts and trust resources. An XML sitemap is also available at /sitemap.xml."
        visual={SITEMAP_VISUAL}
        imageSrc={contentImg("sitemap-hero")}
        showTrustStrip={false}
      />

      <div className="fm-container py-12 md:py-16">
        <div className="fm-section-stack">
          <RevealOnScroll>
            <FeaturePanel
              heading="Browse by section"
              body={[
                "This HTML sitemap lists every published page grouped by type. Use it to find services, location coverage, industry verticals, service×location combos and blog articles.",
                "Search engines also use our auto-generated XML sitemap at /sitemap.xml, updated after each build.",
              ]}
              imageLabel={SITEMAP_VISUAL.sectionLabels[0]}
              imageSrc={contentImg("sitemap-section-1")}
            />
          </RevealOnScroll>

          {sections.map((section) => (
            <RevealOnScroll key={section.heading}>
              <SectionPanel tone={section.heading === "Trust" ? "cream" : "plain"}>
                <SectionHeading>{section.heading}</SectionHeading>
                <SitemapLinkList links={section.links} />
              </SectionPanel>
            </RevealOnScroll>
          ))}

          <RevealOnScroll>
            <SectionPanel padding="none">
              <div className="grid gap-0 lg:grid-cols-2 lg:items-center">
                <div className="fm-panel-pad">
                  <SectionHeading>XML sitemap</SectionHeading>
                  <p className="mt-4 text-brand-dark/90">
                    Machine-readable sitemap for search engines:{" "}
                    <a
                      href="/sitemap.xml"
                      className="font-semibold text-brand-teal hover:text-brand-gold"
                    >
                      {SITE.url}/sitemap.xml
                    </a>
                  </p>
                </div>
                <ImagePlaceholder
                  label={SITEMAP_VISUAL.sectionLabels[1]}
                  src={contentImg("sitemap-section-2")}
                  aspect="photo"
                  className="rounded-none border-0"
                />
              </div>
            </SectionPanel>
          </RevealOnScroll>
        </div>
      </div>

      <CtaSection
        heading="Need a quote instead of a sitemap?"
        subCopy="Tell us your site address and service needs — we respond within 24 hours."
      />
    </>
  );
}
