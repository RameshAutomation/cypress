Feature: Login to withdraw cogent functionality
  This feature file consists of all Testcases related to Feature controls

  Background: setupblock
    Given User is on Login home page

  @valid
  Scenario: Add cogent account/Withdraw to cogent transaction and Delete cogent account


    It will validate the title of home page
    Then Title should contain "coyni"

    When user click on email and enter email as "rameshr@ideyalabs.com"
    And user click on password and enter password as "Admin@123"
    And user Click on Next button
    Then Application navigates the two step authy screen

    When user click on otp boxes and enter otp as "123456"
    Then application navigates to the Dashboard screen

  @Feature controls

  Scenario:Admin able to disabled/enabled all the feature controls
    When User click on System setting side menu
    Then in the Dropdown lisr of subfeatures showning

    When user click on Feature control side menu sub feature
    Then it will be navigating to the features controls details

    When user disbled all the features controls
    And save button is enabled&When we click on Save Button
    Then Application is navigating to the Save changes popup

    When user shown the yes button in the popup and click on it
    Then Shown the sucess message&controls should be enabled or disabled

    #    //*======================Merchnat portal=======================*//

    When user login with Merchant url
    And enter email as "qa22@yopmail.com"
    And enter password as "Admin@123"
    And Click on Next btn
    Then application is navigating to the OTP screen

    When user enter valid otp such as "123456"
    Then screen is navigating to the  merchant dash board screen

    When user click on token account
    Then application naviagtes to the token account details

    When user click on Withdraw to USD text
    Then screen is navigates the Withdraw coyni to USD popup screen
