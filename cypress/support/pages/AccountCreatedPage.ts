const TITLE = 'account-created';
const CONTINUE_BUTTON = 'continue-button';

export class AccountCreatedPage {

    url = 'account_created'

    navigateToAccountCreatedUrl = () =>  cy.visit(this.url)

    getTitle = () => cy.getByDataTestId(TITLE);

    getContinueButton = () => cy.getByDataTestId(CONTINUE_BUTTON);

    clickOnContinueButton = () => this.getContinueButton().click();
}

export default new AccountCreatedPage();
