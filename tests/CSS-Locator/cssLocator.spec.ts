import { test, expect, Locator } from "@playwright/test"


test("Verify Search Box Present", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");

    const searchBoxEl: Locator = page.locator("[id='small-searchterms']"); // input#small-searchterms
    await expect(searchBoxEl).toBeVisible();
    await searchBoxEl.fill("Phone");

    await page.waitForTimeout(2000);
});