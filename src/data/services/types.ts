export type FaqItem = {
  question: string;
  answer: string;
};

export type ServiceSection = {
  heading: string;
  body: string[];
};

export type ServicePageData = {
  slug: string;
  name: string;
  title: string;
  description: string;
  path: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
  h1: string;
  lead: string;
  sections: ServiceSection[];
  areas: string[];
  ctaHeading: string;
  ctaSubCopy: string;
  faqs: FaqItem[];
};

