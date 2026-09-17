/**
 * Option C image shot list — run: npx tsx scripts/image-shot-list.mjs
 * Builds every rendered image slot with a unique basename and writes JSON.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ALL_SERVICES } from "../src/data/services/index.ts";
import { ALL_LOCATIONS } from "../src/data/locations/index.ts";
import { INDUSTRY_PAGES } from "../src/data/industries/index.ts";
import { COMBO_PAGES } from "../src/data/combos/index.ts";
import { getAllBlogPosts } from "../src/lib/blog.ts";
import {
  HOME_SERVICES,
  HOME_INDUSTRIES_TEASER,
  HOME_LOCATIONS,
  HOME_MAP_IMAGE_LABEL,
} from "../src/data/home.ts";
import {
  CORE_SERVICES,
  SPECIALIST_SERVICES,
  HUB_INDUSTRIES,
  HUB_LOCATIONS,
} from "../src/data/services-hub.ts";
import { HUB_LOCATION_CARDS } from "../src/data/locations-hub.ts";
import { INDUSTRIES, LOCATIONS, SERVICES } from "../src/lib/site.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_PATH = path.join(__dirname, "image-shot-list.json");

/** @type {Map<string, { basename: string, path: string, prompt: string, aspect: "16:9" | "21:9" }>} */
const registry = new Map();

const REGION =
  "Newcastle, Hunter Valley, Lake Macquarie and Central Coast NSW, Australia";

