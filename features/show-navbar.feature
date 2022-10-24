Feature: Visualizacion del navbar
  Como usuario, deseo poder visualizar el navbar
  para tener el control de navegación en cualquier parte de la aplicación

  Scenario: Visualizacion de navbar
    Given Usuario ingresa a la plataforma
    When Carga la pagina de Inicio 
    Then Debe ver el navbar en la parte superior