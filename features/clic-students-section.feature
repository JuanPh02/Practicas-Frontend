Feature: Ir a la pagina de estudiantes
    Como usuario, deseo poder dar clic en la seccion estudiantes del menu hamburguesa
    Para que me dirija al endpoint de students y ver la respectiva pagina

Scenario: Visualizacion de la pagina de estudiantes
    Given Usuario entra a la plataforma - students section
    When Da clic en la seccion de estudiantes del menu hamburguesa
    Then Debe dirigir al endpoint de students y mostrarme la pagina de estudiantes