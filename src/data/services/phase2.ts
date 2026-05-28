import type { ServicePageData } from "./types";

const COMMON_AREAS = [
  "Newcastle CBD, Kotara, Charlestown and surrounding commercial corridors",
  "Maitland, Thornton and Rutherford industrial and business precincts",
  "Lake Macquarie including Warners Bay, Belmont and Cardiff",
  "Hunter Valley including Cessnock, Singleton and Muswellbrook",
  "Central Coast including Gosford, Tuggerah and Erina",
];

function makeServiceData(input: {
  slug: string;
  name: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  lead: string;
  ctaHeading: string;
}): ServicePageData {
  return {
    slug: input.slug,
    name: input.name,
    title: input.title,
    description: input.description,
    path: `/services/${input.slug}/`,
    ogTitle: input.ogTitle,
    ogDescription: input.ogDescription,
    h1: `${input.name} Newcastle — Owner-Led, Documented Delivery`,
    lead: input.lead,
    sections: [
      {
        heading: `What Is ${input.name}?`,
        body: [
          `${input.name} at FACILITIES MAN is delivered to a written scope with accountable service standards, not ad-hoc task lists. We align frequencies, access windows and escalation pathways to each site so delivery remains stable as tenant and occupancy needs change.`,
          "Every programme starts with a site walk-through and scope verification. That process captures risk points, high-touch areas, access constraints and compliance obligations before mobilisation, which prevents service drift and helps your team audit outcomes with confidence.",
        ],
      },
      {
        heading: "How We Deliver This Service",
        body: [
          "Delivery is owner-supervised and supported by checklist-based quality control. Teams follow consistent sequencing, and each visit is recorded so managers and committee stakeholders can verify completed work and outstanding actions.",
          "Where required, we combine this service with washroom consumables, grounds and maintenance coordination to reduce contractor overlap and simplify communication under one operational contact.",
        ],
      },
      {
        heading: "Scope & Inclusions",
        body: [
          "Inclusions are documented by zone and frequency so responsibilities are explicit. We can tailor daily, multi-weekly or weekly programmes and define periodic tasks for deeper maintenance cycles.",
          "You receive clear onboarding, practical reporting and direct response lines for changes in tenancy, staffing, operating hours or compliance requirements.",
        ],
      },
      {
        heading: "Why Clients Choose FACILITIES MAN",
        body: [
          "Clients choose FACILITIES MAN for direct accountability, predictable service outcomes and clear reporting that supports governance requirements. We keep communication practical and decision-making fast.",
          "From first quote to ongoing operations, one team owns the scope and performance outcomes. That continuity reduces handover risk and helps sites maintain presentation, hygiene and operational reliability.",
        ],
      },
    ],
    areas: COMMON_AREAS,
    ctaHeading: input.ctaHeading,
    ctaSubCopy:
      "Tell us about your site, operating hours and preferred frequency. We respond within 24 hours and can usually schedule a walk-through in the same week.",
    faqs: [
      {
        question: `How is ${input.name.toLowerCase()} priced?`,
        answer:
          "Pricing is based on site size, access windows, frequency and task scope. We provide written pricing after a walk-through so you can compare line by line.",
      },
      {
        question: "Can this be bundled with other services?",
        answer:
          "Yes. We can combine cleaning, grounds, washroom and maintenance coordination under one contract for simpler operations and clearer accountability.",
      },
      {
        question: "Do you provide reporting?",
        answer:
          "Yes. We provide documented completion records and practical notes so facilities managers and committees can verify outcomes and track follow-up actions.",
      },
      {
        question: "How quickly can you start?",
        answer:
          "After scope approval, mobilisation is typically within the same week depending on access and induction requirements.",
      },
      {
        question: "Do you service sites outside Newcastle?",
        answer:
          "Yes. We deliver across Newcastle, Maitland, Lake Macquarie, Hunter Valley and the Central Coast, with broader NSW support on request.",
      },
    ],
  };
}

export const medicalCleaningData = makeServiceData({
  slug: "medical-cleaning",
  name: "Healthcare & Medical Cleaning",
  title: "Healthcare & Medical Cleaning Newcastle — FACILITIES MAN",
  description:
    "Infection-control aware cleaning for clinics and medical facilities across Newcastle and the Hunter region.",
  ogTitle: "Medical Cleaning Newcastle — Clinical-Standard Delivery",
  ogDescription:
    "Healthcare cleaning for GP clinics, allied health and medical administration with owner-led quality control.",
  lead:
    "Healthcare environments need infection-aware cleaning systems, not standard office routines. We deliver documented programmes for clinical and patient-facing spaces.",
  ctaHeading: "Get a Healthcare Cleaning Quote",
});

