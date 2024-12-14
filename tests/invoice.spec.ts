import { test, expect } from '@playwright/test';
import NavBarComponent from '@pages/component/navbar.component';
import ClientPage from '@pages/client.page'
import InvoicePage from '@pages/invoice.page';

test.describe('Invoice Feature', () => {
  let navBarComponent: NavBarComponent;
  let clientPage: ClientPage;
  let inovicePage: InvoicePage;

  test.beforeEach(async ({ page }) => {
    navBarComponent = new NavBarComponent(page);
    clientPage = new ClientPage(page);
    inovicePage = new InvoicePage(page);

    await page.goto('/app/beta/invoices');
    await page.waitForLoadState('networkidle');
  });

  test('Should able to delete invoice in Draft Status created via existing client', async ({ page }) => {
   //Click on New Invoice
    await navBarComponent.clickShortCut('New Invoice');

    //Search for the Client and then click on the client

    await clientPage.searchviaClientNumberandClick('QA-Automation1234');

    //Fill the Invoice details
   await inovicePage.addIntroductoryText('This is a test invoice');
   await page.pause();
    
});


});