export class ProductDetailsPage {
    getQuantity = () => cy.getByName('quantity');

    getAddToCartButton = () => cy.contains('button', 'Add to cart');

    setQuantityProduct = (quantity) => {
        this.getQuantity().clear().type(quantity);
    };

    clickOnAddToCartButton = () => this.getAddToCartButton().click();

    getProductInformation = () => cy.get('.product-details')

    getProductName = () => this.getProductInformation().find('h2')
}

export default new ProductDetailsPage();
