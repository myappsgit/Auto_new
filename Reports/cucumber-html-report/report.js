$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ServiceProvider.feature");
formatter.feature({
  "line": 1,
  "name": "Service Provider",
  "description": "",
  "id": "service-provider",
  "keyword": "Feature"
});
formatter.before({
  "duration": 677320,
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
  "duration": 61452358352,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: exited abnormally\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dLinux 4.4.0-1052-aws x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 60.14 seconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027ip-172-31-18-1\u0027, ip: \u0027172.31.18.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-1052-aws\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: ChromeDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$24(ProtocolHandshake.java:359)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:362)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:255)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:237)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:138)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:178)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:167)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:156)\n\tat utils.SetUpFile.setUpBrowser(SetUpFile.java:178)\n\tat stepDefinitions.Hooks.openBrowser(Hooks.java:60)\n\tat stepDefinitions.LoginStepdefs.applicationLogin(LoginStepdefs.java:55)\n\tat ✽.Given I am logged into the application with user \"myappssolutions33@gmail.com\" and password \"password1\"(ServiceProvider.feature:4)\n",
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
formatter.after({
  "duration": 2924797,
  "status": "passed"
});
formatter.before({
  "duration": 2230768,
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
  "duration": 60045495306,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: exited abnormally\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dLinux 4.4.0-1052-aws x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 60.01 seconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027ip-172-31-18-1\u0027, ip: \u0027172.31.18.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-1052-aws\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: ChromeDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$24(ProtocolHandshake.java:359)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:362)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:255)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:237)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:138)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:178)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:167)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:156)\n\tat utils.SetUpFile.setUpBrowser(SetUpFile.java:178)\n\tat stepDefinitions.Hooks.openBrowser(Hooks.java:60)\n\tat stepDefinitions.LoginStepdefs.applicationLogin(LoginStepdefs.java:55)\n\tat ✽.Given I am logged into the application with user \"myappssolutions33@gmail.com\" and password \"password1\"(ServiceProvider.feature:4)\n",
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
  "status": "skipped"
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
      "val": "conference 1",
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
      "val": "3",
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
      "val": "Block Facility",
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
formatter.after({
  "duration": 313800,
  "status": "passed"
});
formatter.before({
  "duration": 321828,
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
  "duration": 60041403720,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: exited abnormally\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dLinux 4.4.0-1052-aws x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 60.02 seconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027ip-172-31-18-1\u0027, ip: \u0027172.31.18.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-1052-aws\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: ChromeDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$24(ProtocolHandshake.java:359)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:362)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:255)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:237)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:138)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:178)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:167)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:156)\n\tat utils.SetUpFile.setUpBrowser(SetUpFile.java:178)\n\tat stepDefinitions.Hooks.openBrowser(Hooks.java:60)\n\tat stepDefinitions.LoginStepdefs.applicationLogin(LoginStepdefs.java:55)\n\tat ✽.Given I am logged into the application with user \"myappssolutions33@gmail.com\" and password \"password1\"(ServiceProvider.feature:4)\n",
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
formatter.after({
  "duration": 309254,
  "status": "passed"
});
formatter.before({
  "duration": 353072,
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
  "duration": 60073053744,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: exited abnormally\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dLinux 4.4.0-1052-aws x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 60.02 seconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027ip-172-31-18-1\u0027, ip: \u0027172.31.18.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-1052-aws\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: ChromeDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$24(ProtocolHandshake.java:359)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:362)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:255)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:237)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:138)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:178)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:167)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:156)\n\tat utils.SetUpFile.setUpBrowser(SetUpFile.java:178)\n\tat stepDefinitions.Hooks.openBrowser(Hooks.java:60)\n\tat stepDefinitions.LoginStepdefs.applicationLogin(LoginStepdefs.java:55)\n\tat ✽.Given I am logged into the application with user \"myappssolutions33@gmail.com\" and password \"password1\"(ServiceProvider.feature:4)\n",
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
  "duration": 272183,
  "status": "passed"
});
formatter.before({
  "duration": 330205,
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
  "duration": 60062073926,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: exited abnormally\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dLinux 4.4.0-1052-aws x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 60.01 seconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027ip-172-31-18-1\u0027, ip: \u0027172.31.18.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-1052-aws\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: ChromeDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$24(ProtocolHandshake.java:359)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:362)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:255)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:237)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:138)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:178)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:167)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:156)\n\tat utils.SetUpFile.setUpBrowser(SetUpFile.java:178)\n\tat stepDefinitions.Hooks.openBrowser(Hooks.java:60)\n\tat stepDefinitions.LoginStepdefs.applicationLogin(LoginStepdefs.java:55)\n\tat ✽.Given I am logged into the application with user \"myappssolutions33@gmail.com\" and password \"password1\"(ServiceProvider.feature:4)\n",
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
  "duration": 266508,
  "status": "passed"
});
formatter.before({
  "duration": 3973214,
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
  "duration": 60072145268,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: exited abnormally\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dLinux 4.4.0-1052-aws x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 60.03 seconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027ip-172-31-18-1\u0027, ip: \u0027172.31.18.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-1052-aws\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: ChromeDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$24(ProtocolHandshake.java:359)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:362)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:255)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:237)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:138)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:178)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:167)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:156)\n\tat utils.SetUpFile.setUpBrowser(SetUpFile.java:178)\n\tat stepDefinitions.Hooks.openBrowser(Hooks.java:60)\n\tat stepDefinitions.LoginStepdefs.applicationLogin(LoginStepdefs.java:55)\n\tat ✽.Given I am logged into the application with user \"myappssolutions33@gmail.com\" and password \"password1\"(ServiceProvider.feature:4)\n",
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
  "duration": 242742,
  "status": "passed"
});
formatter.before({
  "duration": 282143,
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
  "duration": 60089111162,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: exited abnormally\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dLinux 4.4.0-1052-aws x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 60.06 seconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027ip-172-31-18-1\u0027, ip: \u0027172.31.18.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-1052-aws\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: ChromeDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$24(ProtocolHandshake.java:359)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:362)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:255)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:237)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:138)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:178)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:167)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:156)\n\tat utils.SetUpFile.setUpBrowser(SetUpFile.java:178)\n\tat stepDefinitions.Hooks.openBrowser(Hooks.java:60)\n\tat stepDefinitions.LoginStepdefs.applicationLogin(LoginStepdefs.java:55)\n\tat ✽.Given I am logged into the application with user \"myappssolutions33@gmail.com\" and password \"password1\"(ServiceProvider.feature:4)\n",
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
  "duration": 256591,
  "status": "passed"
});
formatter.before({
  "duration": 264099,
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
  "duration": 60041781267,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: exited abnormally\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dLinux 4.4.0-1052-aws x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 60.01 seconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027ip-172-31-18-1\u0027, ip: \u0027172.31.18.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-1052-aws\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: ChromeDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$24(ProtocolHandshake.java:359)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:362)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:255)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:237)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:138)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:178)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:167)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:156)\n\tat utils.SetUpFile.setUpBrowser(SetUpFile.java:178)\n\tat stepDefinitions.Hooks.openBrowser(Hooks.java:60)\n\tat stepDefinitions.LoginStepdefs.applicationLogin(LoginStepdefs.java:55)\n\tat ✽.Given I am logged into the application with user \"myappssolutions33@gmail.com\" and password \"password1\"(ServiceProvider.feature:4)\n",
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
  "line": 165,
  "name": "Verify Coworking Facility Creation",
  "description": "",
  "id": "service-provider;verify-coworking-facility-creation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 164,
      "name": "@Sanity1"
    }
  ]
});
formatter.step({
  "line": 166,
  "name": "I click the \"Facility\" element",
  "keyword": "When "
});
formatter.step({
  "line": 167,
  "name": "I click the \"Add Facility\" button",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "I select \"Co-Working Space\" from the \"Select Facility Type\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "I click the \"Add Location\" button",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "I select \"Bangalore\" from the \"Select City\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "I select \"JP Nagar\" from the \"Locality\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "I enter \"bilekahalli\" in the \"Please Enter Name\" field",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "I enter \"dsr galleria\" in the \"Please Enter address\" field",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "I enter \"signal\" in the \"Please Enter landmark\" field",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "I enter \"incubex\" in the \"Please Enter nearBy\" field",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "I click the \"Add\" button",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "I click the \"OK\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 178,
  "name": "I select \"bilekahalli\" from the \"Building/Location\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "I enter \"coworking 888\" in the \"Facility Meeting Room Name\" field",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "I enter \"100\" in the \"Facility No Of Seats\" field",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "I enter \"1000\" in the \"Facility Area Size Sq\" field",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "I enter \"adding coworking room\" in the \"Facility Description\" field",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 183,
      "value": "#        And I click the \"Image Upload\" element"
    },
    {
      "line": 184,
      "value": "#        And I upload the \"Image 1\" file"
    },
    {
      "line": 185,
      "value": "#        And I click the \"Image Upload\" element"
    },
    {
      "line": 186,
      "value": "#        And I upload the \"Image 2\" file"
    },
    {
      "line": 187,
      "value": "#        And I click the \"Image Upload\" element"
    },
    {
      "line": 188,
      "value": "#        And I upload the \"Image 3\" file"
    }
  ],
  "line": 189,
  "name": "I wait \"30\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "I check the following checkboxes",
  "rows": [
    {
      "cells": [
        "WiFi"
      ],
      "line": 191
    },
    {
      "cells": [
        "Car Parking"
      ],
      "line": 192
    },
    {
      "cells": [
        "Power Backup"
      ],
      "line": 193
    },
    {
      "cells": [
        "Security"
      ],
      "line": 194
    },
    {
      "cells": [
        "AC"
      ],
      "line": 195
    },
    {
      "cells": [
        "White Board"
      ],
      "line": 196
    },
    {
      "cells": [
        "2 Parking"
      ],
      "line": 197
    },
    {
      "cells": [
        "Leased Line"
      ],
      "line": 198
    },
    {
      "cells": [
        "Print/Scan"
      ],
      "line": 199
    },
    {
      "cells": [
        "Explore"
      ],
      "line": 200
    },
    {
      "cells": [
        "Event Seat"
      ],
      "line": 201
    },
    {
      "cells": [
        "Finger Print"
      ],
      "line": 202
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "I click the \"Next\" button",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "I enter \"100\" in the \"Cost Per Day\" field",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "I enter \"1000\" in the \"Cost Per Month\" field",
  "keyword": "And "
});
formatter.step({
  "line": 206,
  "name": "I click the \"Offer Add\" button",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "I enter \"2018-03-3\" in the \"From\" field",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "I enter \"2018-03-4\" in the \"To\" field",
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "I enter \"10\" in the \"% Of Offer\" field",
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "I click the \"Cancel Add\" button",
  "keyword": "And "
});
formatter.step({
  "line": 211,
  "name": "I enter \"1\" in the \"No Of Days Before\" field",
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "I enter \"10\" in the \"% Of Deduction\" field",
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "I enter \"2\" in the \"No Of Days Before2\" field",
  "keyword": "And "
});
formatter.step({
  "line": 214,
  "name": "I enter \"20\" in the \"% Of Deduction2\" field",
  "keyword": "And "
});
formatter.step({
  "line": 215,
  "name": "I enter \"3\" in the \"No Of Days Before3\" field",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "I enter \"30\" in the \"% Of Deduction3\" field",
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "I enter \"8497995311\" in the \"Sp Contact Number\" field",
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "I enter \"aparna.b@myapps-solutions.com\" in the \"Sp Email\" field",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "I select \"Offline\" from the \"Payment Mode\" dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 220,
  "name": "I check the \"Request Huddil Verfication\" checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 221,
  "name": "I click the \"Next2\" button",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "I click the \"Submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "I wait \"80\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 224,
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Co-Working Space",
      "offset": 10
    },
    {
      "val": "Select Facility Type",
      "offset": 38
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
      "val": "Add Location",
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "coworking 888",
      "offset": 9
    },
    {
      "val": "Facility Meeting Room Name",
      "offset": 32
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
      "val": "adding coworking room",
      "offset": 9
    },
    {
      "val": "Facility Description",
      "offset": 40
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
      "val": "2018-03-3",
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
      "val": "2018-03-4",
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
      "val": "Offline",
      "offset": 10
    },
    {
      "val": "Payment Mode",
      "offset": 29
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
      "val": "80",
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
formatter.after({
  "duration": 247271,
  "status": "passed"
});
});