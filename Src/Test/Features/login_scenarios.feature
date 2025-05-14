Feature: verify login with Scenario Outline

  Scenario Outline: Verify login success Message
    Given Provide valid urls
    When enter username as "<username>"
    And enter password as "<password>"
    Then click on login button
    Then verify login success message as "<message>"

    Examples:
      | username | password | message            |
      | mercury  | mercury  | Login Successfully |
