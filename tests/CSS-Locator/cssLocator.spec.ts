import { test, expect, Locator } from "@playwright/test"


test("Verify Search Box Present", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");

    const searchBoxEl: Locator = page.locator("[id='small-searchterms']"); // input#small-searchterms
    await expect(searchBoxEl).toBeVisible();
    await searchBoxEl.fill("Phone");

    await page.waitForTimeout(2000);
});

test("Verify Register button is present", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");

    const registerbtnEl: Locator = page.locator("a.ico-register");
    console.log("Text Content:", await registerbtnEl.textContent());
    console.log("Inner Text:", await registerbtnEl.innerText());
    await registerbtnEl.click();

    const fromRegisterPageEl: Locator = page.locator("//strong[contains(text(), 'Your Personal')]");
    await expect(fromRegisterPageEl).toHaveText("Your Personal Details");

    // const labelGenderEl: Locator = page.locator(".inputs label[xpath=\'1\']");
    const labelGenderEl: Locator = page.getByText('Gender');
    await expect(labelGenderEl).toBeVisible();

    const labelFirstNameEl: Locator = page.locator("label[for^='Fi']"); //css - match first string
    console.log(await labelFirstNameEl.textContent());

    const labelLastNameEl: Locator = page.locator("label[for$='LastName']"); // css - match last string
    console.log(await labelLastNameEl.textContent());

    const labelEmailEl: Locator = page.locator("label[for*='mai']"); // css - contain string
    console.log(await labelEmailEl.textContent());

    const registerBtnEl2:Locator = page.locator("input[id*='register'][name*='register']"); // css - multiple condition
    console.log("Register Btn:", await registerBtnEl2.textContent()); 

    const fillFirstNameEl:Locator = page.locator("label[for*='First']+input[id*='First']"); // immediate sibling - same as following-sibling
    await fillFirstNameEl.fill('Rishad');
    await expect(fillFirstNameEl).toBeVisible();

    await page.waitForTimeout(2000);
});