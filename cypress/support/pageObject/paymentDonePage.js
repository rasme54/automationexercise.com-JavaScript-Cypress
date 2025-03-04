class PaymentDonePage {
  downloadInvocie(newUser, price) {
    cy.get(`a[href='/download_invoice/${price}']`).should("be.visible");
    cy.window()
      .document()
      .then(function (doc) {
        doc.addEventListener("click", () => {
          setTimeout(function () {
            doc.location.reload();
          }, 5000);
        });
        cy.get(`a[href='/download_invoice/${price}']`).click();
      });
    const filePath = "cypress/downloads/invoice.txt";
    cy.readFile(filePath).should("exist");
    cy.readFile(filePath).then((text) => {
      expect(text).to.contain(`Hi ${newUser.firstName} ${newUser.lastName}, Your total purchase amount is ${price}. Thank you`);
    });
  }
}

export default PaymentDonePage;
