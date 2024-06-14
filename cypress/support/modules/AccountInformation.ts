import { getFirstName, getRandomDay, getRandomMonth, getRandomYear } from "../utils/data-generators"

const NAME = 'name'
const EMAIL = 'email'
const PASSWORD = 'password'

const DAYS = 'days'
const MONTH = 'months'
const YEAR = 'years'

const NEWSLETTER = 'newsletter'
const OFFERS = 'optin'

export class AccountInformation {

    getRadioButtonMr = () => cy.get('#id_gender1');

    getRadioButtonMrs = () => cy.get('#id_gender2');

    getName = () => cy.getByDataTestId(NAME);

    getEmail = () => cy.getByDataTestId(EMAIL);

    getPassword = () => cy.getByDataTestId(PASSWORD);

    checkRadioButtonMr = () => this.getRadioButtonMr().check();

    checkRadioButtonMrs = () => this.getRadioButtonMrs().check();

    setName = (name) => this.getName().clear().type(name);

    setEmail = (email) => this.getEmail().clear().type(email);

    setPassword = (password) => this.getPassword().type(password);

    getDayOfBirth = () => cy.getByDataTestId(DAYS)

    getMonthOfBirth = () => cy.getByDataTestId(MONTH)

    getYearOfBirth = () => cy.getByDataTestId(YEAR)

    selectCheckBoxNewLetter = () => cy.getByName(NEWSLETTER)

    selectCheckBoxOfferss = () => cy.getByName(OFFERS)

    setNameEmailAndPassword = () => {
        cy.log('*** setNameEmailAndPassword ****');
        let name = getFirstName();
        let password = 'p@ssw#RRd!';

        this.setName(name);
        this.setPassword(password);
    };

    setDateOfBirth() {
        cy.log('*** selectDateOfBirth ****');
        let day = getRandomDay();
        let month = getRandomMonth();
        let year = getRandomYear().toString();

        this.getDayOfBirth().select(day);
        this.getMonthOfBirth().select(month);
        this.getYearOfBirth().select(year);
    }

}

export default new AccountInformation();
