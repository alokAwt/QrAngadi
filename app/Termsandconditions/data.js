const tableOfContents = [
  {
    head: "Terms of Service",
    content: "",
  },
  { head: "Scope of Service", content: "" },
  { head: "Free Trial Account", content: ["Lawful use of the services"] },
  {
    head: "QR Angadi's Responsibilities, Representations, and Warranties",
    content: "",
  },
  {
    head: "Agreements",
    content: [
      "Reasonable Attempts to Correct Errors on Notice",
      "Customer Agrees To",
      "Customer Representations and Warranties",
    ],
  },
  {
    head: "Term, Termination, and Suspension of Service",
    content: [
      "Initial Term",
      "Termination by Customer",
      "Termination by “QRTIGER PTE. LTD.”",
      "Following termination",
      "Suspension of Service",
      "Term of Suspension and Retention of Data",
      "Renewal of Term",
    ],
  },
  {
    head: "Fees, Billing, Taxes, Charges",
    content: [
      "Fees",
      "Billing and Payment Arrangements",
      "Payment by Credit Card/ Wire Transfer/Cheque/PayPal/Stripe",
      "Taxes",
    ],
  },
  {
    head: "Modification of Terms and Conditions",
    content: ["Limited Warranty: Limitation of Damages"],
  },
  {
    head: "Software and Intellectual Property Rights",
    content: [
      "Ownership of Intellectual Property Rights",
      "Trademarks",
      "Right to Use Logo",
      "License of Customer Software and Intellectual Property",
      "No Assurance of Compatibility",
      "Confidentiality",
      "Indemnification",
      "Governing Law",
      "Severability",
      "Waiver",
      "Assignment",
    ],
  },
  {
    head: "Get in Touch with Us",
    content: "",
  },
];

const termsOfService = [
  "You must be of legal age to enter into a binding contract in your jurisdiction to use our services.",
  "You agree to provide accurate and complete information when registering for an account or using our services.",
  "You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
  "You agree not to engage in any illegal or unauthorized use of our services.",
  "QR Angadi reserves the right to modify or terminate the services at any time without prior notice.",
];
const scopeOfService = [
  "Generation and customization of QR codes.",
  "Analytics and tracking of QR code scans.",
  "Integration with third-party platforms and services.",
];
const trailAccount = [
  "The free trial account is subject to the same terms and conditions as paid accounts.",
  "QR Angadi reserves the right to limit the features available during the free trial period.",
  "Customers must provide valid contact information to access the free trial account.",
  "Abuse or misuse of the free trial account may result in termination of access.",
];
const useOfServices = [
  "Engaging in fraudulent or deceptive practices.",
  "Violating intellectual property rights.",
  "Distributing malicious content or malware.",
];
const responsibilities = [
  "Ensuring the availability and performance of our services, subject to reasonable downtime for maintenance and updates.",
  "Providing customer support and assistance to resolve issues promptly.",
  "Safeguarding customer data and information in accordance with our privacy policy.",
];
const agreements = [
  {
    head: "Agreements",
    text: "In the event of errors or discrepancies in our services, QR Angadi will make reasonable attempts to correct them upon receiving notice from the customer.",
  },
  {
    head: "Customer Agrees To:",
    text: "Customers agree to provide accurate and up-to-date information, comply with our terms and conditions, and use the services responsibly and lawfully.",
  },
  {
    head: "Customer Representations and Warranties:",
    text: "Customers represent and warrant that they have the necessary rights and permissions to use the content and materials uploaded or shared through our services.",
  },
];

