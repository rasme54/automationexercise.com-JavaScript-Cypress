/// <reference types="cypress" />
import AccountCreatedPage from "../support/pageObject/accountCreatedPage";
import DeleteAccountPage from "../support/pageObject/deleteAccountPage";
import HomePage from "../support/pageObject/homePage";
import LoginPage from "../support/pageObject/loginPage";
import SignupPage from "../support/pageObject/signupPage";

describe("TS1 - Register User", () => {
  const accountCreatedPage = new AccountCreatedPage();
  const deleteAccountPage = new DeleteAccountPage();
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const signupPage = new SignupPage();

  beforeEach(() => {
    homePage.selectLoginPage();
  });

  it("Correct Register User", () => {
    cy.fixture("loginData").then((data) => {
      loginPage.isStringContains("div.signup-form > h2", "New User Signup!");
      loginPage.typeInputValue("input[data-qa='signup-name']", data.userName);
      loginPage.typeInputValue("input[data-qa='signup-email']", data.userEmail);
      loginPage.clickButton("button[data-qa='signup-button']");

      signupPage.isPageUrlCorrect("/signup");
      signupPage.isStringContains(
        "div.login-form > h2 >b",
        "Enter Account Information",
      );
      cy.fillSignUpForm();
      signupPage.clickButton("button[data-qa='create-account']");
      accountCreatedPage.isPageUrlCorrect("/account_created");
      cy.get("div.col-sm-9.col-sm-offset-1 > h2 > b").as("sectionTitle");
      accountCreatedPage.isStringContains("@sectionTitle", "Account Created!");
      accountCreatedPage.clickButton("a[data-qa='continue-button']");
      cy.get("a > i.fa.fa-user").parent().as("aTagWithString");
      homePage.isUserLogged(
        "@aTagWithString",
        "a > b",
        " Logged in as ",
        data.userName,
      );
      homePage.clickButton("a[href='/delete_account']");
      deleteAccountPage.isStringContains("@sectionTitle", "Account Deleted!");
    });
  });

  it("Incorrect Register User - existing email", () => {
    cy.fixture("loginData").then((data) => {
      loginPage.isStringContains("div.signup-form > h2", "New User Signup!");
      loginPage.typeInputValue("input[data-qa='signup-name']", data.userName);
      loginPage.typeInputValue(
        "input[data-qa='signup-email']",
        data.existingEmail,
      );
      loginPage.clickButton("button[data-qa='signup-button']");

      loginPage.isStringContains(
        "form[action='/signup'] > p",
        "Email Address already exist!",
      );
    });
  });
});
