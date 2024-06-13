import { expect, test } from "@playwright/test";

const testData = {
  firstName: 'John',
  lastName: 'Doe',
  address: 'Test Address 123',
  number: '639123456789',
};

test.describe("User Registration Tests", () => {
  test.beforeEach(async ({page})=>{
    await page.goto("file:///C:/Users/arc/Desktop/Projects/playwright-exercise/tests/workshop_6/index.html");
  });
  test("Register with valid data", async ({ page }) => {
      
      await page.fill('//input[@id="firstName"]', testData.firstName);
      await page.fill('//input[@id="lastName"]', testData.lastName);
      await page.fill('//input[@id="address"]', testData.address);
      await page.fill('//input[@id="number"]', testData.number);
      await page.click('//button[@id="register"]');

      const firstNameText = await page.locator('//span[@id="displayFirstName"]').textContent();
      const lastNameText = await page.locator('//span[@id="displayLastName"]').textContent();
      const adressText = await page.locator('//span[@id="displayAddress"]').textContent();
      const numberText = await page.locator('//span[@id="displayNumber"]').textContent();

      await expect(firstNameText).toEqual(testData.firstName);
      await expect(lastNameText).toEqual(testData.lastName);
      await expect(adressText).toEqual(testData.address);
      await expect(numberText).toEqual(testData.number);
  });

  test("Register with empty fields", async ({page})=>{
    await page.fill('//input[@id="firstName"]', testData.firstName);
    await page.fill('//input[@id="lastName"]', testData.lastName);
    await page.click('//button[@id="register"]');
    const error = await page.locator('//div[@id="error"]//p').textContent();

    await expect(error).toEqual('Please fill in all fields.');
    console.log(error);
  });
});
