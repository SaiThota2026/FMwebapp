/**
 * Copy Cursor-generated PNG assets into public/images/content/.
 * Run: npx tsx scripts/copy-generated-assets.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const ASSETS_DIR = path.join(
  process.env.CURSOR_ASSETS_DIR ??
    "C:\\Users\\Sai_PrintPOP\\.cursor\\projects\\c-Users-Sai-PrintPOP-Desktop-FMWebApp-FMwebapp\\assets",
);

const DEST_DIR = path.join(ROOT, "public", "images", "content");
const SHOT_LIST_PATH = path.join(__dirname, "image-shot-list.json");

function loadExpectedBasenames() {
  if (!fs.existsSync(SHOT_LIST_PATH)) {
    return null;
  }
  const { entries } = JSON.parse(fs.readFileSync(SHOT_LIST_PATH, "utf8"));
  return new Set(entries.map((e) => e.basename));
}

function main() {
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error(`Assets folder not found: ${ASSETS_DIR}`);
    process.exit(1);
  }

  fs.mkdirSync(DEST_DIR, { recursive: true });

  const expected = loadExpectedBasenames();
  const files = fs.readdirSync(ASSETS_DIR).filter((f) => f.toLowerCase().endsWith(".png"));

  let copied = 0;
  let skipped = 0;
  const missing = expected ? [...expected] : [];

  for (const file of files) {
    const basename = path.basename(file, path.extname(file));
    if (expected && !expected.has(basename)) {
      skipped++;
      console.log(`SKIP (not in shot list): ${file}`);
      continue;
    }

    const src = path.join(ASSETS_DIR, file);
    const dest = path.join(DEST_DIR, `${basename}.png`);
    fs.copyFileSync(src, dest);
    copied++;
    console.log(`COPY ${file} -> public/images/content/${basename}.png`);

    if (expected) {
      const idx = missing.indexOf(basename);
      if (idx !== -1) missing.splice(idx, 1);
    }
  }

  console.log(`\nCopied: ${copied}`);
  if (skipped) console.log(`Skipped (unknown basename): ${skipped}`);
  if (expected) {
    console.log(`Remaining slots without assets: ${missing.length}`);
    if (missing.length > 0 && missing.length <= 20) {
      for (const b of missing) console.log(`  - ${b}`);
    }
  }
}

main();
