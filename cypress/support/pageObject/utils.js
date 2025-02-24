class Utils {
  isElementVisible(selector) {
    cy.get(selector).should("be.visible");
  }
  isUserLogged(firstSelector, secondSelector, expectedString, userName) {
    cy.get(firstSelector, { timeout: 10000 }).should("be.visible");
    cy.get(secondSelector, { timeout: 10000 }).should("be.visible");
    cy.get(firstSelector).should("contain", expectedString);
    cy.get(secondSelector).should("have.text", userName);
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
