import { Given, When, Then } from '@cucumber/cucumber' 
import { chromium, Page, Browser } from '@playwright/test'

let browser: Browser;
let page: Page;

Given ('Provide valid urls', async function () {
  browser = await chromium.launch({ headless:false });
  page = await browser.newPage();
  await page.goto('https://demo.guru99.com/test/newtours/')  

});
When ('enter username as {string}', async function (name) {
    await page.locator('[name="username"]').fill('name')
   
  });

When ('enter password as {string}', async function (pws) {
 
  await page.locator('[name="password"]').fill('pws')
});

Then ('click on submit button', async function () {
  await page.locator('[name=submit]').click()
  await page.waitForTimeout(2000)
});

Then ('verify login success message as {string}', async function () {
    await page.locator('[name=submit]').click()
    await page.waitForTimeout(2000)
  });