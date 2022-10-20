Feature: Ir a la pagina de estudiantes
    Como usuario, deseo poder dar clic en la seccion estudiantes del menu hamburguesa
    Para que me dirija al endpoint de estudiantes y ver la respectiva pagina

Scenario: Vizualisar la seccion de estudiantes
    Given Usuario entra a la plataforma
    When Doy clic en la seccion de estudiantes del menu hamburguesa
    Then Me debe dirigir al endpoint de estudiantes y mostrarme la pagina de estudiantes