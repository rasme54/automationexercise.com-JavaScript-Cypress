/// <reference types="cypress" />
import ActionOnPage from "../support/pageObject/actionOnPage";
import HomePage from "../support/pageObject/homePage";
import LoginPage from "../support/pageObject/loginPage";
import Utils from "../support/pageObject/utils";

describe("TS2 - LogInLogOut", () => {
  const actionOnPage = new ActionOnPage();
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const utils = new Utils();

  beforeEach(() => {
    homePage.selectLoginPage();
  });

  it("Login User with correct email and password", () => {
    const userEmail = "testemail@email.pl";
    const userPassword = "PASSword123!";
    const userName = "testUserName";

    cy.get("input[data-qa='login-email']").as("emailInput");
    cy.get("input[data-qa='login-password']").as("passwordInput");
    loginPage.logIn(
      "button[data-qa='login-button']",
      "@emailInput",
      "@passwordInput",
      userEmail,
      userPassword,
    );

    cy.get("a > i.fa.fa-user").parent().as("aTagWithString");
    utils.isUserLogged("@aTagWithString", "a > b", " Logged in as ", userName);
  });

  it("Login User with incorrect email and password", () => {
    const userEmail = "negativetestemail@email.pl";
    const userPassword = "PASSword123!";

    cy.get("input[data-qa='login-email']").as("emailInput");
    cy.get("input[data-qa='login-password']").as("passwordInput");
    loginPage.logIn(
      "button[data-qa='login-button']",
      "@emailInput",
      "@passwordInput",
      userEmail,
      userPassword,
    );
    utils.isStringContains(
      "form[action='/login'] > p",
      "Your email or password is incorrect!",
    );
  });

  it.only("Logout User", () => {
    const userEmail = "testemail@email.pl";
    const userPassword = "PASSword123!";

    cy.get("input[data-qa='login-email']").as("emailInput");
    cy.get("input[data-qa='login-password']").as("passwordInput");
    loginPage.logIn(
      "button[data-qa='login-button']",
      "@emailInput",
      "@passwordInput",
      userEmail,
      userPassword,
    );
    actionOnPage.clickButton("a[href='/logout");
    utils.isPageUrlCorrect("/login");
  });
});
