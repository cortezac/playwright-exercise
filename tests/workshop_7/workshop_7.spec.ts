import { expect, test } from "@playwright/test";

const selectors = {
    firstNameField: '//input[@id="firstName"]',
    ageField: '//input[@id="age"]',
    isStudentCheckbox: '//input[@id="isStudent"]',
    applyButton: '//button[@id="applyData"]',
    displayFirstNameField: '//div//p[@id="displayFirstName"]',
    displayAgeField: '//div//p[@id="displayAge"]',
    displayIsStudentCheckbox: '//div//p[@id="displayIsStudent"]',
  };
  
test.describe("Variable Declarations and Types", () => {

    test("Register with valid data", async ({ page }) => {
        let firstName: string = 'John';
        let age: number = 21;
        let isStudent: boolean = true;
        let displayIsStudent: string = 'Yes';

        await page.goto("file:///C:/Users/arc/Desktop/Projects/playwright-exercise/tests/workshop_7/index.html");

        await page.fill(selectors.firstNameField, firstName);
        await page.fill(selectors.ageField, age.toString());
        await page.check(selectors.isStudentCheckbox);
        await page.click(selectors.applyButton);

        expect(await page.textContent(selectors.displayFirstNameField)).toBe(firstName);
        expect(await page.textContent(selectors.displayAgeField)).toBe(age.toString());
        expect(await page.textContent(selectors.displayIsStudentCheckbox)).toBe(displayIsStudent);
        //separate assertion for checkbox 
        expect(await page.isChecked(selectors.isStudentCheckbox)).toBe(isStudent);
    });
  });
  test.describe('Type definitions and interfaces', ()=>{
    type User = {
        firstName: string,
        age: number,
        isStudent: boolean,
        displayIsStudent: string,
    };

    let user: User ={
        firstName: 'Jane',
        age: 26,
        isStudent: false,
        displayIsStudent: 'No',
    };
    test('Type def and interfaces', async ({page})=>{
        await page.goto("file:///C:/Users/arc/Desktop/Projects/playwright-exercise/tests/workshop_7/index.html");

        await page.fill(selectors.firstNameField, user.firstName);
        await page.fill(selectors.ageField, user.age.toString());
        await page.check(selectors.isStudentCheckbox);
        await page.uncheck(selectors.isStudentCheckbox);
        await page.click(selectors.applyButton);

        expect(await page.textContent(selectors.displayFirstNameField)).toBe(user.firstName);
        expect(await page.textContent(selectors.displayAgeField)).toBe(user.age.toString());
        expect(await page.textContent(selectors.displayIsStudentCheckbox)).toBe(user.displayIsStudent);
        //separate assertion for checkbox 
        expect(await page.isChecked(selectors.isStudentCheckbox)).toBe(user.isStudent);

    });
});