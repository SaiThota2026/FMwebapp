import type { Metadata } from "next";
import { SITE } from "./site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  robots?: Metadata["robots"];
};

export function createPageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  ogImage = "/images/og/og-default.jpg",
  robots,
}: PageMetadataInput): Metadata {
  const canonical = `${SITE.url}${path}`;
  const resolvedOgTitle = ogTitle ?? title;
  const resolvedOgDescription = ogDescription ?? description;

  return {
    title,
    description,
    ...(robots ? { robots } : {}),
    alternates: { canonical },
    openGraph: {
      title: resolvedOgTitle,
      description: resolvedOgDescription,
      url: canonical,
      siteName: SITE.name,
      locale: "en_AU",
      type: "website",
      images: [
        {
          url: `${SITE.url}${ogImage}`,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${resolvedOgTitle}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedOgTitle,
      description: resolvedOgDescription,
      images: [`${SITE.url}${ogImage}`],
    },
  };
}
