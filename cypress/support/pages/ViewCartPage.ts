export class ViewCartPage {
    url = 'view_cart';

    clickOnProceddToCheckOut = () => cy.contains('Proceed To Checkout').click();

    clickOnHereButton = () => cy.contains('a', 'here').click();
}

export default new ViewCartPage();
