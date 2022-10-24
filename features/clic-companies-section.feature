Feature: Ir a la seccion de empresas
    Como usuario, deseo poder dar clic en la seccion empresas del menu hamburguesa
    Para que me dirija al endpoint de companies y ver la respectiva pagina

Scenario: Visualizacion de la pagina de empresas 
    Given Usuario entra a la plataforma - companies section
    When Da clic en la seccion de empresas del menu hamburguesa
    Then Debe dirigir al endpoint de companies y mostrarme la pagina de empresas