Feature: Service Provider

    Background:
        Given I am logged into the application with user "myappssolutions32@gmail.com" and password "password"
        And I wait "20" seconds
        Then the "Service Provider" page should load


    @Sanity
    Scenario: Verify Conference Facility Creation
        When I click the "Facility" element
        And I click the "Add Facility" button
        And I select "Conference Room" from the "Select Facility Type" dropdown
        And I click the "Add Location" button
        And I select "Bangalore" from the "Select City" dropdown
        And I select "JP Nagar" from the "Locality" dropdown
        And I enter "bilekahalli" in the "Please Enter Name" field
        And I enter "dsr galleria" in the "Please Enter address" field
        And I enter "signal" in the "Please Enter landmark" field
        And I enter "incubex" in the "Please Enter nearBy" field
        And I enter "These terms and conditions, are subjected to change from time to time, shall apply to all our services" in the "Terms And Conditions" field
        And I click the "Add" button
        Then I click the "OK" button
        And I select "bilekahalli" from the "Building/Location" dropdown
        And I enter "conference 12" in the "Facility Meeting Room Name" field
        And I enter "100" in the "Facility No Of Seats" field
        And I enter "1000" in the "Facility Area Size Sq" field
        And I enter "adding conference room" in the "Facility Description" field
        And I click the "Image Upload" element
        And I upload the "Image 1" file
        And I click the "Image Upload" element
        And I upload the "Image 2" file
        And I click the "Image Upload" element
        And I upload the "Image 3" file
        And I wait "20" seconds
        And I check the following checkboxes
            | Power Backup |
            | WiFi         |
            | Projector    |
            | Security     |
            | AC           |
            | White Board  |
            | Car Parking  |
            | 2 Parking    |
            | Leased Line  |
            | Print/Scan   |
#        And I click the "Save" button
        And I click the "Next" button
        And I enter "10" in the "Cost Per Hour" field
        And I enter "100" in the "Cost Per Day" field
        And I enter "1000" in the "Cost Per Month" field
        And I click the "Offer Add" button
        And I enter "2018-03-2" in the "From" field
        And I enter "2018-03-2" in the "To" field
        And I enter "10" in the "% Of Offer" field
        And I click the "Cancel Add" button
        And I enter "1" in the "No Of Days Before" field
        And I enter "10" in the "% Of Deduction" field
        And I enter "2" in the "No Of Days Before2" field
        And I enter "20" in the "% Of Deduction2" field
        And I enter "3" in the "No Of Days Before3" field
        And I enter "30" in the "% Of Deduction3" field
        And I enter "8497995311" in the "Sp Contact Number" field
        And I enter "aparna.b@myapps-solutions.com" in the "Sp Email" field
        And I select "Both" from the "Payment Mode" dropdown
        And I check the "Request Huddil Verfication" checkbox
        And I click the "Next2" button
        And I click the "Submit" button
        And I wait "20" seconds
        Then I click the "Success OK" button


    @Sanity
    Scenario: Verify  conference Block Facility
        When I click the "Facility" element
