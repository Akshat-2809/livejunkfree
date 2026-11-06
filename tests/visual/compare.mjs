// Side-by-side visual comparison: design file (left) vs. Next.js build (right).
// Usage: node tests/visual/compare.mjs [baseUrl] [outDir] [width] [pageIndexes...]
import { chromium } from "@playwright/test";
import { mkdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const base = process.argv[2] ?? "http://localhost:3100";
const out = resolve(process.argv[3] ?? "test-results/visual");
const width = Number(process.argv[4] ?? 1440);
const only = process.argv.slice(5).map(Number);
mkdirSync(out, { recursive: true });

const design = pathToFileURL(resolve("design/livejunkfree-redesign-v5.html")).href;
const PAGES = [
  ["home", "/"],
  ["services", "/services/"],
  ["couch-removal", "/services/residential-junk-removal-services/couch-removal-services/"],
  ["estate-cleanout", "/services/junk-cleanout-services/estate-cleanout-services/"],
  ["office-cleanout", "/services/commercial-junk-removal-services/business-cleanout-services/"],
  ["deck-demolition", "/services/junk-demolition-services/deck-demolition-services/"],
  ["locations", "/locations/"],
  ["toronto", "/locations/toronto/"],
  ["pricing", "/how-it-works/"],
  ["quote", "/contact/"],
  ["lp-same-day", "/lp/same-day-junk-removal/"],
  ["lp-estate", "/lp/estate-cleanout/"],
];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: "reduce", deviceScaleFactor: 1 });
const page = await ctx.newPage();

async function shot(url, file) {
  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    // trigger lazy images
    for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: file, fullPage: true });
}

for (const [i, [key, path]] of PAGES.entries()) {
  if (only.length && !only.includes(i + 1)) continue;
  const a = `${out}/${i + 1}-${key}-${width}-design.png`;
  const b = `${out}/${i + 1}-${key}-${width}-next.png`;
  await shot(`${design}#/${key}`, a);
  await shot(base + path, b);
  const img = (f) => `data:image/png;base64,${readFileSync(f).toString("base64")}`;
  const cmp = await browser.newPage({ viewport: { width: width * 2 + 40, height: 900 } });
  await cmp.setContent(`<body style="margin:0;display:flex;gap:40px;background:#f0f;align-items:flex-start"><img src="${img(a)}" style="width:${width}px"><img src="${img(b)}" style="width:${width}px"></body>`);
  await cmp.waitForTimeout(200);
  await cmp.screenshot({ path: `${out}/${i + 1}-${key}-${width}-side.png`, fullPage: true });
  await cmp.close();
  console.log("done", i + 1, key);
}
await browser.close();
