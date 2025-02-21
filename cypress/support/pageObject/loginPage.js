class LoginPage {
  typeInputData(selector, data) {
    cy.get(selector).type(data);
    cy.get(selector).should("have.value", data);
  }
}

export default LoginPage;