#        And I enter "conf 1" in the "Facility Title" field
#        Then I click the "Search" button
#        And I wait "5" seconds
        Then I select the facility "conf 1"
        And I wait "3" seconds
        And I click the "Manage Facility" button
        And I wait "5" seconds
        And I select the "Block Facility" radiobutton
        And I enter "2018-04-10 18:00:00" in the "From Date" field
        And I enter "2018-04-10 19:00:00" in the "To Date" field
        And I click the "Block Facility" button

    @Sanity
    Scenario: Verify  conference Deactivate Facility
        When I click the "Facility" element
        And I enter "conference 2" in the "Facility Title" field
        Then I click the "Search" button
        And I wait "5" seconds
        Then I select the facility "conference 2"
        And I click the "Manage Facility" button
        And I wait "10" seconds
        And I select the "Deactivate Facility" radiobutton
        And I enter "Not good" in the "Reason For Deactivation" field
        And I click the "Deactivate" button
        And I wait "10" seconds
        And I click the "Confirm" button
        Then I click the "OK" button

    @Sanity
    Scenario: Verify  conference Activate Facility
        When I click the "Facility" element
        And I enter "conference 2" in the "Facility Title" field
        Then I click the "Search" button
        And I wait "5" seconds
        Then I select the facility "conference 2"
        And I click the "Manage Facility" button
        And I wait "10" seconds
        And I select the "Activate Facility" radiobutton
        And I click the "Activate" button
        And I wait "10" seconds
        Then I click the "OK" button

    @Sanity
    Scenario: Verify  conference Price Details Facility

        When I click the "Facility" element
        And I enter "conference 11" in the "Facility Title" field
        Then I click the "Search" button
        Then I select the facility "conference 11"
        And I click the "Manage Facility" button
        And I wait "10" seconds
        And I select the "Price Details" radiobutton
        And I wait "2" seconds
        And I enter "10" in the "Update Cost Per Hour" field
        And I enter "100" in the "Update Cost Per Day" field
        And I enter "1000" in the "Update Cost Per Month" field
        Then I click the "Update Price" button
        Then I click the "OK" button

    @Sanity
    Scenario: Verify  conference facility edit
        When I click the "Facility" element
        And I click the "Filter" button
        And I select "Conference Room" from the "SelectFacilityType1" dropdown
        And I select "Denied" from the "Select Status" dropdown
        Then I click the "Search" button
        And I wait "5" seconds
        Then I select the facility "conference 10"
        Then I click the "Edit" button
        And I enter "100" in the "Facility No Of Seats" field
        And I wait "20" seconds
        And I click the "Next" button
        And I click the "Next3" button
        And I click the "Submit" button
        Then I click the "OK" button

    @Sanity
    Scenario: Verify conference cancelled booking
        When I click the "Booking" element
        And I enter "143" in the "Booking Id" field
        Then I click the "Search" button
        And I wait "5" seconds
        And I click the element with booking id "140" and booking status "Confirmed"
        And I click the "Cancel Booking" button
        Then I click the "YES" button
        Then I click the "Success OK" button


    @Sanity
    Scenario: Verify Coworking Facility Creation
        When I click the "Facility" element
        And I click the "Add Facility" button
        And I select "Co-Working Space" from the "Select Facility Type" dropdown
        And I click the "Add Location" button
        And I select "Bangalore" from the "Select City" dropdown
        And I select "JP Nagar" from the "Locality" dropdown
        And I enter "bilekahalli" in the "Please Enter Name" field
        And I enter "dsr galleria" in the "Please Enter address" field
        And I enter "signal" in the "Please Enter landmark" field
        And I enter "incubex" in the "Please Enter nearBy" field
        And I click the "Add" button
        Then I click the "OK" button
        And I select "bilekahalli" from the "Building/Location" dropdown
        And I enter "coworking 11" in the "Facility Meeting Room Name" field
        And I enter "100" in the "Facility No Of Seats" field
        And I enter "1000" in the "Facility Area Size Sq" field
        And I enter "adding coworking room" in the "Facility Description" field
        And I click the "Image Upload" element
        And I upload the "Image 1" file
        And I click the "Image Upload" element
        And I upload the "Image 2" file
        And I click the "Image Upload" element
        And I upload the "Image 3" file
        And I wait "20" seconds
        And I check the following checkboxes
            | WiFi         |
            | Car Parking  |
            | Power Backup |
            | Security     |
            | AC           |
            | White Board  |
            | 2 Parking    |
            | Leased Line  |
            | Print/Scan   |
            | Explore      |
            | Event Seat   |
            | Finger Print |
        And I click the "Next" button
        And I enter "100" in the "Cost Per Day" field
        And I enter "1000" in the "Cost Per Month" field
        And I click the "Offer Add" button
        And I enter "2018-03-3" in the "From" field
        And I enter "2018-03-4" in the "To" field
        And I enter "10" in the "% Of Offer" field
        And I click the "Cancel Add" button
        And I enter "1" in the "No Of Days Before" field
        And I enter "10" in the "% Of Deduction" field
        And I enter "2" in the "No Of Days Before2" field
        And I enter "20" in the "% Of Deduction2" field
        And I enter "3" in the "No Of Days Before3" field
        And I enter "30" in the "% Of Deduction3" field
        And I enter "8497995311" in the "Sp Contact Number" field
        And I enter "aparna.b@myapps-solutions.com" in the "Sp Email" field
        And I select "Offline" from the "Payment Mode" dropdown
        And I check the "Request Huddil Verfication" checkbox
        And I click the "Next2" button
        And I click the "Submit" button
        And I wait "80" seconds
        Then I click the "Success OK" button


    @Sanity
    Scenario: Verify cowork Block Facility
        When I click the "Facility" element
        And I enter "conf 1" in the "Facility Title" field
        Then I click the "Search" button
        And I wait "5" seconds
        Then I select the facility "incubex"
        And I click the "Manage Facility" button
        And I wait "10" seconds
        And I select the "Block Facility" radiobutton
        And I enter "2018-04-20 18:00:00" in the "From Date" field
        And I enter "2018-04-21 19:00:00" in the "To Date" field
        And I click the "Block Facility" button

    @Sanity
    Scenario: Verify cowork Deactivate Facility
        When I click the "Facility" element
        And I enter "cowork 1" in the "Facility Title" field
        Then I click the "Search" button
        And I wait "5" seconds
        Then I select the facility "cowork 1"
        And I click the "Manage Facility" button
        And I wait "10" seconds
        And I select the "Deactivate Facility" radiobutton
        And I enter "Not good" in the "Reason For Deactivation" field
        And I click the "Deactivate" button
        And I wait "10" seconds
        And I click the "Confirm" button
        Then I click the "OK" button

    @Sanity
    Scenario: Verify cowork Activate Facility
        When I click the "Facility" element
        And I enter "cowork 1" in the "Facility Title" field
        Then I click the "Search" button
        And I wait "5" seconds
        Then I select the facility "cowork 1"
        And I click the "Manage Facility" button
        And I wait "10" seconds
        And I select the "Activate Facility" radiobutton
        And I click the "Activate" button
        And I wait "10" seconds
        Then I click the "OK" button

