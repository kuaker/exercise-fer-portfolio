const CONTINUE_BUTTON = 'continue-button';

export class PaymentDonePage {
    clickOnContinueButton = () => cy.getByDataTestId(CONTINUE_BUTTON).click();
}

export default new PaymentDonePage();
