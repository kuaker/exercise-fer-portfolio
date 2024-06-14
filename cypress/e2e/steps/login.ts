import { Then, When, } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/pages/LoginPage";
import SignUpPage from "../../support/pages/SignUpPage";
import AssertLoginPage from "../../support/assertPages/AssertLoginPage";
import AssertAccountCreatedPage from "../../support/assertPages/AssertAccountCreatedPage";
import AssertSignUpPage from "../../support/assertPages/AssertSignUpPage";
import AccountInformation from "../../support/modules/AccountInformation";
import AddressInformation from "../../support/modules/AddressInformation";
import Header from "../../support/modules/Header";
import AssertHeader from "../../support/assertPages/AssertHeader";
import AssertDeleteAccount from "../../support/assertPages/AssertDeleteAccount";
import AccountCreatedPage from "../../support/pages/AccountCreatedPage";

When('I enter the name and the email under New User Sign Up', () => {
    LoginPage.completeDataAndSignUp();
});

Then('I fill all information and click on Create Account', () => {
    SignUpPage.fillAccountInformation();
    SignUpPage.fillAddressInformation();
    SignUpPage.clickOnCreateAccountButton();
});

Then('I verify New User Signup! is visible', () => {
    AssertLoginPage.checkSignUpTitleIsVisible();
});

Then('I click on Continue under ACCOUNT CREATED! title', () => {
    AssertAccountCreatedPage.checkAccountWasCreated();
});

Then('I verify that ENTER ACCOUNT INFORMATION is visible', () => {
    AssertSignUpPage.checkAccountInformationTitleIsVisible();
});

When('I fill details: Title, Name, Email, Password, Date of birth', () => {
    SignUpPage.fillAccountInformation();
});

Then('I Select checkbox Sign up for our newsletter!', () => {
    AccountInformation.selectCheckBoxNewLetter().check();
});

Then('I select checkbox Receive special offers from our partners!', () => {
    AccountInformation.selectCheckBoxOfferss().check();
});

Then(
    'I fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number',
    () => {
        AddressInformation.fillFormWithInformation();
    },
);

Then('I click Create Account button', () => {
    SignUpPage.clickOnCreateAccountButton();
});

When('I click on SignupLogin button', () => {
    Header.clickOnLoginSignUpButton();
});

Then('I verify Login to your account is visible', () => {
    AssertLoginPage.checkLoginToYourAccount();
});

When('I enter correct email address and password', () => {
    LoginPage.fillLoginFields();
});

When('I enter name and email address in sign up form', () => {
    LoginPage.fillNameAndEmailForSignUp();
});

When('I enter incorrect email address and password', () => {
    LoginPage.fillLoginFieldsWithInvalidData();
});

Then('I click login button', () => {
    LoginPage.clickOnLoginButton();
});

Then('I click Signup button', () => {
    LoginPage.clickOnSignUpButton();
});

Then('I verify that Logged in as username is visible', () => {
    AssertHeader.checkLoggedAsUsernameIsVisible();
});

Then('I click Delete Account button', () => {
    Header.clickOnDeleteAccount();
});

Then('I verify that ACCOUNT DELETED! is visible', () => {
    AssertDeleteAccount.checkAccountDeleteMessagesAreVisible();
});

Then('I verify error Your email or password is incorrect! is visible', () => {
    AssertLoginPage.checkInvalidadEmailAndPasswordIsVisible();
});

Then('I verify that ACCOUNT CREATED! is visible', () => {
    AssertAccountCreatedPage.checkAccountWasCreated();
});

When('I click Continue button', () => {
    AccountCreatedPage.clickOnContinueButton();
});

When('I click Logout button', () => {
    Header.clickOnLogOut();
});

Then('I verify that user is navigated to login page', () => {
    AssertLoginPage.checkSignUpTitleIsVisible();
    cy.url().should('contain', 'login');
});

When('I enter name and already registered email address', () => {
    LoginPage.fillSignUpWithEmailAlreadyExists();
});

Then('I verify error Email Address already exist! is visible', () => {
    AssertLoginPage.checkEmailAlreadyExists();
    cy.url().should('contain', 'signup');
});

Then('I fill all details in Signup and create account', () => {
    LoginPage.completeDataAndSignUp();
    SignUpPage.fillAccountInformation();
    SignUpPage.fillAddressInformation();
    SignUpPage.clickOnCreateAccountButton();
});


