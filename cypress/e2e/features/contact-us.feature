Feature: Contact us

    Contact us tests

    Background: I navigate the website
        Given I navigate to home page
        Then I verify that home page is visible successfully

    Scenario: Contact Us Form
        And I click on Contact Us button
        Then I verify GET IN TOUCH is visible
        When I enter name, email, subject and message
        And I a upload file
        And I click Submit button
        # And I click OK button
        Then I verify success message Success! Your details have been submitted successfully. is visible
        Then I click Home button and verify that landed to home page successfully