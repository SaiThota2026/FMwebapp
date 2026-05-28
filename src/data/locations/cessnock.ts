import type { LocationPageData } from "./types";

const MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53553.88451307345!2d151.314459!3d-32.834808!2m3!1f0!2f0!3f0";

export const cessnockData: LocationPageData = {
  slug: "cessnock",
  name: "Cessnock",
  title: "Cleaning & Facilities Services Cessnock — FACILITIES MAN",
  description:
    "Commercial cleaning and facilities services in Cessnock and surrounding Hunter Valley areas.",
  path: "/locations/cessnock/",
  ogTitle: "Facilities Services Cessnock — FACILITIES MAN",
  ogDescription:
    "Owner-led cleaning, grounds and facilities support for Cessnock commercial and tourism sites.",
  h1: "Facilities Management & Cleaning in Cessnock",
  intro:
    "FACILITIES MAN supports Cessnock businesses with practical, documented service delivery from our Newcastle base. We service the Cessnock LGA and surrounding Hunter wine-country corridors with the same owner-led accountability applied across our core regions — direct communication, written scopes and monthly reporting your stakeholders can audit.",
  servicesIntro:
    "We deliver commercial cleaning, strata support, grounds and facilities coordination across Cessnock and wine-country fringe precincts. Programmes are scoped around tenancy mix, visitor traffic and seasonal peaks so presentation stays consistent when operations are busiest.",
  services: [
    { name: "Commercial Cleaning", href: "/services/commercial-cleaning/", blurb: "Programmed site cleaning for commercial and mixed-use sites." },
    { name: "Strata Cleaning", href: "/services/strata-cleaning/", blurb: "Common-area cleaning with committee-ready records." },
    { name: "Facilities Management", href: "/services/facilities-management/", blurb: "Integrated support across cleaning, grounds and trades." },
    { name: "Industrial Cleaning", href: "/services/industrial-cleaning/", blurb: "Operational cleaning for workshops and industrial footprints." },
  ],
  suburbClusters: [
    { heading: "Cessnock CBD", body: "Retail and professional sites that need reliable presentation outcomes." },
    { heading: "Wine Country Fringe", body: "Hospitality and tourism-support sites with variable operating patterns." },
    { heading: "Industrial Areas", body: "Service routines aligned to higher-traffic and operational environments." },
    { heading: "Residential Growth Corridors", body: "Strata and mixed-use sites requiring consistent common-area quality." },
  ],
  localTeamBody: [
    "Cessnock is a planned service corridor for our Hunter operations, not ad-hoc coverage.",
    "We coordinate route planning for reliable attendance and practical response windows.",
    "When scope or access changes — new tenants, extended hours or event periods — you speak with the owner directly rather than a distant account desk.",
  ],
  industriesBody: [
    "Cessnock combines commercial, hospitality and industrial activity, each requiring different service cadences.",
    "We support committees, managers and operators with documented delivery and direct communication.",
    "Hospitality and tourism-adjacent sites often need flexible windows; industrial and workshop sites need traffic-aware sequencing. We define both in your written scope before mobilisation.",
  ],
  mapTitle: "FACILITIES MAN service area — Cessnock NSW",
  mapEmbed: MAP,
  faqs: [
    {
      question: "Do you service Cessnock regularly?",
      answer:
        "Yes. Cessnock sits within our planned Hunter service routes and receives routine scheduling. We coordinate visits from our Newcastle base so attendance stays predictable. If you need a one-off deep clean or a change in frequency, we adjust the scope in writing before the next cycle.",
    },
    {
      question: "Which services are available in Cessnock?",
      answer:
        "Commercial cleaning, strata cleaning, facilities management, grounds maintenance and industrial cleaning are all available. Specialist services such as window cleaning and pressure washing can be bundled where required. Every programme is scoped after a free site walk-through.",
    },
    {
      question: "Can you service tourism-related sites?",
      answer:
        "Yes. We tailor service windows to hospitality and visitor operations common in the Cessnock region. That includes higher-frequency amenities during peak periods and practical reporting for managers. We align products and methods to each zone in your scope.",
    },
    {
      question: "Do you provide written scopes?",
      answer:
        "Yes. Every engagement starts with a documented scope and clear frequency controls. You see inclusions by area and task before contract start. That reduces disputes and makes committee or management sign-off straightforward.",
    },
    {
      question: "How do we request a quote?",
      answer:
        "Use the contact page or call us on 0450 924 377 to schedule a site walk-through. We respond within 24 hours and typically deliver a written scope within 48 hours of the visit. Mobilisation can often begin in the same week once approved.",
    },
  ],
  ctaHeading: "Get a Free Cessnock Quote",
  schemaAreaServed: [{ type: "City", name: "Cessnock" }],
};
