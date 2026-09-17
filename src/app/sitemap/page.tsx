import { SitemapPage } from "@/components/sitemap/SitemapPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { getAllBlogPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";
import { siteNavigationSchema } from "@/lib/schema";
import { COMPANY_LINKS, INDUSTRIES, SERVICES, SITE } from "@/lib/site";
import { ALL_LOCATIONS } from "@/data/locations";
import { COMBO_PAGES } from "@/data/combos";

export const metadata = createPageMetadata({
  title: "Sitemap — FACILITIES MAN",
  description:
    "Browse every page of the FACILITIES MAN website — services, locations, industries, blog and resources.",
  path: "/sitemap/",
  ogTitle: "Sitemap | FACILITIES MAN",
  ogDescription:
    "HTML sitemap listing all FACILITIES MAN pages — services, locations, industries, combos and blog.",
});

function schema() {
  const posts = getAllBlogPosts();
  const sections = [
    {
      name: "Core",
      links: [
        { name: "Home", url: "/" },
        { name: "About", url: "/about/" },
        { name: "Contact", url: "/contact/" },
        { name: "FAQ", url: "/faq/" },
      ],
    },
    {
      name: "Services",
      links: SERVICES.map((s) => ({ name: s.name, url: s.href })),
    },
    {
      name: "Industries",
      links: INDUSTRIES.map((i) => ({ name: i.name, url: i.href })),
    },
    {
      name: "Locations",
      links: ALL_LOCATIONS.map((l) => ({ name: l.name, url: l.path })),
    },
    {
      name: "Combos",
      links: COMBO_PAGES.map((c) => ({
        name: `${c.serviceName} — ${c.locationName}`,
        url: c.path,
      })),
    },
    {
      name: "Blog",
      links: posts.map((p) => ({
        name: p.title,
        url: `/blog/${p.slug}/`,
      })),
    },
    {
      name: "Trust",
      links: COMPANY_LINKS.filter(
        (l) =>
          l.name === "Certifications" ||
          l.name === "Case Studies" ||
          l.name === "Reviews" ||
          l.name === "Privacy Policy",
      ).map((l) => ({ name: l.name, url: l.href })),
    },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Sitemap — FACILITIES MAN",
        url: `${SITE.url}/sitemap/`,
        description:
          "Browse every page of the FACILITIES MAN website — services, locations, industries, blog and resources.",
      },
      siteNavigationSchema(sections),
    ],
  };
}

export default function SitemapRoute() {
  const posts = getAllBlogPosts();
  return (
    <>
      <JsonLd data={schema()} />
      <SitemapPage posts={posts} />
    </>
  );
}