#    @Sanity
#    Scenario: Verify cowork Price Details Facility
#        When I click the "Facility" element
#        And I enter "cowork 1" in the "Facility Title" field
#        Then I click the "Search" button
#        Then I select the facility "cowork 1"
#        And I click the "Manage Facility" button
#        And I select the "Price Details" radiobutton
#        And I enter "100" in the "Update Cost Per Day" field
#        And I enter "1000" in the "Update Cost Per Month" field
#        Then I click the "Update Price" button
#        Then I click the "OK" button

    @Sanity
    Scenario: Verify cowork booking pending
        When I click the "Booking" element
        And I enter "123" in the "Booking Id" field
        Then I click the "Search" button
        And I wait "10" seconds
        And I click the element with booking id "123" and booking status "Pending"
        And I click the "Confirm" button
        Then I click the "OK" button


    @Sanity
    Scenario: Verify  cowork  facility edit
        When I click the "Facility" element
        And I click the "Filter" button
        And I select "Co-Working Space" from the "SelectFacilityType1" dropdown
        And I select "Denied" from the "Select Status" dropdown
        Then I click the "Search" button
        And I wait "5" seconds
        Then I select the facility "cowork"
        Then I click the "Edit" button
        And I enter "10" in the "Facility No Of Seats" field
        And I wait "20" seconds
        And I click the "Next" button
        And I click the "Next3" button
        And I click the "Submit" button
        Then I click the "OK" button

    @Sanity
    Scenario: Verify  coworking space cancelled booking
        When I click the "Booking" element
        And I enter "120" in the "Booking Id" field
        Then I click the "Search" button
        And I wait "5" seconds
        And I click the element with booking id "120" and booking status "Confirmed"
        And I click the "Cancel Booking" button
        Then I click the "YES" button
        Then I click the "Success OK" button


    @Sanity
    Scenario: Verify meeting room Facility Creation
        When I click the "Facility" element
        And I click the "Add Facility" button
        And I select "Meeting Room" from the "Select Facility Type" dropdown
        And I click the "Add Location" button
        And I select "Bangalore" from the "Select City" dropdown
        And I select "JP Nagar" from the "Locality" dropdown
        And I enter "bilekahalli" in the "Please Enter Name" field
        And I enter "dsr galleria" in the "Please Enter address" field
        And I enter "signal" in the "Please Enter landmark" field
        And I enter "incubex" in the "Please Enter nearBy" field
        And I enter "Terms and Conditions apply to a users" in the "Terms and conditions" field
        And I click the "Add" button
        Then I click the "OK" button
        And I select "bilekahalli" from the "Building/Location" dropdown
        And I enter "meeting 11" in the "Facility Meeting Room Name" field
        And I enter "100" in the "Facility No Of Seats" field
        And I enter "1000" in the "Facility Area Size Sq" field
        And I enter "adding meeting room" in the "Facility Description" field
        And I click the "Image Upload" element
        And I upload the "Image 1" file
        And I click the "Image Upload" element
        And I upload the "Image 2" file
        And I click the "Image Upload" element
        And I upload the "Image 3" file
        And I wait "20" seconds
        And I check the following checkboxes
            | WiFi         |
            | Car Parking  |
            | Power Backup |
            | Security     |
            | AC           |
            | White Board  |
            | 2 Parking    |
            | Leased Line  |
            | Print/Scan   |
            | Explore      |
            | Event Seat   |
            | Finger Print |
        And I click the "Next" button
        And I enter "10" in the "Cost Per Hour" field
        And I enter "100" in the "Cost Per Day" field
        And I enter "1000" in the "Cost Per Month" field
        And I click the "Offer Add" button
        And I enter "2018-03-13" in the "From" field
        And I enter "2018-03-14" in the "To" field
        And I enter "10" in the "% Of Offer" field
        And I click the "Cancel Add" button
        And I enter "1" in the "No Of Days Before" field
        And I enter "10" in the "% Of Deduction" field
        And I enter "2" in the "No Of Days Before2" field
        And I enter "20" in the "% Of Deduction2" field
        And I enter "3" in the "No Of Days Before3" field
        And I enter "30" in the "% Of Deduction3" field
        And I enter "8497995311" in the "Sp Contact Number" field
        And I enter "aparna.b@myapps-solutions.com" in the "Sp Email" field
        And I select "Both" from the "Payment Mode" dropdown
        And I check the "Request Huddil Verfication" checkbox
        And I click the "Next2" button
        And I click the "Submit" button
        And I wait "100" seconds
        Then I click the "Success OK" button


    @Sanity
    Scenario: Verify meeting Block Facility
        When I click the "Facility" element
        And I enter "meeting 1" in the "Facility Title" field
        Then I click the "Search" button
        And I wait "5" seconds
        Then I select the facility "meeting 1"
        And I click the "Manage Facility" button
        And I wait "10" seconds
        And I select the "Block Facility" radiobutton
        And I enter "2018-03-11 18:00:00" in the "From Date" field
        And I enter "2018-03-11 19:00:00" in the "To Date" field
        And I click the "Block Facility" button

    @Sanity
    Scenario: Verify meeting Deactivate Facility
        When I click the "Facility" element
        And I enter "meeting 1" in the "Facility Title" field
        Then I click the "Search" button
        And I wait "5" seconds
        Then I select the facility "meeting 1"
        And I click the "Manage Facility" button
        And I wait "10" seconds
        And I select the "Deactivate Facility" radiobutton
        And I enter "Not good" in the "Reason For Deactivation" field
        And I click the "Deactivate" button
        And I wait "10" seconds
        And I click the "Confirm" button
        Then I click the "OK" button

    @Sanity
    Scenario: Verify meeting Activate Facility
        When I click the "Facility" element
        And I enter "meeting 1" in the "Facility Title" field
        Then I click the "Search" button
        And I wait "5" seconds
        Then I select the facility "meeting 1"
        And I click the "Manage Facility" button
        And I wait "10" seconds
        And I select the "Activate Facility" radiobutton
        And I click the "Activate" button
        And I wait "10" seconds
        Then I click the "OK" button

