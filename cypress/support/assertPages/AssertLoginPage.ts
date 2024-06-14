import LoginPage from '../pages/LoginPage';

const LOGIN_MESSAGE_ERROR_EMAIL_PASSWORD =
    'Your email or password is incorrect!';

export class AssertLoginPage {
    checkLoginToYourAccount = () =>
        LoginPage.getLoginTitle().should('be.visible');

    checkSignUpTitleIsVisible = () =>
        LoginPage.getSignUpTitle().should('be.visible');

    checkInvalidadEmailAndPasswordIsVisible = () => {
        cy.log('***checkInvalidadEmailAndPasswordIsVisible***');
        LoginPage.getLoginEmailAndPasswordError().should(
            'contain',
            LOGIN_MESSAGE_ERROR_EMAIL_PASSWORD,
        );
    };

    checkEmailAlreadyExists = () => {
        cy.log('***checkEmailAlreadyExists***');
        LoginPage.getSignUpError().should('be.visible');
    };
}

export default new AssertLoginPage();
