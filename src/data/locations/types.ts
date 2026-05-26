import type { FaqItem } from "@/lib/schema";

export type LocationServiceLink = {
  name: string;
  href: string;
  blurb: string;
};

export type LocationSuburbCluster = {
  heading: string;
  body: string;
};

export type LocationPageData = {
  slug: string;
  name: string;
  title: string;
  description: string;
  path: string;
  ogTitle: string;
  ogDescription: string;
  h1: string;
  intro: string;
  servicesIntro: string;
  services: LocationServiceLink[];
  suburbClusters: LocationSuburbCluster[];
  localTeamBody: string[];
  industriesBody: string[];
  mapTitle: string;
  mapEmbed: string;
  faqs: FaqItem[];
  ctaHeading: string;
  schemaAreaServed: Array<{ type: string; name: string }>;
};
