import test from "@playwright/test";
test(`Playwright locator assignment`,async({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.getByRole("textbox",{name:"Username"}).fill("democsr");
    await page.getByRole("textbox",{name:"Password"}).fill("crmsfa");
    await page.getByRole("button",{name:"Login"}).click();
    await page.waitForTimeout(3000);
})