class CartPage {
  createListOfElements(selector) {
    cy.get(selector).then(($elements) => {
      const listOfElements = [...$elements];
      return cy.wrap(listOfElements);
    });
  }
  isNumberOfElementsEqualTo(selector, numberOfElements) {
    cy.get(selector).then((elements) => {
      expect(elements).to.have.length(numberOfElements);
    });
  }
  isProductDetailEqualTo(selector, value) {
    cy.get(selector).should("contain.text", value);
  }
  proceedToCheckout() {
    cy.get("a[class='btn btn-default check_out']").should("be.visible").click();
  }
}

export default CartPage;
