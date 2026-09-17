import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const shot = JSON.parse(
  fs.readFileSync(path.join(root, "scripts/image-shot-list.json"), "utf8"),
);
const expected = new Set(shot.entries.map((e) => e.basename));

function walk(dir, acc = []) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walk(p, acc);
    else if (/\.(tsx?|jsx?)$/.test(f.name)) acc.push(p);
  }
  return acc;
}

const re = /contentImg\(\s*[`'"]([^`'"]+)[`'"]\s*\)/g;
const used = new Set();
const bad = [];

for (const file of walk(path.join(root, "src"))) {
  const text = fs.readFileSync(file, "utf8");
  let m;
  while ((m = re.exec(text))) {
    // Skip template literals with ${}
    if (m[1].includes("${")) continue;
    used.add(m[1]);
    if (!expected.has(m[1])) bad.push({ file: path.relative(root, file), b: m[1] });
  }
}

console.log("static contentImg refs", used.size);
console.log("bad (not in shot list)", bad.length);
if (bad.length) console.log(bad);

const contentDir = path.join(root, "public/images/content");
const existing = fs.existsSync(contentDir)
  ? fs.readdirSync(contentDir).filter((f) => f.endsWith(".png")).map((f) => f.replace(/\.png$/, ""))
  : [];
const missing = shot.entries.filter((e) => !existing.includes(e.basename));
console.log("assets present", existing.length, "/", shot.total);
console.log("assets missing", missing.length);
