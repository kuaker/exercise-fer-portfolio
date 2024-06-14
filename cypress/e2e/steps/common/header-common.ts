import { Then } from "@badeball/cypress-cucumber-preprocessor";
import Header from "../../../support/modules/Header";

Then('I click Cart button', () => {
    Header.clickOnCart();
});

Then('I click on Contact Us button', () => {
    Header.clickOnContactUs();
});



