describe('Bookmark Tests', { retries: 5 }, () => {
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

    // Make sure it stays hidden when desktop view is present
    cy.get('[data-test="menu-open"').click();
    cy.viewport(1000, 660);
    cy.get('@menu').should('be.hidden');
    cy.viewport('iphone-8');
    cy.get('@menu').should('not.be.hidden');
    cy.get('[data-test="menu-close"').click();

    // Make sure desktop anchor links are present
    cy.get('[data-test="desktop-nav-items"]').should('not.be.visible');
    cy.viewport(1000, 660);
    cy.get('[data-test="desktop-nav-items"]').should('be.visible');
  });
});
