/// <reference types="cypress" />
import ActionOnPage from "../support/pageObject/actionOnPage";
import CartPage from "../support/pageObject/cartPage";
import HomePage from "../support/pageObject/homePage";
import Utils from "../support/pageObject/utils";
import ProductsPage from "../support/pageObject/productsPage";

describe("TS7 - addingProductToCart", () => {
  const actionOnPage = new ActionOnPage();
  const cartPage = new CartPage();
  const homePage = new HomePage();
  const utils = new Utils();
  const productPage = new ProductsPage();

  const productNumberOne = 0;
  const productNumberTwo = 1;

  it("12. Add Two Products to Cart", () => {
    homePage.selectProductPage();
    productPage.hoverAndAddToCart(productNumberOne);
    utils.isStringContains("p[class='text-center']", "Your product has been added to cart.");
    actionOnPage.clickButton('button[class="btn btn-success close-modal btn-block"]');
    productPage.hoverAndAddToCart(productNumberTwo);
    utils.isStringContains("p[class='text-center']", "Your product has been added to cart.");
    actionOnPage.clickButton('button[class="btn btn-success close-modal btn-block"]');
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
    // 7. Click 'X' button corresponding to particular product
    // 8. Verify that product is removed from the cart
  });
});
