Feature: Login into losestudiantes
  As an user I want to signup within losestudiantes website in order to rate teachers

  Scenario: Open register form from login modal
    Given I go to losestudiantes home screen
    When I open the login screen
    And I open the signup form
    Then I expect to see the register form

  Scenario: Successful signup with university
    Given I go to losestudiantes home screen
    When I open the login screen
    And I open the signup form
    And I fill in the signup form with valid data
    And I submit the signup form
    Then I expect to see the successful signup modal
    And I close the successful signup modal
    And I log out

  Scenario: Successful signup without university
    Given I go to losestudiantes home screen
    When I open the login screen
    And I open the signup form
    And I fill in the signup form with valid data
    And I clear university field
    And I check the no bachelor checkbox
    And I submit the signup form
    Then I expect to see the successful signup modal
    And I close the successful signup modal
    And I log out

  Scenario: User fails to signup due to not accepting terms and conditions
    Given I go to losestudiantes home screen
    When I open the login screen
    And I open the signup form
    And I fill in the signup form without accepting the terms and conditions
    And I submit the signup form
    Then I expect to see the error Tienes que aceptar los términos y condiciones para crear una cuenta

  Scenario Outline: Signup with various inputs
    Given I go to losestudiantes home screen
    When I open the login screen
    And I open the signup form
    And I fill the signup form with <firstname>, <lastname>, <email>, <password>, and <password2>
    And I submit the signup form
    Then I expect to see <result>

    Examples:
      | firstname | lastname | email                 | password  | password2 | result                          |
      | John      | Doe      | johndoe@example.com   | Passw0rd! | WRONG     | "Las contraseñas no coinciden"  |
      | John      | Doe      |                       | Passw0rd! | Passw0rd! | "Ingresa un correo electrónico" |
      | John      | Doe      | johndoe@example.com   |           | Passw0rd! | "Ingresa una contraseña"        |