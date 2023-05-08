var { Given } = require("cucumber");
var { When } = require("cucumber");
var { Then } = require("cucumber");
var { expect } = require("chai");
const { faker } = require("@faker-js/faker");

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

When("I open the signup form", () => {
  $("a=Regístrate").waitForDisplayed(5000);
  $("a=Regístrate").click();
});

Then("I expect to see the register form", () => {
  const registerFormHeading = $("p.text-center.font-bold");
  registerFormHeading.waitForDisplayed(5000);
  const headingText = registerFormHeading.getText();
  expect(headingText).to.equal("CREA UNA NUEVA CUENTA");
});

When("I fill in the signup form with valid data", () => {
  const nameInput = $('input[name="firstname"]');
  nameInput.setValue(faker.name.firstName());

  const lastnameInput = $('input[name="lastname"]');
  lastnameInput.setValue(faker.name.lastName());

  const emailInput = $('input[name="email"]');
  emailInput.setValue(faker.internet.email());

  const password = faker.internet.password();

  const passwordInput = $('input[name="password"]');
  passwordInput.setValue(password);

  const confirmPasswordInput = $('input[name="password2"]');
  confirmPasswordInput.setValue(password);

  const termsCheckbox = $('input[name="accept"]');
  termsCheckbox.click();
});

When("I submit the signup form", () => {
  $("button=Registrarse").click();
});

Given("I clear university field", () => {
  // Select the second fieldset within the form
  const universityFieldset = $$(
    "form.loginstyles__LoginForm-sc-e7acdk-3.cEYmnO > fieldset"
  )[1];

  // Open
  universityFieldset.click();

  // Press the Backspace key
  browser.keys("\uE003");

  // Close
  universityFieldset.click();
});

Given("I check the no bachelor checkbox", () => {
  const noBachelorCheckbox = $('input[name="no_bachelor"]');
  noBachelorCheckbox.click();
});

Given("I close the successful signup modal", () => {
  const closeModalButton = $(".swal2-confirm.swal2-styled");
  closeModalButton.waitForDisplayed(5000);
  closeModalButton.click();
});

Given("I log out", () => {
  $("button.loginButton=Salir").waitForDisplayed(5000);
  $("button.loginButton=Salir").click();
});

Then("I expect to see the successful signup modal", () => {
  const successModal = $(".swal2-popup.swal2-modal.swal2-icon-success");
  successModal.waitForDisplayed(5000);
});
