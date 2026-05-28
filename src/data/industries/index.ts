import type { IndustryPageData, IndustryService } from "./types";

const sharedServices: IndustryService[] = [
  {
    name: "Commercial Cleaning",
    href: "/services/commercial-cleaning/",
    blurb: "Programmed cleaning for shared spaces and tenancy environments.",
  },
  {
    name: "Strata Cleaning",
    href: "/services/strata-cleaning/",
    blurb: "Committee-ready reporting and common-area cleaning routines.",
  },
  {
    name: "Facilities Management",
    href: "/services/facilities-management/",
    blurb: "Integrated cleaning, grounds and maintenance under one scope.",
  },
  {
    name: "Office Cleaning",
    href: "/services/office-cleaning/",
    blurb: "Professional office cleaning aligned to occupancy and use.",
  },
];

function makeIndustry(
  slug: string,
  name: string,
  lead: string,
  services = [...sharedServices],
): IndustryPageData {
  return {
    slug,
    name,
    title: `${name} Cleaning & Facilities Newcastle — FACILITIES MAN`,
    description: `Owner-led cleaning and facilities services for ${name.toLowerCase()} clients across Newcastle and Hunter region.`,
    path: `/industries/${slug}/`,
    ogTitle: `${name} Facilities Services — FACILITIES MAN`,
    ogDescription: `Documented, compliant delivery for ${name.toLowerCase()} sites across Newcastle and surrounding regions.`,
    h1: `${name} — Facilities Services Built for Operational Compliance`,
    lead,
    whoWeServeHeading: "Who We Serve",
    whoWeServeBody: [
      `FACILITIES MAN supports ${name.toLowerCase()} sites that need consistent delivery, practical communication and documented outcomes. We tailor each programme to operational, stakeholder and compliance realities on site.`,
      "We start by defining the building profile, occupancy patterns and risk points, then align task frequency and reporting to how the site is actually used.",
    ],
    whoWeServePoints: [
      "Owner-led onboarding and clear escalation paths",
      "Site-specific scopes with zone-level task detail",
      "Documented completion records for governance",
      "Flexible scheduling around occupants and peak periods",
    ],
    servicesHeading: "Relevant Services",
    servicesIntro:
      "Most clients in this sector combine multiple services under one contract to simplify management and improve consistency.",
    services,
    whyUsHeading: "Why FACILITIES MAN",
    whyUsBody: [
      "You work directly with an owner-operated team that stays accountable for both day-to-day performance and long-term outcomes.",
      "Our delivery model is built around practical reliability: clear scopes, consistent teams, scheduled checks and transparent communication.",
    ],
    whyUsPoints: [
      "Single operational contact",
      "No call-centre handoffs",
      "Governance-ready reporting",
      "Flexible service bundles",
    ],
    complianceHeading: "Compliance & Documentation",
    complianceBody: [
      "We document scopes and completion outcomes so facilities managers and committees can validate performance quickly.",
      "Where sectors need specific hygiene or governance standards, we align task design and reporting format accordingly.",
    ],
    compliancePoints: [
      "Written scopes by area and frequency",
      "Regular quality reviews",
      "Issue tracking and close-out",
      "Evidence-ready service records",
    ],
    ctaHeading: `Talk to us about ${name} support`,
    ctaSubCopy:
      "We can review your site and provide a written scope with practical recommendations within 48 hours.",
    faqs: [
      {
        question: `Do you specialise in ${name.toLowerCase()} sites?`,
        answer:
          "Yes. We tailor scope design, staffing approach and reporting to the operational and governance needs of this sector.",
      },
      {
        question: "Can services be combined under one contract?",
        answer:
          "Yes. Most clients combine cleaning with selected facilities services to reduce contractor overlap and improve accountability.",
      },
      {
        question: "Do you provide reporting for managers and stakeholders?",
        answer:
          "Yes. We provide practical completion and quality reporting that supports decision-making and governance requirements.",
      },
      {
        question: "How quickly can onboarding start?",
        answer:
          "After scope approval we can usually mobilise in the same week, subject to access and induction requirements.",
      },
      {
        question: "Which areas do you service?",
        answer:
          "We service Newcastle, Maitland, Lake Macquarie, Hunter Valley and Central Coast, with broader NSW support on request.",
      },
    ],
  };
}

export const INDUSTRY_PAGES: IndustryPageData[] = [
  makeIndustry(
    "strata-body-corporate",
    "Strata & Body Corporate",
    "Committee-ready service delivery for strata managers and owners corporations across Newcastle and the Hunter region.",
  ),
  makeIndustry(
    "healthcare",
    "Healthcare Facilities",
    "Infection-aware cleaning and facilities support for healthcare and patient-facing environments.",
    [
      {
        name: "Healthcare & Medical Cleaning",
        href: "/services/medical-cleaning/",
        blurb: "Infection-control aware cleaning for healthcare settings.",
      },
      ...sharedServices,
    ],
  ),
  makeIndustry(
    "education-childcare",
    "Education & Childcare",
    "Child-safe, schedule-aware service delivery for schools and early learning environments.",
    [
      {
        name: "Childcare Centre Cleaning",
        href: "/services/childcare-cleaning/",
        blurb: "Child-safe cleaning programmes for learning environments.",
      },
      ...sharedServices,
    ],
  ),
  makeIndustry(
    "commercial-property",
    "Commercial Property",
    "Integrated facilities support for commercial buildings and property management portfolios.",
  ),
  makeIndustry(
    "government",
    "Government & Council",
    "Documented and compliance-focused service delivery for government and council-managed facilities.",
  ),
];

export const INDUSTRY_SLUGS = INDUSTRY_PAGES.map((p) => p.slug);

export function getIndustryBySlug(slug: string): IndustryPageData | undefined {
  return INDUSTRY_PAGES.find((p) => p.slug === slug);
}
