import fs from "fs";
import path from "path";

const root = process.cwd();
const contentDir = path.join(root, "public/images/content");
const existing = new Set(
  fs.readdirSync(contentDir).filter((f) => f.endsWith(".png")).map((f) => f.replace(/\.png$/, "")),
);

/** Exact basenames required by Tier-3 + under-covered pages */
const needed = [];

function add(...names) {
  for (const n of names) needed.push(n);
}

// Shell / trust / utility
add(
  "about-certifications-hero",
  "about-certifications-section-1",
  "about-certifications-section-2",
  "sitemap-hero",
  "sitemap-section-1",
  "sitemap-section-2",
  "case-studies-hero",
  "case-studies-section-1",
  "case-studies-section-2",
  "reviews-hero",
  "reviews-section-1",
  "reviews-section-2",
  "privacy-hero",
  "privacy-section-1",
  "privacy-section-2",
  "blog-hub-mid",
  "locations-hub-card-sydney",
  "locations-hub-card-brisbane",
  "locations-hub-card-melbourne",
);

for (const city of ["sydney", "brisbane", "melbourne"]) {
  add(
    `locations-${city}-hero`,
    `locations-${city}-region`,
    `locations-${city}-section-local`,
    `locations-${city}-section-industries`,
    `locations-${city}-cluster-1`,
    `locations-${city}-cluster-2`,
    `locations-${city}-card-commercial-cleaning`,
    `locations-${city}-card-strata-cleaning`,
    `locations-${city}-card-facilities-management`,
  );
}

for (const service of ["commercial-cleaning", "strata-cleaning", "facilities-management"]) {
  add(
    `combos-sydney-${service}-hero`,
    `combos-sydney-${service}-body`,
    `combos-sydney-${service}-region`,
    `combos-sydney-${service}-section-1`,
  );
}

const missing = [...new Set(needed)].filter((n) => !existing.has(n));
console.log("needed", new Set(needed).size);
console.log("missing", missing.length);
fs.writeFileSync(
  path.join(root, "scripts/tier3-missing-images.json"),
  JSON.stringify({ missing, needed: [...new Set(needed)] }, null, 2),
);
missing.forEach((m) => console.log(m));
