export const UiLocators = {
    loginPage: {
      txtBox_email: 'input[name="email"]',
      txtBox_password: 'input[name="password"]',
      btn_login: 'button:has-text("Login")'
    },
    clientPage:{
        txtBox_clientNumber: 'div:has(> label.ui-input--label:has-text("Client Number")), div:has(> label.ui-input--label:has-text("Kunden-Nr")) input[type="text"]',
        table_clientData: "td[data-label='Client Number'], td[data-label='Kunden-Nr']"
        
    }
    // Add more locators as needed
  };