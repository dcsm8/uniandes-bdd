Feature: Ginup

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