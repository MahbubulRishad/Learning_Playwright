import { test, expect, Locator } from '@playwright/test'

test("Verify Logo", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");

    const logoEl: Locator = page.locator("//img[contains(@alt,  'Tricentis')]");
    await expect(logoEl).toBeVisible();

    const giftCardEl: Locator = page.locator("//a[contains(@href, '25-virtual') and contains(text(), '$25 Virtual Gift Card')]");
    await expect(giftCardEl).toBeVisible();

    const productsTitleEl: Locator = page.locator("//h2[@class = 'product-title']"); // multiple elements
    const productsCount: number = await productsTitleEl.count();
    console.log("Products count:", productsCount);
    await expect(productsCount).toBeGreaterThan(0);

    // console.log(productsTitleEl.textContent()); // error: strict mode violation

    const textFirstItem: (string | null) =  await productsTitleEl.first().textContent();
    console.log("First item trimmed:", textFirstItem?.trim());
    console.log("Taking last element:", await productsTitleEl.last().textContent());
    console.log("Taking n-th element:", await productsTitleEl.nth(3).textContent()); // 3rd element

    const allProductsList: string[] = await productsTitleEl.allTextContents();
    const trimedProducts =  allProductsList.map(item => item.trim());
    console.log("All Products list with trimed:", trimedProducts);

    for (let product of trimedProducts){
        console.log("Product Title: ", product);
    }

});

