/// <reference types="cypress" />


describe("TS5 - SearchProduct", () => {
    it("SearchProduct Page", () => {
        // navigate and check visability of the website
        cy.visit("/")
        cy.get("body").should("be.visible")
        cy.contains(" Products").click()
        cy.url().should("include", "/products")
        cy.get("body").should("be.visible")

        //finding Sleeveless Dress
        cy.get("#search_product").type("Sleeveless Dress")
        cy.get("#submit_search").click()
    })
})