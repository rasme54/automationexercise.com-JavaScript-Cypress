/// <reference types="cypress" />
import ActionOnPage from "../support/pageObject/actionOnPage";
import HomePage from "../support/pageObject/homePage";
import LoginPage from "../support/pageObject/loginPage";
import Utils from "../support/pageObject/utils";
import ProductsPage from "../support/pageObject/productsPage";
import CartPage from "../support/pageObject/cartPage";

describe("TS5 - SearchProduct", () => {
  const actionOnPage = new ActionOnPage();
  const cartPage = new CartPage();
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const utils = new Utils();
  const productsPage = new ProductsPage();

  it("9. Search Product", () => {
    homePage.selectProductPage();
    productsPage.findProduct("Sleeveless Dress");
    productsPage.isProductSearched("Sleeveless Dress");
  });

  it("18. View Category Products", () => {
    const categoruName = "Women";
    const subcategoryName = "Dress";

    cy.visit("/");
    homePage.selectCategory("a[data-parent='#accordian']", categoruName);
    homePage.selectCategory("li > a", subcategoryName);
    utils.isPageUrlCorrect("/category_products");
    utils.isStringContains("h2.title.text-center", "Women - Dress Products");
    homePage.selectCategory("a[data-parent='#accordian']", "Men");
    utils.isPageUrlCorrect("/category_products");
  });

  it("19. View & Cart Brand Products", () => {
    const brandName = "Polo";
    const secondBrandName = "Biba";

    homePage.selectProductPage();
    utils.isElementVisible("div.brands_products");
    homePage.selectBrand(brandName);
    utils.isPageUrlCorrect(`/brand_products/${brandName}`);
    homePage.selectBrand(secondBrandName);
    utils.isPageUrlCorrect(`/brand_products/${secondBrandName}`);
  });

  it.only("20. Search Products and Verify Cart After Login", function () {
    cy.fixture("loginData").then((data) => {
      this.loginData = data;
      const productName = "Tshirt";

      homePage.selectProductPage();
      productsPage.findProduct(productName);
      productsPage.areProductsVisible("div[class='product-image-wrapper']");
      productsPage.addAllVisibleProductToCart();
      homePage.selectCartPage();
      cartPage.areProductsVisible("tbody > tr");
      homePage.selectLoginPage();
      loginPage.logIn(this.loginData);
      homePage.selectCartPage();
      cartPage.areProductsVisible("tbody > tr");
    });
  });
});
