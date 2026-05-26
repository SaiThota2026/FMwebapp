import type { LocationPageData } from "./types";

const MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189784.09778925977!2d151.6682746!3d-32.9192953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b7314250ad5bd97%3A0x6529c4fc25182217!2sNewcastle%20NSW%2C%20Australia!4v1700000000000!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau";

export const lakeMacquarieData: LocationPageData = {
  slug: "lake-macquarie",
  name: "Lake Macquarie",
  title: "Facilities Services Lake Macquarie — FACILITIES MAN",
  description:
    "FACILITIES MAN provides commercial cleaning and facilities management across Lake Macquarie — Charlestown, Warners Bay, Belmont, Cardiff. Free quote.",
  path: "/locations/lake-macquarie/",
  ogTitle: "Commercial Cleaning & Facilities Management — Lake Macquarie NSW",
  ogDescription:
    "Commercial cleaning and facilities management across Lake Macquarie LGA.",
  h1: "Facilities Management & Commercial Cleaning in Lake Macquarie, NSW",
  intro:
    "Lake Macquarie is one of Australia's largest LGAs by area, with a diverse commercial, strata and industrial property market. FACILITIES MAN services all of Lake Macquarie from our Newcastle base — Charlestown, Warners Bay, Belmont, Cardiff, Glendale, Toronto and Morisset are all within our service area.",
  servicesIntro:
    "From Charlestown's commercial centre to Warners Bay strata and Cardiff industrial sites, we deliver documented cleaning and facilities services across the LGA. Programmes are structured for local site conditions, including waterfront strata and mixed commercial assets. We keep communication direct so stakeholders have clear operational visibility.",
  services: [
    {
      name: "Commercial Cleaning",
      href: "/services/commercial-cleaning/",
      blurb: "Retail and commercial cleaning for Charlestown Square precinct and surrounds.",
    },
    {
      name: "Strata Cleaning",
      href: "/services/strata-cleaning/",
      blurb: "Common-area cleaning for dense strata in Warners Bay and Belmont.",
    },
    {
      name: "Facilities Management",
      href: "/services/facilities-management/",
      blurb: "Integrated FM for multi-service commercial and strata properties.",
    },
    {
      name: "Office Cleaning",
      href: "/services/office-cleaning/",
      blurb: "Office programmes for Charlestown professional precinct and surrounds.",
    },
    {
      name: "Grounds & Garden Maintenance",
      href: "/services/grounds-maintenance/",
      blurb: "Scheduled grounds care for strata and commercial sites.",
    },
    {
      name: "Industrial Cleaning",
      href: "/services/industrial-cleaning/",
      blurb: "Industrial cleaning for Cardiff, Glendale and logistics corridors.",
    },
  ],
  suburbClusters: [
    {
      heading: "Charlestown & Hamilton South",
      body: "Commercial centre, professional services and retail — Charlestown Square and surrounds. These areas need dependable presentation standards for high customer volumes and mixed tenancy types.",
    },
    {
      heading: "Warners Bay & Belmont",
      body: "Dense strata apartments, waterfront hospitality and professional services. Service planning must consider resident expectations, visitor traffic and coastal operating conditions.",
    },
    {
      heading: "Cardiff & Glendale",
      body: "Industrial, big-box retail and logistics demand. Programmes often combine industrial cleaning with commercial presentation routines across larger footprints.",
    },
    {
      heading: "Toronto & Morisset",
      body: "Southern lake corridor with emerging commercial and industrial growth. Early-stage developments benefit from documented standards as occupancy scales up.",
    },
  ],
  localTeamBody: [
    "Lake Macquarie is adjacent to Newcastle — our team can typically be on-site within 30 minutes for urgent work in Charlestown or Warners Bay.",
    "We regularly service Charlestown, Warners Bay and Glendale — these are core routes, not occasional visits.",
    "Local knowledge of strata committee cycles and foreshore building access helps us deliver consistent results.",
    "Because we are nearby, communication and escalation are straightforward for property managers who need quick decisions.",
    "Our onboarding process keeps site access, frequency and reporting expectations clear before the first scheduled visit.",
  ],
  industriesBody: [
    "Strata is dense in Warners Bay and Belmont. Charlestown drives retail and commercial demand.",
    "Cardiff and Glendale support industrial and logistics cleaning programmes.",
    "Healthcare surrounds near Lake Macquarie Private Hospital add infection-control aware cleaning requirements.",
    "We also support multi-site portfolios that need consistent standards across Newcastle and Lake Macquarie under one reporting rhythm.",
    "This combination of sectors rewards providers who can adapt routines without losing consistency.",
  ],
  mapTitle: "FACILITIES MAN service area — Lake Macquarie NSW",
  mapEmbed: MAP,
  ctaHeading: "Get a Free Lake Macquarie Quote",
  schemaAreaServed: [{ type: "City", name: "Lake Macquarie" }],
  faqs: [
    {
      question: "Does FACILITIES MAN service Lake Macquarie?",
      answer:
        "Yes. We service all of Lake Macquarie LGA — Charlestown, Warners Bay, Belmont, Cardiff, Glendale, Toronto and Morisset. Lake Macquarie is part of our regular operating schedule from Newcastle. We support both commercial and strata properties throughout the area.",
    },
    {
      question: "How quickly can FACILITIES MAN respond in Lake Macquarie?",
      answer:
        "Lake Macquarie is adjacent to Newcastle — we can typically be on-site within 30 minutes for urgent work in Charlestown or Warners Bay. New enquiries are answered within 24 hours. Mobilisation windows are confirmed during quoting so site teams can plan access.",
    },
    {
      question: "What services are available in Lake Macquarie?",
      answer:
        "All core services are available — commercial cleaning, strata cleaning, office cleaning, grounds maintenance, facilities management and industrial cleaning for Cardiff and Glendale. Services can be delivered as standalone programmes or bundled under one contract. Scopes are tailored to local building type and traffic profile.",
    },
    {
      question: "Do you have a local team or do you travel from Newcastle?",
      answer:
        "We operate from Newcastle, which is adjacent to Lake Macquarie. Our team regularly services Charlestown, Warners Bay and Glendale. This is a core operating corridor for us, not an occasional travel job.",
    },
    {
      question: "How much does commercial cleaning cost in Lake Macquarie?",
      answer:
        "Pricing is consistent with Newcastle — it depends on site size, scope, frequency and access. We provide written quotes after a free site walk-through. Your quote includes a documented scope so responsibilities and frequencies are clear.",
    },
  ],
};
