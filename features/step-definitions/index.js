var { Given } = require("cucumber");
var { When } = require("cucumber");
var { Then } = require("cucumber");
var { expect } = require("chai");

Given("I go to losestudiantes home screen", () => {
  browser.url("/uniandes/");
  if ($("button=Cerrar").isDisplayed()) {
    $("button=Cerrar").click();
  }
});

When("I open the login screen", () => {
  $("button.loginButton").waitForExist(5000);
  $("button.loginButton").waitForDisplayed(5000);
  $("button.loginButton").click();
});

When("I fill a wrong email and password", () => {
  var cajaLogIn = $(".cajaLogIn");

  var mailInput = $('input[name="email"]');
  mailInput.click();
  mailInput.setValue("wrongemail@example.com");

  var passwordInput = $('input[name="password"]');
  passwordInput.click();
  passwordInput.setValue("123467891");
});

When("I try to login", () => {
  $("button=Ingresar").click();
});

Then("I expect to not be able to login", () => {
  $(".notice.alert.alert-danger").waitForDisplayed(5000);
});

When(/^I fill with (.*) and (.*)$/, (email, password) => {
  var mailInput = $('input[name="email"]');
  mailInput.click();
  mailInput.keys(email);

  var passwordInput = $('input[name="password"]');
  passwordInput.click();
  passwordInput.keys(password);
});

Then("I expect to see {string}", (error) => {
  $(".notice.alert.alert-danger").waitForDisplayed(5000);
  var alertText = browser.$(".notice.alert.alert-danger").getText();
  expect(alertText).to.include(error);
});

Then("I expect to successfully login", () => {
  $("button.loginButton=Salir").waitForDisplayed(5000);
});