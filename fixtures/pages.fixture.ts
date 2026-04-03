import { test as base } from '@playwright/test';
import { TextBoxPage } from '../pages/TextBoxPage';
import { CheckBoxPage } from '../pages/CheckBoxPage';

type Pages = {
    textBoxPage: TextBoxPage;
    checkBoxPage: CheckBoxPage;
}

export const test = base.extend<Pages>({
    textBoxPage: async ({ page }, use) => {
        await use (new TextBoxPage(page));
    },
    checkBoxPage: async ({ page }, use) => {
        await use (new CheckBoxPage(page));
    },
});

export { expect } from '@playwright/test'