/// <reference types="cypress" />

describe("TS2 - LogInLogOut", () => {
  it("Log In - Positive Case", () => {
    // navigate and check visability of the website
    cy.visit("/");
    const pageBody = cy.get("body").should("be.visible");

    cy.contains(" Signup / Login").click();
    cy.contains("Login to your account").should("be.visible");

    // testemail3@email.pl PASSword123!
    cy.get("input[name='email']").eq(0).type("testemail@email.pl");
    cy.get("input[name='password']").eq(0).type("PASSword123!");
    // confirm
    cy.get("button[type='submit']").eq(0).click();
    //cy.get("i[class='fa fa-user']").should("contain", " Logged in as ${testUserName}")

    //I decited not to delete account at the end as iwas written in the test case description
  });
  it("Log in - Negative Case", () => {
    // navigate and check visability of the website
    cy.visit("/");
    pageBody.should("be.visible");

    cy.contains(" Signup / Login").click();
    cy.contains("Login to your account").should("be.visible");

    // negativeEmail@email.pl PASSword123!
    cy.get("input[name='email']").eq(0).type("negativeEmail@email.pl");
    cy.get("input[name='password']").eq(0).type("PASSword123!");

    cy.get("button[class='btn btn-default']").eq(0).click();
    cy.contains("Your email or password is incorrect!").should("be.visible");
  });
  it("Log out", () => {
    cy.visit("/");
    cy.get("body").should("be.visible");

    cy.contains(" Signup / Login").click();
    cy.contains("Login to your account").should("be.visible");

    // testemail3@email.pl PASSword123!
    cy.get("input[name='email']").eq(0).type("testemail@email.pl");
    cy.get("input[name='password']").eq(0).type("PASSword123!");
    // confirm
    cy.get("button[type='submit']").eq(0).click();

    cy.get("a[href='/logout']").should("be.visible").click();
    cy.url().should("include", "/login");
  });
});
