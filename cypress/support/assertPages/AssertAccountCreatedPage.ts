import AccountCreatedPage from '../pages/AccountCreatedPage';

export class AssertAccountCreatedPage {
    checkAccountWasCreated = () => {
        cy.log('*** checkAccountWasCreated ***');
        AccountCreatedPage.getTitle()
            .should('be.visible')
            .and('contain', 'Account Created!');
        cy.contains(
            'Congratulations! Your new account has been successfully created!',
        ).should('be.visible');
        cy.contains(
            'You can now take advantage of member privileges to enhance your online shopping experience with us.',
        ).should('be.visible');
    };
}

export default new AssertAccountCreatedPage();
