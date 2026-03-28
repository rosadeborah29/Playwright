//specification.typescript - specs.ts
//browser
//browser context ---> window(individual isolated profile + incognito mode(doesn't store any data))
//page

import {chromium, test} from "@playwright/test"; //test function is imported from playwright library
test(`Test to launch a browser`, async ({page}) => {
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator(`[id="username"]`).fill("democsr2");
    await page.locator(`[id="password"]`).fill("crmsfa");
    await page.locator(`[class="decorativeSubmit"]`).click(); //if "id" is not present then your 2nd priority is "class"
    await page.waitForTimeout(3000)
})