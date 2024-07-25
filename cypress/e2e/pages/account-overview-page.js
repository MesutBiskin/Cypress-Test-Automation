class AccountOverviewPage{
    smallTextController(){
        cy.get("[class='smallText']").should("be.visible");
        return this;
    }
    
    menuSelect(value){
        cy.get("[id='leftPanel'] a").eq(value).click();
        return this;
    }

    accountTableLastClick(){
        cy.get("[id='accountTable'] a").last().click();
        return this;
    }

    accountBalanceController(){
        cy.get("[id='balance']").should("have.text", "$100.00");
        return this;
    }


}

export default AccountOverviewPage;


