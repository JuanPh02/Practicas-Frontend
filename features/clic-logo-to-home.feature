Feature: Ir a la página inicial al hacer clic en el logo del navbar
  Como usuario, deseo poder darle clic al logo de la universidad situado en el header
  para dirigirme en cualquier momento a la página de Inicio

  Scenario: Visualizar la pagina de Inicio al dar clic en el logo
    Given Usuario se encuentra en una pagina diferente a la de Inicio
    When Da clic en el logo de la universidad
    Then Debe ser redirigido a la pagina de Inicio