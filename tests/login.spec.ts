import { test, expect } from "@playwright/test";
import { CONF } from "../conf";
import { locators } from "./locators";

test.describe("User login", () => {
  // Validate website elements
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(locators.loginTitle)).toHaveText(CONF.pageName);
    await page.locator(locators.loginForm).isVisible();
    await page.locator(locators.usernameInput).isVisible();
    await page.locator(locators.passwordInput).isVisible();
    await page.locator(locators.loginButton).isVisible();
    await page.locator(locators.loginButton).isEnabled();
  });
  test("Verify that the user can successfully log in with valid credentials.", async ({
    page,
  }) => {
    await page
      .locator(locators.usernameInput)
      .fill(CONF.USERS.STANDARD.username);
    await page
      .locator(locators.passwordInput)
      .fill(CONF.USERS.STANDARD.password);
    await page.locator(locators.loginButton).click();
    const invetoryPage = CONF.restrictedPages.INVENTORY.path
    await expect(page).toHaveURL(invetoryPage);
  });
  test("Verify that the user can't log in with invalid credentials.", async ({
    page,
  }) => {
    await page
      .locator(locators.usernameInput)
      .fill(CONF.USERS.STANDARD.username);
    await page.locator(locators.passwordInput).fill("not a valid password");
    await page.locator(locators.loginButton).click();
    await expect(page.locator(locators.authError)).toHaveText(
      CONF.AUTH_ERROR_MSGS.INCORRECT_PSWD
    );
  });
  test("Verify form validation error messages", async ({ page }) => {
    // Submit form with empty input fields
    await page.locator(locators.loginButton).click();
    await expect(page.locator(locators.authError)).toHaveText(
      CONF.AUTH_ERROR_MSGS.BOTH_EMPTY
    );
    // Submit form with empty password input
    await page
      .locator(locators.usernameInput)
      .fill(CONF.USERS.STANDARD.username);
    await page.locator(locators.loginButton).click();
    await expect(page.locator(locators.authError)).toHaveText(
      CONF.AUTH_ERROR_MSGS.PSWD_EMPTY
    );
  });
});
