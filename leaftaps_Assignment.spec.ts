//Step 1 : Locate the dropdown
//Step 2 : Choose the value from the dropdown by using the value attribute
//Notes : When the DOM has select tag to handle a dropdown we should use "selectOption" method
    

import test from "@playwright/test";
test(`Handling dropdown in select tag`, async ({page}) => {
    //Navigate to the URL
    await page.goto('http://leaftaps.com/opentaps/control/main');

    //Login
    await page.locator('//input[@id="username"]').fill("democsr");
    await page.locator('//input[@id="password"]').fill("crmsfa");
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
    for (let index = 0; index <dropdownCount; index++) {
        console.log (dropdownValues[index]);
    }

    //Note:
    // nth(0).innerText()); //  blank
    // nth(1).innerText()); //  Coldcall
    // for object - we'll be using count
    // for array - we'll be using length
  
    await page.waitForTimeout(3000) //Only for demo purpose (3 thousand milli sec)
})