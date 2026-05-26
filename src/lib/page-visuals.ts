import { HOME_SERVICES } from "@/data/home";

export type PageVisualConfig = {
  heroLabel: string;
  sectionLabels: string[];
  regionLabel: string;
};

function homeServiceLabel(slug: string): string | undefined {
  const match = HOME_SERVICES.find((s) => s.href.includes(`/services/${slug}/`));
  return match?.imageLabel;
}

function serviceSectionLabel(slug: string, index: number, description: string): string {
  return `${description} — services-${slug}-section-${index + 1}.webp`;
}

export const SERVICE_VISUALS: Record<string, PageVisualConfig> = {
  "commercial-cleaning": {
    heroLabel:
      homeServiceLabel("commercial-cleaning") ??
      "Commercial cleaning team cleaning a Newcastle office building — services-commercial-cleaning.webp",
    regionLabel:
      "Newcastle and Hunter service area map — services-commercial-cleaning-areas.webp",
    sectionLabels: [
      serviceSectionLabel(
        "commercial-cleaning",
        0,
        "Commercial cleaning scope overview in a Newcastle workplace",
      ),
      serviceSectionLabel(
        "commercial-cleaning",
        1,
        "Office, retail and strata clients we clean",
      ),
      serviceSectionLabel(
        "commercial-cleaning",
        2,
        "Washroom and touch-point cleaning inclusions",
      ),
      serviceSectionLabel(
        "commercial-cleaning",
        3,
        "Owner-led quality walk-through on site",
      ),
      serviceSectionLabel(
        "commercial-cleaning",
        4,
        "Written scope and contract onboarding",
      ),
    ],
  },
  "strata-cleaning": {
    heroLabel:
      homeServiceLabel("strata-cleaning") ??
      "Strata cleaning in Newcastle apartment common area — services-strata-cleaning.webp",
    regionLabel:
      "Strata service coverage map — services-strata-cleaning-areas.webp",
    sectionLabels: [
      serviceSectionLabel("strata-cleaning", 0, "Strata common-area cleaning overview"),
      serviceSectionLabel("strata-cleaning", 1, "Body corporate and owners corporation sites"),
      serviceSectionLabel("strata-cleaning", 2, "Bin rooms, lifts and car park cleaning"),
      serviceSectionLabel("strata-cleaning", 3, "Monthly strata committee reporting"),
      serviceSectionLabel("strata-cleaning", 4, "New strata contract onboarding"),
    ],
  },
  "facilities-management": {
    heroLabel:
      homeServiceLabel("facilities-management") ??
      "Facilities management contractor conducting site inspection in Newcastle — services-facilities-management.webp",
    regionLabel:
      "Integrated FM coverage map — services-facilities-management-areas.webp",
    sectionLabels: [
      serviceSectionLabel("facilities-management", 0, "Integrated facilities management overview"),
      serviceSectionLabel("facilities-management", 1, "Multi-tenancy and portfolio buildings"),
      serviceSectionLabel("facilities-management", 2, "Preventative and reactive maintenance coordination"),
      serviceSectionLabel("facilities-management", 3, "Single point of contact and reporting"),
      serviceSectionLabel("facilities-management", 4, "FM contract mobilisation on site"),
    ],
  },
  "office-cleaning": {
    heroLabel:
      homeServiceLabel("office-cleaning") ??
      "Office cleaning team cleaning desks in a Newcastle CBD office — services-office-cleaning.webp",
    regionLabel:
      "Office cleaning service areas — services-office-cleaning-areas.webp",
    sectionLabels: [
      serviceSectionLabel("office-cleaning", 0, "Office cleaning programme overview"),
      serviceSectionLabel("office-cleaning", 1, "CBD and suburban office clients"),
      serviceSectionLabel("office-cleaning", 2, "Kitchen and meeting room sanitation"),
      serviceSectionLabel("office-cleaning", 3, "Consumables resupply service"),
      serviceSectionLabel("office-cleaning", 4, "Flexible office cleaning frequencies"),
    ],
  },
  "grounds-maintenance": {
    heroLabel:
      homeServiceLabel("grounds-maintenance") ??
      "Grounds maintenance crew mowing lawn at a Newcastle strata complex — services-grounds-maintenance.webp",
    regionLabel:
      "Grounds maintenance coverage map — services-grounds-maintenance-areas.webp",
    sectionLabels: [
      serviceSectionLabel("grounds-maintenance", 0, "Commercial grounds maintenance overview"),
      serviceSectionLabel("grounds-maintenance", 1, "Strata and commercial landscaping sites"),
      serviceSectionLabel("grounds-maintenance", 2, "Seasonal pruning and weed control"),
      serviceSectionLabel("grounds-maintenance", 3, "Entry and common garden presentation"),
      serviceSectionLabel("grounds-maintenance", 4, "Scheduled grounds visit programme"),
    ],
  },
  "industrial-cleaning": {
    heroLabel:
      homeServiceLabel("industrial-cleaning") ??
      "Industrial cleaning team in a Newcastle warehouse — services-industrial-cleaning.webp",
    regionLabel:
      "Industrial cleaning coverage map — services-industrial-cleaning-areas.webp",
    sectionLabels: [
      serviceSectionLabel("industrial-cleaning", 0, "Industrial cleaning scope overview"),
      serviceSectionLabel("industrial-cleaning", 1, "Warehouse and factory clients"),
      serviceSectionLabel("industrial-cleaning", 2, "Dust-aware industrial cleaning methods"),
      serviceSectionLabel("industrial-cleaning", 3, "Safety-focused industrial site cleaning"),
      serviceSectionLabel("industrial-cleaning", 4, "Hunter industrial estate mobilisation"),
    ],
  },
};

