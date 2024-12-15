import { test } from '@playwright/test';
import ClientPage from '@pages/client.page'
import InvoicePage from '@pages/invoice.page';
import CommonComponent from '@pages/component/common.component';


test.describe('Invoice Feature', () => {
  let commonComponent: CommonComponent;
  let clientPage: ClientPage;
  let inovicePage: InvoicePage;

  test.beforeEach(async ({ page }) => {
    commonComponent = new CommonComponent(page);
    clientPage = new ClientPage(page);
    inovicePage = new InvoicePage(page);

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
  await inovicePage.addIntroductoryText('Introductory text from the automation script');
   await inovicePage.addItemDetails('Item 1', 'Item Description 1', '1', '100');
    await inovicePage.saveInvoice();
    await inovicePage.verifySidebarState('Draft'); 
 // Confirm Sidebar and Delete the invoice
 await commonComponent.clickSidebarOption(page, 'Delete'); // English    

});

test('Should able to  create invoice and ', async ({ page }) => {
  //Click on New Invoice
   await commonComponent.clickShortCut('New Invoice');

   //Search for the Client and then click on the client

   await clientPage.searchviaClientNumberandClick('QA-Automation1234');

   //Fill the Invoice details
  await inovicePage.fillInvoiceDetails('Test Invoice - ', ' ', 'Description Automation - ', 'Invoice from the automation script ');
 await inovicePage.addIntroductoryText('Introductory text from the automation script');
  await inovicePage.addItemDetails('Item 1', 'Item Description 1', '1', '100');
   await inovicePage.saveInvoice();
   await inovicePage.verifySidebarState('Draft'); 
   await commonComponent.clickSidebarOption(page, 'Complete'); // English    
   await page.pause();  // to delete code via API 

   
});


});