import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../support/pages/HomePage";
import AssertHomePage from "../../../support/assertPages/AssertHomePage";


Given('I navigate to home page', () => {
    HomePage.navigateToHomePage();
});

Then('I verify that home page is visible successfully', () => {
    AssertHomePage.checkSliderIsVisible();
});

When(
    'I choose a product and click on "View product" under the picture of the product',
    () => {
        cy.scrollTo('center');
        HomePage.selectAnyProduct();

    },
);