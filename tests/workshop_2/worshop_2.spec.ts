import { test } from "@playwright/test";

test("workshop 2", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/");

  const newTodo = page.locator(
    '//input[@placeholder="What needs to be done?"]'
  );
  await newTodo.fill("Get Coffee");
  await newTodo.press("Enter");
  await page.waitForTimeout(5000);
  await page.locator('//label[@data-testid="todo-title"]').hover();

  //for dynamic xpath once pom is implemented
  //label[@data-testid="todo-title"][contains(.,'${todoTitle}')]/following-sibling::button

  await page.waitForTimeout(5000);
  await page.locator('//button[@class="destroy"]').click();
});
