/// <reference types="cypress" />
import ContactUsPage from "../support/pageObject/contactUsPage";
import HomePage from "../support/pageObject/homePage";
import Utils from "../support/pageObject/utils";

describe("TS2 - ContactUsForm", () => {
  const contactUsPage = new ContactUsPage();
  const homePage = new HomePage();
  const utils = new Utils();

  it("Filling contactUsForm", () => {
    const userName = "testUserName";
    const userEmail = "testemail9@email.pl";
    const userSubject = "testSubject";
    const userMessage = "testMessage";

    homePage.selectContactUsPage();
    utils.isStringVisible("div.contact-form > h2", "Get In Touch");

    cy.get("div[class='form-group col-md-6']").eq(0).as("nameInput");
    contactUsPage.typeInputData("@nameInput", userName);

    cy.get("div[class='form-group col-md-6']").eq(1).as("emailInput");
    contactUsPage.typeInputData("@emailInput", userEmail);

    cy.get("div[class='form-group col-md-12']").eq(0).as("userSubject");
    contactUsPage.typeInputData("@userSubject", userSubject);

    cy.get("div[class='form-group col-md-12']").eq(1).as("messageInput");
    contactUsPage.typeInputData("@messageInput", userMessage);

    //upload-file part
    contactUsPage.uploadFile(
      "input[name='upload_file']",
      "../fixtures/test.jpg",
    );
    cy.get("div[class='form-group col-md-12']").eq(2).should("exist");

    cy.get('input[type="file"]').then(($input) => {
      expect($input[0].files[0].name).to.eq("test.jpg");
    });

    //submit
    cy.get("input[class='form-control'][name='upload_file']").click();
  });
});
