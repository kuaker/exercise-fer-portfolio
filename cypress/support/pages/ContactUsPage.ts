import {
    generateNewEmail,
    getFirstName,
    getRandomText240Char,
} from '../utils/data-generators';

const NAME = 'name';
const EMAIL = 'email';
const SUBJECT = 'subject';
const MESSAGE = 'message';
const UPLOAD_FILE = 'upload_file';
const SUBMIT_BUTTON = 'submit-button';

const CONTACT_DATA = {
    email: generateNewEmail(),
    name: getFirstName(),
    subject: 'A new suject',
    message: getRandomText240Char(),
};

export class ContactUsPage {
    url = 'contact_us';

    navigateToContacUs = () => cy.visit(this.url);

    getTitle = () => cy.contains('h2', 'Get In Touch')

    getName = () => cy.getByDataTestId(NAME);

    getEmail = () => cy.getByDataTestId(EMAIL);

    getSubject = () => cy.getByDataTestId(SUBJECT);

    getMessage = () => cy.getByDataTestId(MESSAGE);

    setUploadFile = () => cy.getByName(UPLOAD_FILE);

    getSubmitButton = () => cy.getByDataTestId(SUBMIT_BUTTON);

    clickOnSubmitButton = () => this.getSubmitButton().click();

    getSuccessMessage = () => cy.get('.status.alert.alert-success')

    clickOnOkButton = () => cy.get('#form-section').contains('Home').click();

    fillContactUsForm = () => {
        const FILE_PATH = 'cypress/fixtures/batman.webp';
        this.getName().clear().type(CONTACT_DATA.name);
        this.getEmail().clear().type(CONTACT_DATA.email);
        this.getSubject().clear().type(CONTACT_DATA.subject);
        this.getMessage().clear().type(CONTACT_DATA.message);
        this.setUploadFile().selectFile(FILE_PATH);
        this.clickOnSubmitButton();
    };

    fillNameEmailAndSubject = () => {
        this.getName().clear().type(CONTACT_DATA.name);
        this.getEmail().clear().type(CONTACT_DATA.email);
        this.getSubject().clear().type(CONTACT_DATA.subject);
        this.getMessage().clear().type(CONTACT_DATA.message);
    }

    uploadFile = () => {
        const FILE_PATH = 'cypress/fixtures/batman.webp';
        this.setUploadFile().selectFile(FILE_PATH);
    }
}

export default new ContactUsPage();
