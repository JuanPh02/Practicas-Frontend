const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('chai')
const { By } = require('selenium-webdriver')

Given("Usuario ingresa a la plataforma", async function () {
  await this.openChrome('http://127.0.0.1:3000');
})
When("Carga la pagina de Inicio", async function () {
  const statePage = await this.chromeDriver.executeScript('return document.readyState');
  await this.chromeDriver.sleep(1000);
  expect(statePage).to.be.eq('complete');
})
Then("Debe ver el navbar en la parte superior", async function () {
  const navbar = await this.chromeDriver.findElement(By.className("navbar"));
  await this.chromeDriver.sleep(1000);
  const visible = await navbar.isDisplayed();
  expect(visible).to.be.eq(true);
  this.closeChrome();
})