#    @Sanity
#    Scenario: Verify meeting Price Details Facility
#        When I click the "Facility" element
#        Then I select the facility "meeting 1"
#        And I click the "Manage Facility" button
#        And I select the "Price Details" radiobutton
#        And I enter "10" in the "Update Cost Per Hour" field
#        And I enter "100" in the "Update Cost Per Day" field
#        And I enter "1000" in the "Update Cost Per Month" field
#        Then I click the "Update Price" button
#        Then I click the "OK" button

    @Sanity
    Scenario: Verify meeting facility edit
        When I click the "Facility" element
        And I click the "Filter" button
        And I select "Meeting Room" from the "SelectFacilityType1" dropdown
        And I select "Denied" from the "Select Status" dropdown
        Then I click the "Search" button
        And I wait "5" seconds
        Then I select the facility "meeting 1"
        Then I click the "Edit" button
        And I enter "10" in the "Facility No Of Seats" field
        And I wait "20" seconds
        And I click the "Next" button
        And I click the "Next3" button
        And I click the "Submit" button
        Then I click the "OK" button

    @Sanity
    Scenario: Verify  meeting room cancelled booking
        When I click the "Booking" element
        And I enter "145" in the "Booking Id" field
        Then I click the "Search" button
        And I wait "5" seconds
        And I click the element with booking id "145" and booking status "Confirmed"
        And I click the "Cancel Booking" button
        Then I click the "YES" button
        Then I click the "Success OK" button


    @Sanity
    Scenario: Verify training room Facility Creation
        When I click the "Facility" element
        And I click the "Add Facility" button
        And I select "Training Room" from the "Select Facility Type" dropdown
        And I click the "Add Location" button
        And I select "Bangalore" from the "Select City" dropdown
        And I select "JP Nagar" from the "Locality" dropdown
        And I enter "bilekahalli" in the "Please Enter Name" field
        And I enter "dsr galleria" in the "Please Enter address" field
        And I enter "signal" in the "Please Enter landmark" field
        And I enter "incubex" in the "Please Enter nearBy" field
        And I click the "Add" button
        Then I click the "OK" button
        And I select "bilekahalli" from the "Building/Location" dropdown
        And I enter "training 11" in the "Facility Meeting Room Name" field
        And I enter "100" in the "Facility No Of Seats" field
        And I enter "1000" in the "Facility Area Size Sq" field
        And I enter "booking conference room" in the "Facility Description" field
        And I click the "Image Upload" element
        And I upload the "Image 1" file
        And I click the "Image Upload" element
        And I upload the "Image 2" file
        And I click the "Image Upload" element
        And I upload the "Image 3" file
        And I wait "30" seconds
        And I check the following checkboxes
            | WiFi         |
            | Car Parking  |
            | Power Backup |
            | Security     |
            | AC           |
            | White Board  |
            | 2 Parking    |
            | Leased Line  |
            | Print/Scan   |
            | Explore      |
            | Event Seat   |
            | Finger Print |
        And I click the "Next" button
        And I enter "10" in the "Cost Per Hour" field
        And I enter "100" in the "Cost Per Day" field
        And I enter "1000" in the "Cost Per Month" field
        And I click the "Offer Add" button
        And I enter "2018-03-13" in the "From" field
        And I enter "2018-04-14" in the "To" field
        And I enter "10" in the "% Of Offer" field
        And I click the "Cancel Add" button
        And I enter "1" in the "No Of Days Before" field
        And I enter "10" in the "% Of Deduction" field
        And I enter "2" in the "No Of Days Before2" field
        And I enter "20" in the "% Of Deduction2" field
        And I enter "3" in the "No Of Days Before3" field
        And I enter "30" in the "% Of Deduction3" field
        And I enter "8497995311" in the "Sp Contact Number" field
        And I enter "aparna.b@myapps-solutions.com" in the "Sp Email" field
        And I select "Both" from the "Payment Mode" dropdown
        And I check the "Request Huddil Verfication" checkbox
        And I click the "Next2" button
        And I click the "Submit" button
        And I wait "80" seconds
        Then I click the "Success OK" button


    @Sanity
    Scenario: Verify training Block Facility
        When I click the "Facility" element
        And I enter "training 3" in the "Facility Title" field
        Then I click the "Search" button
        And I wait "5" seconds
        Then I select the facility "training 3"
        And I click the "Manage Facility" button
        And I wait "10" seconds
        And I select the "Block Facility" radiobutton
        And I enter "2018-03-11 18:00:00" in the "From Date" field
        And I enter "2018-03-11 19:00:00" in the "To Date" field
        And I click the "Block Facility" button

    @Sanity
    Scenario: Verify training Deactivate Facility
        When I click the "Facility" element
        And I enter "training 3" in the "Facility Title" field
        Then I click the "Search" button
        And I wait "5" seconds
        Then I select the facility "training 3"
        And I click the "Manage Facility" button
        And I wait "20" seconds
        And I select the "Deactivate Facility" radiobutton
        And I enter "Not good" in the "Reason For Deactivation" field
        And I click the "Deactivate" button
        And I wait "20" seconds
        And I click the "Confirm" button
        Then I click the "OK" button

    @Sanity
    Scenario: Verify training Activate Facility
        When I click the "Facility" element
        And I enter "training 3" in the "Facility Title" field
        Then I click the "Search" button
        And I wait "5" seconds
        Then I select the facility "training 3"
        And I click the "Manage Facility" button
        And I wait "20" seconds
        And I select the "Activate Facility" radiobutton
        And I click the "Activate" button
        And I wait "10" seconds
        Then I click the "OK" button

