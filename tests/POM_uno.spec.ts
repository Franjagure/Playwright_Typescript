import { test, expect, chromium } from '@playwright/test';
import { PTS } from './Funciones';

test.describe('Page Object Model UNO', () => {

    test('Test UNO POM', async () => {
        const browsers = await chromium.launch({
        });
        const context = await browsers.newContext();
        const page = await context.newPage();
        const f = new PTS(page);
        await f.openURL('https://demoqa.com/text-box');
        await expect(page).toHaveTitle(/demosite/);
        await expect(page).toHaveURL(/.*text-box/);
        await f.tiempo(5000)
    });
});