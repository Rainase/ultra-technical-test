import test, { expect } from "@playwright/test";
import { CONF } from "../conf";
import { locators } from "./locators";
import { inventoryItems } from "./mockedData";

test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.locator(locators.usernameInput).fill(CONF.USERS.STANDARD.username);
    await page.locator(locators.passwordInput).fill(CONF.USERS.STANDARD.password);
    await page.locator(locators.loginButton).click();
  });

test('Add/remove random item into cart', async ({ page }) => {
    const randomProduct = Math.floor(Math.random() * inventoryItems.length)
    await page.locator(locators.priceButton).nth(randomProduct).click()
    await page.locator(locators.shoppingCartBadge).isVisible()
    await expect(page.locator(locators.shoppingCartBadge)).toHaveText('1')
    await page.locator(locators.priceButton).nth(randomProduct).click()
    await page.locator(locators.shoppingCartBadge).isHidden()
})

test('Add/remove multiple items into cart', async ({ page }) => {
    const rndNR = Math.floor(Math.random() * inventoryItems.length)
    const amount_of_items = rndNR === 1 ? rndNR + 1 : rndNR
    const newArr = inventoryItems.slice(0, amount_of_items)
    for(const items of newArr) {
        const itemIdx = inventoryItems.findIndex((item) => item.title === items.title)
        await page.locator(locators.priceButton).nth(itemIdx).click()
    }
    await expect(page.locator(locators.shoppingCartBadge)).toHaveText(amount_of_items.toString())
})

test('Add item into cart and complete purchase',async ({ page }) => {
    await page.locator(locators.priceButton).nth(2).click()
    await page.locator(locators.shoppingCartLink).click()
    await page.waitForURL(CONF.restrictedPages.CART.path);
    await expect(page.locator(locators.cartTitle)).toHaveText('Your Cart')
    await page.locator(locators.checkOutBtn).click()
    await expect(page.locator(locators.cartTitle)).toHaveText('Checkout: Your Information')
    await page.locator(locators.firstName).fill(CONF.CUSTOMER.FIRSTNAME)
    await page.locator(locators.lastName).fill(CONF.CUSTOMER.LASTNAME)
    await page.locator(locators.postalCode).fill(CONF.CUSTOMER.POSTCODE)
    await page.locator(locators.cartContinueBtn).click()
    await page.waitForSelector(locators.cartTitle)
    await expect(page.locator(locators.cartTitle)).toHaveText('Checkout: Overview')
    await page.locator(locators.cartFinishBtn).click()
    await expect(page.locator(locators.cartTitle)).toHaveText('Checkout: Complete!')
})