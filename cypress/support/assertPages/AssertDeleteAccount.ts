import DeleteAccount from '../pages/DeleteAccount';

export class AssertDeleteAccount {
    checkAccountDeleteMessagesAreVisible = () => {
        cy.log('***checkAccountDeleteMessagesAreVisible***');
        DeleteAccount.getDeleteAccountTitle().should('be.visible');
        DeleteAccount.getFirstMessage().should('be.visible');
        DeleteAccount.getSecondMessage().should('be.visible');
    };
}

export default new AssertDeleteAccount();
