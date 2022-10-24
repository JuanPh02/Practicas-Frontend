const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('chai')
const { By } = require('selenium-webdriver')

Given("Usuario se encuentra en una pagina diferente a la de Inicio", async function () {
    await this.openChrome('http://127.0.0.1:3000/students');
})
When("Da clic en el logo de la universidad", async function () {
    const logo = await this.chromeDriver.findElement(By.className("navbar-logo"));
    logo.click();
})
Then("Debe ser redirigido a la pagina de Inicio", async function () {
    await this.chromeDriver.sleep(1000)
    const url = await this.chromeDriver.getCurrentUrl();
    expect(url).to.be.eq('http://127.0.0.1:3000/');
    this.closeChrome();
})