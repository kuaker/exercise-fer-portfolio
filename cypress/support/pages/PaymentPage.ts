import { getCreditCard } from '../utils/data-generators';

const NAME_ON_CARD = 'name-on-card';
const CARD_NUMBER = 'card-number';
const CVC = 'cvc';
const EXPIRY_MONTH = 'expiry-month';
const EXPIRY_YEAR = 'expiry-year';

const PAY_BUTTON = 'pay-button';

export class PaymentPage {

    url = 'payment'

    navigateToPaymentPage = () => cy.visit(this.url)

    getPaymentTitle = () => cy.contains('h2', 'Payment')

    setNameOnCard = (data: string) =>
        cy.getByDataTestId(NAME_ON_CARD).clear().type(data);

    setCardNumber = (data: string) =>
        cy.getByDataTestId(CARD_NUMBER).clear().type(data);

    setCVC = (data: string) => cy.getByDataTestId(CVC).clear().type(data);

    setExpiryMonth = (data: string) =>
        cy.getByDataTestId(EXPIRY_MONTH).clear().type(data);

    setExpityYear = (data: string) =>
        cy.getByDataTestId(EXPIRY_YEAR).clear().type(data);

    fillPaymentForm = () => {
        let creditCard = getCreditCard();
        this.setNameOnCard(creditCard.nameOnCard);
        this.setCardNumber(creditCard.cardNumber);
        this.setCVC(creditCard.cvc);
        this.setExpiryMonth(creditCard.month);
        this.setExpityYear(creditCard.year);
    };

    clickOnPayAndConfirmOrderButton = () => cy.getByDataTestId(PAY_BUTTON).click();
}

export default new PaymentPage();
