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
test("Verify items on invetory page", async ({ page }) => {
  const itemsCount = inventoryItems.length;
  // Check if the displayed items length is matching the response length
  await expect(page.locator(locators.inventoryItem)).toHaveCount(itemsCount);
  // Sorting mocked response to match site's defualt sort
  const aTOz = inventoryItems.sort((a, b) => a.title.localeCompare(b.title));
  const shopItems: Record<string, Array<string>> = {
    titles: [],
    desc: [],
    prices: [],
  };
  aTOz.map((item) => {
    shopItems.titles.push(item.title);
    shopItems.desc.push(item.desc);
    shopItems.prices.push(item.price);
  });
  const titlesOnPage = await page.$$eval(locators.inventoryItemName, (titles) =>
    titles.map((title) => title.textContent)
  );
  const descOnPage = await page.$$eval(locators.inventoryDesc, (descriptions) =>
    descriptions.map((desc) => desc.textContent)
  );
  const pricesOnPage = await page.$$eval(
    locators.inventoryItemPrice,
    (prices) => prices.map((price) => price.textContent)
  );
  const AddCartButtons = await page.$$eval(locators.priceButton, (buttons) =>
    buttons.map((button) => button.textContent)
  );
  // Verify all items values
  expect(titlesOnPage).toEqual(shopItems.titles);
  expect(descOnPage).toEqual(shopItems.desc);
  expect(pricesOnPage).toEqual(shopItems.prices);
  expect(AddCartButtons).toEqual(new Array(6).fill("Add to cart"));
});

test('Verify random existing product page content', async ({ page }) => {
  const randomPage:number = Math.floor(Math.random() * inventoryItems.length)
  await page.goto(`.${CONF.restrictedPages.ITEM_PAGE.path}?id=${randomPage}`)

  await page.locator(locators.productImg).isVisible()
  await page.locator(locators.productName).isVisible()
  await page.locator(locators.productDesc).isVisible()
  await page.locator(locators.productPrice).isVisible()
  await page.locator(locators.productAddToCart).isVisible()
  await page.locator(locators.footerContainer).isVisible()
})

test('Verify 404 page', async ({ page }) => {
  const NOT_FOUNT_PAGE_ID = inventoryItems.length + 1
  await page.goto(`.${CONF.restrictedPages.ITEM_PAGE.path}?id=${NOT_FOUNT_PAGE_ID}`)
  const msg = await page.locator(locators.productName).textContent()
  expect(msg).toEqual('ITEM NOT FOUND')
})