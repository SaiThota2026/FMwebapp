import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  keywords: string[];
  author: string;
  readingTime: string;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getAllBlogSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getBlogPost(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: String(data.title),
    date: String(data.date),
    description: String(data.description),
    ogTitle: String(data.ogTitle ?? data.title),
    ogDescription: String(data.ogDescription ?? data.description),
    keywords: Array.isArray(data.keywords) ? data.keywords : [],
    author: String(data.author ?? "FACILITIES MAN"),
    readingTime: String(data.readingTime ?? "5 min read"),
    content,
  };
}

export function getAllBlogPosts(): BlogPost[] {
  return getAllBlogSlugs()
    .map(getBlogPost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
