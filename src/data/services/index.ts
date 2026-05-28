import { commercialCleaningData } from "./commercial-cleaning";
import { facilitiesManagementData } from "./facilities-management";
import { groundsMaintenanceData } from "./grounds-maintenance";
import { industrialCleaningData } from "./industrial-cleaning";
import { officeCleaningData } from "./office-cleaning";
import {
  carpetCleaningData,
  childcareCleaningData,
  maintenanceTradesData,
  medicalCleaningData,
  pressureWashingData,
  sanitaryWashroomServicesData,
  warehouseCleaningData,
  windowCleaningData,
} from "./phase2";
import { strataCleaningData } from "./strata-cleaning";
import type { ServicePageData } from "./types";

export const ALL_SERVICES: ServicePageData[] = [
  commercialCleaningData,
  strataCleaningData,
  facilitiesManagementData,
  officeCleaningData,
  groundsMaintenanceData,
  industrialCleaningData,
  medicalCleaningData,
  childcareCleaningData,
  windowCleaningData,
  carpetCleaningData,
  pressureWashingData,
  warehouseCleaningData,
  sanitaryWashroomServicesData,
  maintenanceTradesData,
];

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug);
}

export const SERVICE_SLUGS = ALL_SERVICES.map((s) => s.slug);
