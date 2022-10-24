const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('chai')
const { By } = require('selenium-webdriver')

Given("Usuario entra a la plataforma - students section", async function () {
    await this.openChrome('http://127.0.0.1:3000');
})
When("Da clic en la seccion de estudiantes del menu hamburguesa", async function () {
    const buttonMenu = await this.chromeDriver.findElement(By.css("svg"));
    buttonMenu.click();

    const itemStudents = await this.chromeDriver.findElement(By.css("a[href='/students']"));
    await this.chromeDriver.sleep(1000);
    itemStudents.click();
})
Then("Debe dirigir al endpoint de students y mostrarme la pagina de estudiantes", async function () {
    const url = await this.chromeDriver.getCurrentUrl();
    expect(url).to.be.eq('http://127.0.0.1:3000/students');
    this.closeChrome();
})