function locationSectionLabel(
  slug: string,
  index: number,
  description: string,
): string {
  return `${description} — locations-${slug}-section-${index + 1}.webp`;
}

export const LOCATION_VISUALS: Record<string, PageVisualConfig> = {
  newcastle: {
    heroLabel:
      "Newcastle CBD and harbour facilities services — locations-newcastle-hero.webp",
    regionLabel:
      "Newcastle suburbs and commercial precincts — locations-newcastle-region.webp",
    sectionLabels: [
      locationSectionLabel("newcastle", 0, "Local Newcastle team mobilisation"),
      locationSectionLabel("newcastle", 1, "Newcastle suburb cluster coverage"),
      locationSectionLabel("newcastle", 2, "Owner-led site walk-throughs in Newcastle"),
      locationSectionLabel("newcastle", 3, "Industries serviced across Newcastle"),
    ],
  },
  maitland: {
    heroLabel:
      "Maitland commercial corridor facilities services — locations-maitland-hero.webp",
    regionLabel:
      "Maitland and Hunter growth suburbs — locations-maitland-region.webp",
    sectionLabels: [
      locationSectionLabel("maitland", 0, "Maitland LGA response from Newcastle base"),
      locationSectionLabel("maitland", 1, "Maitland industrial and retail coverage"),
      locationSectionLabel("maitland", 2, "Documented scopes for Maitland tenancies"),
      locationSectionLabel("maitland", 3, "Maitland industry sectors supported"),
    ],
  },
  "lake-macquarie": {
    heroLabel:
      "Lake Macquarie commercial and strata services — locations-lake-macquarie-hero.webp",
    regionLabel:
      "Charlestown, Warners Bay and Belmont areas — locations-lake-macquarie-region.webp",
    sectionLabels: [
      locationSectionLabel("lake-macquarie", 0, "Lake Macquarie coordination from Newcastle"),
      locationSectionLabel("lake-macquarie", 1, "Lake Macquarie suburb clusters"),
      locationSectionLabel("lake-macquarie", 2, "Strata and office programmes on the lake"),
      locationSectionLabel("lake-macquarie", 3, "Lake Macquarie industry coverage"),
    ],
  },
  "hunter-valley": {
    heroLabel:
      "Hunter Valley industrial and winery facilities — locations-hunter-valley-hero.webp",
    regionLabel:
      "Cessnock, Singleton and Pokolbin areas — locations-hunter-valley-region.webp",
    sectionLabels: [
      locationSectionLabel("hunter-valley", 0, "Hunter Valley site mobilisation"),
      locationSectionLabel("hunter-valley", 1, "Valley industrial and tourism coverage"),
      locationSectionLabel("hunter-valley", 2, "Dust-aware valley industrial cleaning"),
      locationSectionLabel("hunter-valley", 3, "Hunter Valley sectors serviced"),
    ],
  },
  "central-coast": {
    heroLabel:
      "Central Coast commercial cleaning services — locations-central-coast-hero.webp",
    regionLabel:
      "Gosford, Wyong and coastal corridors — locations-central-coast-region.webp",
    sectionLabels: [
      locationSectionLabel("central-coast", 0, "Central Coast mobilisation from Newcastle"),
      locationSectionLabel("central-coast", 1, "Central Coast suburb coverage"),
      locationSectionLabel("central-coast", 2, "Multi-site coastal contract oversight"),
      locationSectionLabel("central-coast", 3, "Central Coast industry sectors"),
    ],
  },
};

const DEFAULT_VISUAL: PageVisualConfig = {
  heroLabel:
    "FACILITIES MAN team on site — page-hero.webp",
  regionLabel: "Service area map — page-region.webp",
  sectionLabels: [
    "FACILITIES MAN service delivery on site — page-section-1.webp",
  ],
};

export function getServiceVisual(slug: string): PageVisualConfig {
  return SERVICE_VISUALS[slug] ?? DEFAULT_VISUAL;
}

export function getServiceSectionLabel(slug: string, index: number): string {
  const visual = getServiceVisual(slug);
  return (
    visual.sectionLabels[index] ??
    visual.sectionLabels[index % visual.sectionLabels.length] ??
    DEFAULT_VISUAL.sectionLabels[0]
  );
}

export function getLocationVisual(slug: string): PageVisualConfig {
  return LOCATION_VISUALS[slug] ?? DEFAULT_VISUAL;
}

export function getLocationSectionLabel(slug: string, index: number): string {
  const visual = getLocationVisual(slug);
  return (
    visual.sectionLabels[index] ??
    visual.sectionLabels[index % visual.sectionLabels.length] ??
    DEFAULT_VISUAL.sectionLabels[0]
  );
}

export function serviceSlugFromHref(href: string): string {
  return href.replace(/^\/services\//, "").replace(/\/$/, "");
}

/** Same placeholder labels as the homepage service cards. */
export function getHomeServiceImageLabel(slug: string): string {
  return (
    homeServiceLabel(slug) ??
    `FACILITIES MAN ${slug.replace(/-/g, " ")} — services-${slug}.webp`
  );
}
