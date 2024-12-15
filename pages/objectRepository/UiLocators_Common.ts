export const LoginItems = {
      txtBox_email: 'input[name="email"]',
      txtBox_password: 'input[name="password"]',
      btn_login: 'button:has-text("Login")'
    // Add more locators as needed
  };

  export const SidebarSelectors = {
    sidebarBox: '.sidebar-box.confirmation--box',
    sidebarOption: (optionText: string) =>
      `//button[span[normalize-space(text())="${optionText}"]]`, // Dynamic XPath
  };

  export const ClientPageDialog ={
    txtBox_clientNumber: 'div:has(> label.ui-input--label:has-text("Client Number")), div:has(> label.ui-input--label:has-text("Kunden-Nr")) input[type="text"]',
    table_clientData: "td[data-label='Client Number'], td[data-label='Kunden-Nr']"
} ;