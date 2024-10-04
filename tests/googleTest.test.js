const { Builder } = require('selenium-webdriver');
const assert = require('assert'); // Use built-in assertion library

describe('Google Page Title Test', function () {
  this.timeout(30000); // Set a timeout for the test

  let driver;

  // Setup WebDriver before tests
  before(async function () {
    // Initialize WebDriver for Chrome and maximize the window
    driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
  });

  // Close WebDriver after tests
  after(async function () {
    if (driver) {
      await driver.quit();
    }
  });

  // Define the test
  it('should open Google and check the title', async function () {
    await driver.get('https://www.google.com');
    const title = await driver.getTitle();
    assert.strictEqual(title, 'Google'); // Using assert instead of expect
  });
});
