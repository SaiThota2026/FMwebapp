import type { FaqItem } from "@/lib/schema";
import { HOME_SERVICES } from "@/data/home";
import { INDUSTRIES, LOCATIONS, SERVICES } from "@/lib/site";

export const SERVICES_HUB_FAQS: FaqItem[] = [
  {
    question: "What services does FACILITIES MAN provide?",
    answer:
      "FACILITIES MAN provides commercial cleaning, strata cleaning, facilities management, office cleaning, grounds and garden maintenance, and industrial cleaning. We also offer specialist services including medical cleaning, childcare cleaning, window cleaning, carpet cleaning, pressure washing, warehouse cleaning, sanitary and washroom services, and maintenance and trades coordination. All services are delivered from our Newcastle base across NSW.",
  },
  {
    question: "Can I bundle cleaning, grounds and maintenance under one contract?",
    answer:
      "Yes. Bundling services under a single contract is one of our core advantages. You get one scope of works, one invoice, one point of contact, and consistent standards across all services. Combined contracts typically result in better pricing than separate arrangements. Contact us to discuss which services make sense to bundle for your site.",
  },
  {
    question: "Do you tailor scopes of work to individual sites?",
    answer:
      "Yes — every scope of works is written specifically for the site after a free walk-through. We do not use a generic template. Your scope will list every area, every task, every frequency and every product used. You can compare it against your current contract and ask questions before signing anything.",
  },
  {
    question: "What is the minimum contract length?",
    answer:
      "We do not require a lock-in contract to start. Initial contracts are typically agreed on a trial basis — usually 4–8 weeks — giving you the opportunity to assess our performance before committing longer term. We believe our work will speak for itself. Talk to us about the arrangement that works best for your situation.",
  },
  {
    question: "How do I know which service I need?",
    answer:
      "Contact us and describe your site — we will recommend the right service or combination of services based on the type of building, your occupancy, your frequency requirements and your budget. A free site walk-through removes all the guesswork. Call 0450 924 377 or complete the quote form to get started.",
  },
];

const PHASE1_SLUGS = new Set([
  "commercial-cleaning",
  "strata-cleaning",
  "facilities-management",
  "office-cleaning",
  "grounds-maintenance",
  "industrial-cleaning",
]);

const specialistBlurbs: Record<string, string> = {
  "medical-cleaning":
    "Infection-control aware cleaning for clinics and medical tenancies.",
  "childcare-cleaning": "WWVP-checked teams for early learning and education sites.",
  "window-cleaning": "Internal and external glass for commercial and strata buildings.",
  "carpet-cleaning": "Scheduled extraction and spot treatment for offices and retail.",
  "pressure-washing": "Exterior surfaces, car parks, bin bays and building facades.",
  "warehouse-cleaning": "Large-floor programmes for logistics and distribution sites.",
  "sanitary-washroom-services":
    "Consumables, hygiene systems and washroom presentation.",
  "maintenance-trades":
    "Reactive and planned maintenance coordination under FM contracts.",
};

export const CORE_SERVICES = SERVICES.filter((s) => PHASE1_SLUGS.has(s.slug)).map(
  (s) => ({
    ...s,
    outcome: HOME_SERVICES.find((h) => h.href === s.href)?.outcome,
    blurb:
      s.slug === "commercial-cleaning"
        ? "Consistent, documented cleaning programmes for offices, retail, strata common areas and industrial tenancies."
        : s.slug === "strata-cleaning"
          ? "Common-area cleaning with committee-ready monthly reporting."
          : s.slug === "facilities-management"
            ? "Integrated cleaning, grounds and maintenance under one operational scope."
            : s.slug === "office-cleaning"
              ? "Flexible office cleaning schedules for CBD and suburban workplaces."
              : s.slug === "grounds-maintenance"
                ? "Presentation-focused grounds and garden care for commercial and strata properties."
                : "Operational cleaning for warehouses, factories and industrial sites.",
  }),
);

export const SPECIALIST_SERVICES = SERVICES.filter(
  (s) => !PHASE1_SLUGS.has(s.slug),
).map((s) => ({
  name: s.name,
  href: s.href,
  slug: s.slug,
  blurb: specialistBlurbs[s.slug] ?? "Owner-led specialist delivery across Newcastle and the Hunter.",
}));

export const HUB_INDUSTRIES = INDUSTRIES.map((industry) => ({
  ...industry,
  blurb:
    industry.slug === "strata-body-corporate"
      ? "Committee-ready reporting and common-area care for strata governance."
      : industry.slug === "healthcare"
        ? "Infection-aware cleaning and practical compliance support for healthcare sites."
        : industry.slug === "education-childcare"
          ? "Child-safe and schedule-aware delivery for schools and childcare sites."
          : industry.slug === "commercial-property"
            ? "Integrated support for commercial building presentation and operations."
            : "Documented services aligned to council and government facility needs.",
}));

export const HUB_LOCATIONS = LOCATIONS;
