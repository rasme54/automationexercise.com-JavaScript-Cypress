/// <reference types="cypress" />
import HomePage from "../support/pageObject/homePage";
import ProductPage from "../support/pageObject/productsPage";

describe("TS5 - SearchProduct", () => {
  const homePage = new HomePage();
  const productPage = new ProductPage();

  it("SearchProduct Page", () => {
    homePage.selectProductPage();
    productPage.findProduct("Sleeveless Dress");
    productPage.isProductVisible("Sleeveless Dress");
  });
});
