import { Page, expect } from "@playwright/test";

export class TextBoxPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async goto() {
    await this.page.goto("/text-box");
  }

  async fillFullName(name: string) {
    await this.page.getByPlaceholder('Full Name').fill(name);
  }

  async fillEmail(email: string) {
    await this.page.getByPlaceholder('name@example.com').fill(email);
  }

  async fillCurrentAddress(currentAddress: string) {
    await this.page.getByPlaceholder('Current Address').fill(currentAddress);
  }
  
  async fillPermanentAddress(permanentAddress: string) {
    await this.page.locator('#permanentAddress').fill(permanentAddress);
  }

  async clickSubmit() {
    await this.page.getByRole('button', {name: 'Submit'}).click();
  }

  async checkName(name: string) {
    await expect(this.page.locator('#name')).toHaveText(`Name: ${name}`);
  }
}
