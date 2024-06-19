import test from "@playwright/test";

test("Automating Form Submissions @githubActions", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");
});
