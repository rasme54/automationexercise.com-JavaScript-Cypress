/// <reference types="cypress" />
import ActionOnPage from "../support/pageObject/actionOnPage";
import HomePage from "../support/pageObject/homePage";
import Utils from "../support/pageObject/utils";
import SignupPage from "../support/pageObject/signupPage";

describe("TS1 - Register User", () => {
  const actionOnPage = new ActionOnPage();
  const homePage = new HomePage();
  const utils = new Utils();
  const signupPage = new SignupPage();

  beforeEach(() => {
    homePage.selectLoginPage();
  });

  it("Register User", () => {
    const userName = "testUserName";
    const userEmail = "testemail9@email.pl";
    const userPassword = "PASSword123!";

    utils.isStringVisible("div.signup-form > h2", "New User Signup!");

    actionOnPage.typeInputValue("input[data-qa='signup-name']", userName);
    actionOnPage.typeInputValue("input[data-qa='signup-email']", userEmail);
    actionOnPage.clickButton("button[data-qa='signup-button']");

    utils.isPageUrlCorrect("/signup");
    utils.isStringVisible(
      "div.login-form > h2 >b",
      "Enter Account Information",
    );

    actionOnPage.chooseRadio("div[id='uniform-id_gender1']");
    signupPage.isInputDataCorrect("input[id='name']", userName);
    signupPage.isInputDataCorrect("input[id='email']", userEmail);
    actionOnPage.typeInputValue("input[id='password']", userPassword);
    actionOnPage.selectFormDropdown("select[id='days']", "12");
    actionOnPage.selectFormDropdown("select[id='months']", "4");
    actionOnPage.selectFormDropdown("select[id='years']", "2018");
    actionOnPage.markCheckbox("input[id='newsletter']");
    actionOnPage.markCheckbox("input[id='optin']");
    actionOnPage.typeInputValue("input[id='first_name']", "firstName");
    actionOnPage.typeInputValue("input[id='last_name']", "lastName");
    actionOnPage.typeInputValue("input[id='address1']", "address1");
    actionOnPage.typeInputValue("input[id='address2']", "address2e");
    actionOnPage.selectFormDropdown("select[id='country']", "Canada");
    actionOnPage.typeInputValue("input[id='state']", "state1");
    actionOnPage.typeInputValue("input[id='city']", "city1");
    actionOnPage.typeInputValue("input[id='zipcode']", "123123");
    actionOnPage.typeInputValue("input[id='mobile_number']", "123456789");

    actionOnPage.clickButton("button[data-qa='create-account']");

    utils.isPageUrlCorrect("/account_created");
    cy.get("div.col-sm-9.col-sm-offset-1 > h2 > b").as("sectionTitle");
    utils.isStringVisible("@sectionTitle", "Account Created!");

    actionOnPage.clickButton("a[data-qa='continue-button']");
    cy.get("a > i.fa.fa-user").parent().as("aTagWithString");
    utils.isUserLogged("@aTagWithString", "a > b", " Logged in as ", userName);

    actionOnPage.clickButton("a[href='/delete_account']");
    utils.isStringVisible("@sectionTitle", "Account Deleted!");
  });
  it("Register User with existing email", () => {
    const userName = "testUserName";

    actionOnPage.typeInputValue("input[data-qa='signup-name']", userName);
    actionOnPage.typeInputValue(
      "input[data-qa='signup-email']",
      "testemail@email.pl",
    );
    actionOnPage.clickButton("button[data-qa='signup-button']");

    utils.isStringVisible(
      "form[action='/signup'] > p",
      "Email Address already exist!",
    );
  });
});
