describe('Navigation testing', () => {

  describe('Navigation from Main page', () => {
    beforeEach(() => {
      cy.visit('/')
    });

    it('Go to Create a player page', () => {
      cy.get('#addPlayerOption').click();
      cy.contains('h2', 'Fill your desired player below').should('be.visible');
    });

    it('Go to Create a type page', () => {
      cy.get('#addTypeOption').click();
      cy.contains('h2', 'Fill your desired type below').should('be.visible');
    });

    it('Go to Player list page', () => {
      cy.get('#showPlayerList').click();
      cy.contains('h2', 'Player list:').should('be.visible');
    });

    it('Go to Type list page', () => {
      cy.get('#showTypeList').click();
      cy.contains('h2', 'Type list:').should('be.visible');
    });
  });
});