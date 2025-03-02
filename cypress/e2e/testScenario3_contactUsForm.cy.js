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

  beforeEach(function () {
    cy.fixture("contactForm").then(function (data) {
      this.formData = data;
    });
  });

  it("Contact Us Form", function () {
    homePage.selectContactUsPage();
    utils.isStringContains("div.contact-form > h2", "Get In Touch");
    actionOnPage.typeInputValue("input[data-qa='name']", this.formData.userName);
    actionOnPage.typeInputValue("input[data-qa='email']", this.formData.userEmail);
    actionOnPage.typeInputValue("input[data-qa='subject']", this.formData.userSubject);
    actionOnPage.typeInputValue("textarea[data-qa='message']", this.formData.userMessage);
    contactUsPage.uploadFile("../fixtures/test.jpg", "test.jpg");
    actionOnPage.clickButton("input[data-qa='submit-button']");
    utils.isStringContains("div[class='status alert alert-success']", "Success! Your details have been submitted successfully.");
  });
});
