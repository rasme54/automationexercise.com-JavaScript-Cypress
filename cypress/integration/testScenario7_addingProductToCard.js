/// <reference types="cypress" />

describe("TS6 - VerifySubscription", () => {
  it("Subscription in home page", () => {
    cy.visit("/");
    cy.get("body").should("be.visible");
    // click product button
    cy.get("a[href='/products']").click();
    cy.url().should("contain", "/products");
    // hover over second product and click 'Add to cart'
    cy.get(".product-image-wrapper").eq(0).realHover();
    cy.get(".product-overlay").eq(0).should("be.visible");
    cy.get("a[data-product-id='1']").eq(0).click();
    // assertion
    cy.get("p[class='text-center']")
      .eq(0)
      .should("contain", "Your product has been added to cart.");

    // // click 'Continue Shopping' button
    // cy.get("button[class='btn btn-success close-modal btn-block']").click()

    // // hover over second product and click 'Add to cart'
    // cy.get(".product-image-wrapper").eq(1).realHover()
    // cy.get(".product-overlay").eq(1).should("be.visible")
    // cy.get("a[data-product-id='']").eq(0).click()
    // // assertion
    // cy.get("p[class='text-center']").should("contain", "Your product has been added to cart.")
  });
});
