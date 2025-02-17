/// <reference types="cypress" />


describe("TS4 - VerifyPages", () => {
    it("TestCase Page", () => {
        // navigate and check visability of the website
        cy.visit("/")
        cy.get("body").should("be.visible")

        cy.contains(" Test Cases").click()
        cy.url().should("include", "/test_cases")
    })
    it.only("AllProducts/ViewProduct Page", () => {
        cy.visit("/")
        cy.get("body").should("be.visible")

        cy.contains(" Products").click()
        cy.url().should("include", "/products")
        cy.get("body").should("be.visible")
        cy.contains("View Product").eq(0).click()

        //Verify that detail detail is visible: product name, category, price, availability, condition, brand
        // product name
        cy.get(".product-information > h2").should("be.visible")
        // category
        cy.get(".product-information > p").should("be.visible")


    })
})