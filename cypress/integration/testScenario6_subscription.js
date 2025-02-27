/// <reference types="cypress" />
import ActionOnPage from "../support/pageObject/actionOnPage";
import HomePage from "../support/pageObject/homePage";
import Utils from "../support/pageObject/utils";

describe("TS6 - VerifySubscription", () => {
  const actionOnPage = new ActionOnPage();
  const homePage = new HomePage();
  const utils = new Utils();

  it("Verify Subscription in home page", () => {
    utils.visitHomePage();
    actionOnPage.scrollToElement(".footer-widget");
    utils.isElementVisible(".single-widget > h2");
    actionOnPage.typeInputValue("#susbscribe_email", "testemail@test.pl");
    actionOnPage.clickButton("#subscribe");
    utils.isStringContains("div[class='alert-success alert']", "You have been successfully subscribed!");
  });

  it("Subscription in cart page", () => {
    homePage.selectCartPage();
    actionOnPage.scrollToElement(".footer-widget");
    utils.isElementVisible(".single-widget > h2");
    actionOnPage.typeInputValue("#susbscribe_email", "testemail@test.pl");
    actionOnPage.clickButton("#subscribe");
    utils.isStringContains("div[class='alert-success alert']", "You have been successfully subscribed!");
  });
});
