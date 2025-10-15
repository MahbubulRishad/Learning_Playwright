import { test, expect, Locator } from "@playwright/test";


// 1. page.getByAltText() - use this locator when supports alt text such as img or area elemenents
test("Verify Logo is visible - getByAltText()", async ({ page }) => {

    await page.goto("https://demo.nopcommerce.com/");
    const logo: Locator = page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();

});


// 2. page.getByText() - find an element by the text it contains, can match substring or exact string which have noting any action
// locate by visible text
// use this locator to find non interactive elements like div, span, package. etc..
test("Verify the Welcome text - getByText()", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/");

    const welcomeText: Locator = page.getByText("Welcome to our store");
    await expect(welcomeText).toBeVisible();

    // alternative 
    await expect(page.getByText("Welcome to our store")).toBeVisible(); // supportted substring, regular expression

    await expect(page.getByText(/Welcome\s+To\s+Our\s+store/i)).toBeVisible(); // Regular expression
});


// 3. page.getByRole() - (Interactable) - include buttons, checkbox, headings, links, lists, table and many more and 
//    follow W3C specifications for ARIA role
test("Verify the Register link is workable", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/");

    // Add some delay
    // // await page.hover("Register");
    // await page.waitForTimeout(1000);

    // await page.mouse.move(200, 300, { steps: 10 });
    // await page.waitForTimeout(500);

    await page.getByRole("link", { name: 'Register' }).click();
    await expect(page.getByRole("heading", { name: 'Register' })).toBeVisible();
});


// 4. page.getByLabel() - to locate a form control by associated label's text
// provide some input into label
test("Verify Register Input fields", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/register");

    const fillFirstName: Locator = page.getByLabel('First name:');
    await fillFirstName.fill("Jhon");

    const fillLastName: Locator = page.getByLabel('Last name:');
    await fillLastName.fill("Doe");

    const fillEmail: Locator = page.getByLabel('Email:');
    await fillEmail.fill("abcd@gmail.com");
});


