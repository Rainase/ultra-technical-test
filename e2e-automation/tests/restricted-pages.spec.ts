import { test, expect } from '@playwright/test';
import { CONF } from '../conf';
import {locators} from './locators';
test.describe('Auth and restricted pages', () => {
  const restricedPage = Object.values(CONF.restrictedPages)
  // Visit all restriced pages
  for (const page of restricedPage) {
    test(`Verify that user cannot access "${page.name}" page while logged out.`, async ({ page:website }) => {
    await website.goto(`.${page.path}`);
    // Expect user to be redirected back to login website and show error msg
    await expect(website).toHaveURL('/');
    await expect(website.locator(locators.authError)).toHaveText(`Epic sadface: You can only access '${page.path}' when you are logged in.`)
  })
}
})
