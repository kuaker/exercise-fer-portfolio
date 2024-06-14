import { Then, When, } from "@badeball/cypress-cucumber-preprocessor";
import ViewCartPage from "../../support/pages/ViewCartPage";
import ModalProduct from "../../support/modules/ModalProduct";
import CheckOutPage from "../../support/pages/CheckOutPage";
import PaymentPage from "../../support/pages/PaymentPage";
import AssertPaymentDonePage from "../../support/assertPages/AssertPaymentDonePage";

Then('I click "Proceed To Checkout"', () => {
    ViewCartPage.clickOnProceddToCheckOut();
});

Then('I click "Register Login" button', () => {
    ModalProduct.clickOnRegisterLoginButton();
});

When('I enter description in comment text area and click "Place Order"', () => {
    CheckOutPage.setMessage();
    CheckOutPage.clickOnPlaceOrderButton();
});

Then(
    'I enter payment details: Name on Card, Card Number, CVC, Expiration date',
    () => {
        PaymentPage.fillPaymentForm();
    },
);

Then('I click Pay and Confirm Order button', () => {
    PaymentPage.clickOnPayAndConfirmOrderButton();
});

Then(
    'I verify success message Your order has been placed successfully!',
    () => {
        AssertPaymentDonePage.checkOrderPlacedMessage();
    },
);
