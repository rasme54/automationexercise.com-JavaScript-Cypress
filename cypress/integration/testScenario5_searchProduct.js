/// <reference types="cypress" />
import HomePage from "../support/pageObject/homePage";
import Utils from "../support/pageObject/utils";
import ProductsPage from "../support/pageObject/productsPage";

describe("TS5 - SearchProduct", () => {
  const homePage = new HomePage();
  const utils = new Utils();
  const productsPage = new ProductsPage();

  it("9. Search Product", () => {
    homePage.selectProductPage();
    productsPage.findProduct("Sleeveless Dress");
    productsPage.isProductSearched("Sleeveless Dress");
  });

  it.only("18. View Category Products", () => {
    cy.visit("/");
    homePage.selectCategory("a[data-parent='#accordian']", "Women")
    homePage.selectCategory("li > a", "Dress")
    utils.isPageUrlCorrect("/category_products")
    utils.isStringContains("h2.title.text-center", "Women - Dress Products")
    homePage.selectCategory("a[data-parent='#accordian']", "Men")
    utils.isPageUrlCorrect("/category_products")
  })
});
