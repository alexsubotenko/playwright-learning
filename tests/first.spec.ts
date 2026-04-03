import {test, expect} from '@playwright/test';

test('my first test', async ({page}) => {
    await page.goto('https://demoqa.com');
    await expect(page).toHaveTitle('demosite');
});

test('fill text box form', async ({page}) => {
    await page.goto('https://demoqa.com/text-box');
    await page.getByPlaceholder('Full Name').fill('Oleksandr');
    await page.getByPlaceholder('name@example.com').fill('alexsubotenko@gmail.com');
    await page.getByPlaceholder('Current Address').fill('Lviv, Troleybusna 12');
    await page.locator('#permanentAddress').fill('Lviv, Naukova 11');
    await page.getByRole('button', {name: 'Submit'}).click();
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#name')).toHaveText('Name:Oleksandr');
});