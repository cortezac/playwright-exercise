import { Page } from "@playwright/test";
import { AbstractPage } from "./AbstractPage";
import { Button } from "./Button";
import { Input } from "./Input";

export class PageObject extends AbstractPage {
  private button: Button;
  private input: Input;

  readonly selectors = {
    displayFirstNameField: '//div//p[@id="displayFirstName"]',
    displayAgeField: '//div//p[@id="displayAge"]',
    displayIsStudentCheckbox: '//div//p[@id="displayIsStudent"]',
  };
  readonly firstNameInputSelector = '//input[@id="firstName"]';
  readonly ageInputSelector = '//input[@id="age"]';
  readonly isStudentSelector = '//input[@id="isStudent"]';

  readonly applyDataButtonSelector = '//button[@id="applyData"]';

  readonly displayFirstNameField = '//div//p[@id="displayFirstName"]';
  readonly displayAgeField = '//div//p[@id="displayAge"]';
  readonly displayIsStudentCheckbox = '//div//p[@id="displayIsStudent"]';

  constructor(page: Page) {
    super(page);
    this.button = new Button(page);
    this.input = new Input(page);
  }

  async open(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async applyData(): Promise<void> {
    await this.button.clickButton(this.applyDataButtonSelector);
  }

  async fillFirstName(value: string): Promise<void> {
    await this.input.setInput(this.firstNameInputSelector, value);
  }

  async fillAge(value: string): Promise<void> {
    await this.input.setInput(this.ageInputSelector, value);
  }

  async checkIsStudent(): Promise<void> {
    await this.page.check(this.isStudentSelector);
  }

  // async text(select: string): Promise<string | null> {
  //   const textContext = await this.page.textContent(select);
  //   return textContext;
  // }

  // async text(selector: string): Promise<string | null> {
  //   const textContent = await this.page.locator(selector).textContent();
  //   console.log(textContent);
  //   return textContent ?? null;
  // }

  async text(selector: string): Promise<string | null> {
    const textContent = await this.page.textContent(selector);
    console.log(textContent);
    return textContent;
  }
}
