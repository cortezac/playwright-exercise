import { expect, test } from "@playwright/test";
import { PageObject } from "./page/Page";

test.describe("Sample", () => {
  let pageObject: PageObject;

  test.beforeEach(async ({ browser }) => {
    const page = await browser.newPage();
    pageObject = new PageObject(page);
    await pageObject.open("file:///C:/Users/arc/Desktop/Projects/playwright-exercise/tests/workshop_7/index.html");
  });

  test("Fill all inputs", async () => {
    await pageObject.fillFirstName("John");
    await pageObject.fillAge("21");
    await pageObject.checkIsStudent();
    await pageObject.applyData();

    //other way
    // expect(await pageObject.text(pageObject.selectors.displayFirstNameField)).toBe("John");
    expect(await pageObject.text(pageObject.displayFirstNameField)).toBe("John");
    expect(await pageObject.text(pageObject.displayAgeField)).toBe("21");
    expect(await pageObject.text(pageObject.displayIsStudentCheckbox)).toBe("Yes");
    //     expect(await pageObject.text(pageObject.displayIsStudentCheckbox)).toBe("Yes");
  });
});
