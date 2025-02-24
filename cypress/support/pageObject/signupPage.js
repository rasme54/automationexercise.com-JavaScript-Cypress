class SignupPage {
  isInputDataCorrect(selector, valueToCheck) {
    cy.get(selector).should("have.value", valueToCheck);
  }
  typeSignUpData(selector, data) {
    cy.get(selector).type(data);
    cy.get(selector).should("have.value", data);
  }
}

export default SignupPage;
