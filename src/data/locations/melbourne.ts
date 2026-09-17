import type { LocationPageData } from "./types";

const MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503784.3312585649!2d144.742137!3d-37.8136276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675216ce5!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau";

export const melbourneData: LocationPageData = {
  slug: "melbourne",
  name: "Melbourne",
  title: "Commercial Cleaning Melbourne — FACILITIES MAN",
  description:
    "Melbourne commercial cleaning and facilities. Newcastle-headquartered national delivery with VIC-vetted local resources. Free quote.",
  path: "/locations/melbourne/",
  ogTitle: "Commercial Cleaning & Facilities Management — Melbourne VIC",
  ogDescription:
    "Newcastle-headquartered facilities and commercial cleaning across Melbourne CBD, Southbank and Docklands.",
  h1: "Melbourne Facilities & Commercial Cleaning",
  intro:
    "FACILITIES MAN is headquartered in Newcastle, NSW — and we deliver commercial cleaning, strata care and facilities management across Greater Melbourne through our national delivery model. VIC-vetted local supervisors and crews handle on-site work; every contract remains accountable to our Newcastle-based owner.",
  servicesIntro:
    "Melbourne programmes cover CBD towers, Southbank commercial precincts and Docklands mixed-use assets. Newcastle command-centre oversight plus vetted Victoria resources gives portfolio managers consistent reporting without sacrificing local presence.",
  services: [
    {
      name: "Commercial Cleaning",
      href: "/services/commercial-cleaning/",
      blurb:
        "Commercial cleaning for Melbourne CBD offices, Southbank tenancies and Docklands professional and retail suites.",
    },
    {
      name: "Strata Cleaning",
      href: "/services/strata-cleaning/",
      blurb:
        "Common-area cleaning for inner-city apartment towers and Southbank strata schemes with practical committee reporting.",
    },
    {
      name: "Facilities Management",
      href: "/services/facilities-management/",
      blurb:
        "Integrated FM for Melbourne commercial portfolios — cleaning, maintenance coordination and single-point reporting.",
    },
  ],
  suburbClusters: [
    {
      heading: "CBD, Southbank & Docklands",
      body: "Melbourne CBD, Southbank and Docklands include Australia's densest commercial and mixed-use corridors. We scope around laneway access, after-hours security, lift protocols and high-traffic presentation standards.",
    },
    {
      heading: "Richmond, South Yarra & Inner East",
      body: "Richmond, South Yarra, Cremorne and Prahran support professional offices, retail and inner-city strata demand. Our VIC-vetted teams maintain route coverage across these established commercial precincts.",
    },
  ],
  localTeamBody: [
    "Melbourne delivery is coordinated from our Newcastle headquarters with VIC-vetted local supervisors and crews — direct owner accountability plus on-the-ground Victoria resources.",
    "We manage mobilisation, scope updates and reporting from Newcastle so clients with Hunter and metro assets have one provider, one reporting format and one escalation contact.",
    "Onboarding captures Victoria-specific requirements — WHS inductions, owners corporation rules, access windows and security protocols — before the first service visit.",
    "National FM with VIC-vetted local resources means Melbourne sites get practical response pathways and documented scopes, while the owner in Newcastle remains accountable for contract outcomes.",
  ],
  industriesBody: [
    "Melbourne's commercial mix spans strata body corporate, commercial property, education, healthcare surrounds and government tenancies — each with different compliance and access requirements.",
    "CBD and Docklands office density drives after-hours cleaning and consumables programmes, while inner-east strata schemes need reliable common-area care and committee-ready reporting.",
    "We are actively building our Melbourne portfolio with founding-customer pricing for the first five contracts in Victoria — transparent scope, no fabricated case studies.",
    "Multi-state operators with Newcastle or Hunter assets plus Melbourne tenancies benefit from one Newcastle-based coordinator, aligned reporting and a unified contract governance model.",
  ],
  mapTitle: "FACILITIES MAN service area — Melbourne VIC",
  mapEmbed: MAP,
  ctaHeading: "Get a Free Quote for Melbourne",
  schemaAreaServed: [{ type: "City", name: "Melbourne" }],
  faqs: [
    {
      question: "Does FACILITIES MAN service Melbourne?",
      answer:
        "Yes. We deliver commercial cleaning, strata cleaning and facilities management across Greater Melbourne including the CBD, Southbank, Docklands and Richmond. Delivery is Newcastle-headquartered with VIC-vetted local resources — contact us to confirm coverage for your suburb.",
    },
    {
      question: "How quickly can FACILITIES MAN respond in Melbourne?",
      answer:
        "We respond to new Melbourne enquiries within 24 hours and aim to schedule a walk-through within 2–3 business days. Reactive work is coordinated through our Newcastle command centre with local Victoria crews — timelines are confirmed in writing.",
    },
    {
      question: "What services are available in Melbourne?",
      answer:
        "Our core Melbourne offering includes commercial cleaning, strata cleaning and facilities management. Additional specialist services may be available for multi-site portfolios on request. Each programme is scoped to your building type and operating hours.",
    },
    {
      question: "Do you have a local team or do you travel from Newcastle?",
      answer:
        "We are headquartered in Newcastle with VIC-vetted local supervisors and crews in Melbourne. You deal directly with the owner in Newcastle while day-to-day delivery stays on the ground in Victoria — not a remote interstate account manager.",
    },
    {
      question: "How much does commercial cleaning cost in Melbourne?",
      answer:
        "Melbourne pricing depends on site size, frequency, access requirements and scope complexity. We provide written quotes after a free walk-through with a documented scope so costs and responsibilities are transparent.",
    },
  ],
  localCaseReference: {
    heading: "Local Scope Reference — Melbourne",
    body: "Melbourne's residential and commercial strata market operates under the Owners Corporations Act 2006 (Victoria), which sets out owners corporation responsibilities for common property maintenance. Melbourne's unique urban layout — laneway access constraints, loading dock scheduling windows, and dense mixed-use corridors in the CBD and Docklands — requires cleaning programmes scoped around practical access and after-hours security protocols. The profiles below outline the type of scopes we are ready to deliver across Melbourne's key commercial precincts. When founding contracts complete and clients approve, published case studies will replace these example scopes.",
    scopeItems: [
      {
        label: "CBD & Docklands office towers",
        detail:
          "After-hours commercial cleaning for multi-floor tenancies in the CBD and Docklands — with digital reporting, consumables management, and laneway/loading dock access scheduling aligned to building security protocols.",
      },
      {
        label: "Southbank owners corporation schemes",
        detail:
          "Common-area cleaning for residential owners corporations in Southbank and Docklands — with reporting aligned to Owners Corporations Act 2006 common property maintenance obligations and committee-ready AGM documentation.",
      },
      {
        label: "Inner-east strata & professional offices",
        detail:
          "Common-area cleaning and office cleaning for strata schemes and professional suites in Richmond, South Yarra, Cremorne and Prahran — with flexible scheduling around retail trading hours and inner-city access constraints.",
      },
      {
        label: "Multi-state portfolio coordination",
        detail:
          "Integrated facilities management for portfolio managers with Hunter-region and Melbourne assets — unified reporting, one escalation contact, and consistent standards across NSW and Victoria.",
      },
    ],
  },
};
