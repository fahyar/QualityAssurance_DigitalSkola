const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

describe("Sauce Demo Automate Test", function () {
  let driver;

  //test case 1: visit sauce demo and try login
  it("Visit Sauce Demo dan cek page title", async function () {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");

    await driver.quit();

    let inputUsername = await driver.findElement(By.id("user-name"));
    let inputPassword = await driver.findElement(By.id("password"));
    let buttonLogin = await driver.findElemenb(By.id("login-button"));

    await inputUsername.sendKeys("standard_user");
    await inputPassword.sendKeys("secret_sauce");
    await buttonLogin.click();

    //asert: memastikan object sama persis
    assert.strictEqual(title, "Swag Labs");

    //asser: displayed button
    await buttonCart.isDisplayed();
  });

  //test case 2: creating sort product
  it("");
});
