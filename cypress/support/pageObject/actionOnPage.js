class ActionOnPage {
  chooseRadio(radio) {
    cy.get(radio).click();
    //cy.get(radio).should("be.checked");
  }
  clickButton(selector) {
    cy.get(selector).should("be.visible");
    cy.get(selector).click();
  }
  markCheckbox(selector) {
    cy.get(selector).check();
    cy.get(selector).should("be.checked");
  }
  selectFormDropdown(selektor, dateValueString) {
    cy.get(selektor).select(dateValueString);
    cy.get(selektor).should("have.value", dateValueString);
  }
  typeInputText(selector, data) {
    cy.get(selector).type(data);
    cy.get(selector).should("have.text", data);
  }
  typeInputValue(selector, data) {
    cy.get(selector).type(data);
    cy.get(selector).should("have.value", data);
  }
}

export default ActionOnPage;
