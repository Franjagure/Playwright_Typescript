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
    
    async scroll(x: number, y: number, tiempo = tie){
        await this.page.mouse.wheel(x,y);
        await sleep(tiempo);
    }

    async validatePage(titulo: string, url: string, selector: string, val: string, tiempo = tie){
        await expect(this.page).toHaveTitle(titulo);
        await expect(this.page).toHaveURL(url);
        const locator = this.page.locator(selector);
        await expect(locator).toContainText(val);
        await sleep(tiempo);
    }
}