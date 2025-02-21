class Utils {
  isStringVisible(element, stringToCheck) {
    cy.get(element).should("contain", stringToCheck);
  }
  isPageUrlCorrect(partOfUrl) {
    cy.url().should("include", partOfUrl);
    cy.get("body").should("be.visible");
  }
}

export default Utils;
