import { BlogHubTemplate } from "@/components/blog/BlogHubTemplate";
import { JsonLd } from "@/components/ui/JsonLd";
import { getAllBlogPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";
import { blogHubSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Blog — Facilities Management & Cleaning Insights | FACILITIES MAN",
  description:
    "Practical guides on facilities management, commercial cleaning, strata care and maintenance for Newcastle and Hunter Region businesses.",
  path: "/blog/",
  ogTitle: "FACILITIES MAN Blog — Facilities & Cleaning Insights",
  ogDescription:
    "Expert articles on commercial cleaning, strata, FM and maintenance for Newcastle and Hunter businesses.",
});

export default function BlogPage() {
  const posts = getAllBlogPosts();
  return (
    <>
      <JsonLd data={blogHubSchema(posts.map((p) => ({ title: p.title, slug: p.slug })))} />
      <BlogHubTemplate posts={posts} />
    </>
  );
}
