import { Builder } from 'selenium-webdriver';
import { expect } from 'chai';

describe('Google Page Title Test', function () {
  this.timeout(30000); // Set a timeout for the test

  let driver;

  // Setup WebDriver before tests
  before(async function () {
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
    expect(title).to.equal('Google');
  });
});
