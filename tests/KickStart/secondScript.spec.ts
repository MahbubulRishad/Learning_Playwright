import { test, expect } from '@playwright/test';


// fixture - global variable : page, browser
test("Verify Url", async ({ page }) => {
    await page.goto("http://www.automationpractice.pl/index.php");

    let url: string = await page.url();
    console.log("Url: ", url);

    await expect(page).toHaveURL("http://www.automationpractice.pl/index.php");
});