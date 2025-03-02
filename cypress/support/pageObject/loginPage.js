class LoginPage {
  logIn(loginData) {
    cy.get("input[data-qa='login-email']").type(loginData.correctUserEmail);
    cy.get("input[data-qa='login-password']").type(loginData.userPassword);
    cy.get("button[data-qa='login-button']").click();
  }
  incorrectlogIn(loginData) {
    cy.get("input[data-qa='login-email']").type(loginData.incorrectUserEmail);
    cy.get("input[data-qa='login-password']").type(loginData.userPassword);
    cy.get("button[data-qa='login-button']").click();
  }
}

export default LoginPage;
