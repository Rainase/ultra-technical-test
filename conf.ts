export const CONF = {
  pageName: "Swag Labs",
  baseUr: "https://www.saucedemo.com/",
  restrictedPages: {
    CART: { name: "Cart", path: "/cart.html" },
    INVENTORY: { name: "Inventory", path: "/inventory.html" },
    ITEM_PAGE: { name: "Item Page", path: "/inventory-item.html" },
    CHECKOUT_ONE: { name: "Checkout Step 1", path: "/checkout-step-one.html" },
    CHECKOUT_COMPLETE: {
      name: "Checkout complete",
      path: "/checkout-complete.html",
    },
  },
  USERS: {
    STANDARD: {
      username: "standard_user",
      password: "secret_sauce",
    },
    LOCKED: {
      username: "locked_out_user",
      password: "secret_sauce",
    },
    PROBLEM: {
      username: "problem_user",
      password: "secret_sauce",
    },
    GLITCH: {
      username: "performance_glitch_user",
      password: "secret_sauce",
    },
  },
  CUSTOMER: {
    FIRSTNAME: "Swag",
    LASTNAME: "Labs",
    POSTCODE: "2234"
  },
  AUTH_ERROR_MSGS: {
    INCORRECT_PSWD:
      "Epic sadface: Username and password do not match any user in this service",
    PSWD_EMPTY: "Epic sadface: Password is required",
    USERNAME_EMPTY: "Epic sadface: Username is required",
    BOTH_EMPTY: "Epic sadface: Username is required",
    USER_BLOCKED: "Epic sadface: Sorry, this user has been locked out.",
  },
};
