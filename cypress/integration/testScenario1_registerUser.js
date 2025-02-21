/// <reference types="cypress" />
import HomePage from "../support/pageObject/homePage";
import LoginPage from "../support/pageObject/loginPage";
import Utils from "../support/pageObject/utils";
import SignupPage from "../support/pageObject/signupPage";

describe("TS1 - Register User", () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const utils = new Utils();
  const signupPage = new SignupPage();

  it.only("Register User", () => {
    const userName = "testUserName";
    const userEmail = "testemail9@email.pl";
    const userPassword = "PASSword123!";

    homePage.selectLoginPage();
    utils.isStringVisible("div.signup-form > h2", "New User Signup!");

    loginPage.typeInputData("input[data-qa='signup-name']", userName);
    loginPage.typeInputData("input[data-qa='signup-email']", userEmail);
    utils.clickButton("button[data-qa='signup-button']");

    utils.isPageUrlCorrect("/signup");
    utils.isStringVisible(
      "div.login-form > h2 >b",
      "Enter Account Information",
    );

    signupPage.chooseRadioWithTitle("div[id='uniform-id_gender1']");
    signupPage.isInputDataCorrect("input[id='name']", userName);
    signupPage.isInputDataCorrect("input[id='email']", userEmail);
    signupPage.typeSignUpData("input[id='password']", userPassword);
    signupPage.selectFormDropdown("select[id='days']", "12");
    signupPage.selectFormDropdown("select[id='months']", "4");
    signupPage.selectFormDropdown("select[id='years']", "2018");
    signupPage.markCheckbox("input[id='newsletter']");
    signupPage.markCheckbox("input[id='optin']");
    signupPage.typeSignUpData("input[id='first_name']", "firstName");
    signupPage.typeSignUpData("input[id='last_name']", "lastName");
    signupPage.typeSignUpData("input[id='address1']", "address1");
    signupPage.typeSignUpData("input[id='address2']", "address2e");
    signupPage.selectFormDropdown("select[id='country']", "Canada");
    signupPage.typeSignUpData("input[id='state']", "state1");
    signupPage.typeSignUpData("input[id='city']", "city1");
    signupPage.typeSignUpData("input[id='zipcode']", "123123");
    signupPage.typeSignUpData("input[id='mobile_number']", "123456789");

    utils.clickButton("button[data-qa='create-account']");

    utils.isPageUrlCorrect("/account_created");
    cy.get("div.col-sm-9.col-sm-offset-1 > h2 > b").as("sectionTitle");
    utils.isStringVisible("@sectionTitle", "Account Created!");

    //at this point there is critical bug on the site and there is no option to continue
    //continue button doesn't repond

    //utils.clickButton("a[data-qa='continue-button']")
    //cy.get('a i.fa-user').parent().as("LoggedAsButton")
    //homePage.checkIsUserLoggedIn("@LoggedAsButton", userName)

    //utils.clickButton("a[href='/delete account']")
    //utils.isStringVisible("@sectionTitle", "Account Deleted!")
  });
  it("Register User with existing email", () => {
    const userName = "testUserName";

    homePage.selectLoginPage();
    loginPage.typeInputData("input[data-qa='signup-name']", userName);
    loginPage.typeInputData(
      "input[data-qa='signup-email']",
      "testemail@email.pl",
    );
    utils.clickButton("button[data-qa='signup-button']");

    utils.isStringVisible(
      "form[action='/signup'] > p",
      "Email Address already exist!",
    );
  });
});
