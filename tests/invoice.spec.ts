import { test } from '@playwright/test';
import ClientPage from '@pages/client.page'
import InvoicePage from '@pages/invoice.page';
import CommonComponent from '@pages/component/common.component';
import EnterPaymentComponent from '@pages/component/enterPayment.component';


test.describe('Invoice Feature', () => {
  let commonComponent: CommonComponent;
  let clientPage: ClientPage;
  let inovicePage: InvoicePage;
  let enterPaymentComponent: EnterPaymentComponent;

  test.beforeEach(async ({ page }) => {
    commonComponent = new CommonComponent(page);
    clientPage = new ClientPage(page);
    inovicePage = new InvoicePage(page);
    enterPaymentComponent = new EnterPaymentComponent(page); // Initialize enterPaymentComponent

    await page.goto('/app/beta/invoices');
    await page.waitForLoadState('networkidle');
  });

  test('Should able to create Invoice with Status : Draft', async ({ page }) => {
   //Click on New Invoice
    await commonComponent.clickShortCut('New Invoice');
    //Search for the Client and then click on the client
    await clientPage.searchviaClientNumberandClick('QA-Automation1234');
    //Fill the Invoice details
   await inovicePage.fillInvoiceDetails('Test Invoice - ', ' ', 'Description Automation - ', 'Invoice from the automation script ');
    await inovicePage.saveInvoice();
  await inovicePage.verifySidebarState('Draft'); 
 await commonComponent.clickSidebarOption(page, 'Delete'); // English    
});

test('Should able to create Invoice with Status : Open ', async ({ page }) => {
  //Click on New Invoice
   await commonComponent.clickShortCut('New Invoice');

   //Search for the Client and then click on the client

   await clientPage.searchviaClientNumberandClick('QA-Automation1234');

   //Fill the Invoice details
  await inovicePage.fillInvoiceDetails('Test Invoice - ', ' ', 'Description Automation - ', 'Invoice from the automation script ');
 await inovicePage.addIntroductoryText('Introductory text Open');
  await inovicePage.addItemDetails('Automation Service', 'item ', '2', '200');
   await inovicePage.saveInvoice();
   await inovicePage.verifySidebarState('Draft'); 
   await commonComponent.clickSidebarOption(page, 'Complete'); // English    
   await commonComponent.handleDialogAction('Approve');
   await commonComponent.waitForElementToDisappear( '#Complete-Document');  //Complete Document button should disappear
   await inovicePage.verifySidebarState('Open'); 

});

test('Should able to create Invoice with Status : Paid ', async ({ page }) => {
  //Click on New Invoice
   await commonComponent.clickShortCut('New Invoice');

   //Search for the Client and then click on the client

   await clientPage.searchviaClientNumberandClick('QA-Automation1234');

   //Fill the Invoice details
  await inovicePage.fillInvoiceDetails('Test Invoice - ', ' ', 'Description Automation - ', 'Invoice from the automation script ');
  await inovicePage.addItemDetails('Automation Service Paid', 'item ', '2', '400');
   await inovicePage.saveInvoice();
   await inovicePage.verifySidebarState('Draft'); 
   await commonComponent.clickSidebarOption(page, 'Complete'); // English    
   await commonComponent.handleDialogAction('Approve');
   await commonComponent.waitForElementToDisappear( '#Complete-Document');  //Complete Document button should disappear
   await inovicePage.verifySidebarState('Open'); 
   await commonComponent.clickSidebarOption(page,'Enter Payment'); // English    
  await enterPaymentComponent.toggleSwitch(page, 'Mark Invoice as Paid', 'On');
  await enterPaymentComponent.submitPayment();
  await inovicePage.verifySidebarState('Paid');
 

});

});