import {expect, test} from "@playwright/test";
test(`Playwright locators`,async({page}) => {
    await page.goto(`https://login.salesforce.com/`);

    //getByRole
    await page.getByRole("textbox",{name:"Username"}).fill("dilipkumar.rajendran@testleaf.com"); //Note: In case, If there are 2 usernames then we should use nth method.
    await page.getByRole("textbox",{name:"Password"}).fill("Testleaf@2025");
    await page.getByRole("button",{name:"Log In"}).click();

    //getByLabel
    await page.getByLabel("Username",{exact:true}).fill("dilipkumar.rajendran@testleaf.com");
    await page.getByLabel("Password",{exact:true}).fill("Testleaf@2025");

    //getByTitle
    await page.getByTitle("App Launcher",{exact:true}).click();

    //getByText
    await page.getByText("View All",{exact:true}).nth(2).click();

    //getByPlaceholder
    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Leads");

    //getByAltText
    await expect(page.getByAltText("Salesforce")).toBeVisible();
})