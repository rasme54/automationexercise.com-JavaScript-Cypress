/// <reference types="cypress" />

describe("TS4 - VerifyPages", () => {
  it("TestCase Page", () => {
    // navigate and check visability of the website
    cy.visit("/");
    cy.get("body").should("be.visible");

    cy.contains(" Test Cases").click();
    cy.url().should("include", "/test_cases");
  });
  it("AllProducts/ViewProduct Page", () => {
    cy.visit("/");
    cy.get("body").should("be.visible");

    cy.contains(" Products").click();
    cy.url().should("include", "/products");
    cy.get("body").should("be.visible");
    cy.contains("View Product").eq(0).click();

    // Verify that detail detail is visible: product name, category, price, availability, condition, brand
    // product name
    cy.get(".product-information > h2").should("be.visible");
    // category
    cy.get(".product-information > p").eq(0).should("be.visible");
    // price
    cy.get("span").contains("Rs. 500").should("be.visible");
    // availability
    cy.get(".product-information > p").eq(1).should("be.visible");
    // condition
    cy.get(".product-information > p").eq(2).should("be.visible");
    // brand
    cy.get(".product-information > p").eq(3).should("be.visible");
  });
});
