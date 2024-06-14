export class DeleteAccount {
    getDeleteAccountTitle = () => cy.contains('h2', 'Account Deleted!');

    getFirstMessage = () =>
        cy.contains('Your account has been permanently deleted!');

    getSecondMessage = () => cy.contains('p','You can create new account to take advantage of member privileges to enhance your online shopping experience with us.')
}

export default new DeleteAccount();
