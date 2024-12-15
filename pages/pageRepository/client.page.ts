import { Locator, Page } from '@playwright/test';
import { ClientPageDialog } from '@objects/UiLocators_Common';
class ClientPage {
  private page: Page;
  clientNumberInput: Locator;
  tableData: Locator;

  constructor(page: Page) {
    this.page = page;
    this.clientNumberInput = page.locator(ClientPageDialog.txtBox_clientNumber)

    this.tableData = page.locator(ClientPageDialog.table_clientData)
  }

  async description(text: string) {
    await this.clientNumberInput.type(text, { delay: 100 });
  }

  async searchviaClientNumberandClick(value: string) {
    const label =  this.page.locator('label', { hasText: /Client Number|Kunden-Nr/ });
    const input =  label.locator('..').locator('input');
    await input.type(value, { delay: 10 });
    console.log('I am executing afterward');
    await this.tableData.filter({ hasText: value }).first().locator('..').click();
    await this.page.locator('button', { hasText: /Apply|Übernehmen/ }).click();
  }
}

export default ClientPage;