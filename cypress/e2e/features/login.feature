Feature: Login

  Login tests

  Background: I navigate the website
    Given I navigate to home page
    Then I verify that home page is visible successfully

  @smoke
  Scenario: Sign up as a user and create and account
    When I click on SignupLogin button
    Then I verify New User Signup! is visible
    When I enter name and email address in sign up form
    And I click Signup button
    Then I verify that ENTER ACCOUNT INFORMATION is visible
    When I fill details: Title, Name, Email, Password, Date of birth
    And I Select checkbox Sign up for our newsletter!
    And I select checkbox Receive special offers from our partners!
    And I fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    And I click Create Account button
    Then I verify that ACCOUNT CREATED! is visible
    When I click Continue button
    Then I verify that Logged in as username is visible
  # And I click "Delete Account" button
  # Then I verify that "ACCOUNT DELETED!" is visible

  Scenario: Login User with incorrect email and password
    When I click on SignupLogin button
    Then I verify Login to your account is visible
    When I enter incorrect email address and password
    And I click login button
    Then I verify error Your email or password is incorrect! is visible

  Scenario: Logout User
    When I click on SignupLogin button
    Then I verify Login to your account is visible
    When I enter correct email address and password
    And I click login button
    Then I verify that Logged in as username is visible
    When I click Logout button
    Then I verify that user is navigated to login page

  Scenario: Register User with existing email
    When I click on SignupLogin button
    Then I verify New User Signup! is visible
    When I enter name and already registered email address
    And I click Signup button
    Then I verify error Email Address already exist! is visible

  Scenario: Login User with correct email and password
    When I click on SignupLogin button
    Then I verify Login to your account is visible
    When I enter correct email address and password
    And I click login button
    Then I verify that Logged in as username is visible
    And I click Delete Account button
    Then I verify that ACCOUNT DELETED! is visible

