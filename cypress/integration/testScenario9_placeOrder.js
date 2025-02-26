/// <reference types="cypress" />
import ActionOnPage from "../support/pageObject/actionOnPage";
import CartPage from "../support/pageObject/cartPage";
import HomePage from "../support/pageObject/homePage";
import Utils from "../support/pageObject/utils";
import ProductsPage from "../support/pageObject/productsPage";

describe("TS9 - placeOrder", () => {
  const actionOnPage = new ActionOnPage();
  const cartPage = new CartPage();
  const homePage = new HomePage();
  const utils = new Utils();
  const productPage = new ProductsPage();

  it("Place Order: Register while Checkout", () => {
    cy.fixture("loginData").then((data) => {
      const productNumber = 4;

      utils.visitHomePage();
      productPage.hoverAndAddToCart(productNumber);

      homePage.selectCartPage();
      cartPage.proceedToCheckout();
      cy.contains("p.text-center > a", "Register / Login").as("regLogButton");
      actionOnPage.clickButton("@regLogButton");
      actionOnPage.typeInputValue(
        "input[data-qa='signup-name']",
        data.userName,
      );
      actionOnPage.typeInputValue(
        "input[data-qa='signup-email']",
        data.userEmail,
      );
      actionOnPage.clickButton("button[data-qa='signup-button']");
      cy.fillSignUpForm();
      actionOnPage.clickButton("button[data-qa='create-account']");
      utils.isPageUrlCorrect("/account_created");
      actionOnPage.clickButton("a[data-qa='continue-button']");
      cy.get("a > i.fa.fa-user").parent().as("aTagWithString");
      utils.isUserLogged(
        "@aTagWithString",
        "a > b",
        " Logged in as ",
        data.userName,
      );
      homePage.selectCartPage();
      cartPage.proceedToCheckout();

      // 14. Verify Address Details and Review Your Order
      // 15. Enter description in comment text area and click 'Place Order'
      // 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
      // 17. Click 'Pay and Confirm Order' button
      // 18. Verify success message 'Your order has been placed successfully!'
      // 19. Click 'Delete Account' button
      // 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    });
  });
});
