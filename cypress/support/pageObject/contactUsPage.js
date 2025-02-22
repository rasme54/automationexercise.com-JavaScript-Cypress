class ContactUsPage {
  uploadFile(selector, fileLocation) {
    cy.get(selector).attachFile(fileLocation);
  }
}
export default ContactUsPage;
