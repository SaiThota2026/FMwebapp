import type { FaqItem } from "@/lib/schema";

/**
 * Example scope profiles for the Case Studies page.
 *
 * These are NOT fabricated case studies. They describe representative project
 * types FACILITIES MAN is equipped to deliver in each local market — framed
 * transparently as example scopes. When real founding contracts complete and
 * clients approve publication, actual case studies will replace these profiles.
 *
 * SEO strategy: each profile targets local-market service phrases (e.g.
 * "commercial cleaning Newcastle CBD", "strata cleaning Sydney North Shore")
 * and references real precincts, property types, and compliance context.
 */

export type ExampleScope = {
  id: string;
  title: string;
  service: string;
  serviceSlug: string;
  industry: string;
  location: string;
  locationSlug: string;
  summary: string;
  scopeDetail: string[];
  approach: string[];
  whatCaseStudyWillInclude: string[];
};

export const EXAMPLE_SCOPES: ExampleScope[] = [
  // ── Newcastle / Hunter ──────────────────────────────────────────────
  {
    id: "newcastle-cbd-office-cleaning",
    title: "Newcastle CBD Office Tower — Daily Commercial Cleaning Programme",
    service: "Commercial Cleaning",
    serviceSlug: "commercial-cleaning",
    industry: "Commercial Property",
    location: "Newcastle",
    locationSlug: "newcastle",
    summary:
      "A representative scope for a multi-floor Newcastle CBD office tenancy — covering daily cleaning, consumables management, and after-hours presentation for high-traffic corporate spaces near Honeysuckle and Hunter Street.",
    scopeDetail: [
      "Daily vacuum and mop of reception, corridors, meeting rooms, and break-out spaces across 1,500–3,000m² floor plates",
      "Kitchen and breakout area sanitisation including benchtops, sinks, appliances, and high-touch surfaces",
      "Restroom cleaning and restocking with consumables resupply tracked through digital reporting",
      "After-hours scheduling coordinated around tenant access windows and building security protocols",
    ],
    approach: [
      "Site walk-through to map traffic patterns, floor surfaces, and access constraints",
      "Documented scope of works with task frequencies and accountability checkpoints",
      "Vetted local crew assigned to the building with a named supervisor for direct communication",
      "Monthly photo reporting for facilities managers and building committees",
    ],
    whatCaseStudyWillInclude: [
      "Documented scope and mobilisation timeline",
      "Before-and-after presentation photography (with client approval)",
      "Measurable outcomes — presentation scores, response times, audit results",
      "Client reference contact (with written consent)",
    ],
  },
  {
    id: "lake-macquarie-strata-cleaning",
    title: "Lake Macquarie Strata Complex — Common Area Cleaning Programme",
    service: "Strata Cleaning",
    serviceSlug: "strata-cleaning",
    industry: "Strata & Body Corporate",
    location: "Lake Macquarie",
    locationSlug: "lake-macquarie",
    summary:
      "A representative scope for a residential strata scheme in Charlestown or Warners Bay — covering lobby, lift, corridor, car park, and bin room cleaning with committee-ready reporting aligned to NSW strata management obligations.",
    scopeDetail: [
      "Lobby, foyer, and internal corridor sweeping, mopping, and detail cleaning on a scheduled frequency",
      "Lift interior wipe-down and high-touch surface sanitisation (buttons, handrails, intercoms)",
      "Basement car park sweeping and line-marking preservation",
      "Bin room cleaning and odour management with quarterly deep-clean scheduling",
    ],
    approach: [
      "Strata committee consultation to align service frequency with building by-laws and budget cycles",
      "Reporting format designed for AGM records and strata manager review",
      "Compliance documentation maintained for WHS, insurance, and audit readiness",
      "Flexible scheduling for early morning or evening access to minimise resident disruption",
    ],
    whatCaseStudyWillInclude: [
      "Committee-approved scope and service level agreement",
      "Photographic evidence of common area presentation standards",
      "Audit trail of cleaning frequency and compliance documentation",
      "Strata committee reference (with written consent)",
    ],
  },
  {
    id: "hunter-valley-facilities-management",
    title: "Hunter Valley Industrial Estate — Integrated Facilities Management",
    service: "Facilities Management",
    serviceSlug: "facilities-management",
    industry: "Commercial Property",
    location: "Hunter Valley",
    locationSlug: "hunter-valley",
    summary:
      "A representative scope for an industrial estate in the Hunter Valley — bundling cleaning, grounds maintenance, trade coordination, and reactive repairs under a single contract with one point of contact.",
    scopeDetail: [
      "Warehouse and factory floor cleaning including high-dust removal and machinery-adjacent detailing",
      "Grounds maintenance — mowing, edging, weed control, and car park presentation",
      "Reactive maintenance coordination — plumbing, electrical, and trade call-outs managed through one contact",
      "Monthly reporting covering cleaning, grounds, and maintenance activity in a single dashboard",
    ],
    approach: [
      "Site assessment covering building footprint, operational hours, and safety zoning",
      "Single contract replacing multiple vendors — one invoice, one escalation pathway",
      "Preventative maintenance schedule aligned with operational downtime windows",
      "Owner-direct oversight with documented response times for reactive requests",
    ],
    whatCaseStudyWillInclude: [
      "Vendor consolidation outcomes — contracts simplified, response times measured",
      "Cost transparency reporting across cleaning, grounds, and maintenance streams",
      "Photographic documentation of site presentation improvements",
      "Facilities manager reference (with written consent)",
    ],
  },
  {
    id: "mayfield-industrial-cleaning",
    title: "Mayfield Warehouse — Industrial Deep Clean Programme",
    service: "Industrial Cleaning",
    serviceSlug: "industrial-cleaning",
    industry: "Commercial Property",
    location: "Newcastle",
    locationSlug: "newcastle",
    summary:
      "A representative scope for a warehouse or distribution facility in the Mayfield, Tomago, or Beresfield industrial corridor — covering high-dust removal, floor scrubbing, and machinery-zone cleaning with WHS-compliant protocols.",
    scopeDetail: [
      "High-dust removal from rafters, ducting, lighting, and overhead structures",
      "Concrete floor scrubbing and degreasing for forklift and pedestrian zones",
      "Machinery-adjacent cleaning with contamination control and WHS-compliant product selection",
      "Loading dock and roller door cleaning including oil and grime removal",
    ],
    approach: [
      "WHS risk assessment and Safe Work Method Statement (SWMS) before mobilisation",
      "Scheduling around production windows — after-hours or shutdown periods",
      "Industrial-grade equipment and containment to prevent cross-contamination",
      "Post-clean inspection and photographic sign-off for compliance records",
    ],
    whatCaseStudyWillInclude: [
      "WHS documentation and risk assessment records",
      "Before-and-after photography of high-dust and floor cleaning outcomes",
      "Compliance sign-off and inspection records",
      "Site manager reference (with written consent)",
    ],
  },

  // ── Sydney ──────────────────────────────────────────────────────────
  {
    id: "sydney-cbd-office-cleaning",
    title: "Sydney CBD Office Portfolio — After-Hours Commercial Cleaning",
    service: "Commercial Cleaning",
    serviceSlug: "commercial-cleaning",
    industry: "Commercial Property",
    location: "Sydney",
    locationSlug: "sydney",
    summary:
      "A representative scope for a Sydney CBD office tower or multi-tenancy building in Barangaroo, Martin Place, or Darling Harbour — covering after-hours cleaning, consumables management, and high-traffic presentation standards.",
    scopeDetail: [
      "After-hours daily cleaning of workstations, meeting rooms, kitchens, and breakout areas across multiple floors",
      "High-touch surface sanitisation of lift lobbies, reception, and shared amenities",
      "Consumables management with digital tracking and automated resupply triggers",
      "Flexible scheduling aligned to tenant occupancy patterns and building security protocols",
    ],
    approach: [
      "Building induction and security clearance completed before first service visit",
      "Route-efficient scheduling across CBD, Parramatta, and North Shore precincts",
      "Digital reporting with photo evidence for facilities managers and portfolio managers",
      "Named supervisor on the ground in Sydney with owner oversight from Newcastle",
    ],
    whatCaseStudyWillInclude: [
      "Documented scope across multi-tenancy floors with frequency and accountability matrix",
      "Presentation audit scores and trend reporting",
      "Mobilisation timeline from walk-through to first service",
      "Portfolio manager reference (with written consent)",
    ],
  },
  {
    id: "sydney-north-shore-strata",
    title: "North Shore Strata Tower — Common Area Cleaning & Committee Reporting",
    service: "Strata Cleaning",
    serviceSlug: "strata-cleaning",
    industry: "Strata & Body Corporate",
    location: "Sydney",
    locationSlug: "sydney",
    summary:
      "A representative scope for a residential strata tower in North Sydney, Chatswood, or St Leonards — covering lobby, lift, car park, and amenity cleaning with reporting formatted for strata committees and managing agents.",
    scopeDetail: [
      "Lobby, foyer, and corridor cleaning with presentation standards suited to premium residential towers",
      "Lift interior detailing including mirrors, buttons, and handrail sanitisation",
      "Basement car park sweeping and visitor bay presentation",
      "Bin room, mail room, and communal amenity cleaning (gym, BBQ, rooftop where applicable)",
    ],
    approach: [
      "Strata committee consultation to align service frequency, by-laws, and budget expectations",
      "AGM-ready reporting with photographic evidence and compliance documentation",
      "Scheduling around resident access patterns — early morning or evening service windows",
      "Named account contact rather than a call centre — direct escalation to the owner",
    ],
    whatCaseStudyWillInclude: [
      "Committee-approved scope and service level agreement",
      "Presentation trend reporting with photographic evidence",
      "Compliance documentation suitable for strata manager review",
      "Strata committee reference (with written consent)",
    ],
  },
  {
    id: "parramatta-facilities-management",
    title: "Parramatta Multi-Tenancy Building — Integrated Facilities Management",
    service: "Facilities Management",
    serviceSlug: "facilities-management",
    industry: "Commercial Property",
    location: "Sydney",
    locationSlug: "sydney",
    summary:
      "A representative scope for a multi-tenancy commercial building in Parramatta CBD — bundling cleaning, maintenance coordination, and reporting under one contract for portfolio managers seeking a single accountable provider.",
    scopeDetail: [
      "Daily and after-hours cleaning across multiple tenant floors with varying access requirements",
      "Reactive maintenance coordination — trade call-outs, repairs, and preventative scheduling",
      "Consumables and washroom services management with automated resupply",
      "Monthly reporting covering cleaning, maintenance, and compliance in a single dashboard",
    ],
    approach: [
      "Single contract replacing multiple vendors — simplified invoicing and governance",
      "Building-specific onboarding capturing Parramatta access, security, and induction requirements",
      "Newcastle-based owner oversight with vetted local supervisors on the ground in Sydney",
      "Documented response times and escalation pathways for portfolio managers",
    ],
    whatCaseStudyWillInclude: [
      "Vendor consolidation outcomes and governance simplification",
      "Response time and reactive maintenance reporting",
      "Photographic documentation of presentation standards",
      "Portfolio manager reference (with written consent)",
    ],
  },

  // ── Brisbane ────────────────────────────────────────────────────────
  {
    id: "brisbane-cbd-office-cleaning",
    title: "Brisbane CBD Corporate Office — Commercial Cleaning Programme",
    service: "Commercial Cleaning",
    serviceSlug: "commercial-cleaning",
    industry: "Commercial Property",
    location: "Brisbane",
    locationSlug: "brisbane",
    summary:
      "A representative scope for a corporate office in Brisbane CBD, Fortitude Valley, or Newstead — covering daily cleaning, after-hours scheduling, and high-traffic presentation for Queensland commercial tenancies.",
    scopeDetail: [
      "Daily cleaning of workstations, meeting rooms, kitchens, and breakout areas",
      "High-touch surface sanitisation of lift lobbies, reception, and shared amenities",
      "Restroom cleaning and consumables resupply with digital tracking",
      "After-hours scheduling aligned to tenant access and building security protocols",
    ],
    approach: [
      "QLD WHS induction and site-specific compliance completed before first service",
      "Route-efficient scheduling across CBD, Fortitude Valley, and South Brisbane corridors",
      "Digital photo reporting for facilities managers and portfolio coordinators",
      "Named local supervisor in Brisbane with owner accountability from Newcastle",
    ],
    whatCaseStudyWillInclude: [
      "Documented scope with frequency and accountability matrix",
      "Presentation audit scores and trend reporting",
      "Mobilisation timeline from walk-through to first service",
      "Facilities manager reference (with written consent)",
    ],
  },
  {
    id: "brisbane-body-corporate-cleaning",
    title: "South Brisbane Body Corporate — Common Area Cleaning & Compliance",
    service: "Strata Cleaning",
    serviceSlug: "strata-cleaning",
    industry: "Strata & Body Corporate",
    location: "Brisbane",
    locationSlug: "brisbane",
    summary:
      "A representative scope for a body corporate scheme in South Brisbane, West End, or Woolloongabba — covering common area cleaning aligned to Queensland's Body Corporate and Community Management Act 1997 obligations.",
    scopeDetail: [
      "Lobby, foyer, and corridor cleaning with presentation standards suited to subtropical residential schemes",
      "Lift interior detailing and high-touch surface sanitisation (buttons, handrails, intercoms)",
      "Bin room cleaning and odour management — critical in Brisbane's humid climate",
      "Communal amenity cleaning (pool, gym, BBQ areas) with hygiene-focused scheduling",
      "Exterior walkway and render mould/mildew treatment addressing subtropical climate conditions",
    ],
    approach: [
      "Body corporate committee consultation aligned to BCCM Act common property obligations",
      "Compliance documentation formatted for committee records and AGM reporting",
      "Scheduling around resident access patterns and body corporate by-laws",
      "Specialist product selection for humidity-driven mould, mildew, and algae on exterior surfaces",
    ],
    whatCaseStudyWillInclude: [
      "Committee-approved scope aligned to BCCM Act maintenance obligations",
      "Photographic evidence of common area presentation and mould/mildew treatment outcomes",
      "Compliance documentation suitable for body corporate records",
      "Body corporate committee reference (with written consent)",
    ],
  },
  {
    id: "fortitude-valley-facilities-management",
    title: "Fortitude Valley Mixed-Use Building — Integrated Facilities Management",
    service: "Facilities Management",
    serviceSlug: "facilities-management",
    industry: "Commercial Property",
    location: "Brisbane",
    locationSlug: "brisbane",
    summary:
      "A representative scope for a mixed-use commercial building in Fortitude Valley or Newstead — bundling cleaning, maintenance coordination, and reporting under one contract with Queensland-specific compliance.",
    scopeDetail: [
      "Daily cleaning across commercial tenancies, retail frontages, and shared amenities",
      "Reactive maintenance coordination — trade call-outs and preventative scheduling",
      "Consumables and washroom services management with automated resupply",
      "Monthly reporting covering cleaning, maintenance, and compliance in a single dashboard",
    ],
    approach: [
      "Single contract with QLD-vetted local supervisors and owner oversight from Newcastle",
      "Onboarding captures Queensland-specific WHS inductions and body corporate rules",
      "Route-efficient scheduling across Brisbane precincts for practical response times",
      "Documented escalation pathway for multi-state portfolio managers",
    ],
    whatCaseStudyWillInclude: [
      "Vendor consolidation outcomes and compliance documentation",
      "Response time and reactive maintenance reporting",
      "Photographic documentation of presentation standards",
      "Portfolio manager reference (with written consent)",
    ],
  },

  // ── Melbourne ───────────────────────────────────────────────────────
  {
    id: "melbourne-cbd-office-cleaning",
    title: "Melbourne CBD Office Tower — Commercial Cleaning Programme",
    service: "Commercial Cleaning",
    serviceSlug: "commercial-cleaning",
    industry: "Commercial Property",
    location: "Melbourne",
    locationSlug: "melbourne",
    summary:
      "A representative scope for an office tower in Melbourne CBD, Southbank, or Docklands — covering daily cleaning, after-hours scheduling, and high-traffic presentation for Victoria's densest commercial corridors.",
    scopeDetail: [
      "After-hours daily cleaning of workstations, meeting rooms, kitchens, and breakout areas",
      "High-touch surface sanitisation of lift lobbies, reception, and shared amenities",
      "Restroom cleaning and consumables resupply with digital tracking",
      "Flexible scheduling aligned to tenant occupancy and laneway/loading dock access windows",
    ],
    approach: [
      "VIC WHS induction and site-specific compliance completed before first service",
      "Route-efficient scheduling across CBD, Southbank, Docklands, and Richmond corridors",
      "Digital photo reporting for facilities managers and portfolio coordinators",
      "Named local supervisor in Melbourne with owner accountability from Newcastle",
    ],
    whatCaseStudyWillInclude: [
      "Documented scope with frequency and accountability matrix",
      "Presentation audit scores and trend reporting",
      "Mobilisation timeline from walk-through to first service",
      "Facilities manager reference (with written consent)",
    ],
  },
  {
    id: "southbank-owners-corporation-cleaning",
    title: "Southbank Owners Corporation — Common Area Cleaning & Reporting",
    service: "Strata Cleaning",
    serviceSlug: "strata-cleaning",
    industry: "Strata & Body Corporate",
    location: "Melbourne",
    locationSlug: "melbourne",
    summary:
      "A representative scope for an owners corporation scheme in Southbank, Docklands, or Richmond — covering common area cleaning aligned to Victoria's Owners Corporations Act 2006 common property maintenance obligations.",
    scopeDetail: [
      "Lobby, foyer, and corridor cleaning with presentation standards suited to premium residential towers",
      "Lift interior detailing including mirrors, buttons, and handrail sanitisation",
      "Basement car park sweeping and visitor bay presentation",
      "Bin room, mail room, and communal amenity cleaning (gym, rooftop, BBQ where applicable)",
    ],
    approach: [
      "Owners corporation committee consultation aligned to Victorian common property obligations",
      "Compliance documentation formatted for committee records and AGM reporting",
      "Scheduling around resident access patterns and owners corporation rules",
      "Named account contact rather than a call centre — direct escalation to the owner",
    ],
    whatCaseStudyWillInclude: [
      "Committee-approved scope aligned to Owners Corporations Act maintenance obligations",
      "Photographic evidence of common area presentation standards",
      "Compliance documentation suitable for owners corporation manager review",
      "Owners corporation committee reference (with written consent)",
    ],
  },
  {
    id: "docklands-facilities-management",
    title: "Docklands Commercial Portfolio — Integrated Facilities Management",
    service: "Facilities Management",
    serviceSlug: "facilities-management",
    industry: "Commercial Property",
    location: "Melbourne",
    locationSlug: "melbourne",
    summary:
      "A representative scope for a commercial portfolio in Docklands or Southbank — bundling cleaning, maintenance coordination, and reporting under one contract for portfolio managers seeking unified governance across states.",
    scopeDetail: [
      "Daily and after-hours cleaning across multiple tenant floors with varying access requirements",
      "Reactive maintenance coordination — trade call-outs, repairs, and preventative scheduling",
      "Consumables and washroom services management with automated resupply",
      "Monthly reporting covering cleaning, maintenance, and compliance in a single dashboard",
    ],
    approach: [
      "Single contract replacing multiple vendors — simplified invoicing and governance",
      "Onboarding captures Victoria-specific WHS inductions and owners corporation rules",
      "Newcastle-based owner oversight with VIC-vetted local supervisors on the ground",
      "Unified reporting format for multi-state portfolios with a single escalation contact",
    ],
    whatCaseStudyWillInclude: [
      "Vendor consolidation outcomes and governance simplification",
      "Response time and reactive maintenance reporting",
      "Photographic documentation of presentation standards",
      "Portfolio manager reference (with written consent)",
    ],
  },
];

