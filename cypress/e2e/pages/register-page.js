class RegisterPage {
  fillFirstName(value) {
    cy.get("[id='customer.firstName']").type(value);
    return this;
  }

  fillLastName(value) {
    cy.get("[id='customer.lastName']").type(value);
    return this;
  }

  fillAddress(value) {
    cy.get("[id='customer.address.street']").type(value);
    return this;
  }

  fillAddressCity(value) {
    cy.get("[id='customer.address.city']").type(value);
    return this;
  }

  fillAddressState(value) {
    cy.get("[id='customer.address.state']").type(value);
    return this;
  }

  fillAddressZipCode(value) {
    cy.get("[id='customer.address.zipCode']").type(value);
    return this;
  }

  fillCustomerPhone(value) {
    cy.get("[id='customer.phoneNumber']").type(value);
    return this;
  }

  fillCustomerSSN(value) {
    cy.get("[id='customer.ssn']").type(value);
    return this;
  }

  fillCustomerUserName(value) {
    cy.get("[id='customer.username']").type(value);
    return this;
  }

  fillCustomerPassword(value) {
    cy.get("[id='customer.password']").type(value);
    return this;
  }

  fillCustomerRepeatedPassword(value) {
    cy.get("[id='repeatedPassword']").type(value);
    return this;
  }

  registerClick() {
    cy.get("[value='Register']").click();
    return this;
  }

  textController(account) {
    cy.get("[class='title']").should("have.text", "Welcome " + account);
    return this;
  }
}

export default RegisterPage;
