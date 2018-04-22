$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ServiceProvider.feature");
formatter.feature({
  "line": 1,
  "name": "Service Provider",
  "description": "",
  "id": "service-provider",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1576484,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am logged into the application with user \"myappssolutions33@gmail.com\" and password \"password1\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I wait \"20\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the \"Service Provider\" page should load",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "myappssolutions33@gmail.com",
      "offset": 44
    },
    {
      "val": "password1",
      "offset": 87
    }
  ],
  "location": "LoginStepdefs.applicationLogin(String,String)"
});
formatter.result({
  "duration": 43778884509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "duration": 20015898647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Service Provider",
      "offset": 5
    },
    {
      "val": "load",
      "offset": 35
    },
    {}
  ],
  "location": "GlobalStepdefs.checkPageLoad(String,String,String)"
});
formatter.result({
  "duration": 236698367,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify Conference Facility Creation",
  "description": "",
  "id": "service-provider;verify-conference-facility-creation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Sanity1"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I click the \"Facility\" element",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click the \"Add Facility\" button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select \"Conference Room\" from the \"Select Facility Type\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click the \"Add Location\" button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select \"Bangalore\" from the \"Select City\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select \"JP Nagar\" from the \"Locality\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"bilekahalli\" in the \"Please Enter Name\" field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"dsr galleria\" in the \"Please Enter address\" field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter \"signal\" in the \"Please Enter landmark\" field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \"incubex\" in the \"Please Enter nearBy\" field",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter \"These terms and conditions, are subjected to change from time to time, shall apply to all our services\" in the \"Terms And Conditions\" field",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click the \"Add\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click the \"OK\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I select \"bilekahalli\" from the \"Building/Location\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter \"conference 999\" in the \"Facility Meeting Room Name\" field",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter \"100\" in the \"Facility No Of Seats\" field",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter \"1000\" in the \"Facility Area Size Sq\" field",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter \"adding conference room\" in the \"Facility Description\" field",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "#        And I click the \"Image Upload\" element"
    },
    {
      "line": 30,
      "value": "#        And I upload the \"Image 1\" file"
    },
    {
      "line": 31,
      "value": "#        And I click the \"Image Upload\" element"
    },
    {
      "line": 32,
      "value": "#        And I upload the \"Image 2\" file"
    },
    {
      "line": 33,
      "value": "#        And I click the \"Image Upload\" element"
    },
    {
      "line": 34,
      "value": "#        And I upload the \"Image 3\" file"
    }
  ],
  "line": 35,
  "name": "I wait \"30\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I check the following checkboxes",
  "rows": [
    {
      "cells": [
        "Power Backup"
      ],
      "line": 37
    },
    {
      "cells": [
        "WiFi"
      ],
      "line": 38
    },
    {
      "cells": [
        "Projector"
      ],
      "line": 39
    },
    {
      "cells": [
        "Security"
      ],
      "line": 40
    },
    {
      "cells": [
        "AC"
      ],
      "line": 41
    },
    {
      "cells": [
        "White Board"
      ],
      "line": 42
    },
    {
      "cells": [
        "Car Parking"
      ],
      "line": 43
    },
    {
      "cells": [
        "2 Parking"
      ],
      "line": 44
    },
    {
      "cells": [
        "Leased Line"
      ],
      "line": 45
    },
    {
      "cells": [
        "Print/Scan"
      ],
      "line": 46
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 47,
      "value": "#        And I click the \"Save\" button"
    }
  ],
  "line": 48,
  "name": "I click the \"Next\" button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter \"10\" in the \"Cost Per Hour\" field",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter \"100\" in the \"Cost Per Day\" field",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I enter \"1000\" in the \"Cost Per Month\" field",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click the \"Offer Add\" button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I enter \"2018-03-2\" in the \"From\" field",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I enter \"2018-03-2\" in the \"To\" field",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I enter \"10\" in the \"% Of Offer\" field",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click the \"Cancel Add\" button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I enter \"1\" in the \"No Of Days Before\" field",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I enter \"10\" in the \"% Of Deduction\" field",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I enter \"2\" in the \"No Of Days Before2\" field",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I enter \"20\" in the \"% Of Deduction2\" field",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I enter \"3\" in the \"No Of Days Before3\" field",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I enter \"30\" in the \"% Of Deduction3\" field",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I enter \"8497995311\" in the \"Sp Contact Number\" field",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I enter \"aparna.b@myapps-solutions.com\" in the \"Sp Email\" field",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I select \"Both\" from the \"Payment Mode\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I check the \"Request Huddil Verfication\" checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I click the \"Next2\" button",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I click the \"Submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I wait \"20\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I click the \"Success OK\" button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Facility",
      "offset": 13
    },
    {},
    {}
  ],
  "location": "GlobalStepdefs.clickMiscElement(String,String,String)"
});
formatter.result({
  "duration": 1444831351,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Facility",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "duration": 1695484799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conference Room",
      "offset": 10
    },
    {
      "val": "Select Facility Type",
      "offset": 37
    },
    {}
  ],
  "location": "GlobalStepdefs.selectFromDropdown(String,String,String)"
});
formatter.result({
  "duration": 1453492540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Location",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "duration": 1413001690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangalore",
      "offset": 10
    },
    {
      "val": "Select City",
      "offset": 31
    },
    {}
  ],
  "location": "GlobalStepdefs.selectFromDropdown(String,String,String)"
});
formatter.result({
  "duration": 1360059618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JP Nagar",
      "offset": 10
    },
    {
      "val": "Locality",
      "offset": 30
    },
    {}
  ],
  "location": "GlobalStepdefs.selectFromDropdown(String,String,String)"
});
formatter.result({
  "duration": 1420455057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bilekahalli",
      "offset": 9
    },
    {
      "val": "Please Enter Name",
      "offset": 30
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "duration": 1519140031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dsr galleria",
      "offset": 9
    },
    {
      "val": "Please Enter address",
      "offset": 31
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "duration": 1437848877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signal",
      "offset": 9
    },
    {
      "val": "Please Enter landmark",
      "offset": 25
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "duration": 1493034104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "incubex",
      "offset": 9
    },
    {
      "val": "Please Enter nearBy",
      "offset": 26
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "duration": 1435187722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "These terms and conditions, are subjected to change from time to time, shall apply to all our services",
      "offset": 9
    },
    {
      "val": "Terms And Conditions",
      "offset": 121
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "duration": 1623136263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "duration": 1347684574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "duration": 11930094345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bilekahalli",
      "offset": 10
    },
    {
      "val": "Building/Location",
      "offset": 33
    },
    {}
  ],
  "location": "GlobalStepdefs.selectFromDropdown(String,String,String)"
});
formatter.result({
  "duration": 159371712,
  "error_message": "org.openqa.selenium.WebDriverException: Element \u003cselect id\u003d\"select_location\" class\u003d\"inputContainer requiredFields locatiobSelector ng-untouched ng-pristine ng-valid\"\u003e is not clickable at point (623.375,744) because another element \u003cdiv class\u003d\"confirmAlert\"\u003e obscures it\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.3.132\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\aparna\\AppData\\Local\\Temp\\rust_mozprofile.sBHUH5Z0w1yW, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, moz:headless\u003dfalse, platform\u003dXP, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d59.0.2, platformVersion\u003d6.1, moz:processID\u003d6496, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dXP, moz:webdriverClick\u003dtrue}]\nSession ID: 69554c7c-4dea-443b-b5b0-c98e57018eb6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat support.Page.selectDropDownOption(Page.java:470)\r\n\tat support.Page.selectDropDownInPane(Page.java:1066)\r\n\tat stepDefinitions.GlobalStepdefs.selectFromDropdown(GlobalStepdefs.java:471)\r\n\tat ✽.And I select \"bilekahalli\" from the \"Building/Location\" dropdown(ServiceProvider.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "conference 999",
      "offset": 9
    },
    {
      "val": "Facility Meeting Room Name",
      "offset": 33
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 9
    },
    {
      "val": "Facility No Of Seats",
      "offset": 22
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 9
    },
    {
      "val": "Facility Area Size Sq",
      "offset": 23
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "adding conference room",
      "offset": 9
    },
    {
      "val": "Facility Description",
      "offset": 41
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {}
  ],
  "location": "ServiceProviderStepdefs.checkMulitipleCheckBoxEntries(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    },
    {
      "val": "Cost Per Hour",
      "offset": 21
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 9
    },
    {
      "val": "Cost Per Day",
      "offset": 22
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 9
    },
    {
      "val": "Cost Per Month",
      "offset": 23
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Offer Add",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-03-2",
      "offset": 9
    },
    {
      "val": "From",
      "offset": 28
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-03-2",
      "offset": 9
    },
    {
      "val": "To",
      "offset": 28
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    },
    {
      "val": "% Of Offer",
      "offset": 21
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Cancel Add",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "No Of Days Before",
      "offset": 20
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    },
    {
      "val": "% Of Deduction",
      "offset": 21
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "No Of Days Before2",
      "offset": 20
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    },
    {
      "val": "% Of Deduction2",
      "offset": 21
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "No Of Days Before3",
      "offset": 20
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 9
    },
    {
      "val": "% Of Deduction3",
      "offset": 21
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "8497995311",
      "offset": 9
    },
    {
      "val": "Sp Contact Number",
      "offset": 29
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "aparna.b@myapps-solutions.com",
      "offset": 9
    },
    {
      "val": "Sp Email",
      "offset": 48
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Both",
      "offset": 10
    },
    {
      "val": "Payment Mode",
      "offset": 26
    },
    {}
  ],
  "location": "GlobalStepdefs.selectFromDropdown(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "Request Huddil Verfication",
      "offset": 13
    },
    {},
    {}
  ],
  "location": "GlobalStepdefs.checkCheckBox(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Next2",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Submit",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Success OK",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1780150354,
  "status": "passed"
});
formatter.before({
  "duration": 2715231,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am logged into the application with user \"myappssolutions33@gmail.com\" and password \"password1\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I wait \"20\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the \"Service Provider\" page should load",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "myappssolutions33@gmail.com",
      "offset": 44
    },
    {
      "val": "password1",
      "offset": 87
    }
  ],
  "location": "LoginStepdefs.applicationLogin(String,String)"
});
formatter.result({
  "duration": 24882277226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "duration": 19996174836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Service Provider",
      "offset": 5
    },
    {
      "val": "load",
      "offset": 35
    },
    {}
  ],
  "location": "GlobalStepdefs.checkPageLoad(String,String,String)"
});
formatter.result({
  "duration": 126714732,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Verify  conference Block Facility",
  "description": "",
  "id": "service-provider;verify--conference-block-facility",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 73,
      "name": "@Sanity1"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "I click the \"Facility\" element",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "I enter \"conference 1\" in the \"Facility Title\" field",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I click the \"Search\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "I wait \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I select the facility \"conference 1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "I wait \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I click the \"Manage Facility\" button",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I wait \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I select the \"Block Facility\" radiobutton",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I enter \"2018-04-20 18:00:00\" in the \"From Date\" field",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I enter \"2018-04-30 19:00:00\" in the \"To Date\" field",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I click the \"Block Facility\" button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Facility",
      "offset": 13
    },
    {},
    {}
  ],
  "location": "GlobalStepdefs.clickMiscElement(String,String,String)"
});
formatter.result({
  "duration": 1526452090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "conference 1",
      "offset": 9
    },
    {
      "val": "Facility Title",
      "offset": 31
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "duration": 1471353700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "duration": 1447193708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "duration": 5000598385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "conference 1",
      "offset": 23
    }
  ],
  "location": "ServiceProviderStepdefs.selectFacility(String)"
});
formatter.result({
  "duration": 5469948127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "duration": 3001850020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manage Facility",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "duration": 1431426501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "duration": 5002843513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Block Facility",
      "offset": 14
    }
  ],
  "location": "ServiceProviderStepdefs.clickRadioButton(String)"
});
formatter.result({
  "duration": 2082738171,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.ServiceProviderStepdefs.clickRadioButton(ServiceProviderStepdefs.java:90)\r\n\tat ✽.And I select the \"Block Facility\" radiobutton(ServiceProvider.feature:83)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-04-20 18:00:00",
      "offset": 9
    },
    {
      "val": "From Date",
      "offset": 38
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-04-30 19:00:00",
      "offset": 9
    },
    {
      "val": "To Date",
      "offset": 38
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Block Facility",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 914162541,
  "status": "passed"
});
formatter.before({
  "duration": 1081514,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am logged into the application with user \"myappssolutions33@gmail.com\" and password \"password1\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I wait \"20\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the \"Service Provider\" page should load",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "myappssolutions33@gmail.com",
      "offset": 44
    },
    {
      "val": "password1",
      "offset": 87
    }
  ],
  "location": "LoginStepdefs.applicationLogin(String,String)"
});
formatter.result({
  "duration": 33846916067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "duration": 19998813887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Service Provider",
      "offset": 5
    },
    {
      "val": "load",
      "offset": 35
    },
    {}
  ],
  "location": "GlobalStepdefs.checkPageLoad(String,String,String)"
});
formatter.result({
  "duration": 121510836,
  "status": "passed"
});
formatter.scenario({
  "line": 89,
  "name": "Verify  conference Deactivate Facility",
  "description": "",
  "id": "service-provider;verify--conference-deactivate-facility",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 88,
      "name": "@Sanity1"
    }
  ]
});
formatter.step({
  "line": 90,
  "name": "I click the \"Facility\" element",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "I enter \"conf 3\" in the \"Facility Title\" field",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I click the \"Search\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "I wait \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I select the facility \"conf 3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "I click the \"Manage Facility\" button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I wait \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I select the \"Deactivate Facility\" radiobutton",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I enter \"Not good\" in the \"Reason For Deactivation\" field",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I click the \"Deactivate\" button",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I wait \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I click the \"Confirm\" button",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I click the \"OK\" button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Facility",
      "offset": 13
    },
    {},
    {}
  ],
  "location": "GlobalStepdefs.clickMiscElement(String,String,String)"
});
formatter.result({
  "duration": 1437992947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "conf 3",
      "offset": 9
    },
    {
      "val": "Facility Title",
      "offset": 25
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "duration": 1898548483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "duration": 1901167009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "duration": 5000628778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "conf 3",
      "offset": 23
    }
  ],
  "location": "ServiceProviderStepdefs.selectFacility(String)"
});
formatter.result({
  "duration": 14478628261,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.ServiceProviderStepdefs.selectFacility(ServiceProviderStepdefs.java:65)\r\n\tat ✽.Then I select the facility \"conf 3\"(ServiceProvider.feature:94)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manage Facility",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Deactivate Facility",
      "offset": 14
    }
  ],
  "location": "ServiceProviderStepdefs.clickRadioButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Not good",
      "offset": 9
    },
    {
      "val": "Reason For Deactivation",
      "offset": 27
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Deactivate",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Confirm",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1654961978,
  "status": "passed"
});
formatter.before({
  "duration": 1008887,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am logged into the application with user \"myappssolutions33@gmail.com\" and password \"password1\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I wait \"20\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the \"Service Provider\" page should load",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "myappssolutions33@gmail.com",
      "offset": 44
    },
    {
      "val": "password1",
      "offset": 87
    }
  ],
  "location": "LoginStepdefs.applicationLogin(String,String)"
});
formatter.result({
  "duration": 27016161132,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.3.132\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\aparna\\AppData\\Local\\Temp\\rust_mozprofile.6E6Za9Kb8xA9, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, moz:headless\u003dfalse, platform\u003dXP, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d59.0.2, platformVersion\u003d6.1, moz:processID\u003d7488, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dXP, moz:webdriverClick\u003dtrue}]\nSession ID: 875340ee-b928-486c-af69-3e71331fa4d0\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027topMenuRound\u0027 and text()\u003d\u0027Login\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat utils.SetUpFile.setUpBrowser(SetUpFile.java:197)\r\n\tat stepDefinitions.Hooks.openBrowser(Hooks.java:60)\r\n\tat stepDefinitions.LoginStepdefs.applicationLogin(LoginStepdefs.java:55)\r\n\tat ✽.Given I am logged into the application with user \"myappssolutions33@gmail.com\" and password \"password1\"(ServiceProvider.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Service Provider",
      "offset": 5
    },
    {
      "val": "load",
      "offset": 35
    },
    {}
  ],
  "location": "GlobalStepdefs.checkPageLoad(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 105,
  "name": "Verify  conference Activate Facility",
  "description": "",
  "id": "service-provider;verify--conference-activate-facility",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 104,
      "name": "@Sanity1"
    }
  ]
});
formatter.step({
  "line": 106,
  "name": "I click the \"Facility\" element",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "I enter \"conf 3\" in the \"Facility Title\" field",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I click the \"Search\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "I wait \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I select the facility \"conf 3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 111,
  "name": "I click the \"Manage Facility\" button",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I wait \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I select the \"Activate Facility\" radiobutton",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I click the \"Activate\" button",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "I wait \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I click the \"OK\" button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Facility",
      "offset": 13
    },
    {},
    {}
  ],
  "location": "GlobalStepdefs.clickMiscElement(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "conf 3",
      "offset": 9
    },
    {
      "val": "Facility Title",
      "offset": 25
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Search",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "conf 3",
      "offset": 23
    }
  ],
  "location": "ServiceProviderStepdefs.selectFacility(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Manage Facility",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Activate Facility",
      "offset": 14
    }
  ],
  "location": "ServiceProviderStepdefs.clickRadioButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Activate",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 124134493,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Tried to run command without establishing a connection\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.3.132\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\aparna\\AppData\\Local\\Temp\\rust_mozprofile.6E6Za9Kb8xA9, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, moz:headless\u003dfalse, platform\u003dXP, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d59.0.2, platformVersion\u003d6.1, moz:processID\u003d7488, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dXP, moz:webdriverClick\u003dtrue}]\nSession ID: 875340ee-b928-486c-af69-3e71331fa4d0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:542)\r\n\tat stepDefinitions.Hooks.closeBrowserAndTakeScreenShot(Hooks.java:92)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:272)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:236)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:386)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:323)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:143)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 877053,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am logged into the application with user \"myappssolutions33@gmail.com\" and password \"password1\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I wait \"20\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the \"Service Provider\" page should load",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "myappssolutions33@gmail.com",
      "offset": 44
    },
    {
      "val": "password1",
      "offset": 87
    }
  ],
  "location": "LoginStepdefs.applicationLogin(String,String)"
});
formatter.result({
  "duration": 9064353227,
  "error_message": "org.openqa.selenium.WebDriverException: Process unexpectedly closed with status: 0\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.3.132\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: FirefoxDriver\nremote stacktrace: stack backtrace:\n   0:           0x47e934 - \u003cno info\u003e\n   1:           0x47f0a3 - \u003cno info\u003e\n   2:           0x442649 - \u003cno info\u003e\n   3:           0x449cc3 - \u003cno info\u003e\n   4:           0x42a890 - \u003cno info\u003e\n   5:           0x406f5e - \u003cno info\u003e\n   6:           0x40cfc9 - \u003cno info\u003e\n   7:           0x6bef19 - \u003cno info\u003e\n   8:           0x420756 - \u003cno info\u003e\n   9:           0x6b96e0 - \u003cno info\u003e\n  10:         0x76d559cd - BaseThreadInitThunk\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$24(ProtocolHandshake.java:359)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:362)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:255)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:237)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:138)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:103)\r\n\tat utils.SetUpFile.setUpBrowser(SetUpFile.java:152)\r\n\tat stepDefinitions.Hooks.openBrowser(Hooks.java:60)\r\n\tat stepDefinitions.LoginStepdefs.applicationLogin(LoginStepdefs.java:55)\r\n\tat ✽.Given I am logged into the application with user \"myappssolutions33@gmail.com\" and password \"password1\"(ServiceProvider.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Service Provider",
      "offset": 5
    },
    {
      "val": "load",
      "offset": 35
    },
    {}
  ],
  "location": "GlobalStepdefs.checkPageLoad(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 119,
  "name": "Verify  conference Price Details Facility",
  "description": "",
  "id": "service-provider;verify--conference-price-details-facility",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 118,
      "name": "@Sanity1"
    }
  ]
});
formatter.step({
  "line": 121,
  "name": "I click the \"Facility\" element",
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "I enter \"conf 3\" in the \"Facility Title\" field",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "I click the \"Search\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "I select the facility \"conf 3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 125,
  "name": "I click the \"Manage Facility\" button",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "I wait \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I select the \"Price Details\" radiobutton",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "I wait \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I enter \"10\" in the \"Update Cost Per Hour\" field",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I enter \"100\" in the \"Update Cost Per Day\" field",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I enter \"1000\" in the \"Update Cost Per Month\" field",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I click the \"Update Price\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "I click the \"OK\" button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Facility",
      "offset": 13
    },
    {},
    {}
  ],
  "location": "GlobalStepdefs.clickMiscElement(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "conf 3",
      "offset": 9
    },
    {
      "val": "Facility Title",
      "offset": 25
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Search",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "conf 3",
      "offset": 23
    }
  ],
  "location": "ServiceProviderStepdefs.selectFacility(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Manage Facility",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Price Details",
      "offset": 14
    }
  ],
  "location": "ServiceProviderStepdefs.clickRadioButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    },
    {
      "val": "Update Cost Per Hour",
      "offset": 21
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 9
    },
    {
      "val": "Update Cost Per Day",
      "offset": 22
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 9
    },
    {
      "val": "Update Cost Per Month",
      "offset": 23
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Update Price",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 662723,
  "status": "passed"
});
formatter.before({
  "duration": 675749,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am logged into the application with user \"myappssolutions33@gmail.com\" and password \"password1\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I wait \"20\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the \"Service Provider\" page should load",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "myappssolutions33@gmail.com",
      "offset": 44
    },
    {
      "val": "password1",
      "offset": 87
    }
  ],
  "location": "LoginStepdefs.applicationLogin(String,String)"
});
formatter.result({
  "duration": 9106427271,
  "error_message": "org.openqa.selenium.WebDriverException: Process unexpectedly closed with status: 0\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.3.132\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: FirefoxDriver\nremote stacktrace: stack backtrace:\n   0:           0x47e934 - \u003cno info\u003e\n   1:           0x47f0a3 - \u003cno info\u003e\n   2:           0x442649 - \u003cno info\u003e\n   3:           0x449cc3 - \u003cno info\u003e\n   4:           0x42a890 - \u003cno info\u003e\n   5:           0x406f5e - \u003cno info\u003e\n   6:           0x40cfc9 - \u003cno info\u003e\n   7:           0x6bef19 - \u003cno info\u003e\n   8:           0x420756 - \u003cno info\u003e\n   9:           0x6b96e0 - \u003cno info\u003e\n  10:         0x76d559cd - BaseThreadInitThunk\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$24(ProtocolHandshake.java:359)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:362)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:255)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:237)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:138)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:103)\r\n\tat utils.SetUpFile.setUpBrowser(SetUpFile.java:152)\r\n\tat stepDefinitions.Hooks.openBrowser(Hooks.java:60)\r\n\tat stepDefinitions.LoginStepdefs.applicationLogin(LoginStepdefs.java:55)\r\n\tat ✽.Given I am logged into the application with user \"myappssolutions33@gmail.com\" and password \"password1\"(ServiceProvider.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Service Provider",
      "offset": 5
    },
    {
      "val": "load",
      "offset": 35
    },
    {}
  ],
  "location": "GlobalStepdefs.checkPageLoad(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 136,
  "name": "Verify  conference facility edit",
  "description": "",
  "id": "service-provider;verify--conference-facility-edit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 135,
      "name": "@Sanity1"
    }
  ]
});
formatter.step({
  "line": 137,
  "name": "I click the \"Facility\" element",
  "keyword": "When "
});
formatter.step({
  "line": 138,
  "name": "I click the \"Filter\" button",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "I select \"Conference Room\" from the \"SelectFacilityType1\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "I select \"Denied\" from the \"Select Status\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "I click the \"Search\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 142,
  "name": "I wait \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I select the facility \"conference 12\"",
  "keyword": "Then "
});
formatter.step({
  "line": 144,
  "name": "I click the \"Edit\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 145,
  "name": "I enter \"100\" in the \"Facility No Of Seats\" field",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I wait \"20\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "I click the \"Next\" button",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "I click the \"Next3\" button",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "I click the \"Submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "I click the \"OK\" button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Facility",
      "offset": 13
    },
    {},
    {}
  ],
  "location": "GlobalStepdefs.clickMiscElement(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Filter",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Conference Room",
      "offset": 10
    },
    {
      "val": "SelectFacilityType1",
      "offset": 37
    },
    {}
  ],
  "location": "GlobalStepdefs.selectFromDropdown(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Denied",
      "offset": 10
    },
    {
      "val": "Select Status",
      "offset": 28
    },
    {}
  ],
  "location": "GlobalStepdefs.selectFromDropdown(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Search",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "conference 12",
      "offset": 23
    }
  ],
  "location": "ServiceProviderStepdefs.selectFacility(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Edit",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 9
    },
    {
      "val": "Facility No Of Seats",
      "offset": 22
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Next3",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Submit",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 952838,
  "status": "passed"
});
formatter.before({
  "duration": 4932729,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am logged into the application with user \"myappssolutions33@gmail.com\" and password \"password1\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I wait \"20\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the \"Service Provider\" page should load",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "myappssolutions33@gmail.com",
      "offset": 44
    },
    {
      "val": "password1",
      "offset": 87
    }
  ],
  "location": "LoginStepdefs.applicationLogin(String,String)"
});
formatter.result({
  "duration": 18296710935,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.3.132\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\aparna\\AppData\\Local\\Temp\\rust_mozprofile.VWkMwaeWvBPM, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, moz:headless\u003dfalse, platform\u003dXP, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d59.0.2, platformVersion\u003d6.1, moz:processID\u003d7032, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dXP, moz:webdriverClick\u003dtrue}]\nSession ID: 34ebdd55-6a41-4a82-b75e-f667750bc6b0\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027topMenuRound\u0027 and text()\u003d\u0027Login\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat utils.SetUpFile.setUpBrowser(SetUpFile.java:197)\r\n\tat stepDefinitions.Hooks.openBrowser(Hooks.java:60)\r\n\tat stepDefinitions.LoginStepdefs.applicationLogin(LoginStepdefs.java:55)\r\n\tat ✽.Given I am logged into the application with user \"myappssolutions33@gmail.com\" and password \"password1\"(ServiceProvider.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Service Provider",
      "offset": 5
    },
    {
      "val": "load",
      "offset": 35
    },
    {}
  ],
  "location": "GlobalStepdefs.checkPageLoad(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 153,
  "name": "Verify conference cancelled booking",
  "description": "",
  "id": "service-provider;verify-conference-cancelled-booking",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 152,
      "name": "@Sanity1"
    }
  ]
});
formatter.step({
  "line": 154,
  "name": "I click the \"Booking\" element",
  "keyword": "When "
});
formatter.step({
  "line": 155,
  "name": "I enter \"305\" in the \"Booking Id\" field",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "I click the \"Search\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "I wait \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "I click the element with booking id \"305\" and booking status \"Confirmed\"",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "I click the \"Cancel Booking\" button",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "I click the \"YES\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 161,
  "name": "I click the \"Success OK\" button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Booking",
      "offset": 13
    },
    {},
    {}
  ],
  "location": "GlobalStepdefs.clickMiscElement(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "305",
      "offset": 9
    },
    {
      "val": "Booking Id",
      "offset": 22
    }
  ],
  "location": "GlobalStepdefs.enterInTheField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Search",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "305",
      "offset": 37
    },
    {
      "val": "Confirmed",
      "offset": 62
    }
  ],
  "location": "GlobalStepdefs.selectBooking(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Cancel Booking",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "YES",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Success OK",
      "offset": 13
    },
    {}
  ],
  "location": "GlobalStepdefs.clickButton(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 166369579,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Tried to run command without establishing a connection\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.3.132\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\aparna\\AppData\\Local\\Temp\\rust_mozprofile.VWkMwaeWvBPM, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, moz:headless\u003dfalse, platform\u003dXP, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d59.0.2, platformVersion\u003d6.1, moz:processID\u003d7032, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dXP, moz:webdriverClick\u003dtrue}]\nSession ID: 34ebdd55-6a41-4a82-b75e-f667750bc6b0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:542)\r\n\tat stepDefinitions.Hooks.closeBrowserAndTakeScreenShot(Hooks.java:92)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:272)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:236)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:386)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:323)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:143)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 3594651,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am logged into the application with user \"myappssolutions33@gmail.com\" and password \"password1\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I wait \"20\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the \"Service Provider\" page should load",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "myappssolutions33@gmail.com",
      "offset": 44
    },
    {
      "val": "password1",
      "offset": 87
    }
  ],
  "location": "LoginStepdefs.applicationLogin(String,String)"
});
formatter.result({
  "duration": 42004055677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 8
    }
  ],
  "location": "GlobalStepdefs.waitForSpecifiedTime(int)"
});
