/**
 * Phase 2 content & route QC — run: node scripts/phase2-qc.mjs
 */
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = path.resolve("src");
let failures = 0;

function fail(msg) {
  failures++;
  console.log(`FAIL ${msg}`);
}
function ok(msg) {
  console.log(`OK   ${msg}`);
}

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function wordCount(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

function collectStrings(content) {
  const parts = [];
  for (const m of content.matchAll(/`([^`]{10,})`/g)) parts.push(m[1]);
  for (const m of content.matchAll(/["']([^"']{15,})["']/g)) parts.push(m[1]);
  return parts.join(" ");
}

function auditMeta(label, content) {
  const title = content.match(/title:\s*["']([^"']+)["']/)?.[1];
  const desc = content.match(/description:\s*["']([^"']+)["']/)?.[1];
  if (!title || title.length > 60) fail(`${label} title (${title?.length ?? 0} chars)`);
  else ok(`${label} title (${title.length})`);
  if (!desc || desc.length > 160) fail(`${label} description (${desc?.length ?? 0} chars)`);
  else ok(`${label} description (${desc.length})`);
}

console.log("\n=== PHASE 2 SERVICE PAGES (data) ===\n");
const phase2Slugs = [
  "medical-cleaning",
  "childcare-cleaning",
  "window-cleaning",
  "carpet-cleaning",
  "pressure-washing",
  "warehouse-cleaning",
  "sanitary-washroom-services",
  "maintenance-trades",
];

const phase2Bundle = read("data/services/phase2.ts");

for (const slug of phase2Slugs) {
  if (!phase2Bundle.includes(`slug: "${slug}"`) && !phase2Bundle.includes(`"${slug}"`)) {
    fail(`phase2.ts missing slug ${slug}`);
    continue;
  }
  const file = `data/services/${slug}.ts`;
  const c = fs.existsSync(path.join(root, file))
    ? read(file)
    : phase2Bundle;
  const wc = wordCount(collectStrings(c));
  if (wc < 400) fail(`service/${slug} word count ${wc} (min 400)`);
  else ok(`service/${slug} ${wc} words`);
  auditMeta(`service/${slug}`, c);
}

console.log("\n=== INDUSTRIES ===\n");
const industries = read("data/industries/index.ts");
const industrySlugs = [
  "strata-body-corporate",
  "healthcare",
  "education-childcare",
  "commercial-property",
  "government",
];
for (const slug of industrySlugs) {
  if (!industries.includes(`slug: "${slug}"`) && !industries.includes(`"${slug}"`)) {
    fail(`industry missing slug ${slug}`);
  } else ok(`industry/${slug} present`);
}

console.log("\n=== PHASE 2 LOCATIONS ===\n");
for (const slug of ["cessnock", "port-stephens", "singleton", "muswellbrook"]) {
  const file = `data/locations/${slug}.ts`;
  if (!fs.existsSync(path.join(root, file))) fail(`missing ${file}`);
  else {
    const c = read(file);
    const wc = wordCount(collectStrings(c));
    if (wc < 350) fail(`location/${slug} ${wc}w (min 350)`);
    else ok(`location/${slug} ${wc}w`);
    auditMeta(`location/${slug}`, c);
  }
}

console.log("\n=== COMBO PAGES ===\n");
const combos = read("data/combos/index.ts");
const comboCount = (combos.match(/makeCombo\(/g) ?? []).length;
if (comboCount < 5) fail(`expected 5 combos, found ${comboCount}`);
else ok(`${comboCount} combo pages defined`);

console.log("\n=== BLOG POSTS ===\n");
const blogDir = path.join(root, "content/blog");
const posts = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
if (posts.length < 5) fail(`expected 5 posts, found ${posts.length}`);
for (const file of posts) {
  const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
  const { data, content } = matter(raw);
  const slug = file.replace(/\.mdx$/, "");
  if (!data.title) fail(`blog/${slug} missing title`);
  if (!data.description) fail(`blog/${slug} missing description`);
  if (!data.date) fail(`blog/${slug} missing date`);
  const wc = wordCount(content);
  if (wc < 400) fail(`blog/${slug} ${wc}w (min 400)`);
  else ok(`blog/${slug} ${wc}w, meta ok`);
  if (data.description && data.description.length > 160) {
    fail(`blog/${slug} description ${data.description.length} chars`);
  }
}

console.log("\n=== HUB PAGES EXIST ===\n");
for (const p of [
  "app/locations/page.tsx",
  "app/industries/page.tsx",
  "app/blog/page.tsx",
  "app/services/[slug]/page.tsx",
  "app/locations/[locationSlug]/page.tsx",
]) {
  if (fs.existsSync(path.join(root, p))) ok(p);
  else fail(`missing ${p}`);
}

console.log("\n=== DUPLICATE CONTENT RISK (phase2 services) ===\n");
const bodies = phase2Slugs.map((slug) => {
  try {
    return collectStrings(read(`data/services/${slug}.ts`)).slice(0, 500);
  } catch {
    return "";
  }
});
const dupPairs = [];
for (let i = 0; i < bodies.length; i++) {
  for (let j = i + 1; j < bodies.length; j++) {
    if (bodies[i] && bodies[i] === bodies[j]) dupPairs.push([phase2Slugs[i], phase2Slugs[j]]);
  }
}
if (dupPairs.length) {
  for (const [a, b] of dupPairs) fail(`identical copy: ${a} & ${b}`);
} else ok("no identical phase2 service bodies");

console.log(`\n=== SUMMARY: ${failures} failure(s) ===\n`);
process.exit(failures ? 1 : 0);
