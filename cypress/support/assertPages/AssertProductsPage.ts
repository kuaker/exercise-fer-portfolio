import ProductsPage from "../pages/ProductsPage"

export class AssertProductsPage {

    checkUserNavigateToAllProducts = () => {
        cy.log('***checkUserNavigateToAllProducts***')
        ProductsPage.getAllProductTitle().should('be.visible')
    }

    checkSeachProductsTitleIsVisible = () => {
        cy.log('***checkSeachProductsTitleIsVisible***')
        ProductsPage.getSearchProductsTitle().should('be.visible')
    }
}

export default new AssertProductsPage();
