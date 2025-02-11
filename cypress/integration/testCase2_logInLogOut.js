/// <reference types="cypress" />


describe("TC2 - LogInLogOut", () => {
    it("Log In", () => {
        // navigate and check visability of the website
        cy.visit("/")
        cy.get("body").should("be.visible")

        cy.contains(" Signup / Login"). click()
        cy.contains("Login to your account").should("be.visible")
    })
})