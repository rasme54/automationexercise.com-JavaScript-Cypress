class HomePage {
  checkIsUserLoggedIn(selektor, userName) {
    cy.get(selektor).should("contain.text", " Logged in as '${userName}'");
  }
  selectContactUsPage() {
    cy.visit("/");
    cy.get("a[href='/contact_us']").as("LoginPageButton").click();
    cy.url().should("include", "contact_us");
    cy.get("body").should("be.visible");
  }
  selectLoginPage() {
    cy.visit("/");
    cy.get("a[href='/login']").as("LoginPageButton").click();
    cy.url().should("include", "/login");
    cy.get("body").should("be.visible");
  }
  selectProductPage() {
    cy.visit("/");
    cy.get("a[href='/products']").as("ProductsPageButton").click();
    cy.url().should("include", "/products");
    cy.get("body").should("be.visible");
  }
}

export default HomePage;
