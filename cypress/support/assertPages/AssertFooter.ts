import Footer from '../modules/Footer';

export class AssertFooter {
    checkSubscriptionTitleIsVisible = () => {
        cy.log('***checkSubscriptionTitleIsVisible***');
        Footer.getSubscriptionTitle().should('be.visible');
    };

    checkUserSubscribeMessageAppears = () => {
        cy.log('***checkUserSubscribeMessageAppeared***');
        cy.contains('You have been successfully subscribed!').should('be.visible');
    };
}

export default new AssertFooter();
