import AccountInformation from '../modules/AccountInformation';
import AddressInformation from '../modules/AddressInformation';

export class SignUpPage {
    url = 'signup';

    navigateToSignUpUrl = () => cy.visit(this.url);

    getEnterAccountInformationTitle = () =>
        cy.contains('b', 'Enter Account Information');

    getAddressTitle = () => cy.contains('b', 'Address Information');

    fillAccountInformation = () => {
        AccountInformation.setNameEmailAndPassword();
        AccountInformation.setDateOfBirth();
    };

    fillAddressInformation = () => {
        AddressInformation.fillFormWithInformation();
    };

    clickOnCreateAccountButton = () => {
        AddressInformation.getCreateAccountButton().click();
    }
}

export default new SignUpPage();
