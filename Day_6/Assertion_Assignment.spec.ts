import test, { expect } from "@playwright/test";
test(`Assertion assignment`, async({page}) => {
    //Navigate to the URL
    await page.goto("https://leafground.com/input.xhtml");

    //Validate a disabled textbox
    await expect(page.locator('//input[@placeholder="Disabled"]')).toBeDisabled(); 

    //Validate an enabled textbox
    await expect(page.locator('//input[@placeholder="Babu Manickam"]')).toBeEditable();
    await page.locator('//input[@placeholder="Babu Manickam"]').fill("Rosa Deborah");

    //Soft assertion 
    await expect.soft(page.locator(`//input[@id="j_idt88:j_idt91"]`)).toBeDisabled({timeout:8000});

    //Fill data
    await page.locator('//input[@id="j_idt88:j_idt95"]').clear();
    await page.locator('//input[@id="j_idt88:j_idt95"]').fill("Text cleared");
})