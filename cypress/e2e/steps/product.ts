import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ProductDetailsPage from "../../support/pages/ProductDetailsPage";
import ModalProduct from "../../support/modules/ModalProduct";
import ViewCartPage from "../../support/pages/ViewCartPage";
import AssertModalProduct from "../../support/assertPages/AssertModalProduct";
import Header from "../../support/modules/Header";
import AssertProductsPage from "../../support/assertPages/AssertProductsPage";
import ProductsPage from "../../support/pages/ProductsPage";

Given('I navigate the website', () => {
    cy.visit('/');
});

Then('In the Quantity box enter {string}', (quantity) => {
    ProductDetailsPage.setQuantityProduct(quantity);
});

Then('I click Add to cart', () => {
    ProductDetailsPage.clickOnAddToCartButton();
    ModalProduct.clickOnViewCart();
});

Then('I click on Proceed to Checkout', () => {
    ViewCartPage.clickOnProceddToCheckOut();
    AssertModalProduct.verifyCheckouModalIsVisible();
});

When('I click on Products button', () => {
    Header.clickOnProductsButton();
});

Then('I verify user is navigated to ALL PRODUCTS page successfully', () => {
    AssertProductsPage.checkUserNavigateToAllProducts();
});

When('The products list is visible', () => {
    cy.request({
        url: `${Cypress.env('baseUrl')}products`,
    }).then((response) => {
        expect(response.status).to.eq(200);
    });
});

Then('I click on View Product of first product', () => {
    ProductsPage.clickOnFirstProduct();
});

Then('The user is landed to product detail page', () => {
    cy.url().should('contain', 'product_details/1');
});

Then(
    'I verify that detail detail is visible: product name, category, price, availability, condition, brand',
    () => {
        ProductDetailsPage.getProductName().should('be.visible');
    },
);

When(
    'I enter {string} in search input and click search button',
    (productName) => {
        ProductsPage.searchForAProduct(productName);
    },
);

Then('I verify SEARCHED PRODUCTS is visible', () => {
    AssertProductsPage.checkSeachProductsTitleIsVisible();
});

Then('I verify that cart page is displayed', () => {
    cy.url().should('contain', ViewCartPage.url);
});

Then('I click "X" button corresponding to particular product', () => {
    cy.get('.cart_quantity_delete').eq(0).click();
});

Then('I verify that product is removed from the cart', () => {
    cy.contains('Cart is empty!').should('be.visible')
});
