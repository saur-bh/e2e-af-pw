import { Locator, Page } from '@playwright/test';
import { UiLocators } from '@objects/UiLoctors_Invoice';

class InvoicePage {
  private page: Page;
  txt_documentName: Locator;
  txt_Address: Locator;
  txt_clientNumber: Locator;
  txt_invoiceDate: Locator;
  txt_dueDateDays: Locator;
  txt_description: Locator;
  txt_introText: Locator;
  txt_invoiceNumber: Locator;
  dropdown_priceBase: Locator;
  dropdown_currencyPriceBase: Locator;
  chk_paymentMethods: Locator;
  txt_itemTitle: Locator;
  txt_itemDescription: Locator;
  txt_itemQuantity: Locator;
  txt_itemPrice: Locator;
  btn_save: Locator;
  btn_cancel: Locator;
  btn_duplicateArticle: Locator;
  btn_createArticle: Locator;
  btn_deleteArticle: Locator;

  constructor(page: Page) {
    this.page = page;
    const locators = UiLocators.invoicePage;

    this.txt_documentName = page.locator(locators.txt_documentName);
    this.txt_Address = page.locator(locators.txt_Address);
    this.txt_clientNumber = page.locator(locators.txt_clientNumber);
    this.txt_invoiceDate = page.locator(locators.txt_invoiceDate);
    this.txt_dueDateDays = page.locator(locators.txt_dueDateDays);
    this.txt_description = page.locator(locators.txt_description);
    this.txt_introText = page.locator(locators.txt_introText);
    this.txt_invoiceNumber = page.locator(locators.txt_invoiceNumber);
    this.dropdown_priceBase = page.locator(locators.dropdown_priceBase);
    this.dropdown_currencyPriceBase = page.locator(locators.dropdown_currencyPriceBase);
    this.chk_paymentMethods = page.locator(locators.chk_paymentMethods);
    this.txt_itemTitle = page.locator(locators.txt_itemTitle);
    this.txt_itemDescription = page.locator(locators.txt_itemDescription);
    this.txt_itemQuantity = page.locator(locators.txt_itemQuantity);
    this.txt_itemPrice = page.locator(locators.txt_itemPrice);
    this.btn_save = page.locator(locators.btn_save);
    this.btn_cancel = page.locator(locators.btn_cancel);
    this.btn_duplicateArticle = page.locator(locators.btn_duplicateArticle);
    this.btn_createArticle = page.locator(locators.btn_createArticle);
    this.btn_deleteArticle = page.locator(locators.btn_deleteArticle);
  }

  // Fill in invoice details
  async fillInvoiceDetails(docname: string, address: string, clientNumber: string, description: string) {
    await this.txt_documentName.type(docname, { delay: 100 });
    await this.txt_Address.type(address, { delay: 100 });
    await this.txt_clientNumber.type(clientNumber, { delay: 100 });
    await this.txt_description.type(description, { delay: 100 });
  }

  // Set invoice dates
  async setInvoiceDates(invoiceDate: string, dueDateDays: string) {
    await this.txt_invoiceDate.fill(invoiceDate);
    await this.txt_dueDateDays.fill(dueDateDays);
  }

  // Add introductory text
  async addIntroductoryText(introText: string) {
    // Select all existing text and delete it
    await this.txt_introText.click({ clickCount: 3 }); // Triple-click to select all text
    await this.page.keyboard.press('Backspace'); // Delete the selected text
    await this.txt_introText.type(introText, { delay: 100 }); // Type the new text
  
  }

  // Configure payment methods
  async configurePaymentMethods(methods: string[]) {
    for (const method of methods) {
      const checkbox = this.chk_paymentMethods.locator(`label:has-text("${method}")`);
      if (!(await checkbox.isChecked())) {
       
        await checkbox.check();
      }
    }
  }

  // Add item details
  async addItemDetails(title: string, description: string, quantity: string, price: string) {
    await this.txt_itemTitle.type(title, { delay: 100 });
    await this.txt_itemDescription.type(description, { delay: 100 });
    await this.txt_itemQuantity.fill(quantity);
    await this.txt_itemPrice.fill(price);
  }

  // Save the invoice
  async saveInvoice() {
    await this.btn_save.click();
  }

  // Cancel the invoice
  async cancelInvoice() {
    await this.btn_cancel.click();
  }

  // Duplicate an article
  async duplicateArticle() {
    await this.btn_duplicateArticle.click();
  }

  // Create a new article
  async createArticle() {
    await this.btn_createArticle.click();
  }

  // Delete an article
  async deleteArticle() {
    await this.btn_deleteArticle.click();
  }
}

export default InvoicePage;