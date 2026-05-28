const pages = [
  "/",
  "/about/",
  "/contact/",
  "/services/",
  "/services/commercial-cleaning/",
  "/services/medical-cleaning/",
  "/services/window-cleaning/",
  "/industries/",
  "/industries/healthcare/",
  "/locations/",
  "/locations/newcastle/",
  "/locations/cessnock/",
  "/locations/maitland/commercial-cleaning/",
  "/blog/",
  "/blog/how-often-office-cleaning/",
  "/faq/",
  "/privacy-policy/",
];

function pick(haystack, re) {
  return haystack.match(re)?.[1] ?? "";
}

const base = process.env.QA_BASE_URL ?? "http://localhost:3000";
let bad = 0;

console.log(`\n=== FINAL QA (${base}) ===\n`);

for (const p of pages) {
  try {
    const res = await fetch(`${base}${p}`);
    const html = await res.text();

    const statusOk = res.ok;
    const ga = html.includes("G-D26DLPW4CN");
    const ld = html.includes("application/ld+json");
    const canon = pick(html, /rel="canonical" href="([^"]+)/);
    const title = pick(html, /<title>([^<]+)/);
    const viewport = html.includes("width=device-width");

    const ok = statusOk && ga && ld && canon && viewport;
    if (!ok) bad++;

    console.log(
      `${ok ? "OK " : "FAIL"} ${p} status=${res.status} ga=${ga} ld=${ld} viewport=${viewport}`,
    );
    if (!ok) {
      console.log(`     title: ${title}`);
      console.log(`     canon: ${canon}`);
    }
  } catch (e) {
    bad++;
    console.log(`FAIL ${p} — ${e.message}`);
  }
}

console.log(`\n${bad ? `${bad} page(s) failed` : "All pages passed"}\n`);
process.exit(bad ? 1 : 0);
