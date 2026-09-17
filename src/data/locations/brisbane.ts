import type { LocationPageData } from "./types";

const MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d452286.9749127047!2d152.9523294!3d-27.4697707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac367dd7%3A0x5063677cbd83fad!2sBrisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau";

export const brisbaneData: LocationPageData = {
  slug: "brisbane",
  name: "Brisbane",
  title: "Commercial Cleaning Brisbane — FACILITIES MAN",
  description:
    "Brisbane commercial cleaning and facilities. Newcastle-headquartered national delivery with QLD-vetted local resources. Free quote.",
  path: "/locations/brisbane/",
  ogTitle: "Commercial Cleaning & Facilities Management — Brisbane QLD",
  ogDescription:
    "Newcastle-headquartered facilities and commercial cleaning across Brisbane CBD, Fortitude Valley and South Brisbane.",
  h1: "Brisbane Facilities & Commercial Cleaning",
  intro:
    "FACILITIES MAN is based in Newcastle, NSW — and we deliver commercial cleaning, strata care and facilities management across Greater Brisbane through our national delivery model. QLD-vetted local supervisors and crews handle on-site work; every contract is accountable to our Newcastle-based owner.",
  servicesIntro:
    "Brisbane programmes cover CBD towers, Fortitude Valley commercial precincts and South Brisbane mixed-use assets. We combine Newcastle command-centre oversight with vetted Queensland resources so multi-state portfolios get consistent reporting without losing local responsiveness.",
  services: [
    {
      name: "Commercial Cleaning",
      href: "/services/commercial-cleaning/",
      blurb:
        "Commercial cleaning for Brisbane CBD offices, Fortitude Valley tenancies and South Brisbane retail and professional suites.",
    },
    {
      name: "Strata Cleaning",
      href: "/services/strata-cleaning/",
      blurb:
        "Common-area cleaning for inner-city apartment schemes and riverside strata complexes with committee-ready reporting.",
    },
    {
      name: "Facilities Management",
      href: "/services/facilities-management/",
      blurb:
        "Integrated FM for Brisbane commercial portfolios — cleaning, maintenance coordination and single-point reporting.",
    },
  ],
  suburbClusters: [
    {
      heading: "CBD, Fortitude Valley & Newstead",
      body: "Brisbane CBD, Fortitude Valley, Newstead and Spring Hill include dense office, hospitality and mixed-use stock. We scope around peak-hour access, lift shutdowns and presentation standards for high-traffic commercial tenancies.",
    },
    {
      heading: "South Brisbane, West End & Chermside",
      body: "South Brisbane, West End, Woolloongabba and Chermside support education-adjacent, retail and suburban commercial demand. Our QLD-vetted teams maintain practical route coverage across these corridors.",
    },
  ],
  localTeamBody: [
    "Brisbane delivery runs through our Newcastle headquarters with QLD-vetted local supervisors and crews — one owner contact, on-the-ground Queensland resources.",
    "We coordinate mobilisation, scope changes and reporting from Newcastle so multi-state clients have a single accountable provider rather than separate contractors per city.",
    "Onboarding captures Queensland-specific requirements — WHS inductions, body corporate rules, access windows and security protocols — before the first service visit.",
    "National FM with QLD-vetted local resources means Brisbane sites get practical response times and documented scopes, while portfolio managers retain Newcastle-based owner oversight.",
  ],
  industriesBody: [
    "Brisbane's economy spans commercial property, strata body corporate, government tenancies, education and healthcare-adjacent facilities — each with distinct compliance and scheduling needs.",
    "CBD and Fortitude Valley office density drives after-hours cleaning programmes, while South Brisbane and riverside strata schemes need reliable common-area care and practical committee reporting.",
    "We are actively building our Brisbane portfolio with founding-customer pricing for the first five contracts in Queensland — honest scope, no fabricated testimonials.",
    "Clients with Hunter-region assets plus Brisbane tenancies benefit from one Newcastle coordinator, aligned reporting formats and a unified escalation pathway across NSW and QLD.",
  ],
  mapTitle: "FACILITIES MAN service area — Brisbane QLD",
  mapEmbed: MAP,
  ctaHeading: "Get a Free Quote for Brisbane",
  schemaAreaServed: [{ type: "City", name: "Brisbane" }],
  faqs: [
    {
      question: "Does FACILITIES MAN service Brisbane?",
      answer:
        "Yes. We deliver commercial cleaning, strata cleaning and facilities management across Greater Brisbane including the CBD, Fortitude Valley, South Brisbane and Chermside. Delivery is Newcastle-headquartered with QLD-vetted local resources — contact us to confirm coverage for your address.",
    },
    {
      question: "How quickly can FACILITIES MAN respond in Brisbane?",
      answer:
        "We respond to new Brisbane enquiries within 24 hours and aim to schedule a walk-through within 2–3 business days. Reactive work is coordinated through our Newcastle command centre with local Queensland crews — timelines are confirmed in writing.",
    },
    {
      question: "What services are available in Brisbane?",
      answer:
        "Our core Brisbane offering includes commercial cleaning, strata cleaning and facilities management. Additional specialist services may be available for multi-site portfolios on request. Each programme is scoped to your building type and operating hours.",
    },
    {
      question: "Do you have a local team or do you travel from Newcastle?",
      answer:
        "We are headquartered in Newcastle with QLD-vetted local supervisors and crews in Brisbane. You deal directly with the owner in Newcastle while day-to-day delivery stays on the ground in Queensland — not a remote interstate account manager.",
    },
    {
      question: "How much does commercial cleaning cost in Brisbane?",
      answer:
        "Brisbane pricing depends on site size, frequency, access requirements and scope complexity. We provide written quotes after a free walk-through with a documented scope so costs and responsibilities are transparent.",
    },
  ],
};
