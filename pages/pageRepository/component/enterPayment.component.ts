import { Page, Locator } from '@playwright/test';
import { PaymentModalLocators } from '@objects/UiLoctors_Payment';

class EnterPaymentComponent {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async enterPaymentDetails(amount: string, date: string, discount: string, comment: string) {
    await this.page.locator(PaymentModalLocators.paymentModal).waitFor();
    await this.page.locator(PaymentModalLocators.txtBox_paymentAmount).fill(amount);
    await this.page.locator(PaymentModalLocators.txtBox_paymentDate).fill(date);
    await this.page.locator(PaymentModalLocators.txtBox_discount).fill(discount);
    await this.page.locator(PaymentModalLocators.txtArea_comment).fill(comment);
  }
   async selectPaymentMethod(page: Page, itemName: string) {
    // Click on the dropdown to open the list
     await page.locator('text=Payment Method').click();

    // Wait for the dropdown options to appear
    const dropdownSelector = 'div.ui-select__menu-list[role="listbox"]';
    await page.waitForSelector(dropdownSelector);

    // Locate the option by its visible text and click it
    const optionSelector = `div[role="option"]:has-text("${itemName}")`;
    await page.click(optionSelector);
}

  async toggleSwitch(page: Page, labelText: string, desiredState: 'On' | 'Off') {
    // Selector for the container based on the label text
    const containerLocator = page.locator(
      `div:has(> span.label:has-text("${labelText}"))`
    );
  
    // Selector for the button within the container
    const buttonLocator = containerLocator.locator('button[role="switch"]');
  
    // Get the current state of the button from the "aria-checked" property
    const currentState = await buttonLocator.getAttribute('aria-checked');
  
    if (currentState === null) {
      throw new Error(`Unable to determine the state of the switch for label "${labelText}".`);
    }
  
    // Determine the desired state in terms of "aria-checked" value
    const isCurrentlyOn = currentState === 'true';
    const shouldBeOn = desiredState === 'On';
  
    // If the current state matches the desired state, do nothing
    if (isCurrentlyOn === shouldBeOn) {
      console.log(`Switch is already "${desiredState}". No action needed.`);
      return;
    }
  
    // If the state does not match, click to toggle the switch
    console.log(`Switch is "${isCurrentlyOn ? 'On' : 'Off'}". Toggling it to "${desiredState}".`);
    await buttonLocator.click();
  
    // Validate the new state after clicking
    const newState = await buttonLocator.getAttribute('aria-checked');
    if (newState !== (shouldBeOn ? 'true' : 'false')) {
      throw new Error(`Failed to toggle the switch to "${desiredState}".`);
    }
  
    console.log(`Switch successfully toggled to "${desiredState}".`);
  }


  async cancelPayment() {
    await this.page.locator(PaymentModalLocators.btn_cancel).click();
  }

  async submitPayment() {
    await this.page.locator(PaymentModalLocators.btn_submit).click();
  }
}

export default EnterPaymentComponent;