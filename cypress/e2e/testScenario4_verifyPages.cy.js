/// <reference types="cypress" />
import ActionOnPage from "../support/pageObject/actionOnPage";
import HomePage from "../support/pageObject/homePage";
import Utils from "../support/pageObject/utils";
import ProductsPage from "../support/pageObject/productsPage";

describe("TS4 - VerifyPages", () => {
  const actionOnPage = new ActionOnPage();
  const homePage = new HomePage();
  const utils = new Utils();
  const productsPage = new ProductsPage();

  it("Verify Test Cases Page", () => {
    homePage.selectTestCasesPage();
  });

  it("Verify All Products and product detail page", () => {
    homePage.selectProductPage();

    cy.get("div[class='features_items']").as("listOfProducts");
    utils.isElementVisible("@listOfProducts");
    productsPage.selectProductFromList("1");
    utils.isPageUrlCorrect("/product_details/1");
    productsPage.isProductDetailVisible(".product-information > h2", "productName");
    cy.get(".product-information > p").eq(0).as("productCategorySelector");
    productsPage.isProductDetailVisible("@productCategorySelector", "categoryName");
    cy.get("span").contains("Rs. 500").as("priceSelector");
    productsPage.isProductDetailVisible("@priceSelector", "price");
    cy.get(".product-information > p").eq(1).as("productAvailabilitySelector");
    productsPage.isProductDetailVisible("@productAvailabilitySelector", "availability");
    cy.get(".product-information > p").eq(2).as("conditionSelector");
    productsPage.isProductDetailVisible("@conditionSelector", "condition");
    cy.get(".product-information > p").eq(3).as("brandSelector");
    productsPage.isProductDetailVisible("@brandSelector", "brand");
  });
});
