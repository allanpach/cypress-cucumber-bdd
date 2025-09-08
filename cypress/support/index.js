Cypress.on('uncaught:exception', (err, runnable) => {
  // Return false to prevent Cypress from failing the test
  // You can also check the error message to ignore only specific errors
  if (err.message.includes('Script error')) {
    // We can't get the stack trace for cross-origin errors, so we just ignore them
    return false;
  }
  // If the error isn't the script error, let it fail the test
});