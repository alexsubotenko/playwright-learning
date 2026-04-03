import { test } from '@playwright/test';

test('radio button test', async ({ page }) => {
    await page.goto('/radio-button');
});