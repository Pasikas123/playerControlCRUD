Cypress.Commands.add('createNewType', () => {
    cy.get('#TypeName').type('Test');
    cy.contains('button', 'Save type').click();
});

Cypress.Commands.add('createPlayerWithValidData', () => {
    cy.get('#PlayerName').type('Test');
    cy.get('#PlayerXp').type('3000');
    cy.get('#PlayerType').select('Archer');
    cy.contains('button', 'Save player').click();
});

Cypress.Commands.add('editPlayerWithValidData', () => {
    cy.get('#editPlayerName').type('TestEdit');
    cy.get('#editPlayerXp').type('12345');
    cy.get('#editPlayerType').select('Warrior');
    cy.contains('button', 'Save').click();
});

Cypress.Commands.add('clearPlayerData', () => {
    cy.get('#editPlayerName').clear();
    cy.get('#editPlayerXp').clear();
});

Cypress.Commands.add('createPlayerWithNewTypeData', () => {
    cy.get('#PlayerName').type('Test');
    cy.get('#PlayerXp').type('3000');
    cy.get('#PlayerType').select('Test');
    cy.contains('button', 'Save player').click();
});

Cypress.Commands.add('editPlayerWithNewTypeData', () => {
    cy.get('#editPlayerName').type('TestEdit');
    cy.get('#editPlayerXp').type('12345');
    cy.get('#editPlayerType').select('Test');
    cy.contains('button', 'Save').click();
});
