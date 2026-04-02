//specification.typescript - specs.ts
//browser
//page

import {chromium, test} from "@playwright/test"; //test function is imported from playwright library
test(`Test to launch a browser`, async ({page}) => {
    await page.goto('https://login.salesforce.com/');
    await page.locator(`[id="username"]`).fill("dilipkumar.rajendran@testleaf.com");
    await page.locator(`[id="password"]`).fill("TestLeaf@2025");
    await page.locator(`[id="Login"]`).click(); //if "id" is not present then your 2nd priority is "class"
    await page.waitForTimeout(3000)
})