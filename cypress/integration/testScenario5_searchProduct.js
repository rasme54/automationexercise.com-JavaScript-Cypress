/// <reference types="cypress" />
import HomePage from "../support/pageObject/homePage";
import ProductsPage from "../support/pageObject/productsPage";

describe("TS5 - SearchProduct", () => {
  const homePage = new HomePage();
  const productsPage = new ProductsPage();

  it("Search Product", () => {
    homePage.selectProductPage();
    productsPage.findProduct("Sleeveless Dress");
    productsPage.isProductSearched("Sleeveless Dress");
  });
});