#    @Sanity
#    Scenario: Verify training Price Details Facility
#        When I click the "Facility" element
#        Then I select the facility "training 3"
#        And I click the "Manage Facility" button
#        And I select the "Price Details" radiobutton
#        And I enter "10" in the "Update Cost Per Hour" field
#        And I enter "100" in the "Update Cost Per Day" field
#        And I enter "1000" in the "Update Cost Per Month" field
#        Then I click the "Update Price" button
#        Then I click the "OK" button

    @Sanity
    Scenario: Verify training facility edit
        When I click the "Facility" element
        And I click the "Filter" button
        And I select "Training Room" from the "SelectFacilityType1" dropdown
        And I select "Denied" from the "Select Status" dropdown
        Then I click the "Search" button
        And I wait "5" seconds
        Then I select the facility "training 6"
        Then I click the "Edit" button
        And I enter "100" in the "Facility No Of Seats" field
        And I wait "20" seconds
        And I click the "Next" button
        And I click the "Next3" button
        And I click the "Submit" button
        Then I click the "OK" button

    @Sanity
    Scenario: Verify  training room cancelled booking
        When I click the "Booking" element
        And I enter "146" in the "Booking Id" field
        Then I click the "Search" button
        And I wait "5" seconds
        And I click the element with booking id "146" and booking status "Confirmed"
        And I click the "Cancel Booking" button
        Then I click the "YES" button
        Then I click the "Success OK" button


    @Sanity
    Scenario: Verify  Facility search
        When I click the "Facility" element
        And I enter "conf 1" in the "Facility Title" field
        Then I click the "Search" button

    @Sanity
    Scenario: Verify  Facility filter search
        When I click the "Facility" element
        And I click the "Filter" button
        And I select "Training Room" from the "SelectFacilityType1" dropdown
        And I select "Bangalore" from the "City" dropdown
        And I select "JP Nagar" from the "Select Locality" dropdown
        And I select "All" from the "Select Status" dropdown
        Then I click the "Search" button


    @Sanity
    Scenario: Verify Booking filter search
        When I click the "Booking" element
        And I click the "Filter" button
        And I select "Training Room" from the "SelectFacilityType1" dropdown
        And I select "Bangalore" from the "City" dropdown
        And I select "JP Nagar" from the "Select Locality" dropdown
        And I select "February" from the "Month" dropdown
        And I select "All" from the "Booking Status" dropdown
        Then I click the "Search" button

    @Sanity
    Scenario: Verify  Booking id search
        When I click the "Booking" element
        And I enter "100" in the "Booking Id" field
        Then I click the "Search" button

    @Sanity
    Scenario: Verify Payment details
        When I click the "Payment" element
        And I select "February" from the "Month" dropdown
        And I select "2017" from the "Year" dropdown


    @Sanity
    Scenario: Verify dashboard facility view all
        When I click the "Dashboard" element
        And I click the "View All" link of "Facility Dashboard"

    @Sanity
    Scenario: Verify dashboard payment view all
        When I click the "Dashboard" element
        And I click the "View All" link of "Payment Dashboard"

    @Sanity
    Scenario: Verify dashboard booking view all
        When I click the "Dashboard" element
        And I click the "View All" link of "Booking Dashboard"


    @Sanity
    Scenario: Verify how it works link
        Given I launch the "Huddil" web application
        And I click the "How it works" link
        And I click the "Close" button

    @Sanity
    Scenario: Verify google map drop down
        When I click the "Facility" element
        And I enter "training G" in the "Facility Title" field
        Then I click the "Search" button
        Then I select the facility "training G"
        And I select "ATM" from the "Whats Around" dropdown


    @Sanity
    Scenario: Verify reviews for perticular facility
        When I click the "Facility" element
        And I enter "training G" in the "Facility Title" field
        Then I click the "Search" button
        Then I select the facility "training G"
        When I click the "Reviews" element
        When I click the "Reviews TC" element

    @Sanity
    Scenario: Verify facility dashboard count
        Then I click the "Approved" button
        When I click the "Dashboard" element
        Then I click the "Pending" button
        When I click the "Dashboard" element
        Then I click the "Denied" button
        When I click the "Dashboard" element
        Then I click the "Blocked" button

    @Sanity
    Scenario: Verify booking dashboard count
