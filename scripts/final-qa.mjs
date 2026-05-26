const pages = [
  "/",
  "/about/",
  "/contact/",
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
  "/faq/",
  "/privacy-policy/",
];

function pick(haystack, re) {
  return haystack.match(re)?.[1] ?? "";
}

let bad = 0;
for (const p of pages) {
  const res = await fetch(`http://localhost:3000${p}`);
  const html = await res.text();

  const statusOk = res.ok;
  const ga = html.includes("G-D26DLPW4CN");
  const ld = html.includes("application/ld+json");
  const canon = pick(html, /rel="canonical" href="([^"]+)/);
  const title = pick(html, /<title>([^<]+)/);
  const robots = pick(html, /name="robots" content="([^"]+)/) || "default";

  const ok = statusOk && ga && ld && canon;
  if (!ok) bad++;

  console.log(
    `${ok ? "OK " : "FAIL"} ${p} status=${res.status} ga=${ga} ld=${ld} robots=${robots}`,
  );
  console.log(`     title: ${title}`);
  console.log(`     canon: ${canon}`);
}

process.exit(bad ? 1 : 0);

