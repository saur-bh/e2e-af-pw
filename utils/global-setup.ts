import { chromium, FullConfig } from "@playwright/test";
import { config } from 'dotenv';
import {  LoginItems} from '@objects/UiLocators_Common';
import { testConfig } from "./testConfig";

// Load environment variables from .env file
config();

async function globalSetup(config: FullConfig) {
  const ENV = process.env.ENV || 'stagqa';
  const DOMAIN = (ENV === 'stagqa' || ENV === 'dresden') ? 'billodev' : 'billomat';
  const LNG = process.env.LNG || 'en-GB';  //de-DE
  const baseURL = `https://${ENV}.${DOMAIN}.net/app/auth`;
  console.log(`I18NEXT_LNG : ${LNG}`);
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log(`Navigating to: ${baseURL}`);
  await page.goto(baseURL);

  // Set the i18nextLng in local storage
  await page.evaluate(([key, value]) => {
    localStorage.setItem(key, value);
  }, ['i18nextLng', LNG]);

  // Save the not logged-in state
  await page.context().storageState({ path: 'notLoggedInState.json' });

  // Perform login
  await page.locator(LoginItems.txtBox_email).fill(testConfig.username);
  await page.locator(LoginItems.txtBox_password).fill(testConfig.password);
  await page.locator(LoginItems.btn_login).click();

  // Save the logged-in state
  await page.context().storageState({ path: 'loggedInState.json' });

  await browser.close();
}

export default globalSetup;