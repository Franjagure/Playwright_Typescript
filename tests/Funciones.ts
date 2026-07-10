import { expect, type Locator, type Page } from '@playwright/test';

const tie = 1000
const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export class PTS {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openURL(url: string, tiempo = tie) {
        await this.page.goto(url)
        await sleep(tiempo)
    }

    async tiempo(tiempo = tie) {
        await sleep(tiempo)
    }

    async scroll(x: number, y: number, tiempo = tie) {
        await this.page.mouse.wheel(x, y);
        await sleep(tiempo);
    }

    async validatePage(titulo: string, url: string, selector: string, val: string, tiempo = tie) {
        const locator = this.page.locator(selector);
        await expect(this.page).toHaveTitle(titulo);
        await expect(this.page).toHaveURL(url);
        await expect(locator).toContainText(val);
        await sleep(tiempo);
    }

    async validateText(selector: string, val: string, tiempo = tie) {
        const locator = this.page.locator(selector)
        await expect(locator).toBeVisible();
        await expect(locator).toBeEnabled();
        await expect(locator).toBeEmpty();
        await locator?.focus();
        await locator?.fill(val);
        await sleep(tiempo);
    }

    async clickItem(selector: string, tiempo = tie) {
        try {
            await this.page.locator(selector).click();
            await sleep(tiempo);
        } catch (error: any) {
            console.log("ERROR -->" + error.messag);
        }
    }

    async check(selector: string, tiempo = tie) {
        try {
            await this.page.locator(selector).check()
            await sleep(tiempo)
        } catch (error: any) {
            console.log("ERROR -->" + error.messag);
        }
    }

    async validateCheck(selector: string, tiempo = tie) {
        try {
            const valor = this.page.locator(selector);
            expect(await valor.isChecked()).toBeTruthy();
            await sleep(tiempo);
        } catch (error: any) {
            console.log("ERROR -->" + error.messag);
        }
    }

}