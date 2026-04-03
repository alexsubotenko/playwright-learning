import {test} from '@playwright/test';
import {CheckBoxPage} from '../pages/CheckBoxPage';

let checkBoxPage: CheckBoxPage;

test.beforeEach(async ({page}) => {
    checkBoxPage = new CheckBoxPage(page);
    await checkBoxPage.goto();
});

test('select desktop checkbox', async () => {
    await checkBoxPage.openHomeFolder();
    await checkBoxPage.selectDesktopCheckbox();
    await checkBoxPage.checkTextAfterDesktopCheckbox();
});

test('select home checkbox', async () => {
    await checkBoxPage.selectHomeCheckbox();
});