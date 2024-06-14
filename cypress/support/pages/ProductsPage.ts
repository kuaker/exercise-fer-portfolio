const SEARCH_PRODUCT = 'search';

export class ProductsPage {
    url = 'products';

    getAllProductTitle = () => cy.contains('h2', 'All Products');

    getSearchProductsTitle = () => cy.contains('h2', 'Searched Products');

    getProductsItems = () => cy.get('.product-image-wrapper');

    getSearchButton = () => cy.get('#submit_search');

    clickOnFirstProduct = () =>
        this.getProductsItems().eq(0).contains('View Product').click();

    getSeachProductField = () => cy.getByName(SEARCH_PRODUCT);

    clickOnSearchButton = () => this.getSearchButton().click();

    searchForAProduct = (product) => {
        this.getSeachProductField().type(product);
        this.clickOnSearchButton();
    };
}

export default new ProductsPage();
