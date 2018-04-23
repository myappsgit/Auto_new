package stepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.json.simple.JSONObject;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import support.Page;
import utils.UtilFunctions;
import wrapper.SeleniumFunctions;

import java.util.List;

import static stepDefinitions.GlobalStepdefs.curPageName;
import static stepDefinitions.Hooks.driver;

public class ServiceProviderStepdefs {
    public String className = getClass().getSimpleName();

    @And("^I (un)?check the following checkboxes$")
    public void checkMulitipleCheckBoxEntries(String checkType, DataTable dataTable) throws Throwable {
        UtilFunctions.log("Class: " + className + "; Method: " + new Object() {
        }.getClass().getEnclosingMethod().getName() + " : Start");

        List<String> dataList = dataTable.asList(String.class);
        for (String checkBoxValue : dataList) {

            WebElement checkBoxObj = SeleniumFunctions.findElement(Hooks.getDriver(), By.xpath("//input[@type='checkbox' and following-sibling::p[text()='" + checkBoxValue + "']]"));
//            ((JavascriptExecutor) Hooks.getDriver()).executeScript("arguments[0].scrollIntoView(true);", checkBoxObj);
            try {
                if (!checkBoxObj.isSelected() && checkType == null) {
                    System.out.println(checkBoxObj.isDisplayed());
                    System.out.println(checkBoxObj.isEnabled());
                    checkBoxObj.click();
                    Thread.sleep(500);
                } else if (checkBoxObj.isSelected() && checkType.equals("check")) {
                    System.out.println(checkBoxObj.isDisplayed());
                    System.out.println(checkBoxObj.isEnabled());
                    checkBoxObj.click();
                    Thread.sleep(500);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }

        }
        UtilFunctions.log("Class: " + className + "; Method: " + new Object() {
        }.getClass().getEnclosingMethod().getName() + " : Complete");
    }

    @Then("^I select the facility \"(.*?)\"$")
    public void selectFacility(String facilityName) throws Throwable {
        UtilFunctions.log("Class: " + className + "; Method: " + new Object() {
        }.getClass().getEnclosingMethod().getName() + " : Start");
        WebElement recordElt = SeleniumFunctions.findElement(Hooks.getDriver(), By.xpath("//*[text()='No record found']"));
        if (recordElt == null) {
            Thread.sleep(2000);
            WebElement facility = SeleniumFunctions.findElement(Hooks.getDriver(), By.xpath("//img[@class='imgMeetingRoom' and parent::div[@class='facilityThumbnail' and child::div[@class='facilityTitleContainer' and descendant::*[contains(normalize-space(.),'" + facilityName + "')]]]]"));
//            WebElement facility = SeleniumFunctions.findElement(Hooks.getDriver(),By.xpath("//img[@class='imgMeetingRoom' and parent::div[@class='facilityThumbnail' and following-sibling::div[@class='facilityDetailsContainer' and descendant::*[contains(normalize-space(.), 'JNR Co-working')]]]]"));
            SeleniumFunctions.explicitWait(Hooks.getDriver(), 10, "//img[@class='imgMeetingRoom' and parent::div[@class='facilityThumbnail' and child::div[@class='facilityTitleContainer' and descendant::*[contains(normalize-space(.),'" + facilityName + "')]]]]" + ";" + "xpath");
            facility.click();
            Thread.sleep(2000);
        } else {
            System.out.println("No record found");
        }
        UtilFunctions.log("Class: " + className + "; Method: " + new Object() {
        }.getClass().getEnclosingMethod().getName() + " : Complete");
    }

    @And("^I select the \"(.*?)\" radiobutton$")
    public void clickRadioButton(String radioName) throws Throwable {
        UtilFunctions.log("Class: " + className + "; Method: " + new Object() {
        }.getClass().getEnclosingMethod().getName() + " : Start");

        JSONObject fileObj = UtilFunctions.getJSONFileObjBasedOnPageName(curPageName);
        radioName = radioName.replace(" ", "");
        String[] elementType = UtilFunctions.getElementStringAndType(fileObj, "RADIOS." + radioName);
        String fieldPath = elementType[0];
        String fieldMethod = elementType[1];
        Thread.sleep(1000);
        WebElement radioElt = SeleniumFunctions.findElement(Hooks.getDriver(), SeleniumFunctions.setByValues(fieldPath + ";" + fieldMethod));
        if (radioElt != null) {
            radioElt.click();
            Thread.sleep(1000);
        }
        if (!radioElt.isSelected()) {
            radioElt.click();
        }
        UtilFunctions.log("Class: " + className + "; Method: " + new Object() {
        }.getClass().getEnclosingMethod().getName() + " : Complete");
    }


    @And("^I click the \"(.*?)\" link of \"(.*?)\"$")
    public void selectLink(String linkName, String dashboardName) throws Throwable {
        UtilFunctions.log("Class: " + className + "; Method: " + new Object() {
        }.getClass().getEnclosingMethod().getName() + " : Start");

        try {
            SeleniumFunctions.explicitWait(Hooks.getDriver(), 10, "", By.xpath("//a[text()='" + linkName + "' and parent::*[@class='view' and preceding-sibling::*[text()='" + dashboardName + "']]]"));
            WebElement bookingElt = SeleniumFunctions.findElement(Hooks.getDriver(), By.xpath("//a[text()='" + linkName + "' and parent::*[@class='view' and preceding-sibling::*[text()='" + dashboardName + "']]]"));
            if (bookingElt != null) {
                bookingElt.click();
            }
        } catch (Exception e) {
            e.printStackTrace();
            UtilFunctions.log("Dashboard Name: " + dashboardName + " does not exists. Exception: " + e.getMessage());
        }
        UtilFunctions.log("Class: " + className + "; Method: " + new Object() {
        }.getClass().getEnclosingMethod().getName() + " : Complete");
    }

    @When("^I click the \"([^\"]*)\" button with Facility Name \"([^\"]*)\"$")
    public void clickmodify(String FacilityName) throws Throwable {
        UtilFunctions.log("Class: " + className + "; Method: " + new Object() {
        }.getClass().getEnclosingMethod().getName() + " : Start");

        try {
            WebElement modifyElt = SeleniumFunctions.findElement(Hooks.getDriver(), By.xpath("//tr/descendant::td[text()='"+FacilityName+"'"));
//            modifyElt.click();
        } catch (Exception e) {
            e.printStackTrace();
            UtilFunctions.log("FacilityName: " +FacilityName + " does not exists. Exception: " + e.getMessage());
        }
//        try {
//            WebElement bookingElt1 = SeleniumFunctions.findElement(Hooks.getDriver(), By.xpath("//div[@class='historyContainer' and descendant::*[text()='" + bookingId + "']]"));
//            bookingElt1.click();
//        }catch (Exception e){
//            e.printStackTrace();
//            UtilFunctions.log("Booking Id: " + bookingId + " does not exists. Exception: " + e.getMessage());
//        }
        UtilFunctions.log("Class: " + className + "; Method: " + new Object() {
        }.getClass().getEnclosingMethod().getName() + " : Complete");
    }

}




