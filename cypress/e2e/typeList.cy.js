describe('Type list page testing', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('#addTypeOption').click();
    cy.createNewType();
  });

  describe('Page visibility', () => {

    it('Header is visible', () => {
      cy.contains('h2', 'Type list:').should('be.visible');
    });

    it('Every table row is visible', () => {
      cy.get('tr').each($item => {
        cy.wrap($item).should('be.visible');
      });
    });

  });

  describe('Edit functionality', () => {

    it('Edit with valid data', () => {

      cy.get('button[data-type-id="Archer"].edit-button').click();
      cy.get('#editType').clear();
      cy.get('#editType').type('TestType');
      cy.get('#editSave').click();
      cy.get('tr').eq(1).find('td').eq(1).should('contain', 'TestType');
    });

    it('Edit with valid data (new type)', () => {

      cy.get('button[data-type-id="Test"].edit-button').click();
      cy.get('#editType').clear();
      cy.get('#editType').type('TestType');
      cy.get('#editSave').click();
      cy.get('tr').eq(4).find('td').eq(1).should('contain', 'TestType');
    });

    it('Edit with no type name', () => {

      cy.get('button[data-type-id="Test"].edit-button').click();
      cy.get('#editType').clear();
      cy.get('#editSave').click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Type name cannot be empty!')
      });

    });

    it('Edit with numbers into type name', () => {

      cy.get('button[data-type-id="Test"].edit-button').click();
      cy.get('#editType').clear();
      cy.get('#editType').type('12345');
      cy.get('#editSave').click();
      cy.get('tr').eq(4).find('td').eq(1).should('not.contain', '12345');

    });


    it('Edit with very long player name', () => {

      cy.get('button[data-type-id="Test"].edit-button').click();
      cy.get('#editType').clear();
      cy.get('#editType').type('TestTestTestTestTestTestTestTest');
      cy.get('#editSave').click();
      cy.get('tr').eq(4).find('td').eq(1).should('not.contain', 'TestTestTestTestTest');

    });

    it('Edit with the same data', () => {

      cy.get('button[data-type-id="Test"].edit-button').click();
      cy.get('#editType').clear();
      cy.get('#editType').type('Mage');
      cy.get('#editSave').click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Type name already exists!')
      });
    });

  });

  describe('Delete functionality', () => {

    it('Delete single item', () => {
      cy.get('button[data-type-id="Test"].delete-button').click();
      cy.get('tr').should('not.contain', 'Test');
    });

    it('Delete every item', () => {
      function deleteNext() {
        const $buttons = Cypress.$('.delete-button');

        if ($buttons.length > 0) {
          cy.wrap($buttons[0]).click().wait(100).then(() => {
            deleteNext();
          });
        } else {
          cy.get('td').should('not.exist');
        }
      }
      deleteNext();
    });

  });

});