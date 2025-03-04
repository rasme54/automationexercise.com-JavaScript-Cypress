class CheckoutPage {
  checkProductDetails(newUser) {
    cy.get("div[class='col-xs-12 col-sm-6']").each(($el) => {
      cy.wrap($el)
        .find("li.address_firstname.address_lastname")
        .then(($name) => {
          expect($name.text()).contain(newUser.firstName);
          expect($name.text()).contain(newUser.lastName);
        });
      cy.wrap($el)
        .find("li.address_address1.address_address2")
        .eq(1)
        .then(($address1) => {
          expect($address1.text()).to.equal(newUser.addressOne);
        });
      cy.wrap($el)
        .find("li.address_address1.address_address2")
        .eq(2)
        .then(($address2) => {
          expect($address2.text()).to.equal(newUser.addressTwo);
        });
      cy.wrap($el)
        .find("li.address_city.address_state_name.address_postcode")
        .then(($addressPostcode) => {
          expect($addressPostcode.text()).contain(newUser.city);
          expect($addressPostcode.text()).contain(newUser.state);
          expect($addressPostcode.text()).contain(newUser.zipCode);
        });
      cy.wrap($el)
        .find("li.address_country_name")
        .then(($country) => {
          expect($country.text()).to.equal(newUser.country);
        });
      cy.wrap($el)
        .find("li.address_phone")
        .then(($mobileNumber) => {
          expect($mobileNumber.text()).to.equal(newUser.mobileNumber);
        });
    });
  }
  // downloadPriceToString() {
  //   const numberOfElements = cy.get("td > p.cart_total_price").its("length")
  //   cy.get("td > p.cart_total_price").eq(numberOfElements).invoke("text").as("price");

  // }
  downloadPriceToString() {
    return cy
      .get("td > p.cart_total_price")
      .its("length")
      .then((numberOfElements) => {
        // Get the last element
        return cy
          .get("td > p.cart_total_price")
          .eq(numberOfElements - 1)
          .invoke("text")
          .then((text) => {
            // Remove the "Rs. " prefix
            return text.replace("Rs. ", "");
          });
      });
  }
}
export default CheckoutPage;
