/// <reference types="cypress" />
import ActionOnPage from "../support/pageObject/actionOnPage";
import HomePage from "../support/pageObject/homePage";
import Utils from "../support/pageObject/utils";

describe("TS6 - VerifySubscription", () => {
  const actionOnPage = new ActionOnPage();
  const homePage = new HomePage();
  const utils = new Utils();

  beforeEach(function () {
    cy.fixture("loginData").then(function (data) {
      this.loginData = data;
    });
  });

  it("Test Case 10: Verify Subscription in home page", function () {
    utils.visitHomePage();
    actionOnPage.scrollToElement(".footer-widget");
    utils.isElementVisible(".single-widget > h2");
    actionOnPage.typeInputValue("#susbscribe_email", this.loginData.correctUserEmail);
    actionOnPage.clickButton("#subscribe");
    utils.isStringContains("div[class='alert-success alert']", "You have been successfully subscribed!");
  });

  it("Test Case 11: Verify Subscription in Cart page", function () {
    homePage.selectCartPage();
    actionOnPage.scrollToElement(".footer-widget");
    utils.isElementVisible(".single-widget > h2");
    actionOnPage.typeInputValue("#susbscribe_email", this.loginData.correctUserEmail);
    actionOnPage.clickButton("#subscribe");
    utils.isStringContains("div[class='alert-success alert']", "You have been successfully subscribed!");
  });
});
