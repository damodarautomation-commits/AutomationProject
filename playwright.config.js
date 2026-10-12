import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv'; 
dotenv.config();

export default defineConfig({
  testDir: './tests',
  use: {
    browserName: 'chromium',
    baseURL: process.env.BASE_URL || 'https://app.staging.aerosimple.com/',
    headless: true,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized']
    },
  }
});