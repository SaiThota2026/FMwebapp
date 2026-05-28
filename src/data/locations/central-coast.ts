import type { LocationPageData } from "./types";

const MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189784.09778925977!2d151.6682746!3d-32.9192953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b7314250ad5bd97%3A0x6529c4fc25182217!2sNewcastle%20NSW%2C%20Australia!4v1700000000000!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau";

export const centralCoastData: LocationPageData = {
  slug: "central-coast",
  name: "Central Coast",
  title: "Facilities Services Central Coast — FACILITIES MAN",
  description:
    "Commercial cleaning and facilities services across Central Coast NSW. Newcastle-based team. Free quote.",
  path: "/locations/central-coast/",
  ogTitle: "Commercial Cleaning & Facilities Management — Central Coast NSW",
  ogDescription:
    "Commercial cleaning and facilities management across the Central Coast from FACILITIES MAN.",
  h1: "Facilities Management & Commercial Cleaning — Central Coast, NSW",
  intro:
    "The Central Coast is one of NSW's largest population centres outside Sydney, with strong demand across retail, strata, healthcare and hospitality. FACILITIES MAN services the Central Coast from our Newcastle base — Gosford, Wyong, Terrigal, Erina and Tuggerah are all within our service area.",
  servicesIntro:
    "We deliver commercial, strata, office and facilities programmes across the Central Coast with documented service standards and owner-led onboarding. Our process is designed for clear mobilisation across Gosford, Wyong, Erina and nearby corridors. Clients receive practical timelines and direct communication throughout mobilisation, including early confirmation of access and reporting expectations.",
  services: [
    {
      name: "Commercial Cleaning",
      href: "/services/commercial-cleaning/",
      blurb: "Retail and commercial cleaning for Erina Fair precinct and Gosford CBD.",
    },
    {
      name: "Strata Cleaning",
      href: "/services/strata-cleaning/",
      blurb: "Common-area cleaning for coastal strata and apartment complexes.",
    },
    {
      name: "Facilities Management",
      href: "/services/facilities-management/",
      blurb: "Integrated FM for multi-service commercial and healthcare-adjacent sites.",
    },
    {
      name: "Office Cleaning",
      href: "/services/office-cleaning/",
      blurb: "Office programmes for Gosford and Wyong professional precincts.",
    },
    {
      name: "Grounds & Garden Maintenance",
      href: "/services/grounds-maintenance/",
      blurb: "Grounds care for strata and commercial properties.",
    },
    {
      name: "Industrial Cleaning",
      href: "/services/industrial-cleaning/",
      blurb: "Industrial cleaning for Wyong and Tuggerah logistics corridors.",
    },
  ],
  suburbClusters: [
    {
      heading: "Gosford & West Gosford",
      body: "CBD, government and professional services demand. These precincts require consistent daily presentation for offices and public-facing facilities.",
    },
    {
      heading: "Wyong & Tuggerah",
      body: "Retail, logistics and industrial corridors. Service plans here often combine commercial and industrial routines across larger footprints.",
    },
    {
      heading: "Terrigal & Avoca Beach",
      body: "Hospitality, accommodation and coastal commercial properties. Coastal conditions and visitor peaks make reliable scheduling especially important.",
    },
    {
      heading: "Erina & East Gosford",
      body: "Erina Fair retail precinct and surrounding commercial stock. These sites benefit from documented scopes that align with trading-hour constraints.",
    },
    {
      heading: "Woy Woy & Umina",
      body: "Growing mixed-use and hospitality corridors with steady demand for reliable office, strata and commercial presentation standards.",
    },
  ],
  localTeamBody: [
    "The Central Coast is approximately 60-90 minutes from our Newcastle base depending on location — we schedule efficient routes and confirm mobilisation timelines during quoting.",
    "We treat the Central Coast as a committed service region, not an occasional add-on market.",
    "Our founder is personally involved in all new Central Coast site assessments.",
    "Clients receive practical scheduling guidance upfront so access and service windows are clear before contracts begin.",
    "We keep communication direct throughout onboarding so site managers can coordinate internal stakeholders with confidence.",
    "This reduces delays and helps new contracts settle faster.",
  ],
  industriesBody: [
    "Retail (Erina Fair), strata (coastal apartments), healthcare surrounds and hospitality drive Central Coast demand.",
    "Wyong and Tuggerah support industrial and logistics cleaning programmes.",
    "We are actively building our Central Coast portfolio with founder-direct attention for new contracts.",
    "This region needs flexible service models that can support coastal hospitality, urban retail and logistics properties under one quality standard.",
    "For growing portfolios, that consistency helps simplify management across multiple suburbs and property types.",
    "We design schedules to balance travel efficiency with service quality so response standards remain dependable.",
    "Reliable documentation supports smoother procurement and governance decisions.",
    "We are building our Central Coast client base. See our services hub for the full range of available services.",
  ],
  mapTitle: "FACILITIES MAN service area — Central Coast NSW",
  mapEmbed: MAP,
  ctaHeading: "Get a Free Central Coast Quote",
  schemaAreaServed: [{ type: "AdministrativeArea", name: "Central Coast" }],
  faqs: [
    {
      question: "Does FACILITIES MAN service the Central Coast?",
      answer:
        "Yes. We service the Central Coast from our Newcastle base — including Gosford, Wyong, Terrigal, Erina and Tuggerah. The Central Coast is a planned service region in our weekly operating routes. We support both commercial and strata properties across the LGA. This includes retail, office and logistics environments with different service rhythms.",
    },
    {
      question: "How quickly can FACILITIES MAN respond on the Central Coast?",
      answer:
        "We confirm mobilisation timelines during your free quote. New enquiries receive a response within 24 hours. Assessment windows are coordinated around your site operations and access constraints.",
    },
    {
      question: "What services are available on the Central Coast?",
      answer:
        "All core services are available — commercial cleaning, strata cleaning, office cleaning, grounds maintenance, facilities management and industrial cleaning. Services can be delivered standalone or bundled under one agreement. Scopes are tailored to site type and operating hours.",
    },
    {
      question: "Do you have a local team or do you travel from Newcastle?",
      answer:
        "We operate from Newcastle and deploy directly to Central Coast sites. We schedule efficient routes across the region. This keeps accountability clear while maintaining practical coverage.",
    },
    {
      question: "How much does commercial cleaning cost on the Central Coast?",
      answer:
        "Pricing depends on site size, scope, frequency and travel logistics. We provide written quotes after a free site walk-through. Each quote includes a clear scope so decision-makers can compare options with confidence.",
    },
  ],
};
