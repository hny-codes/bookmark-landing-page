describe('Bookmark Tests', { retries: { runMode: 4, openMode: 1 } }, () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Test navigation bar', () => {
    // Set viewport
    cy.viewport('iphone-8');

    // Menu should be closed by default
    cy.get('[data-test="menu"]').as('menu');
    cy.get('@menu').should('be.hidden');

    // Click menu and make sure it's visible
    cy.get('[data-test="menu-open"').click();
    cy.get('@menu').should('not.be.hidden');

    // Click close button and make sure it's closed
    cy.get('[data-test="menu-close"').click();
    cy.get('@menu').should('be.hidden');
  });
});
