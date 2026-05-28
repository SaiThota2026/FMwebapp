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
  "medical-cleaning": {
    heroLabel: "Healthcare cleaning technician in Newcastle medical centre — services-medical-cleaning.webp",
    regionLabel: "Newcastle and Hunter medical cleaning service area — services-medical-cleaning-areas.webp",
    sectionLabels: [
      "Colour-coded cleaning cloths on clinical bench — services-medical-cleaning-section-1.webp",
      "Allied health waiting room being cleaned after hours — services-medical-cleaning-section-2.webp",
      "Infection control disinfectant applied to medical surfaces — services-medical-cleaning-section-3.webp",
      "Owner reviewing cleaning checklist at GP clinic — services-medical-cleaning-section-4.webp",
      "Medical centre consumables resupply on bench — services-medical-cleaning-section-5.webp",
    ],
  },
  "childcare-cleaning": {
    heroLabel: "Childcare centre floor being mopped with child-safe products — services-childcare-cleaning.webp",
    regionLabel: "Newcastle childcare cleaning service area — services-childcare-cleaning-areas.webp",
    sectionLabels: [
      "Child-safe cleaning products on childcare centre bench — services-childcare-cleaning-section-1.webp",
      "Early morning cleaning of childcare bathroom before children arrive — services-childcare-cleaning-section-2.webp",
      "NQF cleaning documentation folder on desk — services-childcare-cleaning-section-3.webp",
      "Play area floor being cleaned at childcare centre — services-childcare-cleaning-section-4.webp",
      "Childcare centre kitchen benches being sanitised — services-childcare-cleaning-section-5.webp",
    ],
  },
  "window-cleaning": {
    heroLabel: "Commercial window cleaner using water-fed pole on Newcastle office building — services-window-cleaning.webp",
    regionLabel: "Newcastle commercial window cleaning service area — services-window-cleaning-areas.webp",
    sectionLabels: [
      "Squeegee cleaning internal office windows in Newcastle CBD — services-window-cleaning-section-1.webp",
      "Water-fed pole cleaning external strata building windows — services-window-cleaning-section-2.webp",
      "Window frames and sills being wiped after glass cleaning — services-window-cleaning-section-3.webp",
      "Retail shopfront glass being cleaned in Newcastle — services-window-cleaning-section-4.webp",
      "Strata common area lobby windows freshly cleaned — services-window-cleaning-section-5.webp",
    ],
  },
  "carpet-cleaning": {
    heroLabel: "Commercial carpet cleaning machine in Newcastle office — services-carpet-cleaning.webp",
    regionLabel: "Newcastle carpet cleaning service area — services-carpet-cleaning-areas.webp",
    sectionLabels: [
      "Hot water extraction machine cleaning office corridor carpet — services-carpet-cleaning-section-1.webp",
      "Before and after stain removal on commercial carpet — services-carpet-cleaning-section-2.webp",
      "Encapsulation carpet cleaning in strata common area corridor — services-carpet-cleaning-section-3.webp",
      "Written carpet cleaning report being reviewed — services-carpet-cleaning-section-4.webp",
      "Freshly cleaned office carpet after hot water extraction — services-carpet-cleaning-section-5.webp",
    ],
  },
  "pressure-washing": {
    heroLabel: "Pressure washer cleaning commercial car park in Newcastle — services-pressure-washing.webp",
    regionLabel: "Newcastle exterior cleaning service area — services-pressure-washing-areas.webp",
    sectionLabels: [
      "Concrete footpath being pressure washed at commercial property — services-pressure-washing-section-1.webp",
      "Strata bin room being pressure cleaned — services-pressure-washing-section-2.webp",
      "Industrial hardstand area being cleaned with pressure washer — services-pressure-washing-section-3.webp",
      "Building facade being soft-washed — services-pressure-washing-section-4.webp",
      "Pressure washing before and after paved area — services-pressure-washing-section-5.webp",
    ],
  },
  "warehouse-cleaning": {
    heroLabel: "Warehouse floor being swept in Newcastle industrial facility — services-warehouse-cleaning.webp",
    regionLabel: "Newcastle warehouse cleaning service area — services-warehouse-cleaning-areas.webp",
    sectionLabels: [
      "Warehouse amenities block being cleaned after shift — services-warehouse-cleaning-section-1.webp",
      "Forklift aisle with wet-floor barrier during cleaning — services-warehouse-cleaning-section-2.webp",
      "Warehouse lunchroom being sanitised — services-warehouse-cleaning-section-3.webp",
      "High-level racking dust management with extension pole — services-warehouse-cleaning-section-4.webp",
      "Loading dock being swept at Newcastle distribution centre — services-warehouse-cleaning-section-5.webp",
    ],
  },
  "sanitary-washroom-services": {
    heroLabel: "Commercial washroom with fresh consumables and sanitary bin — services-sanitary-washroom-services.webp",
    regionLabel: "Newcastle washroom services coverage area — services-sanitary-washroom-services-areas.webp",
    sectionLabels: [
      "Sanitary bin being collected in commercial bathroom — services-sanitary-washroom-section-1.webp",
      "Washroom consumables being restocked — hand soap, paper towels — services-sanitary-washroom-section-2.webp",
      "Commercial washroom hygiene check being documented — services-sanitary-washroom-section-3.webp",
      "WHS compliance documentation for washroom services — services-sanitary-washroom-section-4.webp",
      "Clean and well-maintained commercial washroom after service — services-sanitary-washroom-section-5.webp",
    ],
  },
  "maintenance-trades": {
    heroLabel: "Maintenance tradesperson inspecting commercial building in Newcastle — services-maintenance-trades.webp",
    regionLabel: "Newcastle maintenance services coverage area — services-maintenance-trades-areas.webp",
    sectionLabels: [
      "Licenced plumber fixing issue in Newcastle commercial building — services-maintenance-trades-section-1.webp",
      "Electrician replacing lighting in commercial office — services-maintenance-trades-section-2.webp",
      "Carpenter repairing door in Newcastle commercial property — services-maintenance-trades-section-3.webp",
      "Maintenance documentation being reviewed by facilities manager — services-maintenance-trades-section-4.webp",
      "Preventative maintenance inspection checklist — services-maintenance-trades-section-5.webp",
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
  cessnock: {
    heroLabel: "Cessnock commercial facility being cleaned — locations-cessnock-hero.webp",
    regionLabel: "Cessnock and surrounds service area — locations-cessnock-region.webp",
    sectionLabels: [
      "Local Cessnock team mobilising for service — locations-cessnock-section-1.webp",
      "Cessnock CBD commercial street — locations-cessnock-section-2.webp",
      "Hunter Valley wine country fringe facility — locations-cessnock-section-3.webp",
      "Cessnock industrial corridor cleaning — locations-cessnock-section-4.webp",
    ],
  },
  "port-stephens": {
    heroLabel: "Nelson Bay commercial street near marina being serviced — locations-port-stephens-hero.webp",
    regionLabel: "Port Stephens and Nelson Bay service area — locations-port-stephens-region.webp",
    sectionLabels: [
      "Coastal hospitality venue windows being cleaned — locations-port-stephens-section-1.webp",
      "Salamander Bay commercial centre — locations-port-stephens-section-2.webp",
      "Anna Bay accommodation exterior being pressure washed — locations-port-stephens-section-3.webp",
      "Port Stephens strata common area cleaning — locations-port-stephens-section-4.webp",
    ],
  },
  singleton: {
    heroLabel: "Singleton CBD commercial facility being serviced — locations-singleton-hero.webp",
    regionLabel: "Singleton and Upper Hunter service area — locations-singleton-region.webp",
    sectionLabels: [
      "Mining services workshop in Singleton being cleaned — locations-singleton-section-1.webp",
      "Singleton CBD commercial office — locations-singleton-section-2.webp",
      "Singleton industrial corridor aerial — locations-singleton-section-3.webp",
      "Owner reviewing Singleton contract scope — locations-singleton-section-4.webp",
    ],
  },
  muswellbrook: {
    heroLabel: "Muswellbrook commercial facility being serviced — locations-muswellbrook-hero.webp",
    regionLabel: "Muswellbrook and Upper Hunter service area — locations-muswellbrook-region.webp",
    sectionLabels: [
      "Mining services depot near Muswellbrook being cleaned — locations-muswellbrook-section-1.webp",
      "Muswellbrook CBD commercial strip — locations-muswellbrook-section-2.webp",
      "Government office in Muswellbrook — locations-muswellbrook-section-3.webp",
      "Upper Hunter industrial facility — locations-muswellbrook-section-4.webp",
    ],
  },
};

export const INDUSTRY_VISUALS: Record<string, PageVisualConfig> = {
  "strata-body-corporate": {
    heroLabel: "Strata apartment complex common area in Newcastle being cleaned — industries-strata-body-corporate-hero.webp",
    regionLabel: "Newcastle strata building coverage area — industries-strata-body-corporate-region.webp",
    sectionLabels: [
      "Strata committee documents and cleaning report on table — industries-strata-body-corporate-section-1.webp",
      "Owner reviewing strata service scope with building manager — industries-strata-body-corporate-section-2.webp",
      "Strata compliance documentation folder — industries-strata-body-corporate-section-3.webp",
    ],
  },
  healthcare: {
    heroLabel: "Healthcare facility reception area freshly cleaned in Newcastle — industries-healthcare-hero.webp",
    regionLabel: "Newcastle healthcare facilities coverage — industries-healthcare-region.webp",
    sectionLabels: [
      "Allied health waiting room clean and ready for patients — industries-healthcare-section-1.webp",
      "Owner reviewing cleaning record with practice manager — industries-healthcare-section-2.webp",
      "Infection control documentation being reviewed — industries-healthcare-section-3.webp",
    ],
  },
  "education-childcare": {
    heroLabel: "Childcare centre being cleaned before opening in Newcastle — industries-education-childcare-hero.webp",
    regionLabel: "Newcastle education and childcare coverage area — industries-education-childcare-region.webp",
    sectionLabels: [
      "NQF quality documentation on childcare director desk — industries-education-childcare-section-1.webp",
      "Police-checked cleaner at childcare site — industries-education-childcare-section-2.webp",
      "Child-safe cleaning products in childcare centre — industries-education-childcare-section-3.webp",
    ],
  },
  "commercial-property": {
    heroLabel: "Modern commercial office building in Newcastle CBD — industries-commercial-property-hero.webp",
    regionLabel: "Newcastle commercial property coverage area — industries-commercial-property-region.webp",
    sectionLabels: [
      "Building manager and facilities contractor reviewing documentation — industries-commercial-property-section-1.webp",
      "Owner reviewing monthly report with property manager — industries-commercial-property-section-2.webp",
      "Commercial building facilities scope document being signed — industries-commercial-property-section-3.webp",
    ],
  },
  government: {
    heroLabel: "Government office facility in Newcastle region being cleaned — industries-government-hero.webp",
    regionLabel: "Newcastle government and council facilities coverage — industries-government-region.webp",
    sectionLabels: [
      "Council community hall being cleaned and maintained — industries-government-section-1.webp",
      "Owner reviewing government contract scope documentation — industries-government-section-2.webp",
      "Government facility compliance documents on desk — industries-government-section-3.webp",
    ],
  },
};

export const COMBO_VISUALS: Record<string, PageVisualConfig> = {
  "maitland-commercial-cleaning": {
    heroLabel: "Commercial cleaning team in Maitland office — combos-maitland-commercial-cleaning-hero.webp",
    regionLabel: "Maitland commercial cleaning service area — combos-maitland-commercial-cleaning-region.webp",
    sectionLabels: [
      "Owner reviewing commercial cleaning scope at Maitland office — combos-maitland-commercial-cleaning-section-1.webp",
    ],
  },
  "lake-macquarie-strata-cleaning": {
    heroLabel: "Strata apartment building on Lake Macquarie being cleaned — combos-lake-macquarie-strata-cleaning-hero.webp",
    regionLabel: "Lake Macquarie strata cleaning area — combos-lake-macquarie-strata-cleaning-region.webp",
    sectionLabels: [
      "Strata committee meeting with cleaning report on table — combos-lake-macquarie-strata-cleaning-section-1.webp",
    ],
  },
  "newcastle-office-cleaning": {
    heroLabel: "Newcastle CBD Honeysuckle office being cleaned after hours — combos-newcastle-office-cleaning-hero.webp",
    regionLabel: "Newcastle CBD office cleaning area — combos-newcastle-office-cleaning-region.webp",
    sectionLabels: [
      "Owner at Newcastle CBD office reviewing cleaning scope — combos-newcastle-office-cleaning-section-1.webp",
    ],
  },
  "hunter-valley-facilities-management": {
    heroLabel: "Hunter Valley commercial property being maintained — combos-hunter-valley-facilities-management-hero.webp",
    regionLabel: "Hunter Valley facilities management coverage area — combos-hunter-valley-facilities-management-region.webp",
    sectionLabels: [
      "Wine tourism venue facilities management in Hunter Valley — combos-hunter-valley-facilities-management-section-1.webp",
    ],
  },
  "newcastle-industrial-cleaning": {
    heroLabel: "Industrial cleaning team at Newcastle Mayfield warehouse — combos-newcastle-industrial-cleaning-hero.webp",
    regionLabel: "Newcastle industrial corridor cleaning area — combos-newcastle-industrial-cleaning-region.webp",
    sectionLabels: [
      "Industrial cleaning equipment in Newcastle warehouse — combos-newcastle-industrial-cleaning-section-1.webp",
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

export function getIndustryVisual(slug: string): PageVisualConfig {
  return (
    INDUSTRY_VISUALS[slug] ?? {
      heroLabel: `${slug} industry facilities management — industries-${slug}-hero.webp`,
      regionLabel: `${slug} service region overview — industries-${slug}-region.webp`,
      sectionLabels: [
        `Who we serve in ${slug} sector — industries-${slug}-section-1.webp`,
        `Owner-led ${slug} delivery — industries-${slug}-section-2.webp`,
        `Compliance documentation for ${slug} — industries-${slug}-section-3.webp`,
      ],
    }
  );
}

export function getComboVisual(comboKey: string): PageVisualConfig {
  return (
    COMBO_VISUALS[comboKey] ?? {
      heroLabel: `${comboKey} service delivery — combos-${comboKey}-hero.webp`,
      regionLabel: `${comboKey} local area — combos-${comboKey}-region.webp`,
      sectionLabels: [`${comboKey} local team on site — combos-${comboKey}-section-1.webp`],
    }
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
