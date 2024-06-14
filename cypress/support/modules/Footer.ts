import { generateNewEmail } from '../utils/data-generators';

const SUBSCRIPTION_EMAIL = '#susbscribe_email';
const SUBSCRIBE_BUTTON = '#subscribe';

export class Footer {
    getSubscriptionTitle = () => cy.contains('h2', 'Subscription');

    getEmailFieldSubscription = () => cy.get(SUBSCRIPTION_EMAIL);

    clickOnSubscribeButton = () => cy.get(SUBSCRIBE_BUTTON).click();

    setEmailAndSubscribe = () => {
        let email = generateNewEmail();
        this.getEmailFieldSubscription().clear().type(email);
        this.clickOnSubscribeButton();
    };
}

export default new Footer();
