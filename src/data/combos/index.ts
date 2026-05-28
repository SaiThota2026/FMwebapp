import type { ComboPageData } from "./types";

function makeCombo(input: {
  locationSlug: string;
  locationName: string;
  serviceSlug: string;
  serviceName: string;
  localRefs: string;
}): ComboPageData {
  const path = `/locations/${input.locationSlug}/${input.serviceSlug}/`;
  return {
    locationSlug: input.locationSlug,
    serviceSlug: input.serviceSlug,
    locationName: input.locationName,
    serviceName: input.serviceName,
    title: `${input.serviceName} ${input.locationName} — FACILITIES MAN`,
    description: `${input.serviceName} in ${input.locationName} with owner-led delivery, documented scope and practical reporting.`,
    path,
    ogTitle: `${input.serviceName} in ${input.locationName} — FACILITIES MAN`,
    ogDescription: `Local ${input.serviceName.toLowerCase()} support for ${input.locationName} sites across commercial and facilities contexts.`,
    h1: `${input.serviceName} in ${input.locationName}`,
    lead: `Local, documented ${input.serviceName.toLowerCase()} delivery for ${input.locationName} facilities with direct owner accountability.`,
    localServiceBody: [
      `This page is specific to ${input.locationName} operations: ${input.localRefs}. We tailor scope, sequencing and communication around local site realities rather than generic statewide assumptions.`,
      "Our onboarding process confirms access windows, cleaning priorities and escalation pathways before mobilisation. That ensures the service model fits your actual building use and stakeholder expectations.",
      "You receive written scope control and practical reporting so facilities managers and committee stakeholders can verify outcomes and address changes quickly.",
    ],
    inclusions: [
      "Site walk-through and written scope",
      "Zone-based task sequencing",
      "Documented completion records",
      "Owner-supervised quality checks",
      "Practical escalation pathway",
      "Flexible frequencies by occupancy",
      "Consumables and add-on options",
      "Issue tracking and close-out",
    ],
    whyLocalBody: [
      `Local context matters in ${input.locationName}: operating patterns, building stock and service access requirements differ across precincts. We account for that in scheduling and scope design.`,
      "By combining regional coverage with owner-led control, we keep delivery consistent while still adapting quickly to local operational changes.",
    ],
    parentServiceHref: `/services/${input.serviceSlug}/`,
    parentLocationHref: `/locations/${input.locationSlug}/`,
    ctaHeading: `Get a ${input.locationName} ${input.serviceName} Quote`,
    ctaSubCopy:
      "Tell us about your site and service needs. We can schedule a walk-through and provide a written scope within 48 hours.",
    faqs: [
      {
        question: `Do you provide ${input.serviceName.toLowerCase()} in ${input.locationName}?`,
        answer:
          "Yes. This combo page represents an active local service offering with documented scope and owner-led oversight.",
      },
      {
        question: "Can this be bundled with other services?",
        answer:
          "Yes. We can combine services under one contract for simpler communication and accountability.",
      },
      {
        question: "Do you provide local reporting?",
        answer:
          "Yes. We provide practical records and updates aligned to the service scope and stakeholder needs.",
      },
      {
        question: "How quickly can onboarding begin?",
        answer:
          "After scope approval we can usually mobilise in the same week, subject to access and inductions.",
      },
      {
        question: "How do we request a quote?",
        answer:
          "Use the contact page or call us directly to arrange a walk-through and written proposal.",
      },
    ],
  };
}

export const COMBO_PAGES: ComboPageData[] = [
  makeCombo({
    locationSlug: "maitland",
    locationName: "Maitland",
    serviceSlug: "commercial-cleaning",
    serviceName: "Commercial Cleaning",
    localRefs: "East Maitland offices, Thornton/Rutherford industrial-business corridors",
  }),
  makeCombo({
    locationSlug: "lake-macquarie",
    locationName: "Lake Macquarie",
    serviceSlug: "strata-cleaning",
    serviceName: "Strata Cleaning",
    localRefs: "Charlestown and Warners Bay strata corridors with high committee governance needs",
  }),
  makeCombo({
    locationSlug: "newcastle",
    locationName: "Newcastle",
    serviceSlug: "office-cleaning",
    serviceName: "Office Cleaning",
    localRefs: "CBD and Honeysuckle office clusters with variable after-hours access patterns",
  }),
  makeCombo({
    locationSlug: "hunter-valley",
    locationName: "Hunter Valley",
    serviceSlug: "facilities-management",
    serviceName: "Facilities Management",
    localRefs: "wine country and mixed-use regional assets needing coordinated multi-service support",
  }),
  makeCombo({
    locationSlug: "newcastle",
    locationName: "Newcastle",
    serviceSlug: "industrial-cleaning",
    serviceName: "Industrial Cleaning",
    localRefs: "Mayfield and Beresfield industrial corridors with traffic-aware operational routines",
  }),
];

export function getComboBySlugs(locationSlug: string, serviceSlug: string) {
  return COMBO_PAGES.find(
    (combo) =>
      combo.locationSlug === locationSlug && combo.serviceSlug === serviceSlug,
  );
}

export const COMBO_STATIC_PARAMS = COMBO_PAGES.map((combo) => ({
  locationSlug: combo.locationSlug,
  serviceSlug: combo.serviceSlug,
}));
