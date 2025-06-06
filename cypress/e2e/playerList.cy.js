describe('Main page testing', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('#showPlayerList').click();
  });

  describe('Page visibility', () => {

    it('Header is visible', () => {
      cy.contains('h2', 'Player list:').should('be.visible');
    });

    it('Every table row is visible', () => {
      cy.get('tr').each($item => {
        cy.wrap($item).should('be.visible');
      });
    });

  });

  describe('Level functionality', () => {

    function calculateLevel(xp) {
      return Math.min(Math.floor(xp / 1000) + 1, 100);
    };

    it('Level is correct according to XP', () => {
      cy.get('#addPlayerOption').click();
      cy.createPlayerWithValidData();

      cy.get('tr').each(($row) => {
        if ($row.find('td').length) {
          const xpText = $row.find('td').eq(4).text();
          const levelText = $row.find('td').eq(3).text();

          const xp = parseInt(xpText.trim());
          const level = parseInt(levelText.trim());

          const expectedLevel = calculateLevel(xp);

          expect(level).to.equal(expectedLevel);
        }
      });
    });
  });

  describe('Progress bar functionality', () => {

    function calculateProgress(xp, level) {
      const xpForCurrentLevel = (level - 1) * 1000;
      const xpForNextLevel = level * 1000;
      const progress = ((xp - xpForCurrentLevel) / (xpForNextLevel - xpForCurrentLevel)) * 100;
      return Math.min(Math.max(progress, 0), 100);
    };

    it('Progress bar width is correct according to XP', () => {
      cy.get('#addPlayerOption').click();
      cy.createPlayerWithValidData();

      cy.get('tr').each(($row) => {
        if ($row.find('td').length) {
          const xpText = $row.find('td').eq(4).text();
          const levelText = $row.find('td').eq(3).text();

          const xp = parseInt(xpText.trim());
          const level = parseInt(levelText.trim());

          const expectedProgress = calculateProgress(xp, level).toFixed(0) + '%';

          cy.wrap($row).find('.progress-fill').invoke('attr', 'style').then((style) => {
            expect(style).to.include(`width: ${expectedProgress}`);
          });
        };
      });

    });

    it('Progress bar number is correct according to XP', () => {
      cy.get('#addPlayerOption').click();
      cy.createPlayerWithValidData();

      cy.get('tr').each(($row) => {
        if ($row.find('td').length) {
          const xpText = $row.find('td').eq(4).text();
          const levelText = $row.find('td').eq(3).text();
          const percent = $row.find('.percent').text();

          const xp = parseInt(xpText.trim());
          const level = parseInt(levelText.trim());

          const expectedProgress = calculateProgress(xp, level).toFixed(0);

          expect(percent).to.equal(`${expectedProgress}%`);
        };
      });
    });
  });

  describe('Edit functionality', () => {

    beforeEach(() => {
      cy.get('#addTypeOption').click();
      cy.createNewType();

      cy.get('#addPlayerOption').click();
      cy.createPlayerWithValidData();
    });

    it('Edit with valid data', () => {

      cy.get('button[data-player-id="Test"].edit-button').click();
      cy.clearPlayerData();
      cy.editPlayerWithValidData();
      cy.get('tr').eq(4).find('td').eq(1).should('contain', 'TestEdit');
      cy.get('tr').eq(4).find('td').eq(2).should('contain', 'Warrior');
      cy.get('tr').eq(4).find('td').eq(4).should('contain', '12345');
    });

    it('Edit with valid data (new type)', () => {

      cy.get('button[data-player-id="Test"].edit-button').click();
      cy.clearPlayerData();
      cy.editPlayerWithNewTypeData();
      cy.get('tr').eq(4).find('td').eq(1).should('contain', 'TestEdit');
      cy.get('tr').eq(4).find('td').eq(2).should('contain', 'Test');
      cy.get('tr').eq(4).find('td').eq(4).should('contain', '12345');
    });

    it('Edit with no player name', () => {

      cy.get('button[data-player-id="Test"].edit-button').click();
      cy.clearPlayerData();
      cy.get('#editPlayerXp').type('12345');
      cy.get('#editPlayerType').select('Warrior');
      cy.contains('button', 'Save').click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Player name cannot be empty!')
      });

    });

    it('Edit with numbers into player name', () => {

      cy.get('button[data-player-id="Test"].edit-button').click();
      cy.clearPlayerData();
      cy.get('#editPlayerName').type('12345');
      cy.get('#editPlayerXp').type('12345');
      cy.get('#editPlayerType').select('Warrior');
      cy.contains('button', 'Save').click();
      cy.get('tr').eq(4).find('td').eq(1).should('not.contain', '12345');

    });

    it('Edit with very long player name', () => {

      cy.get('button[data-player-id="Test"].edit-button').click();
      cy.clearPlayerData();
      cy.get('#editPlayerName').type('TestTestTestTestTestTestTestTestTestTestTestTest');
      cy.get('#editPlayerXp').type('12345');
      cy.get('#editPlayerType').select('Warrior');
      cy.contains('button', 'Save').click();
      cy.get('tr').eq(4).find('td').eq(1).should('not.contain', 'TestTestTestTestTestTestTestTestTestTestTestTest');

    });

    it('Edit with no player XP', () => {

      cy.get('button[data-player-id="Test"].edit-button').click();
      cy.clearPlayerData();
      cy.get('#editPlayerName').type('TestEdit');
      cy.get('#editPlayerType').select('Warrior');
      cy.contains('button', 'Save').click();
      cy.get('tr').eq(4).find('td').eq(4).should('not.contain', '');

    });

    it('Edit with negative player XP', () => {
      cy.get('button[data-player-id="Test"].edit-button').click();
      cy.clearPlayerData();
      cy.get('#editPlayerName').type('TestEdit');
      cy.get('#editPlayerXp').type('-12345');
      cy.get('#editPlayerType').select('Warrior');
      cy.contains('button', 'Save').click();
      cy.get('tr').eq(4).find('td').eq(4).should('not.contain', '-12345');
    });

    it('Edit with very big integer into player XP', () => {
      cy.get('button[data-player-id="Test"].edit-button').click();
      cy.clearPlayerData();
      cy.get('#editPlayerName').type('TestEdit');
      cy.get('#editPlayerXp').type('10000000000000');
      cy.get('#editPlayerType').select('Warrior');
      cy.contains('button', 'Save').click();
      cy.get('tr').eq(4).find('td').eq(4).should('not.contain', '10000000000000');
    });

    it('Edit with "Edit player type" type', () => {
      cy.get('button[data-player-id="Test"].edit-button').click();
      cy.clearPlayerData();
      cy.get('#editPlayerName').type('TestEdit');
      cy.get('#editPlayerXp').type('12345');
      cy.get('#editPlayerType').select('Edit player type');
      cy.contains('button', 'Save').click();
      cy.get('tr').eq(4).find('td').eq(4).should('not.contain', 'Choose player type');
    });

    it('Edit with empty data', () => {
      cy.get('button[data-player-id="Test"].edit-button').click();
      cy.clearPlayerData();
      cy.contains('button', 'Save').click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Player name cannot be empty!')
      });
    });

    it('Edit with the same data', () => {
      cy.get('button[data-player-id="Test"].edit-button').click();
      cy.clearPlayerData();
      cy.get('#editPlayerName').type('Dolbis');
      cy.get('#editPlayerXp').type('12345');
      cy.get('#editPlayerType').select('Warrior');
      cy.contains('button', 'Save').click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Player name already exists!')
      });
    });

  });

  describe('Delete functionality', () => {

    beforeEach(() => {
      cy.get('#addTypeOption').click();
      cy.createNewType();

      cy.get('#addPlayerOption').click();
      cy.createPlayerWithValidData();
    });

    it('Delete single item', () => {
      cy.get('button[data-player-id="Test"].delete-button').click();
      cy.get('tr').should('not.contain', 'Test');
    });

    it('Delete every item', () => {
      function deleteNext() {
        const $buttons = Cypress.$('.delete-button');

        if ($buttons.length > 0) {
          cy.wrap($buttons[0]).click().wait(100).then(() => {
            deleteNext(); // dabar kviečiam TIK po click ir wait
          });
        } else {
          cy.get('td').should('not.exist');
        }
      }

      deleteNext();
    });
  });

});