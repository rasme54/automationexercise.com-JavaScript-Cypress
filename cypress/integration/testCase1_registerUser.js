/// <reference types="cypress" />


describe("TC1 - Register User", () => {
    it("Register User", () => {
        cy.visit("/")
        cy.get("body").should("be.visible")
        // entry to the login/registration page
        cy.contains("[href='/login']", " Signup / Login").click()
        cy.url().should("include", "/login")
        cy.get("div[class='signup-form']").should("be.visible")

        // entering sign-up data
        cy.get("input[placeholder='Name']").as("nameInput")
        cy.get("input[placeholder='Email Address']").eq(1).as("emailInput")

        cy.get("@nameInput").type("testUserName")
        cy.get("@nameInput").invoke("val").as("valueNameInput")
        cy.get("@emailInput").type("testemail3@email.pl")
        cy.get("@emailInput").invoke("val").as("valueEmailInput")
        // confirming data
        cy.get("button[type='submit']").contains("Signup").click()

        // verification of page visability
        cy.url().should("include", "/signup")
        cy.contains("Enter Account Information").should("be.visible")
        
        // entering data
        // radio
        cy.get("#id_gender1").check()
        cy.get("#id_gender1").should("be.checked")
        // name
        cy.get("@valueNameInput").then((checkedNameInput) => {
            cy.get("#name").should("have.value", checkedNameInput)
        })
        // email
        cy.get("@valueEmailInput").then((checkedEmailInput) => {
            cy.get("#email").should("have.value", checkedEmailInput)
        })

        // password
        cy.get("#password").type("PASSword123!")

        // date of birth - selecting option in selector component in three different ways
        // day - by text
        cy.get("select[id='days']").select("14")
        // month - by index
        cy.get("select[id='months']").select(4)
        // year - by value attribut
        cy.get("select[id='years']").select("2019")

        // newsletter
        cy.get("#newsletter").check()
        // special offers
        cy.get("#optin").check()

        // first name
        cy.get("input[id='first_name']").type("firstName")
        // last name
        cy.get("input[id='last_name']").type("lastName")
        // address
        cy.get("input[id='address1']").type("address1")
        cy.get("input[id='address2']").type("address2")
        cy.get("select[id='country']").select("Canada")
        cy.get("input[id='state']").type("state1")
        cy.get("input[id='city']").type("city1")
        cy.get("input[id='zipcode']").type("123123")
        // phone number
        cy.get("input[id='mobile_number']").type("123456789")

        // sumbit
        cy.contains("Create Account").click()

        cy.get("b").contains("Account Created!").as("successTitle")
        cy.get("@successTitle").should("be.visible")

        // continue
        cy.contains("Continue").click()
        cy.contains("Logged in as testUserName").should("be.visible")

        // delete account
        cy.contains(" Delete Account").click()

        cy.contains("Account Deleted!").should("be.visible")
        

    })
})