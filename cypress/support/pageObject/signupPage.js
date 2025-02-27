class SignupPage {
  isInputDataCorrect(selector, valueToCheck) {
    cy.get(selector).should("have.value", valueToCheck);
  }
}

export default SignupPage;
