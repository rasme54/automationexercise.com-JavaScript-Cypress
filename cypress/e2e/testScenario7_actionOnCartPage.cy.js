/// <reference types="cypress" />
import ActionOnPage from "../support/pageObject/actionOnPage";
import CartPage from "../support/pageObject/cartPage";
import HomePage from "../support/pageObject/homePage";
import Utils from "../support/pageObject/utils";

describe("TS7 - addingProductToCart", () => {
  const actionOnPage = new ActionOnPage();
  const cartPage = new CartPage();
  const homePage = new HomePage();
  const utils = new Utils();

  const productNumberOne = 0;
  const productNumberTwo = 1;

  it("Test Case 12: Add Products in Cart", () => {
    homePage.selectProductPage();
    cy.addToCart(productNumberOne);
    cy.addToCart(productNumberTwo);
    homePage.selectCartPage();
    cartPage.isNumberOfElementsEqualTo("tbody > tr", 2);
    cartPage.checkDetailsOfProduct("Rs. 400", "Rs. 500");
  });
  it("Test Case 17: Remove Products From Cart", () => {
    homePage.selectProductPage();
    cy.addToCart(productNumberOne);
    cy.addToCart(productNumberTwo);
    homePage.selectCartPage();
    cartPage.isNumberOfElementsEqualTo("tbody > tr", 2);
    cy.get("a[class='cart_quantity_delete']").eq(1).as("secondProduct");
    actionOnPage.clickButton("@secondProduct");
  });
  it("Test Case 22: Add to cart from Recommended items", () => {
    utils.visitHomePage();
    actionOnPage.scrollToElement("div[class='recommended_items']");
    utils.isElementVisible("div[class='recommended_items']");
    cy.addRecomendedToCart(productNumberOne);
    utils.isElementVisible("tbody > tr");
  });
});
