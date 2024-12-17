import { devices, type PlaywrightTestConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

// Load the correct .env file based on ENV
const ENV = process.env.ENV || 'stagqa';
dotenv.config({ path: `.env.${ENV}` });

const DOMAIN = (ENV === 'stagqa' || ENV === 'dresden') ? 'billodev' : 'billomat';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 60000, // Maximum time one test can run for
  expect: {
    timeout: 60000, // Time for expect() conditions
  },

  /* Parallel and Retry Settings */
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1, // 2 retries on CI, 1 retry locally
  workers: process.env.CI ? 1 : undefined,

  /* Reporter Settings */
  reporter: [
    ['line'],
    ['html', { outputFolder: 'html-report', open: process.env.CI ? 'never' : 'on-failure' }],
  ],

  /* Global Setup */
  globalSetup: require.resolve('./utils/global-setup'),

  /* Use Settings */
  use: {
    actionTimeout: 60000,
    baseURL: `https://${ENV}.${DOMAIN}.net/app/auth`,
    trace: 'retain-on-failure',
    storageState: 'loggedInState.json',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* Browser Projects */
  projects: [
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        headless: false,
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        launchOptions: { slowMo: 100 },
      },
    },
    {
      name: 'Firefox',
      use: {
        browserName: 'firefox',
        headless: false,
      },
    },
    {
      name: 'Webkit',
      use: {
        browserName: 'webkit',
        headless: false,
      },
    },
  ],

  /* Test Artifacts */
  outputDir: 'test-results/',

};

export default config;