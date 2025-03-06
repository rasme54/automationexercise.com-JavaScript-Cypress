/// <reference types="cypress" />
import ActionOnPage from "../support/pageObject/actionOnPage";
import CartPage from "../support/pageObject/cartPage";
import CheckoutPage from "../support/pageObject/checkoutPage";
import HomePage from "../support/pageObject/homePage";
import Utils from "../support/pageObject/utils";
import ProductsPage from "../support/pageObject/productsPage";

describe("TS8 - actionsOnProducts", () => {
  const actionOnPage = new ActionOnPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();
  const homePage = new HomePage();
  const utils = new Utils();
  const productPage = new ProductsPage();

  const productNumberOne = 0;
  const productNumberTwo = 1;

  it("Test Case 13: Verify Product quantity in Cart", () => {
    const numberOfProduct = 3;
    const quantityValue = 4;

    homePage.selectProductPage();
    productPage.selectProductFromList(numberOfProduct);
    utils.isPageUrlCorrect(`/product_details/${numberOfProduct}`);
    productPage.increaseQuantity(quantityValue);
    actionOnPage.clickButton("button[class='btn btn-default cart']");
    actionOnPage.clickButton("p.text-center > a");
    cartPage.isProductDetailEqualTo("td.cart_quantity > button", quantityValue);
  });
  it("Test Case 21: Add review on product", function () {
    cy.fixture("loginData").then((data) => {
      this.loginData = data;
      homePage.selectProductPage();
      productPage.viewProduct(0);
      utils.isStringContains("a[href='#reviews']", "Write Your Review");
      productPage.addReview(this.loginData);
      utils.isStringContains("div.alert.alert-success > span", "Thank you for your review.");
    });
  });
  it("Test Case 23: Verify address details in checkout page", function () {
    cy.fixture("newUser").then((data) => {
      this.newUser = data;
      cy.fixture("paymentData").then((data) => {
        this.paymentData = data;
        homePage.selectLoginPage();
        utils.isStringContains("div.signup-form > h2", "New User Signup!");
        actionOnPage.typeInputValue("input[data-qa='signup-name']", this.newUser.userName);
        actionOnPage.typeInputValue("input[data-qa='signup-email']", this.newUser.userEmail);
        actionOnPage.clickButton("button[data-qa='signup-button']");
        utils.isStringContains("div.login-form > h2 >b", "Enter Account Information");
        cy.fillSignUpForm();
        actionOnPage.clickButton("button[data-qa='create-account']");
        cy.get("div.col-sm-9.col-sm-offset-1 > h2 > b").as("sectionTitle");
        utils.isStringContains("@sectionTitle", "Account Created!");
        actionOnPage.clickButton("a[data-qa='continue-button']");
        utils.isUserLogged(this.newUser);
        cy.addToCart(productNumberOne);
        cy.addToCart(productNumberTwo);
        homePage.selectCartPage();
        cartPage.proceedToCheckout();
        checkoutPage.checkProductDetails(this.newUser);
        cy.deleteUser();
      });
    });
  });
});
