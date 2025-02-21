class LoginPage {
  typeInputData(selector, data) {
    cy.get(selector).type(data);
    cy.get(selector).should("have.value", data);
  }
  logIn(emialInput, passwordInput, userEmail, userPassword) {
    cy.get(emialInput).type(userEmail);
    cy.get(passwordInput).type(userPassword);
  }
}

export default LoginPage;
