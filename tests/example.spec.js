import { test } from '@playwright/test';

test('navigate to aerosimple and login', async ({ page }) => {
  await page.goto('/'); 
  await page.getByPlaceholder('Email').fill(process.env.TEST_USER);
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').fill(process.env.TEST_PASSWORD);
  await page.getByRole('button', { name: 'Login with Password' }).click(); 
});