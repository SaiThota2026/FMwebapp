export type ComboFaqItem = {
  question: string;
  answer: string;
};

export type ComboPageData = {
  locationSlug: string;
  serviceSlug: string;
  locationName: string;
  serviceName: string;
  title: string;
  description: string;
  path: string;
  ogTitle: string;
  ogDescription: string;
  h1: string;
  lead: string;
  localServiceBody: string[];
  inclusions: string[];
  whyLocalBody: string[];
  parentServiceHref: string;
  parentLocationHref: string;
  ctaHeading: string;
  ctaSubCopy: string;
  faqs: ComboFaqItem[];
};
