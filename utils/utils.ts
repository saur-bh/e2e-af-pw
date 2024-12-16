import { Page } from '@playwright/test';

export async function getLanguage(page: Page): Promise<string> {
  return await page.evaluate(() => localStorage.getItem('i18nextLng') ||  'en-GB');  //de-DE
}

export async function clickSidebarOption(page: Page, option: string) {
  // Scoped locator to the sidebar box
  const optionLocator = page.locator(
    `.sidebar-box.confirmation--box button:has-text("${option}")`
  );

  // Validate the number of matching elements
  const buttonCount = await optionLocator.count();
  if (buttonCount > 1) {
    throw new Error(
      `Strict mode violation: Found ${buttonCount} buttons for "${option}". Ensure the selector is unique.`
    );
  } else if (buttonCount === 0) {
    throw new Error(`No button found for option "${option}".`);
  }

  // Wait for the button to be visible
  await optionLocator.waitFor({ state: 'visible' });

  // Click the button
  await optionLocator.click();
  console.log(`Clicked on sidebar option: "${option}"`);
}