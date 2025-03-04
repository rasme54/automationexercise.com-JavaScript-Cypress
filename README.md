# Project: [automationexercise.com](https://github.com/rasme54/automationexercise.com/tree/master)

  

[![Cypress Tests](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/ttoywa/master&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ttoywa/runs)

  

<div  align="left">

<code><img  width="40"  src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png"  alt="JavaScript"  title="JavaScript"/></code>

<code><img  width="40"  src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/cypress.png"  alt="Cypress"  title="Cypress"/></code>

</div>

  

## Table of contents

  

- [Introduction](#Introduction)

- [Technologies](#Technologies)

- [Setup](#Setup)

- [Test Cases Organization](#Test-Cases-Organization)

- [Test Cases Description](#Test-Cases-Description)

  

### Introduction:

  

The goal of the project is to create automated tests for the **automationexercise.com** application using **Cypress 10.11.0**. The main objective is to gain practical experience in end-to-end testing by implementing documented test cases. In the future, I plan to work on separate branches within the **Git** repository, which will allow me to experiment easily and potentially update the written Cypress tests to newer versions.

  

### Technologies:

  

- Javascript,

- Cypress --v10.11.0

- "cypress-real-events" v1.14.0

- "cypress-file-upload" v5.0.8

- "cypress-multi-reporters" v2.0.5

- "prettier" v3.5.1

- Node.js -- v20.11.1

  

### Setup:

  

To run this project, make sure you have **Node.js installed**, and then:

  

1. Clone repository to your computer.

2. Go to the main project folder.

3. Install dependencies with a command: <br>`npm install`

4. In project's main folder use: <br>`npx cypress open`  <br>or script: <br>`npm run open`

  

### Test Cases Organization

<details>

<summary>TS1 - Register User</summary>

<li>Test Case 1: Register User</li>

<li>Test Case 5: Register User with existing email</li>

</details>

<details>

<summary>TS2 - LogInLogOut</summary>

<li>Test Case 2: Login User with correct email and password</li>

<li>Test Case 3: Login User with incorrect email and password</li>

<li>Test Case 4: Logout User</li>

</details>

<details>

<summary>TS3 - ContactUsForm</summary>

<li>TestCase 6: Contact Us Form</li>

</details>

<details>

<summary>TS4 - VerifyPages</summary>

<li>Test Case 7: Verify Test Cases Page</li>

<li>Test Case 8: Verify All Products and product detail page</li>

</details>

<details>

<summary>TS5 - SearchProduct</summary>

<li>Test Case 9: Search Product</li>

<li>Test Case 18: View Category Products</li>

<li>Test Case 19: View & Cart Brand Products</li>

<li>Test Case 20: Search Products and Verify Cart After Login</li>

</details>

<details>

<summary>TS6 - VerifySubscription</summary>

<li>Test Case 10: Verify Subscription in home page</li>

<li>Test Case 11: Verify Subscription in Cart page</li>

</details>

<details>

<summary>TS7 - AddingProductToCart</summary>

<li>Test Case 12: Add Products in Cart</li>

<li>Test Case 17: Remove Products From Cart</li>

<li>Test Case 22: Add to cart from Recommended items</li>

</details>

<details>

<summary>TS8 - ActionsOnProducts</summary>

<li>Test Case 13: Verify Product quantity in Cart</li>

<li>Test Case 21: Add review on product</li>

<li>Test Case 23: Verify address details in checkout page</li>

</details>

<details>

<summary>TS9 - PlaceOrder</summary>

<li>Test Case 14: Place Order: Register while Checkout</li>

<li>Test Case 15: Place Order: Register before Checkout</li>

<li>Test Case 16: Place Order: Login before Checkout</li>

<li>Test Case 24: Download Invoice after purchase orde</li>

</details>

<details>

<summary>TS10 - WebsiteNavigation</summary>

<li>Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality</li>

<li>Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality</li>

</details>

### Test Cases Description

All test cases descriptions are available on [https://automationexercise.com/test_cases](#https://automationexercise.com/test_cases).

