import { test, expect } from '@playwright/test';

test.describe('Invoice Feature', () => {
  test.use({ storageState: 'loggedInState.json' })
  test('Verify Invoice Detail page ', async ({ page }) => {
    await page.goto('/app/beta/invoices')
    await page.locator(`li a[href*='orders']`).click()
    await expect(page).toHaveURL(/.*orders/)
  });
})