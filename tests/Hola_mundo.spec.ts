import { test, expect } from '@playwright/test';

test('Hola mundo', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await expect(page).toHaveTitle(/demosite/);
  await expect(page).toHaveURL(/.*text-box/);
  await page.locator("#userName").fill("Rodrigo")
  await page.locator("#userEmail").fill("rodrigo@gmail.com")
});

