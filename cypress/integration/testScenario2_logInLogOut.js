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

  beforeEach(function () {
    homePage.selectLoginPage();
    cy.fixture("loginData").then((data) => {
      this.loginData = data;
    });
  });

  it("Login User with correct email and password", function () {
    cy.get("input[data-qa='login-email']").as("emailInput");
    cy.get("input[data-qa='login-password']").as("passwordInput");
    loginPage.logIn(
      "button[data-qa='login-button']",
      "@emailInput",
      "@passwordInput",
      this.loginData.correctUserEmail,
      this.loginData.userPassword,
    );
    cy.get("a > i.fa.fa-user").parent().as("aTagWithString");
    loginPage.isUserLogged(
      "@aTagWithString",
      "a > b",
      " Logged in as ",
      this.loginData.userName,
    );
  });

  it("Login User with incorrect email and password", function () {
    cy.get("input[data-qa='login-email']").as("emailInput");
    cy.get("input[data-qa='login-password']").as("passwordInput");
    loginPage.logIn(
      "button[data-qa='login-button']",
      "@emailInput",
      "@passwordInput",
      this.loginData.incorrectUserEmail,
      this.loginData.userPassword,
    );
    loginPage.isStringContains(
      "form[action='/login'] > p",
      "Your email or password is incorrect!",
    );
  });

  it("Logout User", function () {
    cy.get("input[data-qa='login-email']").as("emailInput");
    cy.get("input[data-qa='login-password']").as("passwordInput");
    loginPage.logIn(
      "button[data-qa='login-button']",
      "@emailInput",
      "@passwordInput",
      this.loginData.correctUserEmail,
      this.loginData.userPassword,
    );
    loginPage.clickButton("a[href='/logout");
    loginPage.isPageUrlCorrect("/login");
  });
});
