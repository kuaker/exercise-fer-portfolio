import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import AssertContactUsPage from "../../support/assertPages/AssertContactUsPage";
import ContactUsPage from "../../support/pages/ContactUsPage";
import AssertHomePage from "../../support/assertPages/AssertHomePage";


Then('I verify GET IN TOUCH is visible', () => {
    AssertContactUsPage.checkGetInTouchTitleIsVisible();
});

When('I enter name, email, subject and message', () => {
    ContactUsPage.fillNameEmailAndSubject();
});

Then('I a upload file', () => {
    ContactUsPage.uploadFile();
});

Then('I click Submit button', () => {
    ContactUsPage.clickOnSubmitButton();
});

Then(
    'I verify success message Success! Your details have been submitted successfully. is visible',
    () => {
        AssertContactUsPage.checkSuccessMessageIsVisible();
    },
);

Then(
    'I click Home button and verify that landed to home page successfully',
    () => {
        ContactUsPage.clickOnOkButton();
        AssertHomePage.checkSliderIsVisible();
    },
);
