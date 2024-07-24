/// <reference types="cypress" />

describe('Basket Tests', () => {
    
    it('Login unseccesfull', () => {
      cy.visit("https://parabank.parasoft.com/");
      cy.get("[name='username']").type("test@gmail.com");
      cy.get("[name='password']").type("123456");
      cy.get("[class='login'] input[type='submit']").click();
      cy.get("[class='error']").should("have.text","The username and password could not be verified.");
      //cy.get("[id='gh-ug'] a").eq(0).click();  bu sekilde de siralamaya gore istedigimiz Id getirtebilriz.

    })

    it('Login Succesfull', () => {
        cy.visit("https://parabank.parasoft.com/");
        cy.get("[name='username']").type("mbiskin@hotmail.com");
        cy.get("[name='password']").type("123456");
        cy.get("[class='login'] input[type='submit']").click();
        cy.get("[class='smallText']").should("be.visible");
      })

      it('Open New Account', () => {
        cy.visit("https://parabank.parasoft.com/");
        cy.get("[name='username']").type("mbiskin@hotmail.com");
        cy.get("[name='password']").type("123456");
        cy.get("[class='login'] input[type='submit']").click();
        cy.get("[class='smallText']").should("be.visible");
        cy.get("[id='leftPanel'] a").first().click();
        cy.get("[id='type']").select("SAVINGS");
        cy.get("[id='fromAccountId']").select("13677");
        cy.get("[value='Open New Account']").click();
        cy.get("[id='openAccountResult']").should("be.visible");
        cy.get("[id='openAccountResult'] [class='title']").should("be.visible");
        cy.get("[id='openAccountResult'] p").first().should("have.text","Congratulations, your account is now open.");
        cy.get("[id='newAccountId']").should("be.visible");
      })

      it('Account Overview', () => {
        cy.visit("https://parabank.parasoft.com/");
        cy.get("[name='username']").type("mbiskin@hotmail.com");
        cy.get("[name='password']").type("123456");
        cy.get("[class='login'] input[type='submit']").click();
        cy.get("[class='smallText']").should("be.visible");
        cy.get("[id='leftPanel'] a").eq(1).click();
        cy.get("[id='accountTable'] a").last().click();
        cy.get("[id='balance']").should("have.text","$100.00");
       
      })


  

})