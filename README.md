# E2E BDD

This project demonstrates the use of BDD

## Project Information

- University: Universidad de los Andes
- Pruebas automatizadas de software

## Author

- David Sánchez

## Prerequisites

- Node v12.22.1

## Install

- npm install

## Run tests

- npm test

# Results

[chrome 113.0.5672.63 windows #0-0] Spec: C:\Users\David\Workspace\uniandes-bdd\features\login.feature
[chrome 113.0.5672.63 windows #0-0] Running: chrome (v113.0.5672.63) on windows
[chrome 113.0.5672.63 windows #0-0] Session ID: 65d3b44a7eb211b491fcd74a48bd84b2
[chrome 113.0.5672.63 windows #0-0]
[chrome 113.0.5672.63 windows #0-0] Login into losestudiantes
[chrome 113.0.5672.63 windows #0-0] Login failed with wrong inputs
[chrome 113.0.5672.63 windows #0-0] ✓ Given I go to losestudiantes home screen
[chrome 113.0.5672.63 windows #0-0] ✓ When I open the login screen
[chrome 113.0.5672.63 windows #0-0] ✓ And I fill with and
[chrome 113.0.5672.63 windows #0-0] ✓ And I try to login
[chrome 113.0.5672.63 windows #0-0] ✓ Then I expect to see "Ingresa una contraseña"
[chrome 113.0.5672.63 windows #0-0]
[chrome 113.0.5672.63 windows #0-0] Login failed with wrong inputs
[chrome 113.0.5672.63 windows #0-0] ✓ Given I go to losestudiantes home screen
[chrome 113.0.5672.63 windows #0-0] ✓ When I open the login screen
[chrome 113.0.5672.63 windows #0-0] ✓ And I fill with miso@gmail.com and 1234
[chrome 113.0.5672.63 windows #0-0] ✓ And I try to login
[chrome 113.0.5672.63 windows #0-0] ✓ Then I expect to see "Oops! Revisa tu contraseña"
[chrome 113.0.5672.63 windows #0-0]
[chrome 113.0.5672.63 windows #0-0] Successful login
[chrome 113.0.5672.63 windows #0-0] ✓ Given I go to losestudiantes home screen
[chrome 113.0.5672.63 windows #0-0] ✓ When I open the login screen
[chrome 113.0.5672.63 windows #0-0] ✓ And I fill with texeso8360@jobbrett.com and z8g#uULp0nd3Dv
[chrome 113.0.5672.63 windows #0-0] ✓ And I try to login
[chrome 113.0.5672.63 windows #0-0] ✓ Then I expect to successfully login
[chrome 113.0.5672.63 windows #0-0]
[chrome 113.0.5672.63 windows #0-0] 15 passing (26.3s)

---

[chrome 113.0.5672.63 windows #0-1] Spec: C:\Users\David\Workspace\uniandes-bdd\features\signup.feature
[chrome 113.0.5672.63 windows #0-1] Running: chrome (v113.0.5672.63) on windows
[chrome 113.0.5672.63 windows #0-1] Session ID: c224b7b05a2e82852e890901dded6ed4
[chrome 113.0.5672.63 windows #0-1]
[chrome 113.0.5672.63 windows #0-1] Login into losestudiantes
[chrome 113.0.5672.63 windows #0-1] Open register form from login modal
[chrome 113.0.5672.63 windows #0-1] ✓ Given I go to losestudiantes home screen
[chrome 113.0.5672.63 windows #0-1] ✓ When I open the login screen
[chrome 113.0.5672.63 windows #0-1] ✓ And I open the signup form
[chrome 113.0.5672.63 windows #0-1] ✓ Then I expect to see the register form
[chrome 113.0.5672.63 windows #0-1]
[chrome 113.0.5672.63 windows #0-1] Successful signup with university
[chrome 113.0.5672.63 windows #0-1] ✓ Given I go to losestudiantes home screen
[chrome 113.0.5672.63 windows #0-1] ✓ When I open the login screen
[chrome 113.0.5672.63 windows #0-1] ✓ And I open the signup form
[chrome 113.0.5672.63 windows #0-1] ✓ And I fill in the signup form with valid data
[chrome 113.0.5672.63 windows #0-1] ✓ And I submit the signup form
[chrome 113.0.5672.63 windows #0-1] ✓ Then I expect to see the successful signup modal
[chrome 113.0.5672.63 windows #0-1] ✓ And I close the successful signup modal
[chrome 113.0.5672.63 windows #0-1] ✓ And I log out
[chrome 113.0.5672.63 windows #0-1]
[chrome 113.0.5672.63 windows #0-1] Successful signup without university
[chrome 113.0.5672.63 windows #0-1] ✓ Given I go to losestudiantes home screen
[chrome 113.0.5672.63 windows #0-1] ✓ When I open the login screen
[chrome 113.0.5672.63 windows #0-1] ✓ And I open the signup form
[chrome 113.0.5672.63 windows #0-1] ✓ And I fill in the signup form with valid data
[chrome 113.0.5672.63 windows #0-1] ✓ And I clear university field
[chrome 113.0.5672.63 windows #0-1] ✓ And I check the no bachelor checkbox
[chrome 113.0.5672.63 windows #0-1] ✓ And I submit the signup form
[chrome 113.0.5672.63 windows #0-1] ✓ Then I expect to see the successful signup modal
[chrome 113.0.5672.63 windows #0-1] ✓ And I close the successful signup modal
[chrome 113.0.5672.63 windows #0-1] ✓ And I log out
[chrome 113.0.5672.63 windows #0-1]
[chrome 113.0.5672.63 windows #0-1] User fails to signup due to not accepting terms and conditions
[chrome 113.0.5672.63 windows #0-1] ✓ Given I go to losestudiantes home screen
[chrome 113.0.5672.63 windows #0-1] ✓ When I open the login screen
[chrome 113.0.5672.63 windows #0-1] ✓ And I open the signup form
[chrome 113.0.5672.63 windows #0-1] ✓ And I fill in the signup form without accepting the terms and conditions
[chrome 113.0.5672.63 windows #0-1] ✓ And I submit the signup form
[chrome 113.0.5672.63 windows #0-1] ✓ Then I expect to see the error Tienes que aceptar los términos y condiciones para crear
una cuenta
[chrome 113.0.5672.63 windows #0-1]
[chrome 113.0.5672.63 windows #0-1] Signup with various inputs
[chrome 113.0.5672.63 windows #0-1] ✓ Given I go to losestudiantes home screen
[chrome 113.0.5672.63 windows #0-1] ✓ When I open the login screen
[chrome 113.0.5672.63 windows #0-1] ✓ And I open the signup form
[chrome 113.0.5672.63 windows #0-1] ✓ And I fill the signup form with John, Doe, johndoe@example.com, Passw0rd!, and WRONG  
[chrome 113.0.5672.63 windows #0-1] ✓ And I submit the signup form
[chrome 113.0.5672.63 windows #0-1] ✓ Then I expect to see "Las contraseñas no coinciden"
[chrome 113.0.5672.63 windows #0-1]
[chrome 113.0.5672.63 windows #0-1] Signup with various inputs
[chrome 113.0.5672.63 windows #0-1] ✓ Given I go to losestudiantes home screen
[chrome 113.0.5672.63 windows #0-1] ✓ When I open the login screen
[chrome 113.0.5672.63 windows #0-1] ✓ And I open the signup form
[chrome 113.0.5672.63 windows #0-1] ✓ And I fill the signup form with John, Doe, , Passw0rd!, and Passw0rd!
[chrome 113.0.5672.63 windows #0-1] ✓ And I submit the signup form
[chrome 113.0.5672.63 windows #0-1] ✓ Then I expect to see "Ingresa un correo electrónico"
[chrome 113.0.5672.63 windows #0-1]
[chrome 113.0.5672.63 windows #0-1] Signup with various inputs
[chrome 113.0.5672.63 windows #0-1] ✓ Given I go to losestudiantes home screen
[chrome 113.0.5672.63 windows #0-1] ✓ When I open the login screen
[chrome 113.0.5672.63 windows #0-1] ✓ And I open the signup form
[chrome 113.0.5672.63 windows #0-1] ✓ And I fill the signup form with John, Doe, johndoe@example.com, , and Passw0rd!
[chrome 113.0.5672.63 windows #0-1] ✓ And I submit the signup form
[chrome 113.0.5672.63 windows #0-1] ✓ Then I expect to see "Ingresa una contraseña"
[chrome 113.0.5672.63 windows #0-1]
[chrome 113.0.5672.63 windows #0-1] 46 passing (40.3s)

Spec Files: 2 passed, 2 total (100% completed) in 00:00:46