function serviceSlugFromHref(href) {
  return href.replace(/^\/services\//, "").replace(/\/$/, "");
}

function locationSlugFromHref(href) {
  return href.replace(/^\/locations\//, "").replace(/\/$/, "");
}

/**
 * @param {string} basename
 * @param {string} prompt
 * @param {"16:9" | "21:9"} [aspect]
 */
function addSlot(basename, prompt, aspect = "16:9") {
  if (registry.has(basename)) {
    throw new Error(`Duplicate basename: ${basename}`);
  }
  registry.set(basename, {
    basename,
    path: `/images/content/${basename}.png`,
    prompt,
    aspect,
  });
}

function photoPrompt(subject, details) {
  return `Photorealistic professional photograph, ${subject}. ${details} Natural daylight, authentic Australian commercial environment in ${REGION}. No text overlays, no logos, no watermarks, no AI artifacts. Shot on a full-frame DSLR, shallow depth of field, editorial quality suitable for a facilities management company website.`;
}

function mapPrompt(subject, details) {
  return `Photorealistic wide aerial or stylised map illustration, ${subject}. ${details} Shows Newcastle NSW as the hub with coverage radiating across Hunter Valley, Lake Macquarie and Central Coast regions. Clean cartographic style, muted teal and cream palette, no labels cluttering the image, suitable as a website hero map. 21:9 ultra-wide composition.`;
}

// ── Homepage ────────────────────────────────────────────────────────────────

for (const service of HOME_SERVICES) {
  const slug = serviceSlugFromHref(service.href);
  addSlot(
    `home-service-${slug}`,
    photoPrompt(
      `${service.name} team at work on a commercial site`,
      `${service.outcome} Uniformed cleaners or facilities staff in hi-vis or branded workwear, modern Newcastle office or strata building interior, professional and trustworthy mood.`,
    ),
  );
}

for (const industry of HOME_INDUSTRIES_TEASER) {
  const slug = industry.href.replace(/^\/industries\//, "").replace(/\/$/, "");
  addSlot(
    `home-industry-${slug}`,
    photoPrompt(
      `${industry.name} facilities environment`,
      `${industry.blurb} Sector-appropriate building interior or common area showing high presentation standards relevant to ${industry.name.toLowerCase()} clients in the Hunter region.`,
    ),
  );
}

for (const location of HOME_LOCATIONS) {
  const slug = locationSlugFromHref(location.href);
  addSlot(
    `home-location-${slug}`,
    photoPrompt(
      `Commercial facilities services in ${location.name}`,
      `${location.blurb} Recognisable ${location.name} commercial streetscape or building exterior with cleaning or maintenance activity visible.`,
    ),
  );
}

addSlot(
  "home-map-service-area",
  mapPrompt(
    "FACILITIES MAN Newcastle Hunter service area map",
    HOME_MAP_IMAGE_LABEL.replace(/\.webp.*$/, ""),
  ),
  "21:9",
);

// ── Services hub ────────────────────────────────────────────────────────────

for (const service of [...CORE_SERVICES, ...SPECIALIST_SERVICES]) {
  addSlot(
    `services-hub-${service.slug}`,
    photoPrompt(
      `${service.name} service card image`,
      `${service.blurb ?? service.name} Commercial or industrial site in Newcastle region demonstrating ${service.name.toLowerCase()} delivery.`,
    ),
  );
}

for (const industry of HUB_INDUSTRIES) {
  addSlot(
    `hub-industry-${industry.slug}`,
    photoPrompt(
      `${industry.name} industry hub card`,
      `${industry.blurb} Facilities or cleaning scene tailored to ${industry.name.toLowerCase()} sector requirements in NSW Hunter region.`,
    ),
  );
}

for (const loc of HUB_LOCATIONS) {
  const slug = locationSlugFromHref(loc.href);
  addSlot(
    `hub-location-${slug}`,
    photoPrompt(
      `Facilities services hub card for ${loc.name}`,
      `FACILITIES MAN mobilises from Newcastle to service ${loc.name} commercial, strata and industrial sites. Local commercial precinct or landmark context for ${loc.name}.`,
    ),
  );
}

// ── Service pages ───────────────────────────────────────────────────────────

for (const service of ALL_SERVICES) {
  addSlot(
    `services-${service.slug}-hero`,
    photoPrompt(
      `${service.name} hero — ${service.h1}`,
      `${service.lead} Wide establishing shot of ${service.name.toLowerCase()} in a Newcastle or Hunter commercial setting, professional team or equipment visible.`,
    ),
  );

  service.sections.forEach((section, index) => {
    const n = index + 1;
    const bodySnippet = section.body[0]?.slice(0, 200) ?? "";
    addSlot(
      `services-${service.slug}-section-${n}`,
      photoPrompt(
        `${service.name}: ${section.heading}`,
        `${bodySnippet} Context-specific scene illustrating "${section.heading}" for ${service.name.toLowerCase()} clients in ${REGION}.`,
      ),
    );
  });

  addSlot(
    `services-${service.slug}-areas`,
    mapPrompt(
      `${service.name} service area coverage map`,
      `Coverage areas: ${service.areas.join("; ")}. Regional map highlighting where ${service.name.toLowerCase()} is delivered across Newcastle and surrounding LGAs.`,
    ),
    "21:9",
  );
}

// ── Locations hub ───────────────────────────────────────────────────────────

addSlot(
  "locations-hub-hero",
  photoPrompt(
    "Locations hub hero — Newcastle Hunter Central Coast service areas",
    "Owner-led facilities team with van or equipment near Newcastle harbour or CBD, representing regional mobilisation across Hunter and Central Coast. Confident, locally owned business feel.",
  ),
);

for (const card of HUB_LOCATION_CARDS) {
  addSlot(
    `locations-hub-card-${card.slug}`,
    photoPrompt(
      `${card.name} location hub card`,
      `${card.description} ${card.badge ? `Badge context: ${card.badge}.` : ""} Commercial or strata property scene in ${card.name}.`,
    ),
  );
}

addSlot(
  "locations-hub-map",
  mapPrompt(
    "Locations hub service area overview map",
    "Newcastle HQ with coverage across wider Hunter and Central Coast regions. Same service area concept as homepage map but unique asset for locations hub page.",
  ),
  "21:9",
);

// ── Location pages ──────────────────────────────────────────────────────────

for (const location of ALL_LOCATIONS) {
  addSlot(
    `locations-${location.slug}-hero`,
    photoPrompt(
      `${location.name} location page hero`,
      `${location.intro.slice(0, 220)} Locally based facilities and cleaning team serving ${location.name}.`,
    ),
  );

  addSlot(
    `locations-${location.slug}-region`,
    photoPrompt(
      `${location.name} regional overview`,
      `Wide landscape or aerial view of ${location.name} commercial precincts and suburbs served by FACILITIES MAN from Newcastle base.`,
    ),
  );

  for (const service of location.services) {
    const serviceSlug = serviceSlugFromHref(service.href);
    addSlot(
      `locations-${location.slug}-card-${serviceSlug}`,
      photoPrompt(
        `${service.name} in ${location.name}`,
        `${service.blurb} Card image for ${service.name.toLowerCase()} offered in ${location.name}, NSW.`,
      ),
    );
  }

  location.suburbClusters.forEach((cluster, index) => {
    addSlot(
      `locations-${location.slug}-cluster-${index + 1}`,
      photoPrompt(
        `${location.name} — ${cluster.heading}`,
        `${cluster.body} Suburb cluster coverage visual for ${cluster.heading} within ${location.name} LGA.`,
      ),
    );
  });

  addSlot(
    `locations-${location.slug}-section-local`,
    photoPrompt(
      `Why a locally-based team matters in ${location.name}`,
      `${location.localTeamBody.join(" ").slice(0, 280)} Owner or team member on site in ${location.name} demonstrating local accountability.`,
    ),
  );

  addSlot(
    `locations-${location.slug}-section-industries`,
    photoPrompt(
      `Industries serviced in ${location.name}`,
      `${location.industriesBody.join(" ").slice(0, 280)} Collage-style or single scene showing diverse industry clients in ${location.name}.`,
    ),
  );
}

// ── Industries hub ──────────────────────────────────────────────────────────

for (const industry of INDUSTRY_PAGES) {
  addSlot(
    `industries-hub-card-${industry.slug}`,
    photoPrompt(
      `${industry.name} industries hub card`,
      `${industry.lead.slice(0, 200)} Card thumbnail for ${industry.name.toLowerCase()} vertical.`,
    ),
  );
}

// ── Industry pages ──────────────────────────────────────────────────────────

for (const industry of INDUSTRY_PAGES) {
  addSlot(
    `industries-${industry.slug}-hero`,
    photoPrompt(
      `${industry.name} industry page hero`,
      `${industry.lead} Hero image for ${industry.name.toLowerCase()} facilities and cleaning services in Newcastle region.`,
    ),
  );

  const sectionContexts = [
    {
      heading: industry.whoWeServeHeading,
      body: industry.whoWeServeBody.join(" "),
    },
    {
      heading: industry.whyUsHeading,
      body: industry.whyUsBody.join(" "),
    },
    {
      heading: industry.complianceHeading,
      body: industry.complianceBody.join(" "),
    },
  ];

  sectionContexts.forEach((section, index) => {
    addSlot(
      `industries-${industry.slug}-section-${index + 1}`,
      photoPrompt(
        `${industry.name}: ${section.heading}`,
        `${section.body.slice(0, 260)} Section ${index + 1} supporting image for ${industry.name.toLowerCase()} page.`,
      ),
    );
  });
}

// ── Combo pages ─────────────────────────────────────────────────────────────

for (const combo of COMBO_PAGES) {
  const key = `${combo.locationSlug}-${combo.serviceSlug}`;
  addSlot(
    `combos-${key}-hero`,
    photoPrompt(
      `${combo.serviceName} in ${combo.locationName} hero`,
      `${combo.lead} Page hero for local ${combo.serviceName.toLowerCase()} in ${combo.locationName}.`,
    ),
  );

  addSlot(
    `combos-${key}-body`,
    photoPrompt(
      `${combo.serviceName} body section in ${combo.locationName}`,
      `${combo.localServiceBody[0]} On-site ${combo.serviceName.toLowerCase()} activity in ${combo.locationName} — ${combo.localRefs}.`,
    ),
  );

  addSlot(
    `combos-${key}-region`,
    photoPrompt(
      `${combo.serviceName} ${combo.locationName} regional context`,
      `Wide view of ${combo.locationName} commercial or industrial precincts where ${combo.serviceName.toLowerCase()} is delivered. ${combo.localRefs}.`,
    ),
  );

  addSlot(
    `combos-${key}-section-1`,
    photoPrompt(
      `Why local matters for ${combo.serviceName} in ${combo.locationName}`,
      `${combo.whyLocalBody.join(" ").slice(0, 260)} Owner reviewing scope or team mobilising locally in ${combo.locationName}.`,
    ),
  );
}

// ── About ───────────────────────────────────────────────────────────────────

addSlot(
  "about-founder",
  photoPrompt(
    "FACILITIES MAN founder on a Newcastle commercial site",
    "Owner-operated facilities management founder in professional workwear, confident and approachable, standing at a Newcastle commercial building entrance or site walk-through. Represents direct accountability and local ownership.",
  ),
);

addSlot(
  "about-walkthrough",
  photoPrompt(
    "Owner conducting a facilities site walk-through in Newcastle",
    "Facilities manager or owner with clipboard or tablet inspecting lobby, corridor or common area during a client site walk-through. Documented scope and quality-focused mood.",
  ),
);

addSlot(
  "about-compliance",
  photoPrompt(
    "Compliance documentation and insurance certificates",
    "Neat folder of insurance certificates, police check confirmations, SWMS and compliance documents on a desk beside hi-vis vest and cleaning equipment. Professional governance aesthetic.",
  ),
);

for (const loc of LOCATIONS) {
  const slug = locationSlugFromHref(loc.href);
  addSlot(
    `about-location-${slug}`,
    photoPrompt(
      `About page service area card — ${loc.name}`,
      `Facilities and cleaning services available in ${loc.name}. Commercial building or streetscape recognisable as ${loc.name} region.`,
    ),
  );
}

// ── FAQ ─────────────────────────────────────────────────────────────────────

addSlot(
  "faq-hub-hero",
  photoPrompt(
    "FAQ hub hero — commercial cleaning team in Newcastle office",
    "Professional commercial cleaning team working in a bright Newcastle office after hours. Clean, trustworthy, answers-common-questions mood for FAQ hub page.",
  ),
);

addSlot(
  "faq-hub-map",
  mapPrompt(
    "FAQ hub Newcastle Hunter service area map",
    "Regional coverage map for FAQ page sidebar or supporting visual. Newcastle-centred Hunter and Central Coast service footprint.",
  ),
  "21:9",
);

addSlot(
  "faq-hub-trust",
  photoPrompt(
    "FAQ trust strip — insured owner-operated Newcastle team",
    "Team in uniform with van, insurance and ABN trust cues, professional group portrait at Newcastle commercial site. Conveys fully insured, police-checked, locally owned credentials.",
  ),
);

// ── Contact ─────────────────────────────────────────────────────────────────

addSlot(
  "contact-hero",
  photoPrompt(
    "Contact page hero — get a free quote Newcastle facilities",
    "Friendly owner or team member taking a client call or reviewing quote form on tablet at Newcastle office. Approachable, direct-contact, no call centre messaging.",
  ),
);

addSlot(
  "contact-walkthrough",
  photoPrompt(
    "Free site walk-through booking — Newcastle facilities assessment",
    "Owner meeting facility manager at building entrance for scheduled site walk-through. Professional handshake or tour beginning, Newcastle commercial property.",
  ),
);

addSlot(
  "contact-map",
  mapPrompt(
    "Contact page Newcastle service area map",
    "Map showing FACILITIES MAN operates from Newcastle NSW with site walk-throughs across Newcastle, Maitland, Lake Macquarie, Hunter Valley and Central Coast.",
  ),
  "21:9",
);

// ── Blog hub ────────────────────────────────────────────────────────────────

addSlot(
  "blog-hub-hero",
  photoPrompt(
    "Blog hub hero — facilities management insights Newcastle",
    "Editorial-style image of facilities manager reviewing cleaning report or building maintenance checklist in modern Newcastle office. Thought leadership and practical guidance mood.",
  ),
);

const blogPosts = getAllBlogPosts();
for (const post of blogPosts) {
  addSlot(
    `blog-hub-card-${post.slug}`,
    photoPrompt(
      `Blog hub card — ${post.title}`,
      `${post.description.slice(0, 220)} Article thumbnail for blog listing.`,
    ),
  );
}

// ── Blog posts ──────────────────────────────────────────────────────────────

for (const post of blogPosts) {
  addSlot(
    `blog-${post.slug}-hero`,
    photoPrompt(
      `Blog hero — ${post.title}`,
      `${post.description} Wide hero image supporting article about ${post.title.toLowerCase()} for Newcastle and Hunter businesses.`,
    ),
  );

  addSlot(
    `blog-${post.slug}-mid`,
    photoPrompt(
      `Blog mid-article image — ${post.title}`,
      `In-article supporting photograph related to ${post.title.toLowerCase()}. Practical facilities or cleaning scene for Hunter region readers. Editorial documentary style.`,
    ),
  );

  addSlot(
    `blog-${post.slug}-sidebar`,
    photoPrompt(
      `Blog sidebar CTA — ${post.title}`,
      "Inviting commercial property manager or strata committee member reviewing clean building lobby. Supports sidebar quote call-to-action, warm and professional.",
    ),
  );
}

// Privacy: SKIP (per Option C spec)

const entries = [...registry.values()];
const output = { total: entries.length, entries };

fs.writeFileSync(OUT_PATH, `${JSON.stringify(output, null, 2)}\n`, "utf8");
console.log(`Wrote ${entries.length} image slots to ${OUT_PATH}`);
console.log(`Total: ${entries.length}`);
