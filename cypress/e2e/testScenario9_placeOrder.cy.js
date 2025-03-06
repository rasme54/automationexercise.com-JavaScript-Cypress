/// <reference types="cypress" />
import ActionOnPage from "../support/pageObject/actionOnPage";
import CartPage from "../support/pageObject/cartPage";
import CheckoutPage from "../support/pageObject/checkoutPage";
import HomePage from "../support/pageObject/homePage";
import LoginPage from "../support/pageObject/loginPage";
import Utils from "../support/pageObject/utils";
import PaymentDonePage from "../support/pageObject/paymentDonePage";
import PaymentPage from "../support/pageObject/paymentPage";

describe("TS9 - placeOrder", () => {
  const actionOnPage = new ActionOnPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const utils = new Utils();
  const paymentDonePage = new PaymentDonePage();
  const paymentPage = new PaymentPage();

  beforeEach(function () {
    cy.fixture("loginData").then((data) => {
      this.loginData = data;
    });
    cy.fixture("newUser").then((data) => {
      this.newUser = data;
    });
    cy.fixture("paymentData").then((data) => {
      this.paymentData = data;
    });
  });

  it("Test Case 14: Place Order: Register while Checkout", function () {
    const productNumber = 4;

    homePage.selectProductPage();
    cy.addToCart(productNumber);
    homePage.selectCartPage();
    cartPage.proceedToCheckout();
    cy.get("a[href='/login']").contains("Register / Login").as("popupButton");
    actionOnPage.clickButton("@popupButton");
    actionOnPage.typeInputValue("input[data-qa='signup-name']", this.newUser.userName);
    actionOnPage.typeInputValue("input[data-qa='signup-email']", this.newUser.userEmail);
    actionOnPage.clickButton("button[data-qa='signup-button']");
    cy.fillSignUpForm();
    actionOnPage.clickButton("button[data-qa='create-account']");
    actionOnPage.clickButton("a[data-qa='continue-button']");
    cy.get("a > i.fa.fa-user").parent().as("aTagWithString");
    utils.isUserLogged(this.newUser);
    homePage.selectCartPage();
    cartPage.proceedToCheckout();
    checkoutPage.checkProductDetails(this.newUser);
    actionOnPage.typeInputValue("div[id='ordermsg'] > textarea", "This is a test order");
    actionOnPage.clickButton("a[href='/payment']");
    paymentPage.typePaymentDetails(this.paymentData);
    actionOnPage.clickButton("button[id='submit']");
    utils.isStringContains("div.col-sm-9.col-sm-offset-1 > p", "Congratulations! Your order has been confirmed!");
    cy.deleteUser();
  });

  it("Test Case 15: Place Order: Register before Checkout", function () {
    const productNumber = 7;

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
    cy.get("a > i.fa.fa-user").parent().as("aTagWithString");
    utils.isUserLogged(this.newUser);
    homePage.selectProductPage();
    cy.addToCart(productNumber);
    homePage.selectCartPage();
    cartPage.proceedToCheckout();
    checkoutPage.checkProductDetails(this.newUser);
    actionOnPage.typeInputValue("div[id='ordermsg'] > textarea", "This is a test order");
    actionOnPage.clickButton("a[href='/payment']");
    paymentPage.typePaymentDetails(this.paymentData);
    actionOnPage.clickButton("button[id='submit']");
    utils.isStringContains("div.col-sm-9.col-sm-offset-1 > p", "Congratulations! Your order has been confirmed!");
    cy.deleteUser();
  });

  it("Test Case 16: Place Order: Login before Checkout", function () {
    const productNumber = 9;

    homePage.selectLoginPage();
    loginPage.logIn(this.loginData);
    utils.isUserLogged(this.loginData);
    homePage.selectProductPage();
    cy.addToCart(productNumber);
    homePage.selectCartPage();
    cartPage.proceedToCheckout();
    checkoutPage.checkProductDetails(this.newUser);
    actionOnPage.typeInputValue("div[id='ordermsg'] > textarea", "This is a test order");
    actionOnPage.clickButton("a[href='/payment']");
    paymentPage.typePaymentDetails(this.paymentData);
    actionOnPage.clickButton("button[id='submit']");
    utils.isStringContains("div.col-sm-9.col-sm-offset-1 > p", "Congratulations! Your order has been confirmed!");
    //cy.deleteUser();
  });
  it("Test Case 24: Download Invoice after purchase order", function () {
    const productNumber = 2;

    utils.visitHomePage();
    cy.addToCart(productNumber);
    homePage.selectCartPage();
    cartPage.proceedToCheckout();
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
    homePage.selectCartPage();
    cartPage.proceedToCheckout();
    checkoutPage.checkProductDetails(this.newUser);
    actionOnPage.typeInputValue("div[id='ordermsg'] > textarea", "This is a test order");
    checkoutPage.downloadPriceToString().then((retrievedPrice) => {
      const price = retrievedPrice;
      actionOnPage.clickButton("a[href='/payment']");
      paymentPage.typePaymentDetails(this.paymentData);
      actionOnPage.clickButton("button[id='submit']");
      utils.isStringContains("div.col-sm-9.col-sm-offset-1 > p", "Congratulations! Your order has been confirmed!");
      cy.get("body").should("be.visible");
      cy.get("body").should("be.visible");
      paymentDonePage.downloadInvocie(this.newUser, price);
    });
    actionOnPage.clickButton("a[data-qa='continue-button']");
    cy.deleteUser();
  });
});
