describe('Bookmark Tests', { retries: 5 }, () => {
  beforeEach(() => {
    cy.visit('/');

    // Set viewport
    cy.viewport('iphone-8');
  });

  it('Test navigation bar', () => {
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

  it('Hero Section', () => {
    const header = /A Simple Bookmark Manager/i;
    const subtext =
      /A clean and simple interface to organize your favourite websites./i;

    // Make sure Hero component is present
    cy.get('[data-test="hero-header"]').contains(header);
    cy.get('[data-test="hero-subheader"]').contains(subtext);
    cy.get('[data-test="hero-btn"]').contains(/Get it on Chrome/i);
    cy.get('[data-test="hero-btn-secondary"]').contains(/Get it on Firefox/i);
  });

  it('Features Section', () => {
    cy.get('[data-test="features-header"]').contains(/Features/i);

    // Tab component

    // Create Aliases
    cy.get('[data-test="tab-1"]').as('tab1');
    cy.get('[data-test="tab-2"]').as('tab2');
    cy.get('[data-test="tab-3"]').as('tab3');

    cy.get('[data-test="tab-active-1"]').as('t1-active');
    cy.get('[data-test="tab-active-2"]').as('t2-active');
    cy.get('[data-test="tab-active-3"]').as('t3-active');

    cy.get('[data-test="tab-1-content"]').as('t1-content');
    cy.get('[data-test="tab-2-content"]').as('t2-content');
    cy.get('[data-test="tab-3-content"]').as('t3-content');

    // Test tab 1 - initial
    cy.get('@t1-active').should('have.class', 'tab-bar');
    cy.get('@t2-active').should('not.have.class', 'tab-bar');
    cy.get('@t3-active').should('not.have.class', 'tab-bar');

    cy.get('@t1-content').should('be.visible');
    cy.get('@t2-content').should('not.be.visible');
    cy.get('@t3-content').should('not.be.visible');

    // Test tab 2
    cy.get('@tab2').click();

    cy.get('@t1-active').should('not.have.class', 'tab-bar');
    cy.get('@t2-active').should('have.class', 'tab-bar');
    cy.get('@t3-active').should('not.have.class', 'tab-bar');

    cy.get('@t1-content').should('not.be.visible');
    cy.get('@t2-content').should('be.visible');
    cy.get('@t3-content').should('not.be.visible');

    // Test tab 3
    cy.get('@tab3').click();

    cy.get('@t1-active').should('not.have.class', 'tab-bar');
    cy.get('@t2-active').should('not.have.class', 'tab-bar');
    cy.get('@t3-active').should('have.class', 'tab-bar');

    cy.get('@t1-content').should('not.be.visible');
    cy.get('@t2-content').should('not.be.visible');
    cy.get('@t3-content').should('be.visible');

    // Desktop
    cy.viewport(1000, 660);

    // Test tab 1 - initial
    cy.get('@t1-active').should('have.class', 'tab-bar');
    cy.get('@t2-active').should('not.have.class', 'tab-bar');
    cy.get('@t3-active').should('not.have.class', 'tab-bar');

    cy.get('@t1-content').should('be.visible');
    cy.get('@t2-content').should('not.be.visible');
    cy.get('@t3-content').should('not.be.visible');

    // Test tab 2
    cy.get('@tab2').click();

    cy.get('@t1-active').should('not.have.class', 'tab-bar');
    cy.get('@t2-active').should('have.class', 'tab-bar');
    cy.get('@t3-active').should('not.have.class', 'tab-bar');

    cy.get('@t1-content').should('not.be.visible');
    cy.get('@t2-content').should('be.visible');
    cy.get('@t3-content').should('not.be.visible');

    // Test tab 3
    cy.get('@tab3').click();

    cy.get('@t1-active').should('not.have.class', 'tab-bar');
    cy.get('@t2-active').should('not.have.class', 'tab-bar');
    cy.get('@t3-active').should('have.class', 'tab-bar');

    cy.get('@t1-content').should('not.be.visible');
    cy.get('@t2-content').should('not.be.visible');
    cy.get('@t3-content').should('be.visible');
  });

  it.only('Extension Section', () => {
    cy.get('[data-test="extension-header"]').contains(
      /Download the extension/i
    );
    
    // Should have 3 browsers on page
    cy.get('[data-test="browser-card"]').should('have.length', 3);
  });
});
