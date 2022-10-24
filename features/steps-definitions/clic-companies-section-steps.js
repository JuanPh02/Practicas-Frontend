const { Given, When, Then } = require('@cucumber/cucumber')
const { expect, assert } = require('chai')
const { Builder,By, Key } = require('selenium-webdriver')
// let d = new Builder().forBrowser('chrome').build();
// d.
Given("Usuario entra a la plataforma - companies section", async function () {
    await this.openChrome('http://127.0.0.1:3000');
})
When("Da clic en la seccion de empresas del menu hamburguesa", async function () {
    const buttonMenu = await this.chromeDriver.findElement(By.css("svg"));
    buttonMenu.click();

    const itemCompanies = await this.chromeDriver.findElement(By.css("a[href='/companies']"));
    await this.chromeDriver.sleep(1000);
    itemCompanies.click();
})
Then("Debe dirigir al endpoint de companies y mostrarme la pagina de empresas", async function () {
    const url = await this.chromeDriver.getCurrentUrl();
    expect(url).to.be.eq('http://127.0.0.1:3000/companies');
    this.closeChrome();
})