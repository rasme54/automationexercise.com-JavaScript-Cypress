class LoginPage {
  logIn(selector, emialInput, passwordInput, userEmail, userPassword) {
    cy.get(emialInput).type(userEmail);
    cy.get(passwordInput).type(userPassword);
    cy.get(selector).click();
  }
}

export default LoginPage;
