Feature: Payment

    Payment tests

    Background: I navigate the website
        Given I navigate to home page
        Then I verify that home page is visible successfully

    Scenario: Place Order: Register while Checkout
        When I choose a product and click on "View product" under the picture of the product
        And I click Add to cart
        Then I verify that cart page is displayed
        And I click "Proceed To Checkout"
        And I click "Register Login" button
        And I fill all details in Signup and create account
        Then I verify that ACCOUNT CREATED! is visible
        When I click Continue button
        Then I verify that Logged in as username is visible
        And I click Cart button
        And I click "Proceed To Checkout"
        # Then I verify Address Details and Review Your Order
        When I enter description in comment text area and click "Place Order"
        And I enter payment details: Name on Card, Card Number, CVC, Expiration date
        And I click Pay and Confirm Order button
        Then I verify success message Your order has been placed successfully!
    # And I click "Delete Account" button
    # Then I verify that "ACCOUNT DELETED!" is visible

    Scenario: Place Order: Login before Checkout
        When I click on SignupLogin button
        When I enter correct email address and password
        And I click login button
        Then I verify that Logged in as username is visible
        When I choose a product and click on "View product" under the picture of the product
        And I click Add to cart
        Then I verify that cart page is displayed
        And I click "Proceed To Checkout"
        # Then I verify Address Details and Review Your Order
        When I enter description in comment text area and click "Place Order"
        And I enter payment details: Name on Card, Card Number, CVC, Expiration date
        And I click Pay and Confirm Order button
        Then I verify success message Your order has been placed successfully!
        And I click Delete Account button
        Then I verify that ACCOUNT DELETED! is visible

    Scenario: Place Order: Register before Checkout
        When I click on SignupLogin button
        And I fill all details in Signup and create account
        Then I verify that ACCOUNT CREATED! is visible
        When I click Continue button
        Then I verify that Logged in as username is visible
        When I choose a product and click on "View product" under the picture of the product
        And I click Add to cart
        And I click Cart button
        And I click "Proceed To Checkout"
        # Then I verify Address Details and Review Your Order
        When I enter description in comment text area and click "Place Order"
        And I enter payment details: Name on Card, Card Number, CVC, Expiration date
        And I click Pay and Confirm Order button
        Then I verify success message Your order has been placed successfully!
        And I click Delete Account button
        Then I verify that ACCOUNT DELETED! is visible
