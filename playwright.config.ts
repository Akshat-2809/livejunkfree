import { defineConfig, devices } from "@playwright/test";

const PORT = Number(process.env.PORT ?? 3100);

export default defineConfig({
  testDir: "./tests",
  testMatch: /.*\.spec\.ts/,
  fullyParallel: true,
  workers: process.env.CI ? 2 : 4,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"]],
  timeout: 60_000,
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "retain-on-failure",
    // Optional: run against an installed Chromium-based browser instead of
    // Playwright's download, e.g. PW_BROWSER="/Applications/Brave Browser.app/Contents/MacOS/Brave Browser"
    launchOptions: process.env.PW_BROWSER ? { executablePath: process.env.PW_BROWSER } : {},
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"], launchOptions: process.env.PW_BROWSER ? { executablePath: process.env.PW_BROWSER } : {} } }],
  // Tests run against the production build (`npm run build` first).
  webServer: {
    command: `npx next start -p ${PORT}`,
    url: `http://localhost:${PORT}/`,
    reuseExistingServer: true,
    timeout: 60_000,
  },
});