export const childcareCleaningData = makeServiceData({
  slug: "childcare-cleaning",
  name: "Childcare Centre Cleaning",
  title: "Childcare Centre Cleaning Newcastle — FACILITIES MAN",
  description:
    "Child-safe cleaning programmes for early learning and childcare environments in Newcastle and surrounding regions.",
  ogTitle: "Childcare Cleaning Newcastle — NQF-Aware, Child-Safe",
  ogDescription:
    "Owner-led childcare cleaning with documented routines for classrooms, amenities and shared play environments.",
  lead:
    "Childcare cleaning requires consistent routines, child-safe products and clear records. We provide practical programmes aligned to early learning operations.",
  ctaHeading: "Get a Childcare Cleaning Quote",
});

export const windowCleaningData = makeServiceData({
  slug: "window-cleaning",
  name: "Window Cleaning",
  title: "Commercial Window Cleaning Newcastle — FACILITIES MAN",
  description:
    "Internal and external commercial window cleaning for offices, strata and mixed-use properties in Newcastle.",
  ogTitle: "Window Cleaning Newcastle — Commercial & Strata",
  ogDescription:
    "Scheduled window cleaning for Newcastle commercial sites with owner-supervised service quality.",
  lead:
    "Clean glass improves presentation, natural light and client perception. We provide scheduled internal and external window cleaning for commercial properties.",
  ctaHeading: "Get a Window Cleaning Quote",
});

export const carpetCleaningData = makeServiceData({
  slug: "carpet-cleaning",
  name: "Carpet Cleaning",
  title: "Commercial Carpet Cleaning Newcastle — FACILITIES MAN",
  description:
    "Commercial carpet cleaning programmes for offices, strata corridors and high-traffic facilities in Newcastle.",
  ogTitle: "Carpet Cleaning Newcastle — Commercial Sites",
  ogDescription:
    "Scheduled extraction and stain treatment for commercial carpets across Newcastle and Hunter region.",
  lead:
    "Commercial carpets need planned maintenance to protect appearance and lifespan. We provide practical programmes based on traffic and use patterns.",
  ctaHeading: "Get a Carpet Cleaning Quote",
});

export const pressureWashingData = makeServiceData({
  slug: "pressure-washing",
  name: "Pressure Washing & Exterior Cleaning",
  title: "Pressure Washing Newcastle — FACILITIES MAN",
  description:
    "Exterior cleaning and pressure washing for commercial, strata and industrial sites across Newcastle.",
  ogTitle: "Pressure Washing Newcastle — Exterior Cleaning",
  ogDescription:
    "Pressure washing for pathways, facades, car parks and hardstand areas with documented delivery.",
  lead:
    "Exterior surfaces accumulate grime quickly in high-traffic and coastal conditions. We deliver scheduled pressure washing to keep sites safe and presentable.",
  ctaHeading: "Get an Exterior Cleaning Quote",
});

export const warehouseCleaningData = makeServiceData({
  slug: "warehouse-cleaning",
  name: "Warehouse Cleaning",
  title: "Warehouse Cleaning Newcastle — FACILITIES MAN",
  description:
    "Warehouse and distribution centre cleaning programmes for Newcastle and Hunter industrial corridors.",
  ogTitle: "Warehouse Cleaning Newcastle — Industrial Programmes",
  ogDescription:
    "Owner-led warehouse cleaning with practical scheduling around logistics and shift operations.",
  lead:
    "Warehouse environments demand traffic-aware cleaning that fits operations. We build practical programmes for amenities, aisles and high-use zones.",
  ctaHeading: "Get a Warehouse Cleaning Quote",
});

export const sanitaryWashroomServicesData = makeServiceData({
  slug: "sanitary-washroom-services",
  name: "Sanitary & Washroom Services",
  title: "Sanitary & Washroom Services Newcastle — FACILITIES MAN",
  description:
    "Washroom hygiene, sanitary services and consumables management for commercial sites in Newcastle.",
  ogTitle: "Washroom Services Newcastle — Hygiene & Consumables",
  ogDescription:
    "Sanitary and washroom service programmes for offices, strata and industrial facilities.",
  lead:
    "Washroom quality strongly influences occupant experience and compliance outcomes. We deliver structured washroom hygiene and consumables programmes.",
  ctaHeading: "Get a Washroom Services Quote",
});

export const maintenanceTradesData = makeServiceData({
  slug: "maintenance-trades",
  name: "Maintenance & Trades",
  title: "Maintenance & Trades Coordination Newcastle — FACILITIES MAN",
  description:
    "Maintenance and trade coordination for commercial facilities across Newcastle and surrounding regions.",
  ogTitle: "Maintenance & Trades Newcastle — Coordinated FM Support",
  ogDescription:
    "Planned and reactive maintenance coordination under one accountable facilities partner.",
  lead:
    "Maintenance issues affect cleaning quality, tenant satisfaction and safety. We coordinate planned and reactive trades under a single facilities workflow.",
  ctaHeading: "Get a Maintenance Coordination Quote",
});
