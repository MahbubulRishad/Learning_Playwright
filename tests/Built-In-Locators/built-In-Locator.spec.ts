import { test, expect, Locator } from "@playwright/test";


// page.getByAltText() - use this locator when supports alt text such as img or area elemenents
test("Verify Logo is visible - (getByAltText)", async ({ page }) => {

    await page.goto("https://demo.nopcommerce.com/");
    const logo: Locator = page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();

});
