import {test, expect} from '@playwright/test';
import {TextBoxPage} from '../pages/TextBoxPage'

test('fill text box form', async ({page}) => {
    const textBoxPage = new TextBoxPage(page);
    await textBoxPage.goto();
    await textBoxPage.fillFullName('Oleksandr');
    await textBoxPage.fillEmail('alexsubotenko@gmail.com');
    await textBoxPage.fillCurrentAddress('Lviv, Troleybusna 12');
    await textBoxPage.fillPermanentAddress('Lviv, Naukova 11');
    await textBoxPage.clickSubmit();
});