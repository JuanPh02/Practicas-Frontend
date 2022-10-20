Feature: Ir a la página inicial al hacer clic en el logo del navbar
  Como usuario, deseo poder darle clic al logo de la universidad situado en el header
  para dirigirme en cualquier momento a la página de Inicio

  Scenario: Vizualisar el home al dar clic en el logo
    Given Usuario entra a la platafora
    When Hago clic en el logo de la universidad
    Then Debo ser redirigido a la pagina de Inicio