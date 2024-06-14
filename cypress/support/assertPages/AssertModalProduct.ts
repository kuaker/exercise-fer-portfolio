import ModalProduct from "../modules/ModalProduct";

export class AssertModalProduct {

    checkProductWasAdded = () => {
        cy.log('*** checkProductWasAdded ***')
        ModalProduct.getAddedTitle().should('be.visible');
        cy.contains('Your product has been added to cart.').should(
            'be.visible',
        );
    }

    verifyCheckouModalIsVisible = () => {
        cy.log('*** verifyCheckouModalIsVisible ***')
        ModalProduct.getCheckOutTitle().should('be.visible');
        cy.contains(
            'Register / Login account to proceed on checkout.',
        ).should('be.visible');
    }
}

export default new AssertModalProduct();
