export const UiLocators = {
    invoicePage: {
      txt_documentName: '[data-testid="document-name"]',
      txt_Address: '.gui-details-document-address textarea',
      txt_clientNumber: 'div.gui-details-document-receiver a', // Client Number link
      txt_invoiceDate: '.gui-details-document-dates input[placeholder="DD/MM/YYYY"]',
      txt_dueDateDays: 'input[placeholder="Due Date in Days"]',
      txt_description: 'input[data-testid="document-label"]', // Description field
      txt_introText: '.gui-details-document-intro [data-slate-editor="true"]',
      txt_invoiceNumber: '.gui-details-document-docnumber input[readonly]', // Invoice Number (read-only)
      dropdown_priceBase: '.sidebar-box-row select.ui-select__control', // Price Base dropdown
      dropdown_currencyPriceBase: '.sidebar-box-row .sidebar-box--currency select.ui-select__control', // Currency & Price Base
      chk_paymentMethods: '.sidebar-box ul.no-bullet li label.ui-checkbox input[type="checkbox"]', // Payment methods
      txt_itemTitle: 'input[placeholder*="Tit"]', // Item titleconst inputField = page.locator('input[placeholder*="Tit"]'
      txt_itemDescription: '.position-description textarea', // Item description
      txt_itemQuantity: '#positionQuantity', // Quantity input
      txt_itemPrice: '.position-unitprice input[placeholder="Price"], .position-unitprice input[placeholder="Preis"]', // Item Price
      btn_save: '#Document--Document-Actions--Save', // Save button
      btn_cancel: '#Document--Document-Actions--Cancel', // Cancel button
      btn_duplicateArticle: '#Position-_local_pv8m5ter1wrpphwij8niaztp-duplicate', // Duplicate button
      btn_createArticle: '#Position-_local_pv8m5ter1wrpphwij8niaztp-create-article', // Create Article button
      btn_deleteArticle: '#Position-_local_pv8m5ter1wrpphwij8niaztp-delete', // Delete Article button
      btn_addDiscount: '#Document--Add-Total-Reduction', // Add Discount button
      btn_addTotalReduction: '#Document--Totals--Add-Reduction', // Add Total Reduction button
      sidebar_state: '.sidebar-box.state', // Sidebar state

    }
  };