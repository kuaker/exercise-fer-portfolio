Feature: Subscription

    Subscription tests

    Background: I navigate the website
        Given I navigate to home page

    Scenario: Verify Subscription in home page
        Then I verify that home page is visible successfully
        When I scroll down to footer
        Then I verify text SUBSCRIPTION
        When I enter email address in input and click arrow button
        Then I verify success message You have been successfully subscribed! is visible

    Scenario:  Verify Subscription in Cart page
        Then I verify that home page is visible successfully
        And I click Cart button
        # When I scroll down to footer
        Then I verify text SUBSCRIPTION
        When I enter email address in input and click arrow button
        Then I verify success message You have been successfully subscribed! is visible

