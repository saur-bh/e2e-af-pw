export const UiLocators = {
    loginPage: {
      txtBox_email: 'input[name="email"]',
      txtBox_password: 'input[name="password"]',
      btn_login: 'button:has-text("Login")'
    },
    invoicePage: {
      btn_selectClient: 'button:has-text("Select Client")',
      list_clients: 'ul.client-list',
      btn_applyClient: 'button:has-text("Apply")'
    },
    clientPage:{
        txtBox_clientNumber: 'div:has(> label.ui-input--label:has-text("Client Number")), div:has(> label.ui-input--label:has-text("Kunden-Nr")) input[type="text"]',
        table_clientData: "td[data-label='Client Number'], td[data-label='Kunden-Nr']"
        
    }
    // Add more locators as needed
  };