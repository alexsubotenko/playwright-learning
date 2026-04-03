import {test} from '../fixtures/pages.fixture';

test.beforeEach(async ({checkBoxPage}) => {
    await checkBoxPage.goto();
});

test('select desktop checkbox', async ({checkBoxPage}) => {
    await checkBoxPage.openHomeFolder();
    await checkBoxPage.selectDesktopCheckbox();
    await checkBoxPage.checkTextAfterDesktopCheckbox();
});

test('select home checkbox', async ({checkBoxPage}) => {
    await checkBoxPage.selectHomeCheckbox();
});