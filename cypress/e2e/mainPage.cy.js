describe('Main page testing', () => {

  describe('Page visibility', () => {
    beforeEach(() => {
      cy.visit('/')
    });

    it('Header is visible', () => {
      cy.contains('h2', 'Create your ultimate best player').should('be.visible');
    });

    it('Description is visible', () => {
      cy.contains('p', 'Click on').should('be.visible');
      cy.contains('p', 'After entering the appropriate amount').should('be.visible');
      cy.contains('p', 'Decide the type of player you will choose').should('be.visible');
      cy.contains('p', 'or even create your own type').should('be.visible');
    });

    it('Every table header is visible', () => {
      cy.get('th').each($item => {
        cy.wrap($item).should('be.visible');
      });
    });

    it('Every table image is visible', () => {
      cy.get('td').each($item => {
        cy.wrap($item).find('img').should(($img) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
      });
    });
  });
});