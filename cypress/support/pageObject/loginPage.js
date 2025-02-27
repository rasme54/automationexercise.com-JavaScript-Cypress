import ActionOnPage from "./actionOnPage";

class LoginPage extends ActionOnPage {
  logIn(buttonSelector, emialInput, passwordInput, userEmail, userPassword) {
    cy.get(emialInput).type(userEmail);
    cy.get(passwordInput).type(userPassword);
    cy.get(buttonSelector).click();
  }
}

export default LoginPage;
