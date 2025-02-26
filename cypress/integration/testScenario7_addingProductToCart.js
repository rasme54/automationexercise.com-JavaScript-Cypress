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

  it("Add Products to Cart", () => {
    homePage.selectProductPage();
    productPage.hoverAndAddToCart(0);
    utils.isStringContains(
      "p[class='text-center']",
      "Your product has been added to cart.",
    );
    actionOnPage.clickButton(
      'button[class="btn btn-success close-modal btn-block"]',
    );

    productPage.hoverAndAddToCart(1);
    utils.isStringContains(
      "p[class='text-center']",
      "Your product has been added to cart.",
    );
    actionOnPage.clickButton(
      'button[class="btn btn-success close-modal btn-block"]',
    );

    homePage.selectCartPage();
    cartPage.isNumberOfElementsEqualTo("tbody > tr", 2);

    //cy.get("tbody > tr").each(())

    //cartPage.verifyProductDetail("@listOfElements", "500", "400")
  });
});
