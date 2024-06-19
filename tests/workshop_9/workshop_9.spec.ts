import test, { expect } from "@playwright/test";

test("Automating Form Submissions @githubActions", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");

  const newTodo = await page.locator('//input[@placeholder="What needs to be done?"]');
  await newTodo.fill("Vietnamese Latte");
  await newTodo.press("Enter");
  await newTodo.fill("Spanish Latte");
  await newTodo.press("Enter");

  const firstTodoCheckbox = await page.locator('//li[@data-testid="todo-item"]').nth(0);
  await firstTodoCheckbox.getByRole("checkbox").check();
  const secondTodoCheckbox = await page.locator('//li[@data-testid="todo-item"]').nth(1);
  await expect(firstTodoCheckbox).toHaveClass("completed");
  await expect(secondTodoCheckbox).not.toHaveClass("completed");
});

test("Hnadling Form @githubActions", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");
  await page.fill('//input[@placeholder="What needs to be done?"]', "Americano");
  await page.locator('//input[@placeholder="What needs to be done?"]').press("Enter");
  const checkbox = await page.locator('//li[@data-testid="todo-item"]//input[@type="checkbox"]');
  await checkbox.check();

  await expect(checkbox).toBeChecked();
});
