export const PaymentModalLocators = {
    paymentModal: '.payment-modal',
    
    // Total Amount Input
    txtBox_totalAmount: 'div:has(> label.ui-input--label:has-text("Total Amount")), div:has(> label.ui-input--label:has-text("Gesamtbetrag der Rechnung")) input[type="text"]',
  
    // Payment Date Input
    txtBox_paymentDate: 'div:has(> label.ui-input--label:has-text("Date")), div:has(> label.ui-input--label:has-text("Zahldatum")) input[placeholder="DD/MM/YYYY"], input[placeholder="TT.MM.JJJJ"]',
  
    // Payment Amount Input
    txtBox_paymentAmount: 'div:has(> label.ui-input--label:has-text("Open Amount")), div:has(> label.ui-input--label:has-text("Betrag")) input[type="text"]',
  
    // Discount Input
    txtBox_discount: 'div:has(> label.ui-input--label:has-text("Reduction")), div:has(> label.ui-input--label:has-text("Skonto")) input[type="text"]',
  
    // Payment Method Dropdown
    dropdown_paymentMethod: 'div:has(> label:has-text("Payment Method")), div:has(> label:has-text("Zahlart")) .ui-select-control',
  
    // Mark as Paid Switch
    switch_markAsPaid:  `div:has(> span.label:has-text("Mark Invoice as Paid")), div:has(> span.label:has-text("Rechnung als bezahlt markieren")) ,div:has(> span.label:has-text("Automatically Acknowledgement to Customers")), div:has(> span.label:has-text("Danksagung an Kunden automatisch versenden"))`,
  
    // Comment Textarea
    txtArea_comment: 'textarea[placeholder="Enter Your Comment Here..."], textarea[placeholder="Hier Kommentartext eingeben..."]',
  
    // Cancel Button
    btn_cancel: '#Payment-Invoice--Payment-Cancel',
  
    // Submit Button
    btn_submit: '#Payment-Invoice--Payment-Submit'
  };

  