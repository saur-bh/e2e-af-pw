import { test, expect } from '@playwright/test';
import NavBarComponent from '@pages/component/navbar.component';
import ClientPage from '@pages/client.page'

test.describe('Invoice Feature', () => {
  let navBarComponent: NavBarComponent;
  let clientPage: ClientPage;

  test.beforeEach(async ({ page }) => {
    navBarComponent = new NavBarComponent(page);
    clientPage = new ClientPage(page);

    await page.goto('/app/beta/invoices');
    await page.waitForLoadState('networkidle');
  });

  test('Verify Invoice Detail page', async ({ page }) => {
    // Click to create new invoice
    await navBarComponent.clickShortCut('New Invoice');
    await clientPage.searchviaClientNumberandClick('QA-Automation1234');
    //await page.pause();
    // Select Client popup should appear

    // Select a client from the list

    // Verify that the client is selected and apply

  // Fill [data-testid="document-name"]
  await page.locator('[data-testid="document-name"]').fill('QA This is from automation I like it ');

  // Fill [data-testid="document-label"]
  await page.locator('[data-testid="document-label"]').fill('QA  Description ');


  // Fill [data-testid="_local_vnkh1p6zjxwxt3fjl0i99478"]
  await page.locator('[data-testid="_local_vnkh1p6zjxwxt3fjl0i99478"]').fill('Title Of first Postion');



  // Fill [placeholder="Price"]
  await page.locator('[placeholder="Price"]').fill('120 $');

  // Click div[role="button"]:has-text("#1TypeTitleDescriptionQuantityUnit---PriceTax8.1% Decimal TaxReductionKind$Gross")
  await page.locator('div[role="button"]:has-text("#1TypeTitleDescriptionQuantityUnit---PriceTax8.1% Decimal TaxReductionKind$Gross")').click();

  // Click text=Save >> nth=3
  await page.locator('text=Save').nth(3).click();
  await expect(page).toHaveURL('https://stagqa.billodev.net/app/beta/invoices/96567');

  // Click text=Draft
  await page.locator('text=Draft').click();

  // Click #Actions-Box--Delete
  await page.locator('#Actions-Box--Delete').click();

  // Click button:has-text("Approve") >> nth=1
  await page.locator('button:has-text("Approve")').nth(1).click();
  await expect(page).toHaveURL('https://stagqa.billodev.net/app/beta/invoices');
  });
});