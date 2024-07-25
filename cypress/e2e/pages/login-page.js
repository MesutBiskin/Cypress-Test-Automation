class LoginPage {
  fillUserName(value) {
    cy.get("[name='username']").type(value);
    return this;
  }

  fillPassword(value) {
    cy.get("[name='password']").type(value);
    return this;
  }

  visit() {
    cy.visit("https://parabank.parasoft.com/");
    return this;
  }

  clickLogin() {
    cy.get("[class='login'] input[type='submit']").click();
    return this;
  }

  errorMessageController(value) {
    cy.get("[class='error']").should("have.text", value);
    return this;
  }
  clickRegister() {
    cy.get("[href='register.htm']").click();
    return this;
  }
}

export default LoginPage;
