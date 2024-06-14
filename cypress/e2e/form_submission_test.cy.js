describe('Form Fill Test', () => {
  it('Fills out and submits the form', () => {
    // Navigate to the form
    cy.visit('https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform');
    cy.screenshot("formpage");

    //enter your name
    cy.get('input[type="text"]').type('Ravish kumar');
    // Assert and click the radio button 
    cy.get("div[data-value='18 or above']").should('be.visible').click();

    // Assert and Click on dropdown 
    cy.get(".KKjvXb > .vRMGwf").should('be.visible').click({ force: true });

    // Assert and Click  the Yes button 
    cy.get('div[class="OA0qNb ncFHed QXL7Te" ]> div[class="MocG8c HZ3kWc mhLiyf OIC90c LMgvRb"]').first().should('be.visible').click();

    // Assert and Click  the Submit button 
    cy.contains('Submit').should('be.visible').click();

    // Assert confirmation message
    cy.contains('Your response has been recorded.').should('be.visible');
    cy.screenshot("confirmationpage");

  });
});

// CLI command to rum Test case
// npx cypress run --spec cypress\e2e\form_submission_test.cy.js --browser chrome --headed