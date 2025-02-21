class HomePage {
  checkIsUserLoggedIn(selektor, userName) {
    cy.get(selektor).should("contain.text", " Logged in as ${userName}");
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
