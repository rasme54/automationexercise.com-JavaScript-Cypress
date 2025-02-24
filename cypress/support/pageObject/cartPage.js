class CartPage {
  isNumberOfElementsEqualTo(selector, numberOfElements) {
    cy.get(selector).then((elements) => {
      expect(elements).to.have.length(numberOfElements);
    });
  }
}

export default CartPage;
