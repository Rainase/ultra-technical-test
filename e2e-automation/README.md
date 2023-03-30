# Ultra.io
## QA Automation Test

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

In this project you'll find 2 folders:
- e2e - Includes automation tests for dummy website [Saucedemo](https://www.saucedemo.com/)
- api - Includes API tests for Postman


## e2e manual test case(s)

### Purchase flow
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