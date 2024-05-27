import { expect, test } from "@playwright/test";

test("Basic Navigation", async ({ page }) => {
  await page.goto("https://gitlab.com/");
  await page.waitForTimeout(3000);
  await page.reload();
});

test("Interacting with Web Element on Gitlab", async ({ page }) => {
  await page.goto("https://gitlab.com/");
  await page.click("//a[@name='Get free trial']");
  await page.locator("//input[@id='new_user_first_name']").fill("John");
  await page.locator('//input[@id="new_user_last_name"]').fill("Doe");
  await page.locator('//input[@id="new_user_username"]').fill("jdoe123test");
  await expect(
    page.locator(
      '//div[@class="username form-group"]//p[contains(.,"Username is available.")]'
    )
  ).toHaveText("Username is available.");
  await page
    .locator('//input[@id="new_user_email"]')
    .fill("john.doe@testemail.com");
  await page.locator('//input[@id="new_user_password"]').fill("Password@123");
  await page.locator('//button[@aria-label="Show password"]').click();
  await page.waitForTimeout(5000);
});
