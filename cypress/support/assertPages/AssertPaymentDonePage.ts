export class AssertPaymentDonePage {
    checkOrderPlacedMessage = () => {
        cy.log('***checkOrderPlacedMessage***');
        cy.contains('h2', 'Order Placed!').should('be.visible');
        cy.contains('Congratulations! Your order has been confirmed!').should(
            'be.visible',
        );
    };
}

export default new AssertPaymentDonePage();
