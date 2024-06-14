export class ModalProduct {
    getAddedTitle = () => cy.contains('h4', 'Added!');

    clickOnViewCart = () => cy.contains('View Cart').scrollIntoView().click();

    getCheckOutTitle = () => cy.contains('h4', 'Checkout')

    clickOnRegisterLoginButton = () => cy.contains('u', 'Register / Login').click();
}

export default new ModalProduct();
