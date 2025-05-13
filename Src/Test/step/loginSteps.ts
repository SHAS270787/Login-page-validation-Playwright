import { Given, When, Then } from '@cucumber/cucumber' 
import { chromium, Page, Browser } from '@playwright/test'

let browser: Browser;
let page: Page;

Given ('I navigate to the login page', async function () {
  browser = await chromium.launch({ headless:false });
  page = await browser.newPage();
  await page.goto('https://demo.guru99.com/test/newtours/')  

});

When ('I provide valid username and password', async function () {
  await page.locator('[name="username"]').fill('mercury')
  await page.locator('[name="password"]').fill('mercury')
});

Then ('click on login button', async function () {
  await page.locator('[name=submit]').click()
  await page.waitForTimeout(2000)
});

When ('I provide valid username as {string} and password as {string}', async function (name, password) {
  await page.locator('[name="username"]').fill(name)
  await page.locator('[name="password"]').fill(password)
});
