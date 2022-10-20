// module.exports = function() {
//     this.When(/^Abro la pagina de Inicio$/, async function() {
//         const page = await helpers.loadPage('http:localhost:3000/');
//         const navbar = await helpers.getAttributeValue('body', 'class');
//         expect(navbar).to.be.eq('navbar');
//     });
//     this.Then(/^Debo ver el navbar en la parte superior$/, async function() {
//         const elements = await driver.findElements(By.css(".container > a > img"));
//         expect(elements.length).to.be.eq(1);
//     });
// };

const { Given, When, Then } = require('@cucumber/cucumber')
const { expect, assert } = require('chai')
const { By } = require('selenium-webdriver')

Given("Usuario ingresa a la plataforma", async function () {
  await this.openChrome('http://127.0.0.1:3000')
})
When("Carga la pagina de Inicio", async function () {
    // const navbar = await this.chromeDriver.findElement(By.css('navbar'));
    const navbar = await this.chromeDriver.findElement(By.className("title"));
    const t = navbar.getText()
    console.log(t);
    // expect(navbar.length).to.eq(o)
    
    // await this.chromeDriver.findElement(By.name('nameInput')).sendKeys()
})
Then("Debo ver el navbar en la parte superior", async function () {
    const elements = await this.chromeDriver.findElements(By.css(".container > a > img"));
    expect(elements.length).to.be.eq(1);
//   await this.chromeDriver
//     .findElement(By.css(".container > a > img"))
//     .getText()
//     .then(function (text) {
//       code = text
//     })
  this.closeChrome()
})