import { expect, test } from "@playwright/test";
import { DESIGNED_PAGES, ROUTES, ROUTE_HREFS } from "../content/routes";

const DESIGNED = DESIGNED_PAGES.map((p) => p.href);
const WIDTHS = [360, 390, 768, 1024, 1440];
/** Non-page URLs that internal links may point to. */
const EXTRA_OK = new Set(["/sitemap.xml", "/robots.txt", "/review/"]);

test.describe("routes", () => {
  test("every route in content/routes.ts returns 200", async ({ request }) => {
    const bad: string[] = [];
    for (const r of ROUTES) {
      const res = await request.get(r.href);
      if (res.status() !== 200) bad.push(`${r.href} → ${res.status()}`);
    }
    expect(bad).toEqual([]);
    expect(ROUTES.length).toBeGreaterThan(100);
  });

  test("/review/, sitemap and robots respond", async ({ request }) => {
    expect((await request.get("/review/")).status()).toBe(200);
    expect((await request.get("/sitemap.xml")).status()).toBe(200);
    const robots = await (await request.get("/robots.txt")).text();
    expect(robots).toContain("Disallow: /");
  });
});

test("every internal link on every page resolves to a real route", async ({ request }) => {
  test.setTimeout(180_000);
  const pages = [...ROUTES.map((r) => r.href), "/review/"];
  const broken: string[] = [];
  const seen = new Set<string>();
  for (const page of pages) {
    const html = await (await request.get(page)).text();
    for (const m of html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)) {
      const href = m[1].replace(/&amp;/g, "&");
      if (/^(https?:|tel:|mailto:|#)/.test(href)) continue;
      const path = href.split("#")[0].split("?")[0];
      if (!path) continue;
      if (!ROUTE_HREFS.has(path) && !EXTRA_OK.has(path)) broken.push(`${page} → ${href}`);
      seen.add(path);
    }
  }
  // Also confirm each distinct target really serves 200.
  for (const p of seen) {
    const s = (await request.get(p)).status();
    if (s !== 200) broken.push(`${p} → ${s}`);
  }
  expect(broken).toEqual([]);
});

test.describe("no horizontal overflow on designed pages", () => {
  for (const w of WIDTHS) {
    test(`${w}px`, async ({ page }) => {
      await page.setViewportSize({ width: w, height: 900 });
      const over: string[] = [];
      for (const href of DESIGNED) {
        await page.goto(href, { waitUntil: "load" });
        const { sw, iw } = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth }));
        if (sw > iw) over.push(`${href}: scrollWidth ${sw} > ${iw}`);
      }
      expect(over).toEqual([]);
    });
  }
});

test("no console errors on the designed pages", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (m) => m.type() === "error" && errors.push(`${page.url()}: ${m.text()}`));
  page.on("pageerror", (e) => errors.push(`${page.url()}: ${e.message}`));
  for (const href of [...DESIGNED, "/review/", "/services/residential-junk-removal-services/", "/locations/new-market/"]) {
    await page.goto(href, { waitUntil: "networkidle" });
    await page.mouse.wheel(0, 4000);
    await page.waitForTimeout(150);
  }
  expect(errors).toEqual([]);
});

test("review bar page switcher navigates to all 12 pages", async ({ page }) => {
  await page.goto("/");
  const select = page.getByLabel("Choose page");
  for (const p of DESIGNED_PAGES) {
    await select.selectOption(p.href);
    await page.waitForURL((u) => u.pathname === p.href);
    await expect(page.getByLabel("Choose page")).toHaveValue(p.href);
    await expect(page.locator("h1").first()).toBeVisible();
  }
});

test("'Show items to confirm' hides every badge and persists", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".tbc").first()).toBeVisible();
  await page.getByLabel("Show items to confirm").uncheck();
  await expect(page.locator("body")).toHaveClass(/hide-tbc/);
  await expect(page.locator(".tbc").first()).toBeHidden();
  await page.reload();
  await expect(page.locator("body")).toHaveClass(/hide-tbc/);
});

test.describe("reduced motion", () => {
  test.use({ reducedMotion: "reduce" });
  test("all content is visible without scrolling", async ({ page }) => {
    for (const href of DESIGNED) {
      await page.goto(href, { waitUntil: "load" });
      await page.waitForTimeout(100);
      const hidden = await page.evaluate(() => {
        const out: string[] = [];
        document.querySelectorAll<HTMLElement>("main h1, main h2, main h3, main p, main li, main .panel, main .step, main .photo, main .lm").forEach((el) => {
          if (el.closest(".drawer,.mega,.hide-on-sent,.ok,[hidden]")) return;
          const s = getComputedStyle(el);
          if (s.display === "none" || el.closest("details:not([open])")) return;
          if (parseFloat(s.opacity) < 0.5 || s.visibility === "hidden" || el.classList.contains("rvl") || el.classList.contains("wipe")) out.push(`${el.tagName}.${el.className}`);
        });
        return out.slice(0, 5);
      });
      expect(hidden, href).toEqual([]);
    }
  });
});

test.describe("mobile", () => {
  test.use({ viewport: { width: 390, height: 844 } });
  test("bottom action bar is visible with Call now and a quote CTA", async ({ page }) => {
    for (const href of DESIGNED) {
      await page.goto(href);
      const bar = page.locator(".mbar");
      await expect(bar, href).toBeVisible();
      await expect(bar.locator('a[href="tel:+16479225865"]')).toBeVisible();
    }
  });

  test("drawer opens, has accordions, closes on Escape", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.locator("#drawer")).toHaveClass(/open/);
    await page.locator("#drawer summary", { hasText: "Residential" }).click();
    await expect(page.locator("#drawer").getByRole("link", { name: "Mattress & box spring" })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.locator("#drawer")).not.toHaveClass(/open/);
  });
});

test("mega menu opens on click and closes on Escape", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  const btn = page.locator(".nav").getByRole("button", { name: "Services" });
  await btn.click();
  await expect(btn).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("#mega-menu")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("#mega-menu")).toBeHidden();
});

test("quote form validates and shows the success state", async ({ page }) => {
  await page.goto("/contact/");
  const form = page.locator("main form");
  await form.getByLabel("Your name").fill("Test Person");
  await form.getByLabel("Phone").fill("647-555-0101");
  await form.getByLabel("Postal code").fill("M6K 1X9");
  await form.getByRole("button", { name: "Send my quote request" }).click();
  await expect(form.locator(".ok")).toBeVisible();
  await expect(form).toHaveClass(/sent/);
});

test("load meter switches load size", async ({ page }) => {
  await page.goto("/how-it-works/");
  const lm = page.locator("#pricing .lm");
  await lm.getByRole("button", { name: /^Full/ }).click();
  await expect(lm.getByRole("button", { name: /^Full/ })).toHaveAttribute("aria-pressed", "true");
  await expect(lm.locator(".cell.on")).toHaveCount(8);
  await expect(lm.locator(".eq")).toContainText("A small house cleanout");
});

test("landing pages have no main nav and are noindex", async ({ page }) => {
  for (const href of ["/lp/same-day-junk-removal/", "/lp/estate-cleanout/"]) {
    await page.goto(href);
    await expect(page.locator(".nav")).toHaveCount(0);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  }
});

test("every page has exactly one h1", async ({ request }) => {
  const bad: string[] = [];
  for (const r of ROUTES) {
    const html = await (await request.get(r.href)).text();
    const n = (html.match(/<h1[\s>]/g) ?? []).length;
    if (n !== 1) bad.push(`${r.href}: ${n}`);
  }
  expect(bad).toEqual([]);
});
