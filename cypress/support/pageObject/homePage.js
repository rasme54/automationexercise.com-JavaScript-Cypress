class HomePage {
  visit() {
    cy.visit("/");
  }
  selectProductPage() {
    cy.visit("/");
    cy.get("a[href='/products']").as("ProductsButton").click();
    cy.url().should("include", "/products");
    cy.get("body").should("be.visible");
  }
}

export default HomePage;
