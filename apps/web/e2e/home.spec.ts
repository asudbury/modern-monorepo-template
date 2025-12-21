import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('should display welcome message', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /welcome home/i })).toBeVisible();
  });
});
