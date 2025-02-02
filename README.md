# 🚀 Circula Assignment

## 📌 Project Overview

Welcome to the **Circula Assignment** project! This repository contains a web application built using JavaScript/Node.js. The project includes automated testing using Cypress.

This project is designed to provide a robust and scalable solution for handling web-based functionalities with a strong emphasis on automated testing and maintainability.

---

## 🛠️ Installation

Follow these steps to set up the project on your local machine:

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/HassanMujtaba619/Circula_Assignment_Syed_Hassan/tree/master
```

### 2️⃣ Navigate to the Project Directory

```sh
cd Circula_Assignment_Syed_Hassan
```

### 3️⃣ Install Node.js & npm

Ensure that you have Node.js and npm installed. If not, install them from:
- **Windows/macOS/Linux**: [Download Node.js](https://nodejs.org/)

Verify installation:
```sh
node -v   # Check Node.js version
npm -v    # Check npm version
```

### 4️⃣ Install Project Dependencies

```sh
npm install
```

### 5️⃣ Install Cypress

Cypress can be installed as a dev dependency:
```sh
npm install cypress --save-dev
```
To open Cypress:
```sh
npx cypress open
```

### 6️⃣ Environment Configuration

Create a `.env` file in the root directory and add necessary environment variables as required. Refer to `.env.example` for guidance.

---

## 🚀 Usage

### Run the Application

```sh
npm start
```

The application will start at `http://localhost:3000` by default.

### Run Tests

For running Cypress tests:

```sh
npm run test
```

For running the test suite with detailed output:

```sh
npm run test:verbose
```

To run Cypress in headless mode:
```sh
npx cypress run
```

To open Cypress Test Runner:
```sh
npx cypress open
```

---

## 📁 Folder Structure

```
Circula_Assignment_Syed_Hassan/
│-- src/                # Source code
│   │-- app.js          # Main application logic
│   │-- routes/         # API route handlers
│   │-- controllers/    # Business logic handling
│   │-- models/         # Database models
│-- tests/              # Cypress test files
│   │-- integration/    # End-to-end tests
│   │-- unit/           # Unit tests
│-- cypress/            # Cypress test framework
│   │-- fixtures/       # Static test data
│   │-- integration/    # End-to-end test cases
│   │-- e2e/            # End-to-end test scenarios
│   │-- page/           # Page object model files
│   │-- plugins/        # Cypress plugins
│   │-- support/        # Custom Cypress commands and configurations
│   │-- cypress.json    # Cypress configuration file
│-- public/             # Static assets
│-- config/             # Configuration files
│   │-- database.js     # Database connection setup
│-- node_modules/       # Installed dependencies
│-- package.json        # Project metadata & dependencies
│-- .env.example        # Example environment variables
│-- README.md           # Project documentation
```

---

## 📦 Dependencies

This project uses the following key dependencies:

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **Cypress** - End-to-end testing framework
- **dotenv** - Environment variable management

---

## 🚀 Features

- ✅ **Automated testing** with Cypress & Jest
- 📦 **Environment configuration** using `.env` files
- ⚡ **Fast & scalable** with Express.js

---
# 🚀 Cypress Test Run Results

## 🏁 Run Summary

| **Property**           | **Value**                                  |
|------------------------|-------------------------------------------|
| 🏆 **Cypress Version** | 14.0.1                                    |
| 🌍 **Browser**        | Electron 130 (headless)                   |
| 🔗 **Node Version**   | v23.7.0                                   |
| 📜 **Spec Found**     | 1 (`signup_process.cy.js`)                |
| 🔍 **Searched**       | `cypress/e2e/**/*.cy.{js,jsx,ts,tsx}`     |

---

## 📌 Running: **signup_process.cy.js** (1 of 1)

| 📝 **Test Case** | ✅ **Status** | ⏳ **Duration** |
|-----------------|--------------|----------------|
| **Should complete the signup process with valid data** | ✅ Passed | ⏱ 13.4s |
| **Should display an error for invalid email format** | ✅ Passed | ⏱ 6.6s |
| **Should display an error if terms are not agreed to** | ✅ Passed | ⏱ 8.0s |
| **Should display errors for missing required fields** | ✅ Passed | ⏱ 6.1s |
| **Should display errors for missing first name and last name** | ✅ Passed | ⏱ 8.6s |
| **Should display errors for missing company name and referral source** | ✅ Passed | ⏱ 9.5s |

---

## 📊 Test Results

| **Metric**        | **Value**      |
|------------------|---------------|
| ✅ **Total Passing Tests** | 6 |
| ❌ **Total Failing Tests** | 0 |
| ⏳ **Total Pending Tests** | 0 |
| 🚫 **Total Skipped Tests** | 0 |

## 🏁 Final Summary

| 📜 **Spec** | ⏳ **Duration** | ✅ **Tests** | ✅ **Passing** | ❌ **Failing** | ⏳ **Pending** | 🚫 **Skipped** |
|------------|---------------|-------------|--------------|--------------|--------------|--------------|
| `signup_process.cy.js` | **00:58** | **6** | **6** | **-** | **-** | **-** |

---

🌐 GitHub: [Project Repository](https://github.com/HassanMujtaba619/Circula_Assignment_Syed_Hassan/tree/master)

---

🔥 *Happy Coding!* 🔥
