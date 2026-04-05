//Step 1 : Locate the dropdown
//Step 2 : Choose the value from the dropdown by using the value attribute
//Notes : When the DOM has select tag to handle a dropdown we should use "selectOption" method
    

import test, { expect } from "@playwright/test";
test(`Handling dropdown in select tag`, async ({page}) => {
    //Navigate to the URL
    await page.goto('http://leaftaps.com/opentaps/control/main');

    //Login
    await expect(page.locator('//input[@id="username"]')).toBeEditable(); //locator object on which validation to be done (locator assertion)
    await page.locator('//input[@id="username"]').fill("democsr");
    await expect(page.locator('//input[@id="password"]')).toBeEmpty();
    await page.locator('//input[@id="password"]').fill("crmsfa");
    await expect(page.locator('//input[@class="decorativeSubmit"]')).toBeEnabled();
    await page.locator('//input[@class="decorativeSubmit"]').click();

    //Navigate to create lead
    await page.locator('//a[contains(text(),"CRM")]').click();
    await page.locator('//a[text()="Leads"]').click();
    await page.locator('//a[text()="Create Lead"]').click();

    //Fill out the form
    await page.locator('//input[@id="createLeadForm_companyName"]').fill("Testleaf");
    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Ravindran");
    await page.locator('//input[@id="createLeadForm_lastName"]').fill("R");  //alt + shift + f => format document
    await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{value:"LEAD_DIRECTMAIL"}) 

    //selectOption Method:
    // Method 1 : Using value
    //await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{value:"LEAD_DIRECTMAIL"}) 

    // Method 2 : Using Visible text
    // await page.selectOption(//select[@id="createLeadForm_dataSourceId"],{label:"Direct Mail"}) 

    // Method 3 : Using index text
    // await page.selectOption(//select[@id="createLeadForm_dataSourceId"],{index:3})

    //retrive all the values from dropdown (inner text method) 
    // parent child relationship
    const dropdownValues = await page.locator('//select[@id="createLeadForm_industryEnumId"]/option').allInnerTexts();
    const dropdownCount = dropdownValues.length; // Number of webeelement present in the dropdown
        expect(dropdownCount).toBeGreaterThan(10); //Generic Assertion - Checking the dropdown count
    for (let index = 0; index <dropdownCount; index++) {
        console.log (dropdownValues[index]);
    }

    //Note:
    // nth(0).innerText()); //  blank
    // nth(1).innerText()); //  Coldcall
    // for object - we'll be using count
    // for array - we'll be using length
  
    //submission of the form
    await page.waitForTimeout(3000) //Only for demo purpose (3 thousand milli sec)
    await page.locator(`//input[@name="submitButton"]`).click();
    await page.waitForTimeout(3000) //Only for demo purpose (3 thousand milli sec)

    //Status Confirmation
    await expect(page.locator(`#viewLead_statusId_sp`)).toContainText("Assigned"); //to check the status of submission
})