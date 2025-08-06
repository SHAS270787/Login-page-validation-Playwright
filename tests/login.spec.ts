import { test, expect } from '@playwright/test';

test.describe('Login Page Validation', () => {

  test('invalid login shows error', async ({ page }) => {
    await page.goto('/');
    await page.fill('[data-test="username"]', 'wrong_user');
    await page.fill('[data-test="password"]', 'wrong_pass');
    await page.click('[data-test="login-button"]');
    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match any user');
  });

  test('valid login navigates to inventory', async ({ page }) => {
    await page.goto('/');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    await expect(page).toHaveURL(/inventory/);
  });

});
