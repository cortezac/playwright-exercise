import { expect, test } from "@playwright/test";

test("workshop 3 - advance interactions", async ({ page }) => {
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

test("drag & drop", async ({ page }) => {
  await page.goto(
    "file:///C:/Users/arc/Desktop/Projects/playwright-exercise/tests/workshop_3/index.html"
  );
  await page.dragAndDrop(
    '//div[@class="drag-source"][@draggable="true"]',
    '//div[@class="drop-target"]'
  );
  expect(await page.textContent('//div[@class="drop-target"]')).toContain(
    "Success"
  );
});
test("alt drag & drop", async ({ page }) => {
  await page.goto(
    "file:///C:/Users/arc/Desktop/Projects/playwright-exercise/tests/workshop_3/index.html"
  );
  await page.locator('//div[@class="drag-source"][@draggable="true"]').hover();
  await page.mouse.down();
  await page.locator('//div[@class="drop-target"]').hover();
  await page.mouse.up();
  expect(await page.textContent('//div[@class="drop-target"]')).toContain(
    "Success"
  );
});
test("handling iframe", async ({ page }) => {
  await page.goto(
    "file:///C:/Users/arc/Desktop/Projects/playwright-exercise/tests/workshop_3/index.html"
  );
  const iframeElement = await page.frame({ name: "iframeName" });
  const inputSelector = '//input[@id="iframe-input"]';
  if (iframeElement) {
    await iframeElement?.type(inputSelector, "Playwright test");
    expect(await iframeElement?.locator(inputSelector).inputValue()).toContain(
      "Playwright test"
    );
  } else {
    console.error("iframe is not available");
  }
});
