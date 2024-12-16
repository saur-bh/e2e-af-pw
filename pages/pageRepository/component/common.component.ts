import { Page, Locator } from '@playwright/test';
import { getLanguage ,clickSidebarOption ,handleDialogAction,waitForElementToDisappear} from '../../../utils/utils';
class CommonComponent {
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

  async clickSidebarOption(page: Page, option: string) {
    await clickSidebarOption(this.page, option);
  }

async handleDialogAction(action: 'Approve' | 'Cancel') {
    await handleDialogAction(this.page, action);
  }

  async waitForElementToDisappear(elementSelector: string, waitState: 'hidden' | 'detached' = 'detached', timeout: number = 100000) {
    await waitForElementToDisappear(this.page, elementSelector, waitState, timeout);
  }
}

export default  CommonComponent ;