Feature: Misc
#  This feature contains the flow validation between users, Login/Logout,
#  Forgot Password and Sign Up scenarios

@Sanity
        Scenario: Verify Service Provider Sign Up
        Given I launch the "Huddil" web application
        And I click the "Partner With Us" button
        And I enter "aparna" in the "SP Owner Name" field
        And I enter "password" in the "SP Password" field
        And I enter "password" in the "SP Conf Password" field
        And I enter "8497995311" in the "SP Phone" field
        And I enter "aparna.b@myapps-solutions.com" in the "SP Email" field
        And I enter "myappssolutions" in the "SP Website" field
        And I enter "bangalore" in the "SP Address" field
        And I enter "560037" in the "SP Pincode" field
        And I enter "marathalli" in the "SP City" field
        And I select "Andhra Pradesh" from the "SPState" dropdown
        And I enter "india" in the "SP Country" field
        And I check the "Sign Up Terms" checkbox
        And I click the "SP Sign Up Submit" button
        And I wait "10" seconds
     Then the following elements should be displayed
            | Name          | Type      |
            | Con Enter OTP | textfield |
        Then the element "Con Enter OTP" should be displayed

@Sanity
Scenario: Verify facebook login fuctionality
Given I launch the "Huddil" web application
And I click the "Login" button
And I click the "Facebook Login" element

@Sanity
Scenario: Verify forgot password functionality
Given I launch the "Huddil" web application
And I click the "Login" button
And I click the "Forgot Password" element
And I enter "aparna.b@myapps-solutions.com" in the "Registered Email" field
And I click the "Reset My Password" button
