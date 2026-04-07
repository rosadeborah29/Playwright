//specification.typescript - specs.ts
//browser
//browser context ---> window(individual isolated profile + incognito mode(doesn't store any data))
//page

import {chromium, test} from "@playwright/test"; //test function is imported from playwright library
test(`Test to launch a browser`, async () => {
    const browser = await chromium.launch({channel:"msedge", headless:false}) //step1 - launching browser
    const context = await browser.newContext() //step2 - creating a new context
    const page    = await context.newPage() //step3 - new page created

    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(3000)

    /* awaits returns promise has three stages
    1. pending
    2. resolve --> it has completed the action to be performed
    3. rejected */
    
})