export const SCOPE_FILTERS = {
  services: [
    { label: "Commercial Cleaning", slug: "commercial-cleaning" },
    { label: "Strata Cleaning", slug: "strata-cleaning" },
    { label: "Facilities Management", slug: "facilities-management" },
    { label: "Industrial Cleaning", slug: "industrial-cleaning" },
  ],
  industries: [
    { label: "Commercial Property", slug: "commercial-property" },
    { label: "Strata & Body Corporate", slug: "strata-body-corporate" },
  ],
  locations: [
    { label: "Newcastle", slug: "newcastle" },
    { label: "Lake Macquarie", slug: "lake-macquarie" },
    { label: "Hunter Valley", slug: "hunter-valley" },
    { label: "Sydney", slug: "sydney" },
    { label: "Brisbane", slug: "brisbane" },
    { label: "Melbourne", slug: "melbourne" },
  ],
};

export const READINESS_FAQS: FaqItem[] = [
  {
    question: "What are Example Scope Profiles?",
    answer:
      "Example Scope Profiles describe the type of projects FACILITIES MAN is equipped to deliver in each market we service — Newcastle, Sydney, Brisbane and Melbourne. They are not completed case studies. Each profile outlines the scope, approach, and what a future published case study will include once a founding client approves publication. We build every case study with client consent, documented scope, and honest outcomes — no fabricated content.",
  },
  {
    question: "Why don't you have published case studies yet?",
    answer:
      "FACILITIES MAN is a newly established, owner-operated business based in Newcastle, NSW. We do not publish fabricated case studies, borrowed testimonials, or invented results. Our first case studies will appear on this page as founding contracts complete and clients give written approval. Until then, these Example Scope Profiles show the work we are ready to deliver and the standards we document from day one.",
  },
  {
    question: "How do you build a published case study?",
    answer:
      "We document scope, mobilisation, outcomes, and measurable results with client approval at each stage. Photography and quotes are only published with written consent. The process typically takes 4–8 weeks after contract stabilisation. Clients can choose to be named or remain anonymous — industry and region only — depending on confidentiality preferences.",
  },
  {
    question: "What does the founding-customer programme include?",
    answer:
      "Our founding-customer offer includes discounted contract pricing in exchange for case study rights and a reference contact. We produce the case study at no extra cost — photography, write-up, and client approval managed by our team. The first five clients in each region qualify. Enquire via the contact page and mention the founding-customer programme.",
  },
  {
    question: "Can I see references instead of case studies?",
    answer:
      "As our portfolio grows, we can provide reference contacts for prospects with mutual consent from existing clients. Multi-site portfolio clients can also request anonymised scope summaries while formal case studies are in production. Contact us to discuss what is available for your enquiry type and location.",
  },
  {
    question: "How do I filter Example Scope Profiles by service or location?",
    answer:
      "Use the filter buttons above to narrow profiles by service type (commercial cleaning, strata cleaning, facilities management, industrial cleaning), by industry, or by location across our Newcastle, Hunter, Sydney, Brisbane and Melbourne service areas. Each profile links to the relevant service and location pages for more detail.",
  },
];
