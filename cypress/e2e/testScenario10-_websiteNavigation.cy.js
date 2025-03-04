/// <reference types="cypress" />
import ActionOnPage from "../support/pageObject/actionOnPage";
import Utils from "../support/pageObject/utils";

describe("TS10 - websiteNavigation", () => {
  const actionOnPage = new ActionOnPage();
  const utils = new Utils();

  beforeEach(() => {
    utils.visitHomePage();
    actionOnPage.scrollToElement("div.row > p.pull-left")
    utils.isStringContains("div.single-widget > h2", "Subscription")
  });

  it("Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality",() => {
    actionOnPage.clickButton("i[class='fa fa-angle-up']")
    utils.isWebsiteScrolledUp()
    utils.isElementVisible("div.col-sm-6 > h2")
  });
  it("Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality", () => {
    actionOnPage.scrollToElement("#header")
    utils.isWebsiteScrolledUp()
    utils.isElementVisible("div.col-sm-6 > h2")
  })
});