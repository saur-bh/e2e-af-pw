import { Page, Locator } from '@playwright/test';
import { getLanguage } from '../../../utils/utils';
class NavBarComponent {
  private page: Page;
  shortcutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
  }

  async clickShortCut(item: string) {
    const language = await getLanguage(this.page);
    console.log('Language:', language);
    let buttonText = item;

    // Map item to the appropriate language
    switch (item) {
      case 'New Invoice':
      case 'Neue Rechnung':
        buttonText = language === 'de-DE' ? 'Neue Rechnung' : 'New Invoice';
        break;
      case 'Recurring Invoices':
      case 'Neue Abo-Rechnung':
        buttonText = language === 'de-DE' ? 'Neue Abo-Rechnung' : 'Recurring Invoices';
        break;
      default:
        buttonText = item;
    }

    const button = this.page.locator(`button:has-text("${buttonText}")`);
    await button.click();
  }
}

export default NavBarComponent;