/// <reference types="cypress" />
import LoginPage from "../pages/login-page";
import AccountOverviewPage from "../pages/account-overview-page";
import OpenNewAccountPage from "../pages/open-new-account-page";
import RegisterPage from "../pages/register-page";
import BaseLibrary from "../base/base-library";

describe("Parabank Tests", () => {
  const loginPage = new LoginPage();
  const accountOverviewPage = new AccountOverviewPage();
  const openNewAccountPage = new OpenNewAccountPage();
  const registerPage = new RegisterPage();
  const baseLibrary = new BaseLibrary();
  var account = "Matt" + baseLibrary.createRandomNumber();

  it("Register Succesfull", () => {
   

    loginPage.visit().clickRegister();
    registerPage
      .fillFirstName("Mesut")
      .fillLastName("Biskin")
      .fillAddress("boca raton")
      .fillAddressCity("florida")
      .fillAddressState("Florida")
      .fillAddressZipCode("33434")
      .fillCustomerPhone("47856487564")
      .fillCustomerSSN("498574757")
      .fillCustomerUserName(account)
      .fillCustomerPassword("456487675mb")
      .fillCustomerRepeatedPassword("456487675mb")
      .registerClick()
      .textController(account);
  });

  it("Login unseccesfull", () => {
    loginPage
      .visit()
      .fillUserName("test@gmail.com")
      .fillPassword("123456")
      .clickLogin()
      .errorMessageController(
        "The username and password could not be verified."
      );
  });

  it("Login Succesfull", () => {
    loginPage
      .visit()
      .fillUserName(account)
      .fillPassword("456487675mb")
      .clickLogin();
    accountOverviewPage.smallTextController();
  });

  it("Open New Account", () => {
    loginPage
      .visit()
      .fillUserName(account)
      .fillPassword("456487675mb")
      .clickLogin();
    accountOverviewPage.smallTextController().menuSelect(0);
    openNewAccountPage
      .selectType("SAVINGS")
      // .selectAccountId("15342")
      .clickOpenNewAccount()
      .accountResultTitleControl()
      .accountResultControl()
      .accountResultTextController()
      .accountResultIdControl();
  });

  it("Account Overview", () => {
    loginPage
      .visit()
      .fillUserName(account)
      .fillPassword("456487675mb")
      .clickLogin();
    accountOverviewPage
      .smallTextController()
      .menuSelect(1)
      .accountTableLastClick()
      .accountBalanceController();
  });
});