#        Then I click the "Confirmed" button
#        When I click the "Dashboard" element
#        And I wait "5" seconds
#        Then I click the "PendingBooking" button
#        When I click the "Dashboard" element
#        And I wait "5" seconds
#        Then I click the "Cancelled" button
        When I click the "Dashboard" element
        And I wait "5" seconds
        Then I click the "DeniedBooking" button

    @Sanity
    Scenario: Verify Payment dashboard details
    And I select "February" from the "Month" dropdown
        And I select "2017" from the "Year" dropdown
        When I click the "Refund" element

    @Sanity
    Scenario: Verify more amenities Facility
        When I click the "Facility" element
        And I enter "conference 11" in the "Facility Title" field
        Then I click the "Search" button
        When I click the "More" element





    @Sanity
    Scenario: Verify logout functionality
        When I click the "User Name" element
        And I click the "Logout" element
        Then I click the "Logout OK" button


    @Sanity
    Scenario: Verify edit profile functionality
        When I click the "User Name" element
        And I click the "Edit Profile" element
        And I click the "Send OTP" button
#        And I enter "269645" in the "Enter OTP" field
#        And I enter "9538697114" in the "Enter New Mobile Number" field
#        And I click the "Save Changes" button


    @Sanity
    Scenario: Verify change password functionality
        When I click the "User Name" element
        And I click the "Change Password" element
        And I enter "password" in the "Old Password" field
        And I enter "password1" in the "New Password" field
        And I enter "password1" in the "Confirm Password" field
        And I click the "Save Changes" button
        Then I click the "OK" button


    @Sanity
    Scenario: Verify modify saved Facility
        When I click the "Facility" element
        And I click the "Add Facility" button
        And I click the "modify" button with Facility Name "conf R"












