class LoginPage {
  acceptData(selector) {
    cy.get(selector).click();
  }
  typeNewUserData(selector, data) {
    cy.get(selector).type(data);
    cy.get(selector).should("have.value", data);
  }
}

export default LoginPage;
