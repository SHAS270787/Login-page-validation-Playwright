Feature: login page validation
Scenario: login with valid username and password
Given I navigate to the login page
When I provide valid username and password
Then click on login button