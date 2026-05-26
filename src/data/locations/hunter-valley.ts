import type { LocationPageData } from "./types";

const MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189784.09778925977!2d151.6682746!3d-32.9192953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b7314250ad5bd97%3A0x6529c4fc25182217!2sNewcastle%20NSW%2C%20Australia!4v1700000000000!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau";

export const hunterValleyData: LocationPageData = {
  slug: "hunter-valley",
  name: "Hunter Valley",
  title: "Facilities Services Hunter Valley — FACILITIES MAN",
  description:
    "Industrial cleaning and facilities management across Hunter Valley — Cessnock, Singleton, Muswellbrook. Newcastle-based. Free quote.",
  path: "/locations/hunter-valley/",
  ogTitle: "Industrial Cleaning & Facilities Management — Hunter Valley NSW",
  ogDescription:
    "Industrial and commercial cleaning across the Hunter Valley from FACILITIES MAN.",
  h1: "Facilities Management & Industrial Cleaning — Hunter Valley, NSW",
  intro:
    "The Hunter Valley is home to one of Australia's largest industrial corridors — coal mining, processing, logistics and agribusiness all demand high-quality, WHS-compliant cleaning and facilities services. FACILITIES MAN operates from Newcastle and services all of the Hunter Valley, from Cessnock and Branxton through to Singleton and Muswellbrook.",
  servicesIntro:
    "Industrial cleaning is our headline service in the Hunter Valley, supported by commercial, strata, grounds and facilities management programmes. We align delivery to operating conditions in mining-adjacent, processing and hospitality-heavy locations. Service plans are built to balance safety, reliability and operational continuity.",
  services: [
    {
      name: "Industrial Cleaning",
      href: "/services/industrial-cleaning/",
      blurb: "Warehouse, processing and mining-adjacent industrial cleaning with WHS documentation.",
    },
    {
      name: "Commercial Cleaning",
      href: "/services/commercial-cleaning/",
      blurb: "Commercial cleaning for Cessnock and Singleton CBD properties.",
    },
    {
      name: "Facilities Management",
      href: "/services/facilities-management/",
      blurb: "Integrated FM for multi-service industrial and commercial sites.",
    },
    {
      name: "Office Cleaning",
      href: "/services/office-cleaning/",
      blurb: "Office programmes for professional and government-adjacent sites.",
    },
    {
      name: "Grounds & Garden Maintenance",
      href: "/services/grounds-maintenance/",
      blurb: "Grounds care for commercial and rural-commercial properties.",
    },
    {
      name: "Strata Cleaning",
      href: "/services/strata-cleaning/",
      blurb: "Strata common-area cleaning as residential growth expands in Cessnock and Branxton.",
    },
  ],
  suburbClusters: [
    {
      heading: "Cessnock & Kurri Kurri",
      body: "Commercial centre and coal-adjacent industrial demand. These areas often require practical scheduling around freight, processing and public-facing operations.",
    },
    {
      heading: "Singleton",
      body: "Major mining hub and logistics corridor. Site requirements here commonly include WHS documentation and induction-ready mobilisation.",
    },
    {
      heading: "Muswellbrook",
      body: "Processing and resources facilities. Industrial cleaning scopes in this area prioritise safety, dust control and shift-compatible delivery.",
    },
    {
      heading: "Branxton & Pokolbin",
      body: "Wine tourism, hospitality, cellar doors and event venues. Schedules are tailored to event cycles and guest-facing presentation standards.",
    },
    {
      heading: "Scone & Upper Hunter",
      body: "Agribusiness and rural-commercial properties. Flexible routing and clear communication are critical for regional site reliability.",
    },
  ],
  localTeamBody: [
    "FACILITIES MAN is one of the few Newcastle-based providers who explicitly position for Hunter Valley industrial and mining site cleaning — with WHS documentation, SWMS preparation and site induction readiness.",
    "Same-day mobilisation is feasible from Newcastle for most Hunter Valley locations. Singleton is approximately 65km and Muswellbrook around 95km.",
    "Our founder is personally involved in all new site assessments in the Hunter corridor.",
    "Clients receive direct communication during mobilisation so site teams understand access, induction and scheduling requirements before work begins.",
    "This reduces project risk for sites that operate under strict WHS and contractor management frameworks.",
  ],
  industriesBody: [
    "Mining and resources dominate in Singleton and Muswellbrook. Wine tourism and hospitality drive demand in Pokolbin and Lovedale.",
    "Agribusiness processing and growing residential strata in Cessnock add commercial and strata programmes.",
    "We are actively building our Hunter Valley portfolio with founder-direct onboarding for new industrial and hospitality contracts.",
    "This mix requires adaptable service planning across very different environments, from industrial plants to customer-facing hospitality venues.",
    "Clients value this flexibility when they manage assets with different compliance and presentation expectations.",
    "Our documented onboarding process keeps these mixed-site portfolios manageable from day one.",
  ],
  mapTitle: "FACILITIES MAN service area — Hunter Valley NSW",
  mapEmbed: MAP,
  ctaHeading: "Get a Free Hunter Valley Quote",
  schemaAreaServed: [
    { type: "AdministrativeArea", name: "Hunter Valley" },
    { type: "City", name: "Cessnock" },
    { type: "City", name: "Singleton" },
    { type: "City", name: "Muswellbrook" },
  ],
  faqs: [
    {
      question: "Does FACILITIES MAN service the Hunter Valley?",
      answer:
        "Yes. We service the full Hunter Valley region from our Newcastle base — including Cessnock, Singleton, Muswellbrook, Branxton and Pokolbin. The Hunter Valley is a committed service region in our delivery model. We support industrial, commercial and hospitality sites across the corridor.",
    },
    {
      question: "How quickly can FACILITIES MAN respond in the Hunter Valley?",
      answer:
        "Same-day mobilisation is feasible from Newcastle for most Hunter Valley locations. We confirm timelines during your free quote. Travel and induction requirements are discussed upfront so site managers can plan effectively.",
    },
    {
      question: "What services are available in the Hunter Valley?",
      answer:
        "Industrial cleaning is our headline service. We also offer commercial cleaning, grounds maintenance, facilities management and hospitality cleaning for wineries and cellar doors in Pokolbin. Services can be bundled under one contract where governance and invoicing simplicity matter.",
    },
    {
      question: "Do you have a local team or do you travel from Newcastle?",
      answer:
        "We operate from our Newcastle base and deploy directly to Hunter Valley sites with site inductions and WHS documentation prepared in advance. This keeps accountability centralised while still supporting regional coverage. Mobilisation details are confirmed in writing before service starts.",
    },
    {
      question: "Can FACILITIES MAN clean wineries and cellar doors in Pokolbin?",
      answer:
        "Yes. We clean commercial hospitality venues including wineries, cellar doors, event facilities and accommodation in the Pokolbin and Cessnock wine region. Schedules can be aligned with event calendars and guest-facing periods. This helps venues maintain presentation without disrupting operations.",
    },
  ],
};
