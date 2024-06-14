export class HomePage {
    navigateToHomePage = () => cy.visit('/');

    getHomeSliderSection = () => cy.get('#slider');

    selectAnyProduct = () => {
        cy.contains('View Product').click();
    };
}

export default new HomePage();
