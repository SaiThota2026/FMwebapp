export type IndustryService = {
  name: string;
  href: string;
  blurb: string;
};

export type IndustryFaqItem = {
  question: string;
  answer: string;
};

export type IndustryPageData = {
  slug: string;
  name: string;
  title: string;
  description: string;
  path: string;
  ogTitle: string;
  ogDescription: string;
  h1: string;
  lead: string;
  whoWeServeHeading: string;
  whoWeServeBody: string[];
  whoWeServePoints: string[];
  servicesHeading: string;
  servicesIntro: string;
  services: IndustryService[];
  whyUsHeading: string;
  whyUsBody: string[];
  whyUsPoints: string[];
  complianceHeading: string;
  complianceBody: string[];
  compliancePoints: string[];
  ctaHeading: string;
  ctaSubCopy: string;
  faqs: IndustryFaqItem[];
};
