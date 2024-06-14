import { generateNewEmail, getFirstName } from '../utils/data-generators';

const NEW_NAME = 'signup-name';
const EMAIL_ADDRESS = 'signup-email';
const SING_UP_BUTTON = 'signup-button';

const LOGIN_EMAIL = 'login-email';
const LOGIN_PASSWORD = 'login-password';
const LOGIN_BUTTON = 'login-button';

const USER_DATA = {
    email: generateNewEmail(),
    name: getFirstName(),
    password: 'p@ssw#RRd!',
};

export class LoginPage {
    url = 'login';

    navigateToLoginPageUrl = () => cy.visit(this.url);

    getLoginTitle = () => cy.contains('h2', 'Login to your account');

    getSignUpTitle = () => cy.contains('h2', 'New User Signup!');

    getSignUpNewName = () => cy.getByDataTestId(NEW_NAME);

    getSignUpEmailAddress = () => cy.getByDataTestId(EMAIL_ADDRESS);

    getSignUpButton = () => cy.getByDataTestId(SING_UP_BUTTON);

    getLoginEmail = () => cy.getByDataTestId(LOGIN_EMAIL);

    getLoginPassword = () => cy.getByDataTestId(LOGIN_PASSWORD);

    getLoginButton = () => cy.getByDataTestId(LOGIN_BUTTON);

    clickOnSignUpButton = () => this.getSignUpButton().click();

    clickOnLoginButton = () => this.getLoginButton().click();

    getLoginEmailAndPasswordError = () =>
        cy.getByDataTestId(LOGIN_PASSWORD).next();

    getSignUpError = () => cy.contains('Email Address already exist!');

    fillNameAndEmailForSignUp = () => {
        this.getSignUpNewName().clear().type(USER_DATA.name);
        this.getSignUpEmailAddress().clear().type(USER_DATA.email);
        this.saveUserData();
    };

    completeDataAndSignUp = () => {
        this.fillNameAndEmailForSignUp();
        this.clickOnSignUpButton();
        this.saveUserData();
    };

    saveUserData = () =>
        cy.writeFile('cypress/fixtures/userData.json', USER_DATA);

    loginWithUserCreated = () => {
        cy.readFile('cypress/fixtures/userData.json').then((data) => {
            this.getLoginEmail().clear().type(data.email);
            this.getLoginPassword().clear().type(data.password);
            this.getLoginButton().click();
        });
    };

    fillLoginFields = () => {
        cy.readFile('cypress/fixtures/userData.json').then((data) => {
            this.getLoginEmail().clear().type(data.email);
            this.getLoginPassword().clear().type(data.password);
        });
    };

    fillLoginFieldsWithInvalidData = () => {
        this.getLoginEmail().clear().type('invalidemail@gmail.com');
        this.getLoginPassword().clear().type('invaliQPassword');
    };

    fillSignUpWithEmailAlreadyExists() {
        cy.readFile('cypress/fixtures/userData.json').then((data) => {
            this.getSignUpNewName().clear().type(data.name);
            this.getSignUpEmailAddress().clear().type(data.email);
        });
    }
}

export default new LoginPage();
