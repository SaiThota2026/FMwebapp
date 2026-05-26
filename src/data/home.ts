import type { FaqItem } from "@/lib/schema";
import { SITE } from "@/lib/site";

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

export const HOME_LOCATIONS = [
  {
    name: "Newcastle",
    href: "/locations/newcastle/",
    badge: "Home base",
    blurb:
      "Our home base covers Newcastle CBD, the Honeysuckle precinct, Hunter River waterfront, The Junction, Kotara, Mayfield and Charlestown. We mobilise quickly for commercial, strata and industrial sites near Newcastle Interchange and the port corridor.",
    linkLabel: "Newcastle facilities services",
  },
  {
    name: "Maitland",
    href: "/locations/maitland/",
    badge: "Hunter corridor",
    blurb:
      "We service the Hunter corridor growth areas including Thornton, Rutherford industrial estate and East Maitland aged-care and retail strips. Commercial cleaning and industrial programmes are tailored to Maitland's expanding commercial footprint.",
    linkLabel: "Facilities services in Maitland",
  },
  {
    name: "Lake Macquarie",
    href: "/locations/lake-macquarie/",
    badge: "Lake suburbs",
    blurb:
      "Australia's largest local government area includes Charlestown commercial centre, Warners Bay and Belmont. We deliver strata, office and grounds programmes across the lake suburbs with Newcastle-based coordination.",
    linkLabel: "Lake Macquarie cleaning services",
  },
  {
    name: "Hunter Valley",
    href: "/locations/hunter-valley/",
    badge: "Industrial & wineries",
    blurb:
      "From Cessnock and Singleton mining and processing sites to Pokolbin wineries, we cover industrial cleaning and facilities support across the valley. Scopes account for dust, traffic and seasonal vineyard operations.",
    linkLabel: "Hunter Valley facilities services",
  },
  {
    name: "Central Coast",
    href: "/locations/central-coast/",
    badge: "Coastal NSW",
    blurb:
      "Gosford CBD, Tuggerah commercial precinct, Erina and Terrigal hospitality sites receive the same documented standards we apply in Newcastle. Contact us for Central Coast mobilisation and pricing.",
    linkLabel: "Central Coast cleaning services",
  },
] as const;

export const HOME_MAP_IMAGE_LABEL =
  "newcastle-facilities-services-map.webp — Map showing FACILITIES MAN service areas";

export const HOME_WHY_CHOOSE = [
  {
    title: "Owner-Operated Accountability",
    description:
      "The owner answers the phone — not a call centre. You speak directly with the decision-maker who scopes your site and oversees delivery. Every contract is personally managed, so issues are resolved quickly without ticket queues.",
  },
  {
    title: "Fully Insured & Compliant",
    description: `ABN ${SITE.abn}. Public liability insurance certificate available on request — [PLACEHOLDER — insert public liability insurance amount, e.g. $20 million]. All staff are police-checked; WWVP checks are held for childcare and education sites.`,
  },
  {
    title: "Modern Systems from Day One",
    description:
      "Digital scopes of work, photo reporting and clear task records from your first service — no legacy paperwork. You receive monthly reports your committee or facilities manager can audit without chasing updates.",
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
