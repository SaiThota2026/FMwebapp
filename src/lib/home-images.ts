import { contentImg } from "@/lib/content-images";

/** Homepage image slots — unique basenames under /images/content/. */
export const HOME_IMAGE_SRC = {
  services: {
    "commercial-cleaning": contentImg("home-service-commercial-cleaning"),
    "strata-cleaning": contentImg("home-service-strata-cleaning"),
    "facilities-management": contentImg("home-service-facilities-management"),
    "office-cleaning": contentImg("home-service-office-cleaning"),
    "grounds-maintenance": contentImg("home-service-grounds-maintenance"),
    "industrial-cleaning": contentImg("home-service-industrial-cleaning"),
  },
  industries: {
    "strata-body-corporate": contentImg("home-industry-strata-body-corporate"),
    healthcare: contentImg("home-industry-healthcare"),
    "education-childcare": contentImg("home-industry-education-childcare"),
    "commercial-property": contentImg("home-industry-commercial-property"),
    government: contentImg("home-industry-government"),
  },
  locations: {
    newcastle: contentImg("home-location-newcastle"),
    maitland: contentImg("home-location-maitland"),
    "lake-macquarie": contentImg("home-location-lake-macquarie"),
    "hunter-valley": contentImg("home-location-hunter-valley"),
    "central-coast": contentImg("home-location-central-coast"),
  },
  map: contentImg("home-map-service-area"),
} as const;
