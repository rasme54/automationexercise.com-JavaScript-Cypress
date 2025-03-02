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

  //   it.only("20. Search Products and Verify Cart After Login", () => {
  //     const productName = "dress";

  //     homePage.selectProductPage()
  //     productsPage.findProduct(productName)
  //     productsPage.isProductSearched(productName)
  // // 5. Enter product name in search input and click search button
  // // 6. Verify 'SEARCHED PRODUCTS' is visible
  // // 7. Verify all the products related to search are visible
  // // 8. Add those products to cart
  // // 9. Click 'Cart' button and verify that products are visible in cart
  // // 10. Click 'Signup / Login' button and submit login details
  // // 11. Again, go to Cart page
  // // 12. Verify that those products are visible in cart after login as well
  //   })
});
