/// <reference types="cypress" />


describe("TS6 - VerifySubscription", () => {
    it("Subscription in home page", () => {
        cy.visit("/")
        cy.get("body").should("be.visible")
        // scrolling to footer
        cy.get(".footer-widget").trigger("scrollIntoView")
        // verify SUBSCRIPTION title
        cy.get(".single-widget > h2").should("be.visible")
        //typing email
        cy.get("#susbscribe_email").type("testemail@test.pl")
        cy.get("#subscribe").click()
        //subscription verify
        cy.get("div[class='alert-success alert']").should("contain", "You have been successfully subscribed!")
    })
    it("Subscription in cart page", () => {
        cy.visit("/")
        cy.get("body").should("be.visible")
        cy.get("a[href='/view_cart']").eq(0).click
        // scrolling to footer
        cy.get(".footer-widget").trigger("scrollIntoView")
        cy.get(".single-widget > h2").should("be.visible")
        //typing email
        cy.get("#susbscribe_email").type("testemail@test.pl")
        cy.get("#subscribe").click()
        //subscription verify
        cy.get("div[class='alert-success alert']").should("contain", "You have been successfully subscribed!")
    }) 
})