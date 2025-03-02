class PaymentPage {
  typePaymentDetails(paymentData) {
    cy.get("input[data-qa='name-on-card']").type(paymentData.nameOnCard);
    cy.get("input[data-qa='card-number']").type(paymentData.cardNumber);
    cy.get("input[data-qa='cvc']").type(paymentData.cvc);
    cy.get("input[data-qa='expiry-month']").type(paymentData.expirationDateOne);
    cy.get("input[data-qa='expiry-year']").type(paymentData.expirationDateTwo);
  }
}
export default PaymentPage;
