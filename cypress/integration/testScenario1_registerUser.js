/// <reference types="cypress" />
import HomePage from "../support/pageObject/homePage";
import LoginPage from "../support/pageObject/loginPage";
import Utils from "../support/pageObject/utils";
import SignupPage from "../support/pageObject/signupPage";

describe("TS1 - Register User", () => {
  const homePage = new HomePage()
  const loginPage = new LoginPage()
  const utils = new Utils()
  const signupPage = new SignupPage()

  it.only("Register User", () => {

    const userName = "testUserName"
    const userEmail = "testemail4@email.pl"

    homePage.selectLoginPage()
    utils.isStringVisible("div.signup-form > h2", "New User Signup!")

    loginPage.typeNewUserData("input[data-qa='signup-name']", userName)
    loginPage.typeNewUserData("input[data-qa='signup-email']", userEmail)
    loginPage.acceptData("button[data-qa='signup-button']")

    utils.isPageUrlCorrect("/signup")
    utils.isStringVisible("div.login-form > h2 >b", "Enter Account Information")

    signupPage.chooseRadioWithTitle("div[id='uniform-id_gender1']")
    signupPage.typeSignUpData()


    signupPage.isInputDataCorrect("input[id='name']", userName)
    signupPage.isInputDataCorrect("input[id='email']", userEmail)
    signupPage.typeSignUpData("input[id='password']", "PASSword123!")

    signupPage.selectDateOfBirth("select[id='days']", "12")
    signupPage.selectDateOfBirth("select[id='months']", "April")
    signupPage.selectDateOfBirth("select[id='years']", "2018")
    

    // // newsletter
    // cy.get("#newsletter").check();
    // // special offers
    // cy.get("#optin").check();

    // // first name
    // cy.get("input[id='first_name']").type("firstName");
    // // last name
    // cy.get("input[id='last_name']").type("lastName");
    // // address
    // cy.get("input[id='address1']").type("address1");
    // cy.get("input[id='address2']").type("address2");
    // cy.get("select[id='country']").select("Canada");
    // cy.get("input[id='state']").type("state1");
    // cy.get("input[id='city']").type("city1");
    // cy.get("input[id='zipcode']").type("123123");
    // // phone number
    // cy.get("input[id='mobile_number']").type("123456789");

    // // sumbit
    // cy.contains("Create Account").click();

    // cy.get("b").contains("Account Created!").as("successTitle");
    // cy.get("@successTitle").should("be.visible");

    // // continue
    // cy.contains("Continue").click();
    // cy.contains("Logged in as testUserName").should("be.visible");

    // // delete account
    // cy.contains(" Delete Account").click();

    // cy.contains("Account Deleted!").should("be.visible");
  });
  it("Register User with existing email", () => {
    cy.visit("/");
    pageBody.should("be.visible");
    // entry to the login/registration page
    cy.contains("[href='/login']", " Signup / Login").click();
    cy.url().should("include", "/login");

    //sign-in form visability
    cy.contains("New User Signup!").should("be.visible");

    //typing name and existing email
  });
});
