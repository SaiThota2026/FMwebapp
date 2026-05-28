import { notFound } from "next/navigation";
import { BlogPostTemplate } from "@/components/blog/BlogPostTemplate";
import { JsonLd } from "@/components/ui/JsonLd";
import { getAllBlogSlugs, getBlogPost } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";
import { blogPostSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const post = getBlogPost(slug);
    return createPageMetadata({
      title: post.title,
      description: post.description,
      path: `/blog/${post.slug}/`,
      ogTitle: post.ogTitle,
      ogDescription: post.ogDescription,
    });
  } catch {
    return {};
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = getBlogPost(slug);
  } catch {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={blogPostSchema({
          title: post.title,
          description: post.description,
          slug: post.slug,
          datePublished: post.date,
        })}
      />
      <BlogPostTemplate post={post} />
    </>
  );
}
