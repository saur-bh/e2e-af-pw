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


export async function handleDialogAction(page: Page, action: 'Approve' | 'Cancel') {
  const dialogSelector = '.ui-dialog.ui-dialog--open';
  
  // Determine the button based on the action
  const buttonSelector = `${dialogSelector} button:has-text("${action}")`;

  // Locate the button
  const buttonLocator = page.locator(buttonSelector);

  // Ensure the button is visible
  await buttonLocator.waitFor({ state: 'visible' });

  // Click the button
  await buttonLocator.click();
  console.log(`Dialog action performed: "${action}"`);
}

export async function waitForElementToDisappear(page: Page, elementSelector: string, waitState: 'hidden' | 'detached' = 'detached', timeout: number = 30000) {
  try {
    // Wait for the element to disappear (hidden or detached)
    await page.waitForSelector(elementSelector, { state: waitState, timeout });
    console.log(`Element "${elementSelector}" is no longer ${waitState === 'hidden' ? 'visible' : 'present in the DOM'}.`);
  } catch (error) {
    throw new Error(`Element "${elementSelector}" did not disappear within ${timeout / 1000} seconds. Error: ${error.message}`);
  }
}