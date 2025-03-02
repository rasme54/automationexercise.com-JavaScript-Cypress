class CartPage {
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
    //cy.url().should("include", "/checkout");
  }
  checkDetailsOfProduct(valueOne, valueTwo) {
    cy.get("tbody > tr").each(($el) => {
      cy.wrap($el)
        .find("td.cart_price > p")
        .then(($price) => {
          const priceText = $price.text();
          expect(priceText).to.be.oneOf([valueOne, valueTwo]);
          cy.wrap($el)
            .find("td.cart_quantity > button")
            .then(($quantity) => {
              const quantity = $quantity.text();
              expect(quantity).to.be.oneOf(["1", "2"]);
              cy.wrap($el)
                .find("td.cart_total > p")
                .then(($total) => {
                  const total = $total.text();
                  expect(total).to.be.oneOf([valueOne, valueTwo]);
                });
            });
        });
    });
  }
  removeAllProductsFromCart;
}

export default CartPage;
