import fs from "fs";
import path from "path";

const root = path.resolve("src");

const pageMeta = [
  { route: "/", file: "app/page.tsx" },
  { route: "/about/", file: "app/about/page.tsx" },
  { route: "/contact/", file: "app/contact/page.tsx" },
  { route: "/faq/", file: "app/faq/page.tsx" },
  { route: "/privacy-policy/", file: "app/privacy-policy/page.tsx" },
  { route: "/services/", file: "app/services/page.tsx" },
  { route: "/services/commercial-cleaning/", file: "data/services/commercial-cleaning.ts" },
  { route: "/services/strata-cleaning/", file: "data/services/strata-cleaning.ts" },
  { route: "/services/facilities-management/", file: "data/services/facilities-management.ts" },
  { route: "/services/office-cleaning/", file: "data/services/office-cleaning.ts" },
  { route: "/services/grounds-maintenance/", file: "data/services/grounds-maintenance.ts" },
  { route: "/services/industrial-cleaning/", file: "data/services/industrial-cleaning.ts" },
  { route: "/locations/newcastle/", file: "data/locations/newcastle.ts" },
  { route: "/locations/maitland/", file: "data/locations/maitland.ts" },
  { route: "/locations/lake-macquarie/", file: "data/locations/lake-macquarie.ts" },
  { route: "/locations/hunter-valley/", file: "data/locations/hunter-valley.ts" },
  { route: "/locations/central-coast/", file: "data/locations/central-coast.ts" },
];

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function extractQuoted(content, key) {
  const re = new RegExp(`${key}:\\s*\\n?\\s*["']([^"']+)["']`, "m");
  const m = content.match(re);
  return m?.[1] ?? null;
}

function wordCount(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

function sentenceCount(text) {
  return text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;
}

function collectTextFromData(content) {
  const strings = [...content.matchAll(/["']([^"']{20,})["']/g)].map((m) => m[1]);
  return strings.join(" ");
}

console.log("\n=== METADATA LENGTHS ===");
for (const p of pageMeta) {
  const c = read(p.file);
  const title = extractQuoted(c, "title");
  const desc = extractQuoted(c, "description");
  const tOk = title && title.length <= 60;
  const dOk = desc && desc.length <= 155;
  console.log(
    `${tOk ? "OK" : "FAIL"} title(${title?.length ?? "?"}): ${p.route}`,
  );
  if (!tOk) console.log(`     ${title}`);
  console.log(
    `${dOk ? "OK" : "FAIL"} desc(${desc?.length ?? "?"}): ${p.route}`,
  );
  if (!dOk) console.log(`     ${desc}`);
}

console.log("\n=== WORD COUNTS (data + component text) ===");
const thresholds = {
  service: 600,
  location: 450,
  faq: 800,
  about: 700,
};

for (const slug of [
  "commercial-cleaning",
  "strata-cleaning",
  "facilities-management",
  "office-cleaning",
  "grounds-maintenance",
  "industrial-cleaning",
]) {
  const c = read(`data/services/${slug}.ts`);
  const wc = wordCount(collectTextFromData(c));
  console.log(`${wc >= thresholds.service ? "OK" : "FAIL"} service/${slug}: ${wc}w (min ${thresholds.service})`);
}

for (const slug of [
  "newcastle",
  "maitland",
  "lake-macquarie",
  "hunter-valley",
  "central-coast",
]) {
  const c = read(`data/locations/${slug}.ts`);
  const wc = wordCount(collectTextFromData(c));
  console.log(`${wc >= thresholds.location ? "OK" : "FAIL"} location/${slug}: ${wc}w (min ${thresholds.location})`);
}

const aboutText = read("data/about.ts") + read("components/about/AboutPage.tsx");
console.log(`${wordCount(collectTextFromData(aboutText)) >= thresholds.about ? "OK" : "FAIL"} about: ${wordCount(collectTextFromData(aboutText))}w`);

const faqText = read("data/faq-hub.ts") + read("components/faq/FaqHubPage.tsx");
console.log(`${wordCount(collectTextFromData(faqText)) >= thresholds.faq ? "OK" : "FAIL"} faq hub: ${wordCount(collectTextFromData(faqText))}w`);

console.log("\n=== FAQ ANSWERS < 3 SENTENCES ===");
function auditFaqs(label, content) {
  const blocks = [...content.matchAll(/answer:\s*\n?\s*["']([^"']+)["']/g)];
  for (const [, ans] of blocks) {
    if (sentenceCount(ans) < 3) {
      console.log(`FAIL ${label}: ${sentenceCount(ans)} sentences — ${ans.slice(0, 80)}...`);
    }
  }
}
for (const slug of [
  "commercial-cleaning",
  "strata-cleaning",
  "facilities-management",
  "office-cleaning",
  "grounds-maintenance",
  "industrial-cleaning",
]) {
  auditFaqs(`service/${slug}`, read(`data/services/${slug}.ts`));
}
for (const slug of [
  "newcastle",
  "maitland",
  "lake-macquarie",
  "hunter-valley",
  "central-coast",
]) {
  auditFaqs(`location/${slug}`, read(`data/locations/${slug}.ts`));
}
auditFaqs("about", read("data/about.ts"));

console.log("\n=== INTERNAL LINK SCAN ===");
const allFiles = [];
function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (/\.(tsx|ts|jsx|js)$/.test(ent.name)) allFiles.push(p);
  }
}
walk(root);

const hrefs = new Set();
for (const f of allFiles) {
  const c = fs.readFileSync(f, "utf8");
  for (const m of c.matchAll(/href=["'](\/[^"']*?)["']/g)) hrefs.add(m[1]);
}

const validRoutes = new Set([
  "/",
  "/about/",
  "/contact/",
  "/faq/",
  "/privacy-policy/",
  "/services/",
  "/services/commercial-cleaning/",
  "/services/strata-cleaning/",
  "/services/facilities-management/",
  "/services/office-cleaning/",
  "/services/grounds-maintenance/",
  "/services/industrial-cleaning/",
  "/locations/newcastle/",
  "/locations/maitland/",
  "/locations/lake-macquarie/",
  "/locations/hunter-valley/",
  "/locations/central-coast/",
  "/sitemap.xml",
]);

for (const h of [...hrefs].sort()) {
  if (h.startsWith("http") || h.startsWith("mailto:") || h.startsWith("tel:")) continue;
  const norm = h.endsWith("/") || h.includes(".") ? h : h + "/";
  if (!validRoutes.has(norm) && !validRoutes.has(h)) {
    console.log("FAIL unknown internal link:", h);
  }
}

console.log("\n=== SERVICE PAGES LINK TO /services/ ===");
for (const slug of [
  "commercial-cleaning",
  "strata-cleaning",
  "facilities-management",
  "office-cleaning",
  "grounds-maintenance",
  "industrial-cleaning",
]) {
  const tpl = read("components/services/ServicePageTemplate.tsx");
  const data = read(`data/services/${slug}.ts`);
  const ok = tpl.includes('href="/services/"') || data.includes('"/services/"');
  console.log(`${ok ? "OK" : "FAIL"} ${slug}`);
}

console.log("\n=== SCHEMA PLACEHOLDERS ===");
const schema = read("lib/schema.ts");
const ph = schema.match(/\[PLACEHOLDER[^\]]+\]/g) ?? [];
console.log(ph.length ? "FAIL " + ph.join("; ") : "OK none in schema.ts");
