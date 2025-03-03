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

  it("12. Add Two Products to Cart", () => {
    homePage.selectProductPage();
    utils.isPageUrlCorrect("/products");
    cy.addToCart(productNumberOne);
    cy.addToCart(productNumberTwo);
    homePage.selectCartPage();
    cartPage.isNumberOfElementsEqualTo("tbody > tr", 2);
    cartPage.checkDetailsOfProduct("Rs. 400", "Rs. 500");
  });
  it("17. Remove Products from Cart", () => {
    homePage.selectProductPage();
    cy.addToCart(productNumberOne);
    cy.addToCart(productNumberTwo);
    homePage.selectCartPage();
    cartPage.isNumberOfElementsEqualTo("tbody > tr", 2);
    utils.isPageUrlCorrect("/view_cart");
    cy.get("a[class='cart_quantity_delete']").eq(1).as("secondProduct");
    actionOnPage.clickButton("@secondProduct");
  });
});
