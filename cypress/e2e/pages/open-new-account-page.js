class OpenNewAccountPage {
  selectType(value) {
    cy.get("[id='type']").select(value);
    return this;
  }

  selectAccountId(value) {
    cy.get("[id='fromAccountId']").select(value);
    return this;
  }

  clickOpenNewAccount() {
    cy.get("[value='Open New Account']").click();
    return this;
  }

  accountResultControl() {
    cy.get("[id='openAccountResult']").should("be.visible");
    return this;
  }

  accountResultTitleControl() {
    cy.get("[id='openAccountResult'] [class='title']").should("be.visible");
    return this;
  }

  accountResultTextController() {
    cy.get("[id='openAccountResult'] p")
      .first()
      .should("have.text", "Congratulations, your account is now open.");
    return this;
  }

  accountResultIdControl() {
    cy.get("[id='newAccountId']").should("be.visible");
    return this;
  }
}

export default OpenNewAccountPage;
