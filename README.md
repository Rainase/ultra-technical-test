# Ultra.io [![Ultra.io](https://github.com/Rainase/ultra-technical-test/blob/main/ultra-logo.png)](https://ultra.io)

## QA Automation Test ![workflow](https://github.com/Rainase/ultra-technical-test/actions/workflows/main.yml/badge.svg)

### In this project you'll find:
- Manual testcases for dummy website [Saucedemo](https://www.saucedemo.com/)
- e2e [automation](https://github.com/Rainase/ultra-technical-test/tree/main/tests) tests for dummy website [Saucedemo](https://www.saucedemo.com/)

##### Automation tests where written in javascript using [playwright](https://playwright.dev/)![playwright](https://playwright.dev/img/playwright-logo.svg)

## e2e manual test case(s)

### 1. Purchase flow
#### Add/remove random item into cart
```sh
- Pick one item in the list and click "add to cart"
- Verify that Cart icon has a badge and represents the amount of items in the cart (1)
- Click "Remove" button on the same item added prevously
- Vwerify that the Badge and value is removed from cart icon
```
#### Add/remove multiple items into cart
```sh
- Pick multiple items from the list and click "add to cart" button
 - Verify that Badge is visible on the Cart icon and the value represents the number of items added to cart.
 - Remove all items from the cart by clicking "Remove" button for each item added previously.
 - Verify that the badge is removed from the Cart icon.
 ```
#### Add item into cart and complete purchase

```sh
- Pick random items from the list and add them into cart
- Click on the cart icon to visit shopping cart page
- Verify that the page header has text "Your Cart"
- Click on "Checkout" button to contiune
- Verify that page header has text "Checkout: Your Information".
- Fill in the user form and click "Continue" button
- Verify that page header has text "Checkout: Overview"
- Click on "Finish" button
- Verify that page header has text "Checkout: complete"
```
### 2. User Login

#### Verify that the user can successfully log in with valid credentials.
```sh
- Open https://www.saucedemo.com and fill in username and password with valid credentials
- Click "Login" button
- Verify that user has redirected to Invetory page
```

#### Verify that the user can't log in with invalid credentials.

```sh
- Open https://www.saucedemo.com and fill in username and password with invalid credentials
- Click "Login" button
- Error message is displayed and user stays on login page.
```

#### Verify form validation error messages

```sh
- Submit form with empty password field
-"Epic sadface: Username is required" is show to user
- User stays on login page and is not authenticated
- Submit form with empty password field
- "Epic sadface: Password is required" is show to user
- User stays on login page and is not authenticated
```

#### Restricted pages

```sh
- Verify that user cannot access "Cart" page while logged out.
- Verify that user cannot access "Inventory" page while logged out.
- Verify that user cannot access "Item Page" page while logged out.
- Verify that user cannot access "Checkout Step 1" page while logged out.
- Verify that user cannot access "Checkout complete" page while logged out.
- User is taken to login page and error is shown "Epic sadface: You can only access '{page}' when you are logged in."
```

## Run it locally
- clone this repository to your local machine
- install project with dependecies
```sh
npx playwright install --with-deps
```
- run test command on your terminal
```sh
npx playwright test
if you want use head mode use:
npx playwright test --head
```
## Test results are available here

[Playwright test results](https://rainase.github.io/ultra-technical-test/playwright-report/)

## CI/CD workflow

- [Github Actions for CI](https://github.com/Rainase/ultra-technical-test/actions/workflows/main.yml)

## Improvements

Since the demo site is a SPA, i would add offline test cases. Also since cart info is stored in a local storage, i'd add few scenarios to cover some edge cases. (Like if user manually removes cart info etc.)
