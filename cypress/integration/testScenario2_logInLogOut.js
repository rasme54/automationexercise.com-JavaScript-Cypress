/// <reference types="cypress" />
import HomePage from "../support/pageObject/homePage";
import LoginPage from "../support/pageObject/loginPage";
import Utils from "../support/pageObject/utils";

describe("TS2 - LogInLogOut", () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const utils = new Utils();

  beforeEach(() => {
    homePage.selectLoginPage();
  });
  it("Log In - Positive Case", () => {
    const userEmail = "testemail@email.pl";
    const userPassword = "PASSword123!";
    cy.get("input[data-qa='login-email']").as("emailInput");
    cy.get("input[data-qa='login-password']").as("passwordInput");
    loginPage.logIn("@emailInput", "@passwordInput", userEmail, userPassword);
    utils.clickButton("button[data-qa='login-button']");

    //part with assertion 'if user is logged'
  });
  it("Log in - Negative Case", () => {
    const userEmail = "negativetestemail@email.pl";
    const userPassword = "PASSword123!";
    cy.get("input[data-qa='login-email']").as("emailInput");
    cy.get("input[data-qa='login-password']").as("passwordInput");
    loginPage.logIn("@emailInput", "@passwordInput", userEmail, userPassword);
    utils.clickButton("button[data-qa='login-button']")
    utils.isStringVisible(
      "form[action='/login'] > p",
      "Your email or password is incorrect!",
    );
  });
  it("Log out", () => {
    const userEmail = "testemail@email.pl";
    const userPassword = "PASSword123!";
    cy.get("input[data-qa='login-email']").as("emailInput");
    cy.get("input[data-qa='login-password']").as("passwordInput");
    loginPage.logIn("@emailInput", "@passwordInput", userEmail, userPassword);
  });
});
