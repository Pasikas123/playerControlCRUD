describe('Main page testing', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('#addPlayerOption').click();
  });

  describe('Page visibility', () => {

    it('Header is visible', () => {
      cy.contains('h2', 'Fill your desired player below').should('be.visible');
    });

    it('Labels are visible', () => {
      cy.get('label[for="PlayerName"]').should('be.visible');
      cy.get('label[for="PlayerXp"]').should('be.visible');
      cy.get('label[for="PlayerType"]').should('be.visible');
    });

    it('Inputs are visible', () => {
      cy.get('#PlayerName').should('be.visible');
      cy.get('#PlayerXp').should('be.visible');
      cy.get('#PlayerType').should('be.visible');
    });

    it('Select attribute shows types', () => {
      cy.get('#PlayerType').find('option').should('contain', 'Archer');
      cy.get('#PlayerType').find('option').should('contain', 'Mage');
      cy.get('#PlayerType').find('option').should('contain', 'Warrior');
    });

    it('Select attribute shows new added type', () => {
      cy.get('#addTypeOption').click();
      cy.createNewType();
      cy.get('#addPlayerOption').click();
      cy.get('#PlayerType').find('option').should('contain', 'Test');
    });

    it('Button is visible', () => {
      cy.contains('button', 'Save player').should('be.visible');
    });

  });

  describe('Creating a player', () => {

    it('Creating with valid data', () => {
      cy.createPlayerWithValidData();
      cy.get('tr').eq(4).find('td').eq(1).should('contain', 'Test');
      cy.get('tr').eq(4).find('td').eq(2).should('contain', 'Archer');
      cy.get('tr').eq(4).find('td').eq(4).should('contain', '3000');
    });

    it('Creating with valid data (new type)', () => {
      cy.get('#addTypeOption').click();
      cy.createNewType();
      cy.get('#addPlayerOption').click();
      cy.createPlayerWithNewTypeData();
      cy.get('tr').eq(4).find('td').eq(1).should('contain', 'Test');
      cy.get('tr').eq(4).find('td').eq(2).should('contain', 'Test');
      cy.get('tr').eq(4).find('td').eq(4).should('contain', '3000');
    });

    it('Creating with no player name', () => {
      cy.get('#PlayerXp').type('3000');
      cy.get('#PlayerType').select('Archer');
      cy.contains('button', 'Save player').click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Player name cannot be empty!')
      });
    });

    it('Creating with numbers into player name', () => {
      cy.get('#PlayerName').type('3000');
      cy.get('#PlayerXp').type('3000');
      cy.get('#PlayerType').select('Archer');
      cy.contains('button', 'Save player').click();
      cy.get('tr').eq(4).find('td').eq(1).should('not.contain', '3000');
    });

    it('Creating with very long name', () => {
      cy.get('#PlayerName').type('TestTestTestTestTestTestTestTestTestTestTestTest');
      cy.get('#PlayerXp').type('3000');
      cy.get('#PlayerType').select('Archer');
      cy.contains('button', 'Save player').click();
      cy.get('tr').eq(4).find('td').eq(1).should('not.contain', 'TestTestTestTestTestTest');
    });

    it('Creating with no player XP', () => {
      cy.get('#PlayerName').type('Test');
      cy.get('#PlayerType').select('Archer');
      cy.contains('button', 'Save player').click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Player XP cannot be empty!')
      });
    });

    it('Creating with negative player XP', () => {
      cy.get('#PlayerName').type('Test');
      cy.get('#PlayerXp').type('-400');
      cy.get('#PlayerType').select('Archer');
      cy.contains('button', 'Save player').click();
      cy.get('tr').eq(4).find('td').eq(4).should('not.contain', '-400');
    });

    it('Creating with very big integer into player XP', () => {
      cy.get('#PlayerName').type('Test');
      cy.get('#PlayerXp').type('10000000000000');
      cy.get('#PlayerType').select('Archer');
      cy.contains('button', 'Save player').click();
      cy.get('tr').eq(4).find('td').eq(4).should('not.contain', '10000000000000');
    });

    it('Creating with "Choose player type" type', () => {
      cy.get('#PlayerName').type('Test');
      cy.get('#PlayerXp').type('3000');
      cy.get('#PlayerType').select('Choose player type');
      cy.contains('button', 'Save player').click();
      cy.get('#showPlayerList').click();
      cy.get('tr').eq(4).find('td').eq(4).should('not.contain', 'Choose player type');
    });

    it('Creating with empty data', () => {
      cy.contains('button', 'Save player').click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Player name cannot be empty!')
      });
    });

    it('Creating with same data', () => {
      cy.createPlayerWithValidData();
      cy.get('tr').eq(4).find('td').eq(1).should('contain', 'Test');
      cy.get('tr').eq(4).find('td').eq(2).should('contain', 'Archer');
      cy.get('tr').eq(4).find('td').eq(4).should('contain', '3000');
      cy.get('#addPlayerOption').click();
      cy.createPlayerWithValidData();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Player name already exists!')
      });
    });


  });
});