/// <reference types="cypress" />
import ActionOnPage from "../support/pageObject/actionOnPage";
import HomePage from "../support/pageObject/homePage";
import Utils from "../support/pageObject/utils";

describe("TS1 - Register User", () => {
  const actionOnPage = new ActionOnPage();
  const homePage = new HomePage();
  const utils = new Utils();

  beforeEach(function () {
    homePage.selectLoginPage();
    cy.fixture("newUser").then((data) => {
      this.newUser = data;
    });
    cy.fixture("loginData").then((data) => {
      this.loginData = data;
    });
  });

  it("Correct Register User", function () {
    utils.isStringContains("div.signup-form > h2", "New User Signup!");
    actionOnPage.typeInputValue("input[data-qa='signup-name']", this.newUser.userName);
    actionOnPage.typeInputValue("input[data-qa='signup-email']", this.newUser.userEmail);
    actionOnPage.clickButton("button[data-qa='signup-button']");
    utils.isPageUrlCorrect("/signup");
    utils.isStringContains("div.login-form > h2 >b", "Enter Account Information");
    cy.fillSignUpForm();
    actionOnPage.clickButton("button[data-qa='create-account']");
    utils.isPageUrlCorrect("/account_created");
    cy.get("div.col-sm-9.col-sm-offset-1 > h2 > b").as("sectionTitle");
    utils.isStringContains("@sectionTitle", "Account Created!");
    actionOnPage.clickButton("a[data-qa='continue-button']");
    cy.get("a > i.fa.fa-user").parent().as("aTagWithString");
    utils.isUserLogged("@aTagWithString", "a > b", " Logged in as ", this.newUser.userName);
    actionOnPage.clickButton("a[href='/delete_account']");
    utils.isStringContains("@sectionTitle", "Account Deleted!");
  });

  it("Incorrect Register User - existing email", function () {
    utils.isStringContains("div.signup-form > h2", "New User Signup!");
    actionOnPage.typeInputValue("input[data-qa='signup-name']", this.loginData.userName);
    actionOnPage.typeInputValue("input[data-qa='signup-email']", this.loginData.correctUserEmail);
    actionOnPage.clickButton("button[data-qa='signup-button']");
    utils.isStringContains("form[action='/signup'] > p", "Email Address already exist!");
  });
});
