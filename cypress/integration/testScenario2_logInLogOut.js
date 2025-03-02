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
    loginPage.logIn(this.loginData);
    utils.isUserLogged(this.loginData);
  });

  it("Login User with incorrect email and password", function () {
    loginPage.incorrectlogIn(this.loginData);
    utils.isStringContains("form[action='/login'] > p", "Your email or password is incorrect!");
  });

  it("Logout User", function () {
    loginPage.logIn(this.loginData);
    utils.isUserLogged(this.loginData);
    actionOnPage.clickButton("a[href='/logout");
    utils.isPageUrlCorrect("/login");
  });
});
