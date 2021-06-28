const {Builder, By, Key, until} = require('selenium-webdriver');
const readlineSync = require("readline-sync");

var testing = true;
var enteredPassword = readlineSync.question("Password: ");
(async function example() {
while(testing) {
  require('chromedriver');
  var webdriver = require('selenium-webdriver');
  var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
  try {
    await driver.get('http://localhost:3000/');
    await driver.findElement(By.linkText('Login')).click();
    await driver.findElement(By.id('email')).sendKeys('fredthefurrypotato@hotmail.com');
    await driver.findElement(By.id('password')).sendKeys(enteredPassword);
  } catch (error) {
  	console.error(error);
  }
  finally {
    //await driver.quit();
  }
  var response = readlineSync.question("Do you want to keep testing? ");
  if (response == 'n') {testing = false;}
    	else {continue;};
  }
})();