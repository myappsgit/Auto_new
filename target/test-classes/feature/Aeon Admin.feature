Feature: Aeon

#    Background:
#        Given I am logged into the application with user "admin@aeon-telectronics.com" and password "admin"
#        And I wait "20" seconds
#        Then the "Admin" page should load

    @Sanity
    Scenario: login
        And I launch the ".*" web application
        And I enter "admin@aeon-telectronics.com" in the "Email" field
        And I enter "admin" in the "Password" field




    @Sanity
    Scenario: inventory
        When I click the "Inventory" button
        When I click the "Machines" element
        When I click the "Add" button
        And I enter "1000 TONNE ELECTRONICA" in the "Machine Name" field
        And I enter "M1000" in the "Machine Code" field