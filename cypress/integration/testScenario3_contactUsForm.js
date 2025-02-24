/// <reference types="cypress" />
import ActionOnPage from "../support/pageObject/actionOnPage";
import ContactUsPage from "../support/pageObject/contactUsPage";
import HomePage from "../support/pageObject/homePage";
import Utils from "../support/pageObject/utils";

describe("TS2 - ContactUsForm", () => {
  const actionOnPage = new ActionOnPage();
  const contactUsPage = new ContactUsPage();
  const homePage = new HomePage();
  const utils = new Utils();

  it("Contact Us Form", () => {
    const userName = "testUserName";
    const userEmail = "testemail9@email.pl";
    const userSubject = "testSubject";
    const userMessage = "testMessage";

    homePage.selectContactUsPage();
    utils.isStringContains("div.contact-form > h2", "Get In Touch");

    actionOnPage.typeInputValue("input[data-qa='name']", userName);
    actionOnPage.typeInputValue("input[data-qa='email']", userEmail);
    actionOnPage.typeInputValue("input[data-qa='subject']", userSubject);
    actionOnPage.typeInputValue("textarea[data-qa='message']", userMessage);
    contactUsPage.uploadFile(
      "input[name='upload_file']",
      "input[class='form-control'][name='upload_file']",
      "../fixtures/test.jpg",
      "test.jpg",
    );

    actionOnPage.clickButton("input[data-qa='submit-button']");

    utils.isStringContains(
      "div[class='status alert alert-success']",
      "Success! Your details have been submitted successfully.",
    );
  });
});
