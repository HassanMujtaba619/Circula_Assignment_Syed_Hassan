import SignupPage from '../pages/SignupPage';

describe('Circula Signup Process', () => {
  const signupPage = new SignupPage();

  beforeEach(() => {
    // Visit the signup page before each test
    signupPage.visit();
    cy.wait(5000); // Wait for 5 seconds to ensure the page is fully loaded
  });

  // *** Positive Test Cases ***

  // Positive Test Case 1: Successful signup with valid data
  it('should complete the signup process with valid data', () => {
    // Step 1: Fill in email and password
    signupPage.fillEmail('valid.email@example.com');
    signupPage.fillPassword('ValidPassword123!');

    // Agree to terms
    signupPage.agreeToTerms();

    // Proceed to the next step
    signupPage.proceedToNextStep();

    // Step 2: Fill in contact details
    signupPage.fillFirstName('John');
    signupPage.fillLastName('Doe');
    signupPage.fillPhoneNumber('1234567890');

    // Proceed to the next step
    signupPage.proceedToContactDetails();

    // Step 3: Fill in company information
    signupPage.fillCompanyName('Test Company');
    signupPage.selectCountry('Sweden');
    signupPage.selectReferralSource('Social Media (LinkedIn, Instagram, etc.)');

    // Assert that the signup process is successful
  });

  // *** Negative Test Cases ***

  // Negative Test Case 1: Signup with an invalid email format
  it('should display an error for invalid email format', () => {
    // Fill in an invalid email
    signupPage.fillEmail('invalid-email');

    // Attempt to proceed to the next step
    signupPage.proceedToNextStep();

    // Assert that at least one of the error messages contains the expected text
    cy.get('[role="alert"]').should('contain.text', 'Please correct the e-mail address.');
  });

  // Negative Test Case 2: Signup without agreeing to terms
  it('should display an error if terms are not agreed to', () => {
    // Fill in valid email and password
    signupPage.fillEmail('valid.email@example.com');
    signupPage.fillPassword('ValidPassword123!');

    // Do not agree to terms
    // Attempt to proceed to the next step
    signupPage.proceedToNextStep();

    // Assert that the correct error message is displayed
    cy.get('[role="alert"]').should('contain.text', 'Please accept the Terms and Conditions to continue.');
  });

  // Negative Test Case 3: Signup with missing required fields
  it('should display errors for missing required fields', () => {
    // Attempt to proceed to the next step without filling in any fields
    signupPage.proceedToNextStep();

    // Assert that the correct error messages are displayed
    cy.get('.sc-b4bf297b-0').should('contain.text', 'Work email is required.');
    cy.get('.sc-b4bf297b-0').should('contain.text', 'Min. 8 characters');
    cy.get('.sc-b4bf297b-0').should('contain.text', 'At least 1 letter');
    cy.get('.sc-b4bf297b-0').should('contain.text', 'At least 1 number');
  });

  // Negative Test Case 4: Signup without first name and last name
  it('should display errors for missing first name and last name', () => {
    // Step 1: Fill in email and password
    signupPage.fillEmail('valid.email@example.com');
    signupPage.fillPassword('ValidPassword123!');

    // Agree to terms
    signupPage.agreeToTerms();

    // Proceed to the next step
    signupPage.proceedToNextStep();

    // Step 2: Leave first name and last name empty and proceed
    signupPage.proceedToContactDetails();

    // Assert that error messages are displayed
    cy.get('[role="alert"]').should('contain.text', 'First name is required.');
    cy.get('[role="alert"]').should('contain.text', 'Last name is required.');
  });

  // Negative Test Case 5: Signup without company name and referral source
  it('should display errors for missing company name and referral source after attempting to submit', () => {
    // Step 1: Fill in email and password
    signupPage.fillEmail('valid.email@example.com');
    signupPage.fillPassword('ValidPassword123!');

    // Agree to terms
    signupPage.agreeToTerms();

    // Proceed to the next step
    signupPage.proceedToNextStep();

    // Step 2: Fill in only required personal details (first name, last name, phone number)
    signupPage.fillFirstName('John');
    signupPage.fillLastName('Doe');
    signupPage.fillPhoneNumber('1234567890');

    // Proceed to the next step
    signupPage.proceedToContactDetails();

    // Step 3: Leave company name and referral source blank
    // Proceed to the final step (Page 3)
    // signupPage.proceedToNextStep();

    // Step 4: Click the "Create an account" button (ensuring we select only one)
    cy.get('button[type="submit"]').contains('Create an account').first().click();

    // Assert that error messages are displayed for missing company name and referral source
    cy.get('[role="alert"]').should('contain.text', 'Company name is required.');
    cy.get('[role="alert"]').should('contain.text', 'Please mention how you discovered Circula');
  });
});
