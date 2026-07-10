import { test, expect, chromium } from '@playwright/test';
import { PTS } from './Funciones';

test.describe('Descripción', () => {

    test('Título de la prueba', async () => {
        const browsers = await chromium.launch({
        });
        const context = await browsers.newContext();
        const page = await context.newPage();
        const f = new PTS(page);
        await f.openURL('https://demoqa.com/text-box');
        f.validatePage('demosite','https://demoqa.com/text-box','//h1','Text Box')
        await f.scroll(0,500,3000);
    });
});