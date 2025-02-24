/// <reference types="cypress" />
import ActionOnPage from "../support/pageObject/actionOnPage";
import HomePage from "../support/pageObject/homePage";
import Utils from "../support/pageObject/utils";
import ProductsPage from "../support/pageObject/productsPage";

describe("TS7 - addingProductToCart", () => {
  const actionOnPage = new ActionOnPage();
  const homePage = new HomePage();
  const utils = new Utils();
  const productPage = new ProductsPage();

  it("Add Products to Cart", () => {
    homePage.selectProductPage();
    productPage.hoverOverProduct(0);
    productPage.addToCart(1);
    utils.isStringContains(
      "p[class='text-center']",
      "Your product has been added to cart.",
    );
    actionOnPage.clickButton(
      'button[class="btn btn-success close-modal btn-block"]',
    );

    productPage.hoverOverProduct(1);
    productPage.addToCart(2);
    utils.isStringContains(
      "p[class='text-center']",
      "Your product has been added to cart.",
    );
    actionOnPage.clickButton(
      'button[class="btn btn-success close-modal btn-block"]',
    );

    homePage.selectCartPage();
  });
});
