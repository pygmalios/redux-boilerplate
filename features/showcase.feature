Feature: Showcase

  Scenario: I should see English text
    Given I am on the "/showcase" page
    When I just look around
    Then I should see "redux-boilerplate" as the page title
    And I should see "Hello" as the "greeting"

  Scenario: I should see Slovak text
    Given I am on the "/showcase" page
    When I select "Slovensky" as "locale"
    Then I should see "Nazdar" as the "greeting"
