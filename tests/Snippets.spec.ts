import { test, expect, chromium } from '@playwright/test';
test.describe('TEMPLATE', () => {

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
    test('Test UNO', async () => {
        const browsers = await chromium.launch({
        });
        const context = await browsers.newContext();
        const page = await context.newPage();
        await page.goto('https://demoqa.com/text-box');
        await expect(page).toHaveTitle(/demosite/);
        await expect(page).toHaveURL(/.*text-box/);
    });
});