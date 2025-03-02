class HomePage {
  selectBrand(brandName) {
    cy.get(`a[href="/brand_products/${brandName}"]`).click();
  }
  selectCartPage() {
    cy.visit("/");
    cy.get("a[href='/view_cart']").eq(0).click();
    cy.url().should("include", "/view_cart");
    cy.get("body").should("be.visible");
  }
  selectCategory(selector, categoryName) {
    cy.get(selector).contains(categoryName).click();
  }
  selectContactUsPage() {
    cy.visit("/");
    cy.get("a[href='/contact_us']").click();
    cy.url().should("include", "contact_us");
    cy.get("body").should("be.visible");
  }
  selectLoginPage() {
    cy.visit("/");
    cy.get("a[href='/login']").click();
    cy.url().should("include", "/login");
    cy.get("body").should("be.visible");
  }
  selectProductPage() {
    cy.visit("/");
    cy.get("a[href='/products']").click();
    cy.url().should("include", "/products");
    cy.get("body").should("be.visible");
  }
  selectTestCasesPage() {
    cy.visit("/");
    cy.get("a[href='/test_cases']").eq(0).click();
    cy.url().should("include", "/test_cases");
    cy.get("body").should("be.visible");
  }
}

export default HomePage;
