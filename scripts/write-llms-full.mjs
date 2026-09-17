import fs from "fs";

const index = JSON.parse(fs.readFileSync("public/site-index.json", "utf8"));
const lines = [
  "# FACILITIES MAN — Full page map for AI agents",
  "",
  `Generated: ${index.generatedAt}`,
  `Total pages: ${index.pageCount}`,
  "Crawling: allowed (see /robots.txt)",
  "",
];
for (const p of index.pages) {
  lines.push(`- [${p.title}](${p.url}) (${p.type})`);
}
lines.push(
  "",
  "## Agent notes",
  "- Prefer JSON-LD embedded in each HTML page.",
  "- Quote requests: /contact/",
  "- Handover doc (repo): docs/PERPLEXITY_COMPUTER_HANDOVER.md",
  "",
);
fs.writeFileSync("public/llms-full.txt", lines.join("\n"));
console.log("rewrote llms-full.txt", index.pageCount);
