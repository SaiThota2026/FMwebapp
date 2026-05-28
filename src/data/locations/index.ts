import { centralCoastData } from "./central-coast";
import { cessnockData } from "./cessnock";
import { hunterValleyData } from "./hunter-valley";
import { lakeMacquarieData } from "./lake-macquarie";
import { maitlandData } from "./maitland";
import { muswellbrookData } from "./muswellbrook";
import { newcastleData } from "./newcastle";
import { portStephensData } from "./port-stephens";
import { singletonData } from "./singleton";
import type { LocationPageData } from "./types";

export const ALL_LOCATIONS: LocationPageData[] = [
  newcastleData,
  maitlandData,
  lakeMacquarieData,
  hunterValleyData,
  centralCoastData,
  cessnockData,
  portStephensData,
  singletonData,
  muswellbrookData,
];

export function getLocationBySlug(slug: string): LocationPageData | undefined {
  return ALL_LOCATIONS.find((l) => l.slug === slug);
}

export const LOCATION_SLUGS = ALL_LOCATIONS.map((l) => l.slug);
