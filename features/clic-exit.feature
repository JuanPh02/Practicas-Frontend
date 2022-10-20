Feature: Funcionamiento boton salir
    Como usuario, deseo poder dar clic en el boton de salir del menu hamburguesa
    Para verificar la funcionalidad del boton mostrando una alerta

Scenario: al dar clic en el boton de salir debe saltar la alerta 
    Given Usuario entra a la plataforma 
    When Doy clic en el boton salir del menu hamburguesa
    Then Debe mostrar una alerta indicando que ha salido de la aplicacion