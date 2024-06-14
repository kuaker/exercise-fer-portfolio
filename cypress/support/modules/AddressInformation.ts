import { getFirstName, getLastName, getRandomCountries } from "../utils/data-generators";


const FIRS_NAME = 'first_name';
const LAST_NAME = 'last_name';
const COMPANY = 'company';
const ADDRESS = 'address';
const ADDRESS_2 = 'address2';
const COUNTRY = 'country';
const STATE = 'state';
const CITY = 'city';
const ZIPCODE = 'zipcode';
const MOBILE_NUMBER = 'mobile_number';
const CREATE_ACCOUNT_BUTTON = 'create-account';

const FORM_DATA = {
    name: getFirstName(),
    lastname: getLastName(),
    company: 'apply-digital',
    address: 'Rivadavia 5',
    address2: 'Tucuman 2330',
    country: getRandomCountries(),
    state: 'Buenos Aires',
    city: 'Capital Federal',
    zipcode: '1171',
    mobileNumber: '541122334455',
};

export class AddressInformation {

    getFirstName = () => cy.getByDataTestId(FIRS_NAME);

    getLastName = () => cy.getByDataTestId(LAST_NAME);

    getCompany = () => cy.getByDataTestId(COMPANY);

    getAddress = () => cy.getByDataTestId(ADDRESS);

    getAddress2 = () => cy.getByDataTestId(ADDRESS_2);

    getCountry = () => cy.getByDataTestId(COUNTRY);

    getState = () => cy.getByDataTestId(STATE);

    getCity = () => cy.getByDataTestId(CITY);

    getZipcode = () => cy.getByDataTestId(ZIPCODE);

    getMobileNumber = () => cy.getByDataTestId(MOBILE_NUMBER);

    getCreateAccountButton = () => cy.getByDataTestId(CREATE_ACCOUNT_BUTTON);

    fillFormWithInformation = () => {
        this.getFirstName().clear().type(FORM_DATA.name);
        this.getLastName().clear().type(FORM_DATA.lastname);
        this.getCompany().clear().type(FORM_DATA.company);
        this.getAddress().clear().type(FORM_DATA.address);
        this.getAddress2().clear().type(FORM_DATA.address2);
        this.getCountry().select(FORM_DATA.country);
        this.getState().clear().type(FORM_DATA.state);
        this.getCity().clear().type(FORM_DATA.city);
        this.getZipcode().clear().type(FORM_DATA.zipcode);
        this.getMobileNumber().clear().type(FORM_DATA.mobileNumber);
        cy.writeFile('cypress/fixtures/userDataInfoInput.json', FORM_DATA)
    };
}

export default new AddressInformation();
