import { Page } from '@playwright/test';
import { SidebarSelectors } from '@objects/UiLocators_Common';

export async function getLanguage(page: Page): Promise<string> {
  return await page.evaluate(() => localStorage.getItem('i18nextLng') ||  'en-GB');  //de-DE
}

export async function clickSidebarOption(page: Page, option: string) {
 // Wait for the sidebar confirmation box
 await page.waitForSelector(SidebarSelectors.sidebarBox, { state: 'visible' });

 // Locate the button: handles text inside <span> or directly in <button>
 const optionLocator = page.locator(
   `//button[normalize-space(.)="${option}"] | //button[span[normalize-space(text())="${option}"]]`
 );

 // Ensure the button is visible before interacting
 await optionLocator.waitFor({ state: 'visible' });

 // Perform the click action
 await optionLocator.click();
 console.log(`Clicked on sidebar option: "${option}"`);
}