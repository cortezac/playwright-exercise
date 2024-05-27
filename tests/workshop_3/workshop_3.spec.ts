import { expect, test } from "@playwright/test";

test.only("workshop 3", async ({ page }) => {
  await page.goto(
    "file:///C:/Users/arc/Desktop/Projects/playwright-exercise/tests/workshop_3/index.html"
  );

  await expect(page.locator('//button[@id="hover-me"]')).toHaveText(
    "Hover Over Me"
  );
  await page.hover('//button[@id="hover-me"]');
  await expect(page.locator('//button[@id="hover-me"]')).toHaveText(
    "Text Changed!"
  );
  /** Other ways for assertions
   * expect(await page.textContent('//button[@id="hover-me"]')).toContain("Text Changed!");
   */
  await page.click('//button[@id="context-menu"]', { button: "right" });
  expect(await page.getByText("Context Menu Appears!")).toContainText(
    "Context Menu Appears!"
  );

  await expect(
    page.locator('//div[contains(.,"Context Menu Appears!")]')
  ).toHaveText("Context Menu Appears!");
});
