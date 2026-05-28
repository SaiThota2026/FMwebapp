import type { LocationPageData } from "./types";

const MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52375.9214034872!2d150.826914!3d-32.263409!2m3!1f0!2f0!3f0";

export const muswellbrookData: LocationPageData = {
  slug: "muswellbrook",
  name: "Muswellbrook",
  title: "Cleaning & Facilities Services Muswellbrook — FACILITIES MAN",
  description:
    "Commercial and industrial cleaning plus facilities support in Muswellbrook and Upper Hunter locations.",
  path: "/locations/muswellbrook/",
  ogTitle: "Facilities Services Muswellbrook — FACILITIES MAN",
  ogDescription:
    "Owner-led cleaning and facilities delivery for Muswellbrook business and industrial sites.",
  h1: "Facilities Management & Cleaning in Muswellbrook",
  intro:
    "FACILITIES MAN supports Muswellbrook operations with documented cleaning and facilities service programmes. Upper Hunter sites benefit from planned mobilisation from Newcastle, clear scopes and direct owner contact when priorities change.",
  servicesIntro:
    "We deliver practical service scopes for commercial, government-adjacent and industrial property in Muswellbrook. Each programme defines zones, frequencies and reporting so managers and committees can verify outcomes without chasing updates.",
  services: [
    { name: "Commercial Cleaning", href: "/services/commercial-cleaning/", blurb: "Professional cleaning for offices and public-facing business sites." },
    { name: "Industrial Cleaning", href: "/services/industrial-cleaning/", blurb: "Operational cleaning for industrial and higher-duty environments." },
    { name: "Maintenance & Trades", href: "/services/maintenance-trades/", blurb: "Maintenance coordination as part of broader facilities workflows." },
    { name: "Facilities Management", href: "/services/facilities-management/", blurb: "Integrated support across cleaning, grounds and maintenance." },
  ],
  suburbClusters: [
    { heading: "Muswellbrook CBD", body: "Commercial and professional tenancies requiring dependable presentation." },
    { heading: "Industrial Corridors", body: "Operational environments with practical scheduling and safety awareness." },
    { heading: "Government & Civic Facilities", body: "Documentation and compliance-focused service expectations." },
    { heading: "Upper Hunter Business Links", body: "Regional service continuity through planned route coordination." },
  ],
  localTeamBody: [
    "Muswellbrook is serviced via established Upper Hunter coverage routes with consistent mobilisation planning.",
    "Owner-led oversight keeps onboarding and quality standards aligned across regional and metro contracts.",
    "Regional distance is built into scheduling upfront — no surprise travel surcharges after a documented walk-through.",
  ],
  industriesBody: [
    "We support commercial property, industrial operators and government-linked facilities in Muswellbrook.",
    "Service plans are documented for clear governance and operational confidence.",
    "Where procurement requires compliance evidence, we provide insurance certificates, police-check confirmation and practical SWMS approaches on request.",
  ],
  mapTitle: "FACILITIES MAN service area — Muswellbrook NSW",
  mapEmbed: MAP,
  faqs: [
    {
      question: "Do you service Muswellbrook regularly?",
      answer:
        "Yes. Muswellbrook is included in our planned Upper Hunter service coverage. Visits are scheduled as part of regional routes rather than one-off dispatches. That supports reliable attendance and consistent team familiarity with your site.",
    },
    {
      question: "Which services are available in Muswellbrook?",
      answer:
        "Commercial cleaning, industrial cleaning, facilities management and maintenance coordination are available. Warehouse cleaning and grounds maintenance can be added where required. All programmes follow a written scope after a free walk-through.",
    },
    {
      question: "Can you support government-linked sites?",
      answer:
        "Yes. We provide compliance-friendly service documentation and practical reporting. Insurance and staff clearance details are available on request for procurement. Scopes are written in plain English for audit and sign-off.",
    },
    {
      question: "Do you provide integrated contracts?",
      answer:
        "Yes. Multiple services can be bundled under one scope and contact point. That reduces contractor overlap and simplifies escalation when issues arise. Owner-led delivery keeps accountability visible end to end.",
    },
    {
      question: "How do we request pricing?",
      answer:
        "Contact us for a site walk-through and written scope-based quote. We respond within 24 hours and deliver pricing within 48 hours of the visit in most cases. Use the contact page or call 0450 924 377 to begin.",
    },
  ],
  ctaHeading: "Get a Free Muswellbrook Quote",
  schemaAreaServed: [{ type: "City", name: "Muswellbrook" }],
};
