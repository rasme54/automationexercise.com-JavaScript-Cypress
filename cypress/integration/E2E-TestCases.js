/// <reference types="cypress" />

describe("E2E - Test Cases", () => {
    it("Register User", () => {
        cy.visit("/")
        cy.get("body").should("be.visible")
        // entry to the login/registration page
        cy.contains("[href='/login']", " Signup / Login").click()
        cy.url().should("include", "/login")
        cy.get("div[class='signup-form']").should("be.visible")

        // entering sign-up data
        cy.get("input[placeholder='Name']").type("testUserName")
        cy.get("input[placeholder='Email Address']").eq(1).type("testusername@MediaList.pl")
        // confirming data
        cy.get("button[type='submit']").contains("Signup").click()

        // verification of page visability
        cy.url().should("include", "/signup")
        cy.get("b").contains("Enter Account Information").should("be.visible")
        
        // entering data
        //radio
        cy.get("#id_gender1").check()
        cy.get("#id_gender1").should("be.checked")

    })
})