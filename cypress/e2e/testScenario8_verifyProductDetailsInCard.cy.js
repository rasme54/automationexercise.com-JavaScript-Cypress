/// <reference types="cypress" />
import ActionOnPage from "../support/pageObject/actionOnPage";
import CartPage from "../support/pageObject/cartPage";
import HomePage from "../support/pageObject/homePage";
import Utils from "../support/pageObject/utils";
import ProductsPage from "../support/pageObject/productsPage";

describe("TS8 - actionsOnProducts", () => {
  const actionOnPage = new ActionOnPage();
  const cartPage = new CartPage();
  const homePage = new HomePage();
  const utils = new Utils();
  const productPage = new ProductsPage();

  it("Verify Product quantity in Cart", () => {
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
  it.only("21. Add review on product", function () {
    cy.fixture("loginData").then((data) => {
      this.loginData = data;
      homePage.selectProductPage();
      productPage.viewProduct(0);
      utils.isStringContains("a[href='#reviews']", "Write Your Review");
      productPage.addReview(this.loginData);
      utils.isStringContains("div.alert.alert-success > span", "Thank you for your review.");
    });
  });
});
