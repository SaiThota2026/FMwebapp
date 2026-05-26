import { centralCoastData } from "./central-coast";
import { hunterValleyData } from "./hunter-valley";
import { lakeMacquarieData } from "./lake-macquarie";
import { maitlandData } from "./maitland";
import { newcastleData } from "./newcastle";
import type { LocationPageData } from "./types";

export const ALL_LOCATIONS: LocationPageData[] = [
  newcastleData,
  maitlandData,
  lakeMacquarieData,
  hunterValleyData,
  centralCoastData,
];

export function getLocationBySlug(slug: string): LocationPageData | undefined {
  return ALL_LOCATIONS.find((l) => l.slug === slug);
}

export const LOCATION_SLUGS = ALL_LOCATIONS.map((l) => l.slug);
