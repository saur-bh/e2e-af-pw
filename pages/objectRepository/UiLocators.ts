export const UiLocators = {
    loginPage: {
      txtBox_email: '#emailField', // Selector for the email input field
      txtBox_password: 'input[type=password]', // Selector for the password input field
      btn_login: '#loginFormButton', // Selector for the login button
    },
  invoicePage: {
      invoicenum: ".gui-details-document-incomingnumber > .fe-textarea",
      txt_description: "input[name='document-label']",
      txt_invoiceNumber: "input[name='document-name']"
  },
  finetradingPage: {
      pageisDisplayed: "h2.mb20",
      purchaceboxvalue: ".purchase--box--value",
      invoicedate: ".gui-details-document-dates input",
      duedate: ".gui-details-document-duedates input",
      deliverydate: ".gui-details-document-supplydate input",
      invoicenumber: ".gui-details-document-incomingnumber input",
      description: ".gui-details-document-description input",
      price: ".gui-details-document-price input",
      tax: ".gui-details-document-vat input",
      errortoast: ".notistack-SnackbarContainer",
      tablerow: ".fe-table--row",
      datarownumber: "[data-label='Number'] a",
      datarowsupplier: "[data-label='supplier'] a"
  },
  documentInboxPage: {
      fileupload: "input[type='file']",
      uploadfile: "#inbox-native-file-input",
      container: ".fe-select--container",
      option: ".fe-select__option"
  },
  supplierPage: {
      city: "#user-input-city",
      company: "#user-input-name",
      zip: "#user-input-zip",
      tabledata: ".paginated-table.paginated-suppliers td",
      companyname: "[data-test-id='SupplierDetailLayout'] input"
  },
  clientPage: {
      clientnumber: ".fe-input--label",
      tabledata: "td[data-label='Client Number']",
      description: "[name='document-label']"
  }
};
    
