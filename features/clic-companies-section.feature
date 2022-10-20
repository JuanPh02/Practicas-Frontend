Feature: Ir a la seccion de empresas
    Como usuario, deseo poder dar clic en la seccion empresas del menu hamburguesa
    Para que me dirija al endpoint de empresas y ver la respectiva pagina

Scenario: Visualizacion de la pagina de compañias 
    Given Usuario entra a la plataforma 
    When Doy clic en la seccion de empresas del menu hamburguesa
    Then Me debe dirigir al endpoint de empresas y mostrarme la pagina de empresas