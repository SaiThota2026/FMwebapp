import type { LocationPageData } from "./types";

const MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52972.44771807472!2d151.136042!3d-32.564723!2m3!1f0!2f0!3f0";

export const singletonData: LocationPageData = {
  slug: "singleton",
  name: "Singleton",
  title: "Cleaning & Facilities Services Singleton — FACILITIES MAN",
  description:
    "Commercial and industrial cleaning plus facilities support for Singleton and Upper Hunter sites.",
  path: "/locations/singleton/",
  ogTitle: "Facilities Services Singleton — FACILITIES MAN",
  ogDescription:
    "Owner-led cleaning and facilities delivery for Singleton commercial and industrial operations.",
  h1: "Facilities Management & Cleaning in Singleton",
  intro:
    "Singleton is a key Upper Hunter operations corridor with mixed commercial and industrial demand. FACILITIES MAN delivers from our Newcastle base with planned route coverage — not reactive call-outs — so sites receive consistent teams, documented scopes and owner accountability.",
  servicesIntro:
    "FACILITIES MAN provides practical programmes for offices, workshops and industrial-facing facilities across Singleton. Industrial and warehouse environments receive traffic-aware sequencing; commercial tenancies receive presentation-focused routines aligned to occupancy.",
  services: [
    { name: "Industrial Cleaning", href: "/services/industrial-cleaning/", blurb: "Operational cleaning for industrial and workshop environments." },
    { name: "Warehouse Cleaning", href: "/services/warehouse-cleaning/", blurb: "Distribution and storage facility cleaning programmes." },
    { name: "Commercial Cleaning", href: "/services/commercial-cleaning/", blurb: "Office and client-facing cleaning programmes for business sites." },
    { name: "Facilities Management", href: "/services/facilities-management/", blurb: "Integrated cleaning, grounds and maintenance support." },
  ],
  suburbClusters: [
    { heading: "Singleton CBD", body: "Professional and retail precincts needing reliable cleaning standards." },
    { heading: "Industrial Corridors", body: "Higher-duty operational environments requiring traffic-aware cleaning." },
    { heading: "Business Parks", body: "Mixed office and operational tenancies with varied schedules." },
    { heading: "Upper Hunter Link Areas", body: "Regional sites supported through planned route mobilisation." },
  ],
  localTeamBody: [
    "Singleton is serviced through planned Upper Hunter route coverage with owner-supervised onboarding.",
    "This model supports consistent attendance and clear communication for multi-site operators.",
    "Safety and access requirements are confirmed before mobilisation, including inductions and SWMS where non-standard tasks apply.",
  ],
  industriesBody: [
    "Singleton clients often need a blend of commercial and industrial service standards.",
    "We provide practical scopes and records suited to operational and governance needs.",
    "Mining-adjacent and logistics-heavy sites may need higher-frequency amenities and dust-aware methods — we capture that in zone-level task lists.",
  ],
  mapTitle: "FACILITIES MAN service area — Singleton NSW",
  mapEmbed: MAP,
  faqs: [
    {
      question: "Do you provide industrial cleaning in Singleton?",
      answer:
        "Yes. Industrial and warehouse cleaning are core services in Singleton and the Upper Hunter corridor. Programmes account for traffic, dust and shift patterns typical of operational sites. Scopes list zones, frequencies and safety considerations before work begins.",
    },
    {
      question: "Can services be combined under one contract?",
      answer:
        "Yes. We can combine cleaning and facilities support to simplify management and reporting. One owner-led contact coordinates delivery across services. Invoicing and escalation stay consistent across your portfolio.",
    },
    {
      question: "Do you service commercial offices in Singleton?",
      answer:
        "Yes. We support offices, retail and mixed-use business environments. Daily, multi-weekly and weekly frequencies are available with consumables options. Presentation standards are defined in your written scope.",
    },
    {
      question: "Is reporting included?",
      answer:
        "Yes. We provide documented service records and quality communication. Facilities managers receive practical notes and completion records suitable for internal audit. Strata-style governance reporting is available where required.",
    },
    {
      question: "How do we get started?",
      answer:
        "Contact us to schedule a walk-through and receive a written scope and quote. We respond within 24 hours and aim to visit within 2–3 business days. Call 0450 924 377 or use the quote form on our contact page.",
    },
  ],
  ctaHeading: "Get a Free Singleton Quote",
  schemaAreaServed: [{ type: "City", name: "Singleton" }],
};
