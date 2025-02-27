class ContactUsPage {
  uploadFile(fileLocation, fileName) {
    cy.get("input[name='upload_file']").attachFile(fileLocation);
    cy.get("input[name='upload_file']").then(($input) => {
      expect($input[0].files[0].name).to.eq(fileName);
    });
    cy.get("input[class='form-control'][name='upload_file']").click;
  }
}
export default ContactUsPage;
