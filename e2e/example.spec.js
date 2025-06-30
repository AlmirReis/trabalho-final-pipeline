import { test, expect } from '@playwright/test';

test('Deve acessar a página inicial', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
