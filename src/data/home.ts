import type { FaqItem } from "@/lib/schema";

export const HOME_FAQS: FaqItem[] = [
  {
    question:
      "What is facilities management and how is it different from cleaning?",
    answer:
      "Facilities management is a broader service that coordinates everything a building needs to function — cleaning, grounds maintenance, trades, reactive repairs and preventative maintenance — under a single contract with one point of contact. Commercial cleaning is one component of facilities management. At FACILITIES MAN, we can deliver just cleaning or a fully integrated facilities programme, depending on what your site requires. The advantage of a single provider is simplified invoicing, consistent standards and direct accountability.",
  },
  {
    question:
      "Do you service Newcastle, Maitland, Lake Macquarie and the Hunter?",
    answer:
      "Yes. We are based in Newcastle and service all of the Newcastle LGA plus Maitland, Lake Macquarie, the Hunter Valley and the Central Coast. Our Newcastle base means we can mobilise same-day for urgent work across these areas. For sites in Sydney or further afield, contact us to discuss feasibility and pricing.",
  },
  {
    question: "Are FACILITIES MAN staff insured and police-checked?",
    answer:
      "Yes. All FACILITIES MAN staff complete a national police check before they begin work. Staff who work in childcare, education or healthcare settings also hold a current Working With Vulnerable People (WWVP) check. We carry public liability insurance — the certificate is available on request. ABN 72 697 453 937.",
  },
  {
    question: "How quickly can FACILITIES MAN start a new commercial contract?",
    answer:
      "Once a scope of works and quote are agreed, we can typically mobilise within the same week. We begin with a site walk-through that takes under an hour for most commercial properties. We then deliver a written scope and pricing within 24–48 hours. For urgent requirements, call us directly on 0450 924 377 and we will discuss what is possible.",
  },
  {
    question:
      "How do I get a quote for facilities management or commercial cleaning?",
    answer:
      "The fastest way is to use the quote form on this page or call us on 0450 924 377. Alternatively, email support@facilitiesman.com.au with a brief description of your site, the services you need and your preferred frequency. We will respond within 24 hours with next steps, and in most cases schedule a free site walk-through within 2–3 business days.",
  },
];

export const HOME_SERVICES = [
  {
    name: "Commercial Cleaning",
    href: "/services/commercial-cleaning/",
    outcome:
      "Consistent, documented cleaning programmes for offices, retail, strata and industrial sites across Newcastle.",
    imageLabel:
      "Commercial cleaning team cleaning a Newcastle office building — services-commercial-cleaning.webp",
  },
  {
    name: "Strata Cleaning",
    href: "/services/strata-cleaning/",
    outcome:
      "Common-area cleaning, bin rooms, lifts and car parks — with monthly reporting your strata committee can rely on.",
    imageLabel:
      "Strata cleaning in Newcastle apartment common area — services-strata-cleaning.webp",
  },
  {
    name: "Facilities Management",
    href: "/services/facilities-management/",
    outcome:
      "Cleaning, grounds, trades and reactive maintenance under one contract, one contact, one invoice.",
    imageLabel:
      "Facilities management contractor conducting site inspection in Newcastle — services-facilities-management.webp",
  },
  {
    name: "Office Cleaning",
    href: "/services/office-cleaning/",
    outcome:
      "Daily, three-times-weekly or weekly programmes with consumables resupply and eco-friendly product options.",
    imageLabel:
      "Office cleaning team cleaning desks in a Newcastle CBD office — services-office-cleaning.webp",
  },
  {
    name: "Grounds & Garden Maintenance",
    href: "/services/grounds-maintenance/",
    outcome:
      "Mowing, edging, hedging, pruning and seasonal clean-ups for strata and commercial properties.",
    imageLabel:
      "Grounds maintenance crew mowing lawn at a Newcastle strata complex — services-grounds-maintenance.webp",
  },
  {
    name: "Industrial Cleaning",
    href: "/services/industrial-cleaning/",
    outcome:
      "Warehouse, factory and distribution centre cleaning across Newcastle and the Hunter Valley.",
    imageLabel:
      "Industrial cleaning team in a Newcastle warehouse — services-industrial-cleaning.webp",
  },
] as const;

export const HOME_INDUSTRIES = [
  {
    name: "Strata & Body Corporate",
    blurb:
      "Specialist common-area and grounds services for owners corporations and strata managers across NSW.",
    href: "/services/",
  },
  {
    name: "Healthcare & Medical",
    blurb:
      "Infection-control aware cleaning for clinics and medical tenancies — enquire for Phase 2 medical cleaning page.",
    href: "/contact/",
  },
  {
    name: "Education & Childcare",
    blurb:
      "WWVP-checked teams for schools and childcare centres — enquire for Phase 2 childcare cleaning page.",
    href: "/contact/",
  },
  {
    name: "Commercial Property",
    blurb:
      "Presentation-focused cleaning for offices, retail and mixed-use buildings across the Hunter region.",
    href: "/services/commercial-cleaning/",
  },
  {
    name: "Government & Council",
    blurb:
      "Documented scopes and compliance-ready reporting for public buildings and council facilities.",
    href: "/contact/",
  },
] as const;
