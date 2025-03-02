/// <reference types="cypress" />
import ActionOnPage from "../support/pageObject/actionOnPage";
import CartPage from "../support/pageObject/cartPage";
import HomePage from "../support/pageObject/homePage";
import SampleClass from "../support/pageObject/sampleClass";
import Utils from "../support/pageObject/utils";

describe("TS9 - placeOrder", () => {
  const actionOnPage = new ActionOnPage();
  const cartPage = new CartPage();
  const homePage = new HomePage();
  const sampleClass = new SampleClass();
  const utils = new Utils();

  beforeEach(function () {
    cy.fixture("loginData").then((data) => {
      this.loginData = data;
    });
    cy.fixture("newUser").then((data) => {
      this.newUser = data;
    });
  });

  it("Place Order: Register while Checkout", function () {
    const productNumber = 4;
    homePage.selectProductPage();
    cy.addToCard(productNumber);
    homePage.selectCartPage();
    cartPage.proceedToCheckout();
    cy.get("a[href='/login']").contains("Register / Login").as("popupButton");
    actionOnPage.clickButton("@popupButton");
    actionOnPage.typeInputValue("input[data-qa='signup-name']", this.newUser.userName);
    actionOnPage.typeInputValue("input[data-qa='signup-email']", this.newUser.userEmail);
    actionOnPage.clickButton("button[data-qa='signup-button']");
    cy.fillSignUpForm();
    actionOnPage.clickButton("button[data-qa='create-account']");
    utils.isPageUrlCorrect("/account_created");
    actionOnPage.clickButton("a[data-qa='continue-button']");
    cy.get("a > i.fa.fa-user").parent().as("aTagWithString");
    utils.isUserLogged("@aTagWithString", "a > b", " Logged in as ", this.newUser.userName);
    homePage.selectCartPage();
    cartPage.proceedToCheckout();
    sampleClass.CheckProductDetails(this.newUser);

    // 14. Verify Address Details and Review Your Order
    // 15. Enter description in comment text area and click 'Place Order'
    // 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    // 17. Click 'Pay and Confirm Order' button
    // 18. Verify success message 'Your order has been placed successfully!'
    // 19. Click 'Delete Account' button
    // 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
  });
});