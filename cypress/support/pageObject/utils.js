class Utils {
  clickButton(selector) {
    cy.get(selector).should("be.visible");
    cy.get(selector).click();
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
