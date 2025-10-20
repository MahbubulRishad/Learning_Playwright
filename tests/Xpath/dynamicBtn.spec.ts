import {test, expect, Locator} from '@playwright/test'


// Dynamic button - xpath
test("Verify Dynamic button", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const clickOnDynamicBtn: Locator = page.locator("//button[text()='START' or text() ='STOP']");
    // const clickOnDynamicBtn: Locator = page.locator("//button[@name='start']");
    // const clickOnDynamicBtn: Locator = page.locator("//button[contains(@name,'st')]");
    // const clickOnDynamicBtn: Locator = page.locator("//button[starts-with(@name,'st')]");

    for (let i = 1; i <= 5; i++) {

        const beforeText: (string | undefined) = (await clickOnDynamicBtn.textContent())?.trim();
        console.log(`Before click: ${beforeText}`);

        await clickOnDynamicBtn.click();

        await page.waitForTimeout(2000);

        const afterText: (string | undefined) = (await clickOnDynamicBtn.textContent())?.trim();
        console.log(`Before click: ${afterText}`);

        await expect(afterText).not.toBe(beforeText);
    }
});