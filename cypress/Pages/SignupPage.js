class SignupPage {
  // Step 1: Visit the signup page
  visit() {
    cy.visit('https://circula-qa-challenge.vercel.app/users/sign_up');
  }

  // Step 2: Handle consent banner (if present)
  handleConsentBanner() {
    cy.get('body').then(($body) => {
      if ($body.find('[data-testid="uc-default-wall"]').length > 0) {
        cy.get('[data-testid="uc-default-wall"]', { timeout: 5000 }).should('be.visible');
        cy.get('[data-testid="uc-accept-all-button"]').click();
        cy.get('[data-testid="uc-default-wall"]', { timeout: 5000 }).should('not.exist');
      }
    });
  }

  // Step 3: Fill email and handle consent banner
  fillEmail(email) {
    cy.get('input[name="email"]').type(email);
    this.handleConsentBanner(); // Handle banner after typing email
  }

  // Step 4: Fill password and handle consent banner
  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
    this.handleConsentBanner(); // Handle banner after typing password
  }

  // Step 5: Agree to Terms and Conditions
  agreeToTerms() {
    cy.get('input[name="acceptTos"]').click({ force: true });
  }

  // Step 6: Proceed to the next step (after email/password)
  proceedToNextStep() {
    cy.get('.sc-7f49027d-0').click();
  }

  // Step 7: Fill in contact details
  fillFirstName(firstName) {
    cy.get('[id="textfield-:r0:"]').type(firstName);
  }

  fillLastName(lastName) {
    cy.get('[id="textfield-:r1:"]').type(lastName);
  }

  fillPhoneNumber(phoneNumber) {
    cy.get('[id="textfield-:r2:"]').type(phoneNumber);
  }

  // Step 8: Proceed to contact details section
  proceedToContactDetails() {
    cy.get('.gZLAHz').click();
  }

  // Step 9: Fill in company information
  fillCompanyName(companyName) {
    cy.get('input[name="organizationName"]').type(companyName);
  }

  // Step 10: Select country
  selectCountry(country) {
    cy.get('input[name="country"]').click().clear().type(country);
    cy.contains(country).click({ force: true });
  }

  // Step 11: Select referral source
  selectReferralSource(referralSource) {
    cy.get('#menu-button--menu--\\:r6\\:').click();
    cy.contains(referralSource).click({ force: true });
  }
}

export default SignupPage;
