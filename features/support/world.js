const { setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber')
const { Builder } = require('selenium-webdriver')

class BddWorld {
  constructor() {
    this.chromeDriver = null
  }

  async openChrome(url) {
    if (!this.chromeDriver) {
      this.chromeDriver = await new Builder().forBrowser('chrome').build()
    }
    await this.chromeDriver.get(url)
  }

  async closeChrome() {
    if (this.chromeDriver) {
      await this.chromeDriver.quit()
    }
  }
}

setWorldConstructor(BddWorld)
setDefaultTimeout(15000)