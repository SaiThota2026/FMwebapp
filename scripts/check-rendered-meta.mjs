const pages = [
  "/",
  "/about/",
  "/contact/",
  "/faq/",
  "/privacy-policy/",
  "/services/",
  "/services/commercial-cleaning/",
  "/locations/hunter-valley/",
];

for (const p of pages) {
  const t = await fetch(`http://localhost:3000${p}`).then((r) => r.text());
  const title = t.match(/<title>([^<]+)/)?.[1] ?? "";
  const robots = t.match(/name="robots" content="([^"]+)/)?.[1] ?? "index,follow (default)";
  console.log(`${p}\n  title (${title.length}): ${title}\n  robots: ${robots}\n`);
}
