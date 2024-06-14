import ContactUsPage from '../pages/ContactUsPage';

const SUCCESS_MESSAGE =
    'Success! Your details have been submitted successfully.';

export class AssertContactUsPage {
    checkSuccessMessageIsVisible = () => {
        cy.log('***checkSuccessMessageIsVisible***');
        cy.contains(SUCCESS_MESSAGE).should('be.visible');
    };

    checkGetInTouchTitleIsVisible = () => {
        cy.log('***checkGitInTouchTitleIsVisible***');
        ContactUsPage.getTitle().should('be.visible');
    };
}

export default new AssertContactUsPage();