const termination = [
  {
    head: "Initial Term:",
    text: "The initial term of service begins upon activation of the customer's account and continues for the duration specified in the agreement.",
  },
  {
    head: "Termination by Customer:",
    text: "Customers may terminate the services at any time by providing written notice to QR Angadi. Termination may be subject to early termination fees or other conditions as outlined in the agreement.",
  },
  {
    head: "Termination by QR Angadi:",
    text: "QR Angadi reserves the right to terminate or suspend the services if the customer violates the terms and conditions, fails to make payments, or engages in illegal or prohibited activities.",
  },
  {
    head: "Following Termination:",
    text: "Upon termination of the services, customers must cease all use of our services and return any materials or data provided by QR Angadi.",
  },
  {
    head: "Suspension of Service:",
    text: "QR Angadi may suspend the services temporarily if necessary to address technical issues, security concerns, or other emergencies.",
  },
  {
    head: "Term of Suspension and Retention of Data:",
    text: "During the suspension of services, customer data and information will be retained in accordance with our data retention policies.",
  },
  {
    head: "Renewal of Term:",
    text: "At the end of the initial term, the services may be renewed for additional periods upon mutual agreement between the parties.",
  },
];

const fees = [
  {
    head: "Fees:",
    text: "Customers are responsible for paying all fees associated with their use of our services. Fees may vary depending on the selected plan or subscription.",
  },
  {
    head: "Billing and Payment Arrangements:",
    text: "Billing cycles and payment methods are specified in the agreement. Customers may be billed monthly, annually, or according to other agreed-upon terms.",
  },
  {
    head: "Payment by Credit Card/ Wire Transfer/Cheque/PayPal/Stripe:",
    text: "Payment methods accepted by QR Angadi may include credit card, wire transfer, cheque, PayPal, or Stripe. Customers must provide valid payment information and authorize recurring payments if applicable.",
  },
  {
    head: "Taxes:",
    text: "Customers are responsible for paying any applicable taxes, including sales tax, value-added tax (VAT), or goods and services tax (GST), as required by law.",
  },
];
const modification = [
  {
    head: "Limited Warranty: Limitation of Damages:",
    text: `QR Angadi provides services on an "as is" and "as available" basis without warranties of any kind. In no event shall QR Angadi be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of our services.`,
  },
];
const intellectualPropertyRights = [
  {
    head: "Ownership of Intellectual Property Rights:",
    text: "All intellectual property rights, including copyrights, trademarks, and patents, associated with our services belong to QR Angadi or its licensors.",
  },
  {
    head: "Trademarks:",
    text: "QR Angadi's trademarks, logos, and branding materials are protected by intellectual property laws. Customers are not permitted to use our trademarks without prior written consent.",
  },
  {
    head: "Right to Use Logo:",
    text: "QR Angadi may grant customers the right to use our logo for promotional or marketing purposes with prior approval.",
  },
  {
    head: "License of Customer Software and Intellectual Property:",
    text: "Customers retain ownership of any software or intellectual property they upload or share through our services. By using our services, customers grant QR Angadi a limited license to use, reproduce, and distribute their content as necessary to provide the services.",
  },
  {
    head: "No Assurance of Compatibility:",
    text: "QR Angadi does not guarantee compatibility with third-party software or systems. Customers are responsible for ensuring compatibility before integrating our services with other platforms.",
  },
  {
    head: "Confidentiality:",
    text: "QR Angadi and customers agree to maintain the confidentiality of any proprietary or confidential information shared during the course of their business relationship.",
  },
  {
    head: "Indemnification:",
    text: "Customers agree to indemnify and hold QR Angadi harmless from any claims, damages, or liabilities arising from their use of our services or violation of these terms and conditions.",
  },
  {
    head: "Governing Law:",
    text: "These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which QR Angadi is based.",
  },
  {
    head: "Severability:",
    text: "If any provision of these terms and conditions is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.",
  },
  {
    head: "Waiver:",
    text: "The failure of QR Angadi to enforce any provision of these terms and conditions shall not constitute a waiver of that provision or any other provision.",
  },
  {
    head: "Assignment:",
    text: "Customers may not assign or transfer their rights or obligations under these terms and conditions without the prior written consent of QR Angadi.",
  },
];
export {
  tableOfContents,
  termsOfService,
  scopeOfService,
  trailAccount,
  useOfServices,
  responsibilities,
  agreements,
  termination,
  fees,
  modification,
  intellectualPropertyRights,
};
