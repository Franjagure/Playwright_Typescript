import { test, expect, chromium } from '@playwright/test';

test.describe('Cargando el Navegador', () => { 

    // test.use({
    //     viewport:{width:1920, height:1080}, 
    // })

    const sleep = (ms: number) => {
         return new Promise((resolve) => setTimeout(resolve, ms));
     };

    test('Hola mundo', async ({}) => {

        const browser = await chromium.launch({
            headless: false,
        })

        const context = await browser.newContext();
        const page = await context.newPage(); 

        await page.goto('https://demoqa.com/text-box');
        await expect(page).toHaveTitle(/demosite/);
        await expect(page).toHaveURL(/.*text-box/);
        //await page.locator("#userName").fill("Rodrigo")
        await page.locator("#currentAddress").fill("Demo direccion 1")
        await page.locator("#permanentAddress").fill("Demo direccion 2")
        await page.click("#submit")
        sleep(3000)
    });
    
})