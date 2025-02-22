class Utils {
  isUserLogged(firstSelector, secondSelector, expectedString, userName) {
    cy.get(firstSelector, { timeout: 10000 }).should("be.visible");
    cy.get(secondSelector, { timeout: 10000 }).should("be.visible");
    cy.get(firstSelector).should("contain", expectedString);
    cy.get(secondSelector).should("have.text", userName);
  }
  isStringVisible(selector, stringToCheck) {
    cy.get(selector).should("contain", stringToCheck);
  }
  isPageUrlCorrect(partOfUrl) {
    cy.url().should("include", partOfUrl);
    cy.get("body").should("be.visible");
  }
}

export default Utils;
