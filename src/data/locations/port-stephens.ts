import type { LocationPageData } from "./types";

const MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53114.09427183855!2d151.998241!3d-32.720516!2m3!1f0!2f0!3f0";

export const portStephensData: LocationPageData = {
  slug: "port-stephens",
  name: "Nelson Bay & Port Stephens",
  title: "Facilities & Cleaning Port Stephens — FACILITIES MAN",
  description:
    "Commercial cleaning and facilities services for Port Stephens, Nelson Bay and surrounding coastal areas.",
  path: "/locations/port-stephens/",
  ogTitle: "Facilities Services Port Stephens — FACILITIES MAN",
  ogDescription:
    "Owner-led facilities and cleaning delivery for Port Stephens commercial and strata sites.",
  h1: "Facilities Management & Cleaning in Port Stephens",
  intro:
    "FACILITIES MAN supports Port Stephens and Nelson Bay with structured commercial and strata service programmes. Coastal sites face salt exposure, seasonal occupancy swings and higher presentation expectations — we build scopes around those realities rather than inland office templates.",
  servicesIntro:
    "Coastal environments and tourism activity require practical scheduling and durable standards. We tailor scopes to suit both. Window, exterior and common-area tasks are sequenced so guest-facing zones stay presentable through peak visitor periods.",
  services: [
    { name: "Commercial Cleaning", href: "/services/commercial-cleaning/", blurb: "Commercial and hospitality cleaning for coastal business sites." },
    { name: "Window Cleaning", href: "/services/window-cleaning/", blurb: "Internal and external glass cleaning for customer-facing sites." },
    { name: "Pressure Washing & Exterior Cleaning", href: "/services/pressure-washing/", blurb: "Exterior presentation and grime control for high-traffic areas." },
    { name: "Strata Cleaning", href: "/services/strata-cleaning/", blurb: "Common-area cleaning for apartment and mixed-use developments." },
  ],
  suburbClusters: [
    { heading: "Nelson Bay", body: "Tourism and mixed-use commercial properties with high seasonal occupancy." },
    { heading: "Salamander Bay", body: "Retail and service precincts requiring consistent client-facing standards." },
    { heading: "Anna Bay", body: "Hospitality and accommodation-related service demand." },
    { heading: "Shoal Bay Corridors", body: "Coastal strata and hospitality assets with presentation-critical operations." },
  ],
  localTeamBody: [
    "We schedule Port Stephens as a recurring route and align service windows to local operating peaks.",
    "Owner-led oversight ensures scope consistency despite seasonal demand changes.",
    "When weather or events shift priorities, we escalate quickly and document adjustments so committees and operators stay informed.",
  ],
  industriesBody: [
    "Port Stephens includes hospitality, retail and strata-heavy assets needing reliable presentation outcomes.",
    "We support operators with practical reporting and direct issue escalation paths.",
    "Strata committees often need photo-backed monthly records; hospitality operators need fast turnaround on amenities and front-of-house zones. We configure reporting to match each asset type.",
  ],
  mapTitle: "FACILITIES MAN service area — Port Stephens NSW",
  mapEmbed: MAP,
  faqs: [
    {
      question: "Do you service Nelson Bay and Port Stephens?",
      answer:
        "Yes. We service Nelson Bay, Salamander Bay, Anna Bay and surrounding Port Stephens areas. Coverage is planned as part of our coastal Hunter routes from Newcastle. Contact us with your address and we will confirm mobilisation and frequency options.",
    },
    {
      question: "Can you support tourism-heavy sites?",
      answer:
        "Yes. We align service frequencies and timing with occupancy cycles and guest-facing requirements. Peak-season adjustments are documented in your scope so teams know which zones take priority. That keeps presentation consistent when visitor numbers increase.",
    },
    {
      question: "Is strata cleaning available in Port Stephens?",
      answer:
        "Yes. We provide common-area cleaning and reporting for strata committees and managers. Bin rooms, lifts, car parks and shared amenities are included by zone in the written scope. Committees receive practical monthly records for governance.",
    },
    {
      question: "Do you offer exterior cleaning?",
      answer:
        "Yes. Pressure washing and external presentation services are available for suitable surfaces. We assess substrate, access and safety before scheduling exterior work. Window cleaning can be bundled for mixed-use and hospitality assets.",
    },
    {
      question: "How quickly can service begin?",
      answer:
        "After scope approval we can typically mobilise within the same week. A site walk-through and written quote usually follow within 48 hours of enquiry. Call 0450 924 377 or use the contact form to start.",
    },
  ],
  ctaHeading: "Get a Free Port Stephens Quote",
  schemaAreaServed: [{ type: "AdministrativeArea", name: "Port Stephens" }],
};
