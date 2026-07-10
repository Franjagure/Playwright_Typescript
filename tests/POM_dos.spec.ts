import { test, expect, chromium } from '@playwright/test';
import { PTS } from './Funciones';

let time: number = 1500;
let f: any, context: any, page: any, browsers: any;

test.describe('Descripción', () => {

    test.beforeAll('Inicio PRUEBA', async () => {
        browsers = await chromium.launch({
        });
        context = await browsers.newContext();
        page = await context.newPage();
        f = new PTS(page);
        await f.openURL('https://demoqa.com/text-box');
        await f.validatePage('demosite', 'https://demoqa.com/text-box', '//h1', 'Text Box', time)

    });

    test('Cuerpo PRUEBA', async () => {
        await f.scroll(0, 500, time);
        await f.validateText('#userName', 'Pedro', time);
        await f.validateText('#userEmail', 'pedrotest@email.com', time);
        await f.validateText('#currentAddress', 'C/ Normal, N8', time);
        await f.validateText('#permanentAddress', 'C/ Diferente, N12', time);
        await page.locator('#submit').click();
    });

    test.afterAll('Cierre PRUEBA', async () => {
        await page.close();
        await context.close();
        await browsers.close();
    })


});