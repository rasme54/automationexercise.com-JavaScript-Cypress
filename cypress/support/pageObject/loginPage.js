class LoginPage {
  logIn(userEmail, userPassword) {
    cy.get("input[data-qa='login-email']").type(userEmail);
    cy.get("input[data-qa='login-password']").type(userPassword);
    cy.get("button[data-qa='login-button']").click();
  }
}

export default LoginPage;
