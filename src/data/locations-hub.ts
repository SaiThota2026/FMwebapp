import type { FaqItem } from "@/lib/schema";
import { ALL_LOCATIONS } from "@/data/locations";
import { HOME_LOCATIONS, HOME_MAP_IMAGE_LABEL } from "@/data/home";
export { HOME_MAP_IMAGE_LABEL };

export const LOCATIONS_HUB_FAQS: FaqItem[] = [
  {
    question: "Which areas does FACILITIES MAN service?",
    answer:
      "We are based in Newcastle and service Newcastle, Maitland, Lake Macquarie, the Hunter Valley, Central Coast, Cessnock, Port Stephens, Singleton and Muswellbrook. Sydney and broader NSW are available on request for multi-site portfolios.",
  },
  {
    question: "Do you charge travel fees for Hunter Valley or Central Coast sites?",
    answer:
      "Travel is built into our scope after a site walk-through — we confirm mobilisation and frequency up front so there are no surprise line items. Regional sites outside our core LGAs are assessed case by case.",
  },
  {
    question: "Can one contract cover multiple locations?",
    answer:
      "Yes. We can structure multi-site scopes with consistent reporting and a single point of contact. Describe each address in your enquiry and we will recommend the right service mix per site.",
  },
];

const BADGE_BY_SLUG: Record<string, string> = {
  newcastle: "Home base",
  maitland: "Hunter corridor",
  "lake-macquarie": "Lake suburbs",
  "hunter-valley": "Industrial & wineries",
  "central-coast": "Coastal NSW",
  cessnock: "Hunter & wine region",
  "port-stephens": "Coastal NSW",
  singleton: "Upper Hunter",
  muswellbrook: "Upper Hunter",
};

function hubBlurb(slug: string, intro: string): string {
  const home = HOME_LOCATIONS.find((l) => l.href.includes(`/locations/${slug}/`));
  if (home) return home.blurb;
  const first = intro.split(/(?<=[.!?])\s+/)[0];
  return first.length > 220 ? `${first.slice(0, 217)}…` : first;
}

function hubLinkLabel(slug: string, name: string): string {
  const home = HOME_LOCATIONS.find((l) => l.href.includes(`/locations/${slug}/`));
  return home?.linkLabel ?? `Facilities services in ${name}`;
}

export const HUB_LOCATION_CARDS = ALL_LOCATIONS.map((loc) => ({
  slug: loc.slug,
  name: loc.name,
  href: loc.path,
  badge: BADGE_BY_SLUG[loc.slug] ?? "NSW coverage",
  description: hubBlurb(loc.slug, loc.intro),
  linkLabel: hubLinkLabel(loc.slug, loc.name),
}));
