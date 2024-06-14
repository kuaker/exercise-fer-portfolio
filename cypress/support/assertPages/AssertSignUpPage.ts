import AccountInformation from '../modules/AccountInformation';
import AddressInformation from '../modules/AddressInformation';
import SignUpPage from '../pages/SignUpPage';

export class AssertSignUpPage {
    checkAccountInfomationElementsAreVisible = () => {
        cy.log('***checkAccountInfomationElementsAreVisible***');
        SignUpPage.getEnterAccountInformationTitle().scrollIntoView().should('be.visible');
        AccountInformation.getRadioButtonMr().should('exist');
        AccountInformation.getRadioButtonMrs().should('exist');
        AccountInformation.getName().should('be.visible');
        AccountInformation.getEmail()
            .should('be.visible')
            .and('have.attr', 'disabled');
        AccountInformation.getDayOfBirth().should('be.visible');
        AccountInformation.getMonthOfBirth().should('be.visible');
        AccountInformation.getYearOfBirth().should('be.visible');
    };

    checkAddressInfomationElementsAreVisible = () => {
        cy.log('***checkAddressInfomationElementsAreVisible***');
        SignUpPage.getAddressTitle().scrollIntoView().should('be.visible');
        AddressInformation.getFirstName().should('be.visible');
        AddressInformation.getLastName().should('be.visible');
        AddressInformation.getCompany().should('be.visible');
        AddressInformation.getAddress().should('be.visible');
        AddressInformation.getAddress2().should('be.visible');
        AddressInformation.getCountry().should('be.visible');
        AddressInformation.getState().scrollIntoView().should('be.visible');
        AddressInformation.getZipcode().should('be.visible');
        AddressInformation.getMobileNumber().should('be.visible');
    };

    checkAccountInformationTitleIsVisible = () => {
        cy.log('***checkAccountInformationTitleIsVisible***');
        SignUpPage.getEnterAccountInformationTitle().should('be.visible');
    };
}

export default new AssertSignUpPage();
