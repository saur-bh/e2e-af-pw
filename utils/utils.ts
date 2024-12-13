import { Page } from '@playwright/test';

export async function getLanguage(page: Page): Promise<string> {
  return await page.evaluate(() => localStorage.getItem('i18nextLng') ||  'en-GB');  //de-DE
}