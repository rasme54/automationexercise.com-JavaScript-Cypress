class Utils {
  isElementVisible(selector) {
    cy.get(selector).should("be.visible");
  }
  isUserLogged(loginData) {
    cy.get("a > i.fa.fa-user").parent().as("aTagWithString");
    cy.get("@aTagWithString").should("be.visible");
    cy.get("a > b").should("be.visible");
    cy.get("@aTagWithString").should("contain", " Logged in as ");
    cy.get("a > b").should("have.text", loginData.userName);
  }
  isStringContains(selector, stringToCheck) {
    cy.get(selector).should("contain", stringToCheck);
  }
  isPageUrlCorrect(partOfUrl) {
    cy.url().should("include", partOfUrl);
    cy.get("body").should("be.visible");
  }
  visitHomePage() {
    cy.visit("/");
    cy.get("body").should("be.visible");
  }
}

export default Utils;
