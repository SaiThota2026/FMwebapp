import type { LocationPageData } from "./types";

const MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189784.09778925977!2d151.6682746!3d-32.9192953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b7314250ad5bd97%3A0x6529c4fc25182217!2sNewcastle%20NSW%2C%20Australia!4v1700000000000!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau";

export const newcastleData: LocationPageData = {
  slug: "newcastle",
  name: "Newcastle",
  title: "Cleaning & Facilities Services Newcastle — FACILITIES MAN",
  description:
    "FACILITIES MAN — Newcastle's locally owned facilities management and cleaning company. All suburbs covered. ABN 72 697 453 937. Free quote.",
  path: "/locations/newcastle/",
  ogTitle: "Commercial Cleaning & Facilities Management — Newcastle NSW",
  ogDescription:
    "FACILITIES MAN is Newcastle's owner-operated facilities management and commercial cleaning team covering all suburbs.",
  h1: "Facilities Management & Commercial Cleaning in Newcastle, NSW",
  intro:
    "FACILITIES MAN is based in Newcastle, NSW. We are not a Sydney or interstate company servicing Newcastle remotely — we are built here, and we service Newcastle first. Every enquiry is handled by the owner directly, and every new contract starts with a site walk-through by our Newcastle team.",
  servicesIntro:
    "From Newcastle CBD and Honeysuckle to Kotara, Mayfield and Charlestown, we deliver documented cleaning and facilities services with fast local mobilisation. Our scopes are built for how local properties are actually used, including mixed-use buildings and high-traffic commercial tenancies.",
  services: [
    {
      name: "Commercial Cleaning",
      href: "/services/commercial-cleaning/",
      blurb:
        "Daily and after-hours commercial cleaning for offices, retail tenancies and mixed-use buildings across Newcastle CBD, Honeysuckle and Kotara.",
    },
    {
      name: "Strata Cleaning",
      href: "/services/strata-cleaning/",
      blurb:
        "Common-area cleaning for inner-city apartments and strata complexes with monthly reporting for committees.",
    },
    {
      name: "Facilities Management",
      href: "/services/facilities-management/",
      blurb:
        "Integrated FM for multi-service buildings — cleaning, grounds, maintenance coordination and reporting under one contract.",
    },
    {
      name: "Office Cleaning",
      href: "/services/office-cleaning/",
      blurb:
        "Flexible office cleaning programmes for CBD and suburban workplaces with consumables management available.",
    },
    {
      name: "Grounds & Garden Maintenance",
      href: "/services/grounds-maintenance/",
      blurb:
        "Scheduled grounds care for strata and commercial properties across Newcastle suburbs.",
    },
    {
      name: "Industrial Cleaning",
      href: "/services/industrial-cleaning/",
      blurb:
        "Warehouse and industrial cleaning for Mayfield, Tomago and Newcastle port-adjacent corridors.",
    },
  ],
  suburbClusters: [
    {
      heading: "Inner City & CBD",
      body: "Newcastle CBD, Honeysuckle, The Junction, Cooks Hill, Hamilton and Mayfield have strong demand for office, retail and strata presentation services.",
    },
    {
      heading: "Eastern Suburbs",
      body: "Merewether, Bar Beach, Cooks Hill and The Hill include dense residential and mixed commercial demand, especially strata common areas.",
    },
    {
      heading: "Western & Outer Suburbs",
      body: "Kotara, Charlestown, Glendale, Jesmond and New Lambton include retail precincts, professional offices and growing commercial stock.",
    },
    {
      heading: "Industrial Corridor",
      body: "Mayfield, Tomago and Beresfield support logistics, manufacturing and large-floor industrial cleaning requirements.",
    },
  ],
  localTeamBody: [
    "Being based in Newcastle means we can mobilise same-day for urgent reactive work — not next week when a distant provider becomes available.",
    "We run efficient local routes that keep service delivery consistent and pricing practical across Newcastle suburbs.",
    "We know local building constraints — lift access, car park limits, strata meeting cycles and site-specific induction requirements.",
    "Our team understands Newcastle's operating rhythm, from CBD office peaks to coastal hospitality periods. That local context improves scheduling and service reliability.",
  ],
  industriesBody: [
    "Newcastle's economy supports strong demand across strata, commercial property, government facilities, healthcare surrounds, and industrial corridors.",
    "Honeysuckle and the CBD continue to drive office and retail cleaning demand, while Mayfield and Tomago support industrial programmes.",
    "We are currently taking on a small number of foundation clients in Newcastle with founder-direct attention during onboarding.",
    "We also support multi-site operators that need one provider across Newcastle and adjacent LGAs. That model helps clients simplify reporting and governance.",
  ],
  mapTitle: "FACILITIES MAN service area — Newcastle NSW",
  mapEmbed: MAP,
  ctaHeading: "Get a Free Quote for Newcastle",
  schemaAreaServed: [{ type: "City", name: "Newcastle" }],
  faqs: [
    {
      question: "Does FACILITIES MAN service Newcastle?",
      answer:
        "Yes — Newcastle is our home market. We service all Newcastle suburbs from the CBD and Honeysuckle through to Kotara, Mayfield and Charlestown. Because we are based locally, mobilisation and communication are faster than remote-provider models.",
    },
    {
      question: "How quickly can FACILITIES MAN respond in Newcastle?",
      answer:
        "For urgent reactive work, we can typically be on-site the same day in Newcastle. For new enquiries, we respond within 24 hours and aim to schedule a walk-through within 2-3 business days. Timelines are confirmed clearly in writing so site teams can plan access.",
    },
    {
      question: "What services are available in Newcastle?",
      answer:
        "All core services are available in Newcastle — commercial cleaning, strata cleaning, facilities management, office cleaning, grounds maintenance and industrial cleaning. Services can run as standalone programmes or bundled under one contract. We tailor scopes to your property type and operating hours.",
    },
    {
      question: "Do you have a local team or do you travel from Newcastle?",
      answer:
        "We are based in Newcastle and operate from here. Our team, management and owner are Newcastle-based. That local structure improves accountability and keeps response pathways simple.",
    },
    {
      question: "How much does commercial cleaning cost in Newcastle?",
      answer:
        "Pricing depends on site size, scope, frequency and access requirements. We provide written quotes after a free site walk-through. Your quote includes a documented scope so costs and responsibilities are transparent.",
    },
  ],
};
