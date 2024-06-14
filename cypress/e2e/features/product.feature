Feature: Product
    As a user I can select a product

    Background: I navigate the website
        Given I navigate to home page
        Then I verify that home page is visible successfully

    # Scenario Outline: Select product and add it to the cart
    #     When I choose a product and click on “View product” under the picture of the product.
    #     And In the Quantity box enter "<quantity>"
    #     And I click Add to cart
    #     Then I click on Proceed to Checkout
    #     Examples:
    #         | quantity |
    #         | 30  |
    #         | 20  |
    #         | 50  |
    #         | 100 |

    Scenario: Verify All Products and product detail page
        When I click on Products button
        Then I verify user is navigated to ALL PRODUCTS page successfully
        When The products list is visible
        And I click on View Product of first product
        And The user is landed to product detail page
        Then I verify that detail detail is visible: product name, category, price, availability, condition, brand

    Scenario: Search Product
        When I click on Products button
        Then I verify user is navigated to ALL PRODUCTS page successfully
        When I enter "dress" in search input and click search button
        Then I verify SEARCHED PRODUCTS is visible
    # Then I verify all the products related to search are visible

    Scenario: Remove Products From Cart
        When I choose a product and click on "View product" under the picture of the product
        And I click Add to cart
        And I click Cart button
        And I click "X" button corresponding to particular product
        Then I verify that product is removed from the cart
