import { Page, expect } from '@playwright/test';

export class CheckBoxPage {
    private page: Page;

    constructor (page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('/checkbox');
    }

    async openHomeFolder() {
        await this.page.getByLabel('Select Home').locator('xpath=..').locator('.rc-tree-switcher').click();
    }

    async selectDesktopCheckbox() {
        await this.page.getByLabel('Select Desktop').click();
    }

    async checkTextAfterDesktopCheckbox() {
        await expect(this.page.locator('#result')).toContainText('desktop');
    }

    async selectHomeCheckbox() {
        await this.page.getByLabel('Select Home').click();
    }
}