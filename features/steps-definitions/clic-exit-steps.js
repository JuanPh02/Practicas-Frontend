const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('chai')
const { By } = require('selenium-webdriver')

Given("Usuario entra a la plataforma - exit section", async function () {
    await this.openChrome('http://127.0.0.1:3000');
})
When("Da clic en el boton salir del menu hamburguesa", async function () {
    const buttonMenu = await this.chromeDriver.findElement(By.css("svg"));
    buttonMenu.click();

    const itemExit = await this.chromeDriver.findElement(By.css("a[href='/logout']"));
    await this.chromeDriver.sleep(1000);
    itemExit.click();
})
Then("Debe mostrar una alerta indicando que ha salido de la aplicacion", async function () {
    await this.chromeDriver.sleep(1000);
    const alert = await this.chromeDriver.switchTo().alert();
    const message = await alert.getText();
    expect(message).to.be.eq('Cerró sesión correctamente');
    this.closeChrome();
})