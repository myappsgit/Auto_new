#Feature: Consumer
#
#  #@Sanity
#  #Scenario: Verify Consumer Sign Up
#    #Given I launch the "Huddil" web application
#    #And I click the "Login" button
#    #And I click the "Sign Up" link
#    #And I enter "Darshan" in the "Sign Up ConUserName" field
#    #And I enter "darshan.s@myapps-solutions.com" in the "Sign Up ConEmail" field
#    #And I enter "9988776655" in the "Sign Up ConPhone" field
#    #And I enter "password" in the "Sign Up ConPassword" field
#    #And I enter "password" in the "Sign Up ConReEnter Password" field
#    #And I check the "Sign Up Terms" checkbox
#    #And I click the "Sign Up ConSubmit" button
#    #And I wait "10" seconds
#    #Then the following elements should be displayed
#      #| Name          | Type      |
#      #| Con Enter OTP | textfield |
##    Then the element "Con Enter OTP" should be displayed
#
#    @Sanity
#    Scenario: Verify Consumer login and search
#        Given I am logged into the application with user "swetha.r@myapps-solutions.com" and password "password"
#        Then the "Consumer" page should load
#        When I select "Bangalore" from the "Select City" dropdown
#        And I select "Btm" from the "Select Locality" dropdown
#        And I select "Meeting Room" from the "Select Facility Type" dropdown
#        And I click the "Facility Search" button
#        Then the "Facility Items" page should load
