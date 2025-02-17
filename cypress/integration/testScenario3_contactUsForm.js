/// <reference types="cypress" />


describe("TS2 - ContactUsForm", () => {
    it("Filling contactUsForm", () => {
        // navigate and check visability of the website
        cy.visit("/")
        cy.get("body").should("be.visible")

        cy.contains(" Contact us").click()
        cy.get("h2[class='title text-center']").contains("Get In Touch").should("be.visible")

        //filling the form
        //name
        cy.get("div[class='form-group col-md-6']").eq(0).type("testName")
        //email
        cy.get("div[class='form-group col-md-6']").eq(1).type("testEmail@test.pl")
        //subject
        cy.get("div[class='form-group col-md-12']").eq(0).type("testSubject")
        //message
        cy.get("div[class='form-group col-md-12']").eq(1).type("testMessage")

        //upload-file part

        //submit
        cy.get("input[value='Submit']").click()

    })
})