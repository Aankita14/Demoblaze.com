# 🧪 Playwright Automation - Demoblaze E2E Test

This project is an end-to-end (E2E) automation suite for the [Demoblaze](https://www.demoblaze.com/) web application using **Playwright**. The test simulates a user journey: login → add product to cart → verify cart → place an order → confirm purchase.

## 📁 Project Structure
demoblaze.com/ │ ├── Pages/ │ ├── LoginPage.js # Handles login operations │ ├── HomePage.js # Product selection & cart navigation │ ├── CartPage.js # Cart verification │ └── PlaceOrderPage.js # Order form & purchase handling │ ├── tests/ │ └── purchaseTest.spec.js # Main test execution file │ ├── playwright.config.js # Playwright configuration ├── package.json # NPM package dependencies └── README.md # Project documentation

 🚀 Tech Stack
[Playwright](https://playwright.dev/)
JavaScript (ES6)
Node.js

⚙️ Setup Instructions
1. Clone the Repository

`bash
git clone https://github.com/your-username/demoblaze-playwright.git
cd demoblaze-playwright

2. Install Dependencies
 npm install

3. Run the Test:
   npx playwright test

**Test Flow**
The test includes the following steps:

1. Login

* Logs in using pavanol / test@123

2. Add to Cart

* Selects "Nexus 6" from product list

* Adds it to cart and navigates to cart page

3. Verify Cart

* Asserts that "Nexus 6" is present in the cart

4. Place Order

* Fills the order form with details like name, country, card info

* Clicks on "Purchase"

* Confirms the presence of success message: "Thank you for your purchase!"

  👩🏻‍💻 Author
Ankita Bundiwale
LinkedIn | GitHub
