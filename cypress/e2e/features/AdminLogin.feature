# Admin enterning Login to the dash Board

Feature: Login functionality
    This feature file consists of all Testcases related to Login
  @valid
    Background: setupblock
 
        Given User is on Login home page
        When user click on email and enter email as "rameshr@ideyalabs.com"
        And user click on password and enter password as "Admin@123"
        And user Click on Next button
        Then Application navigates the two step authy screen
