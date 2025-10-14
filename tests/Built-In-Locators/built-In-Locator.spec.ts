import { test, expect, Locator } from "@playwright/test";


// page.getByAltText() - use this locator when supports alt text such as img or area elemenents
test("Verify Logo is visible - getByAltText()", async ({ page }) => {

    await page.goto("https://demo.nopcommerce.com/");
    const logo: Locator = page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();

});


// page.getByText() - find an element by the text it contains, can match substring or exact string which have noting any action
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


