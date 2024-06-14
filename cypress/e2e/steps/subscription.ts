import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import AssertFooter from "../../support/assertPages/AssertFooter";
import Footer from "../../support/modules/Footer";

When('I scroll down to footer', () => {
    cy.scrollTo('bottom');
});

Then('I verify text SUBSCRIPTION', () => {
    AssertFooter.checkSubscriptionTitleIsVisible();
});

When('I enter email address in input and click arrow button', () => {
    Footer.setEmailAndSubscribe();
});

Then(
    'I verify success message You have been successfully subscribed! is visible',
    () => {
        AssertFooter.checkUserSubscribeMessageAppears();
    },
);
