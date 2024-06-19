import { expect, test } from "@playwright/test";
import { PageObject } from "./page/Page";
import * as testData from "./testData.json";

test.describe("Sample", () => {
  let pageObject: PageObject;

  test.beforeEach(async ({ browser }) => {
    const page = await browser.newPage();
    pageObject = new PageObject(page);
    await pageObject.open("file:///C:/Users/arc/Desktop/Projects/playwright-exercise/tests/workshop_7/index.html");
  });

  for (const data of Object.values(testData)) {
    if (data.testName === "Test 1 - Fill Input" || data.testName === "Test 1 - Negative Test") {
      test(data.testName, async () => {
        await pageObject.fillFirstName(data.firstName);
        await pageObject.fillAge(data.age);
        if (data.isStudent) {
          await pageObject.checkIsStudent();
        }
        await pageObject.applyData();
        expect(await pageObject.text(pageObject.displayFirstNameField)).toBe(data.firstName);
        expect(await pageObject.text(pageObject.displayAgeField)).toBe(data.age);
        expect(await pageObject.text(pageObject.displayIsStudentCheckbox)).toBe(data.expectedIsStudent);
      });
    }
  }
});
