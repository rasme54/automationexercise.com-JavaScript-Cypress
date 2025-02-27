class ContactUsPage {
  uploadFile(selector, buttonSelector, fileLocation, fileName) {
    cy.get(selector).attachFile(fileLocation);
    cy.get(selector).then(($input) => {
      expect($input[0].files[0].name).to.eq(fileName);
    });
    cy.get(buttonSelector).click;
  }
}
export default ContactUsPage;
