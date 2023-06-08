# Admin enterning Login to the dash Board

Feature: Login functionality
    This feature file consists of all Testcases related to Login

    Background: setupblock


    @valid
    Scenario: Add cogent account/Withdraw to cogent transaction and Delete cogent account
        Given User is on Login home page

        It will validate the title of home page
        Then Title should contain "coyni"

        When user click on email and enter email as "rameshr@ideyalabs.com"
        And user click on password and enter password as "Admin@123"
        And user Click on Next button
        Then Application navigates the two step authy screen

        When user click on otp boxes and enter otp as "123456"
        Then application navigates to the Dashboard screen
        
        When user click on Token account text under the coyni portal
        Then application is navigating to the token account details

        When user click on Withdraw to cogent text
        Then user navigates the No Cogent Accounts Exist popup screen

        When user click on add cogent account
        Then application is navigates the Add New Cogent Account popup screen

        When user click on name on the cogent field and enter as "Ramesh RR"
        And user click on wallet ID field and enter ID as "2345678987654gfdfgh"
        And user click on billing address line1 field and enter address as "GowraFountain Head ,Madhapur , 1/6th floor"
        And user click on city field and  enter the city as "HYD"
        And user click the state
        And select the state option
        And user click on ZIPcode field and enter the Zipcode as "12345"
        And user click on save btn
        Then application is navigates the cogent account added sucessfully popup screen

        When user click on Withdraw Button
        Then Application is navigates the Withdraw to cogent popup screen

        When user click on Amount filed and enter the amount as "0.01"
        And user change the amount from $ to usd Click on Symbol
        And user click on Next button
        Then application Navigating to the Confir withdraw to cogent account screen

        When user able to click on confirm btn
        Then application is navigates to trhe verify your identity popup screen

        When user click on otp boxes and enter the otp as "123456"
        Then application is navigating to the Processing to inprogress popup screen
        And user click on Done button then application is directed to the token account list

        When Admin click on WITHDRAW TO COGENT text
        And Screen is navigating to the Withdraw to Cogent Account popup screen
        And Admin click on Delete icon
        Then Screen navigates the Remove Cogent Account
        And Click on Remove Button,then Cogent Account Removed Successfully screen should be shown


        # @Feature controls

        # Scenario:Admin able to disabled/enabled all the feature controls
        # When User click on System setting side menu
        # Then in the Dropdown lisr of subfeatures showning

        # When user click on Feature control side menu sub feature
        # Then it will be navigating to the features controls details

        # When user disbled all the features controls
        # And save button is enabled&When we click on Save Button
        # Then Application is navigating to the Save changes popup

        # When user shown the yes button in the popup and click on it
        # Then Shown the sucess message&controls should be enabled or disabled

        #    //*======================Merchnat portal=======================*//

        When user login with Merchant url
        And enter email as "Sandy10@g.com"
        And enter password as "Admin@123"
        And Click on Next btn
        Then application is navigating to the OTP screen

        When user enter valid otp such as "123456"
        Then screen is navigating to the  merchant dash board screen