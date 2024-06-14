import HomePage from '../pages/HomePage';

export class AssertHomePage {
    checkSliderIsVisible = () => {
        cy.log('***checkSliderIsVisible***');
        HomePage.getHomeSliderSection().should('be.visible');
    };

    checkUrl = () => {
        cy.log('***checkSliderIsVisible***');
        cy.url().should('have.text', '/')
    }
}

export default new AssertHomePage();
