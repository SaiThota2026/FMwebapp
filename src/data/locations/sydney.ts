import type { LocationPageData } from "./types";

const MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424141.4899773768!2d150.793761!3d-33.8688197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae665e892549%3A0x5010404965244!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau";

export const sydneyData: LocationPageData = {
  slug: "sydney",
  name: "Sydney",
  title: "Commercial Cleaning Sydney — FACILITIES MAN",
  description:
    "Sydney commercial cleaning and facilities — CBD, Parramatta, North Sydney, Chatswood. Newcastle-headquartered national delivery. Free quote.",
  path: "/locations/sydney/",
  ogTitle: "Commercial Cleaning & Facilities Management — Sydney NSW",
  ogDescription:
    "Newcastle-managed commercial cleaning and facilities services across Sydney CBD, Parramatta and North Shore.",
  h1: "Sydney Facilities & Commercial Cleaning",
  intro:
    "FACILITIES MAN is headquartered in Newcastle, NSW — and we actively deliver commercial cleaning, strata care and facilities management across Greater Sydney. You get Newcastle-based owner accountability with vetted local supervisors and crews on the ground in Sydney, not a distant call centre managing your contract from interstate.",
  servicesIntro:
    "Our Sydney programmes focus on high-density commercial and strata assets — CBD towers, Parramatta business precincts and North Shore professional corridors. Every contract starts with a documented scope, vetted local resources and direct owner oversight from our Newcastle command centre.",
  services: [
    {
      name: "Commercial Cleaning",
      href: "/services/commercial-cleaning/",
      blurb:
        "Daily and after-hours commercial cleaning for Sydney CBD offices, Parramatta tenancies and North Sydney professional suites.",
    },
    {
      name: "Strata Cleaning",
      href: "/services/strata-cleaning/",
      blurb:
        "Common-area cleaning for inner-city apartment towers and North Shore strata schemes with practical committee reporting.",
    },
    {
      name: "Facilities Management",
      href: "/services/facilities-management/",
      blurb:
        "Integrated FM for multi-tenancy Sydney portfolios — cleaning, maintenance coordination and reporting under one contract.",
    },
  ],
  suburbClusters: [
    {
      heading: "CBD, Parramatta & Inner City",
      body: "Sydney CBD, Barangaroo, Darling Harbour, Parramatta CBD and Surry Hills support dense office, retail and mixed-use demand. We scope programmes around lift access, after-hours security and high-traffic presentation standards.",
    },
    {
      heading: "North Sydney, Chatswood & North Shore",
      body: "North Sydney, Chatswood, St Leonards and Mosman include professional offices, strata towers and healthcare-adjacent tenancies. Our vetted local teams maintain route density across the North Shore corridor.",
    },
  ],
  localTeamBody: [
    "Sydney contracts are coordinated from our Newcastle headquarters with vetted local supervisors and crews — you deal directly with the owner, while day-to-day delivery stays on the ground in Sydney.",
    "We build route-efficient schedules across CBD, Parramatta and North Shore precincts so response times stay practical and pricing reflects real mobilisation, not inflated metro mark-ups from distant providers.",
    "Our onboarding captures Sydney-specific constraints — strata by-laws, building inductions, car park access windows and security protocols — before the first service visit.",
    "Owner-operated in Newcastle, on-site in Sydney: that model gives portfolio managers one accountable contact while local teams handle presentation, reporting and reactive work across Greater Sydney.",
  ],
  industriesBody: [
    "Sydney's commercial mix spans strata body corporate, commercial property, healthcare surrounds, education and government tenancies — each with different compliance and access requirements.",
    "CBD and Parramatta office density drives demand for after-hours cleaning and consumables management, while North Shore strata schemes need consistent common-area programmes and committee-ready reporting.",
    "We are actively building our Sydney portfolio with founding-customer pricing for the first five contracts in this region — transparent scope, no fabricated case studies.",
    "Multi-site operators with Newcastle or Hunter assets plus Sydney tenancies benefit from one Newcastle-based coordinator, consistent reporting and a single escalation pathway across states.",
  ],
  mapTitle: "FACILITIES MAN service area — Sydney NSW",
  mapEmbed: MAP,
  ctaHeading: "Get a Free Quote for Sydney",
  schemaAreaServed: [{ type: "City", name: "Sydney" }],
  faqs: [
    {
      question: "Does FACILITIES MAN service Sydney?",
      answer:
        "Yes. We deliver commercial cleaning, strata cleaning and facilities management across Greater Sydney including the CBD, Parramatta, North Sydney and Chatswood. Delivery is Newcastle-headquartered with vetted local resources on the ground — contact us to confirm coverage for your suburb.",
    },
    {
      question: "How quickly can FACILITIES MAN respond in Sydney?",
      answer:
        "For new Sydney enquiries we respond within 24 hours and aim to schedule a walk-through within 2–3 business days. Reactive requests are coordinated through our Newcastle command centre with local crews — timelines are confirmed in writing before mobilisation.",
    },
    {
      question: "What services are available in Sydney?",
      answer:
        "Our core Sydney offering includes commercial cleaning, strata cleaning and facilities management. Additional specialist services from our full catalogue may be available on request for multi-site portfolios. Each programme is scoped to your building type and operating hours.",
    },
    {
      question: "Do you have a local team or do you travel from Newcastle?",
      answer:
        "We are owner-operated and headquartered in Newcastle, with vetted local supervisors and crews delivering in Sydney. You get direct owner accountability plus on-the-ground presence — not a franchise model or interstate account manager working remotely.",
    },
    {
      question: "How much does commercial cleaning cost in Sydney?",
      answer:
        "Sydney pricing depends on site size, frequency, access requirements and scope complexity. We provide written quotes after a free walk-through with a documented scope so costs and responsibilities are transparent before you commit.",
    },
  ],
  localCaseReference: {
    heading: "Local Scope Reference — Sydney",
    body: "Sydney's commercial and strata market demands documented scopes, after-hours scheduling flexibility, and compliance-ready reporting. Under the Strata Schemes Management Act 2015 (NSW), owners corporations are responsible for maintaining common property — including cleaning — so programmes must be documented to AGM-record standards. The profiles below outline the type of scopes we are ready to deliver across Sydney's key commercial precincts. When founding contracts complete and clients approve, published case studies will replace these example scopes.",
    scopeItems: [
      {
        label: "CBD & Barangaroo office towers",
        detail:
          "After-hours commercial cleaning for multi-floor tenancies in Martin Place, Barangaroo and Darling Harbour — with digital reporting, consumables management, and building security protocol compliance.",
      },
      {
        label: "Parramatta business precinct",
        detail:
          "Commercial cleaning and facilities management for multi-tenancy buildings in Parramatta CBD — bundling cleaning, maintenance coordination, and single-point reporting for portfolio managers.",
      },
      {
        label: "North Shore strata towers",
        detail:
          "Common-area cleaning for residential strata schemes in North Sydney, Chatswood and St Leonards — with committee-ready reporting aligned to NSW strata management obligations and AGM record standards.",
      },
      {
        label: "Mixed-use & retail corridors",
        detail:
          "Presentation-focused cleaning for Surry Hills, Newtown and inner-city mixed-use buildings — with flexible scheduling around retail trading hours and high-traffic public areas.",
      },
    ],
  },
};
