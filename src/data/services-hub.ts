import type { FaqItem } from "@/lib/schema";
import { HOME_INDUSTRIES, HOME_SERVICES } from "@/data/home";
import { LOCATIONS } from "@/lib/site";

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

export const CORE_SERVICES = HOME_SERVICES.map((s) => ({
  ...s,
  blurb:
    s.name === "Commercial Cleaning"
      ? "Consistent, documented cleaning programmes for offices, retail, strata common areas and industrial tenancies across Newcastle. Daily, multi-weekly or weekly schedules with consumables management and monthly photo reporting."
      : s.name === "Strata Cleaning"
        ? "Common-area cleaning, bin rooms, lifts, car parks and entrance presentation for owners corporations and strata managers. Monthly reports formatted for committee minutes and AGMs."
        : s.name === "Facilities Management"
          ? "Cleaning, grounds, trades coordination and reactive maintenance under one contract and one Newcastle point of contact. One scope, one invoice, founder oversight."
          : s.name === "Office Cleaning"
            ? "Professional office cleaning for CBD and suburban workplaces — workstations, kitchens, bathrooms and touch points. Eco-friendly product options and flexible frequencies."
            : s.name === "Grounds & Garden Maintenance"
              ? "Mowing, edging, hedging, pruning and seasonal clean-ups for strata and commercial properties. Presentation-focused grounds care aligned with your building standards."
              : "Warehouse, factory and distribution centre cleaning across Newcastle and the Hunter Valley. Floor scrubbing, high-level dust control and site-induction ready crews.",
}));

export const SPECIALIST_SERVICES = [
  {
    name: "Healthcare & Medical Cleaning",
    blurb:
      "Infection-control aware cleaning for clinics and medical tenancies.",
  },
  {
    name: "Childcare Centre Cleaning",
    blurb: "WWVP-checked teams for early learning and education sites.",
  },
  {
    name: "Window Cleaning",
    blurb: "Internal and external glass for commercial and strata buildings.",
  },
  {
    name: "Carpet Cleaning",
    blurb: "Scheduled extraction and spot treatment for offices and retail.",
  },
  {
    name: "Pressure Washing",
    blurb: "Exterior surfaces, car parks, bin bays and building facades.",
  },
  {
    name: "Warehouse Cleaning",
    blurb: "Large-floor programmes for logistics and distribution sites.",
  },
  {
    name: "Sanitary & Washroom Services",
    blurb: "Consumables, hygiene systems and washroom presentation.",
  },
  {
    name: "Maintenance & Trades",
    blurb: "Reactive and planned maintenance coordination under FM contracts.",
  },
] as const;

export { HOME_INDUSTRIES as HUB_INDUSTRIES, LOCATIONS as HUB_LOCATIONS };
