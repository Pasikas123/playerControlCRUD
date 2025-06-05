Cypress.Commands.add('createNewType', () => {
    cy.get('#addTypeOption').click();
    cy.get('#TypeName').type('Test');
    cy.contains('button', 'Save type').click();
});

Cypress.Commands.add('createPlayerWithValidData', () => {
    cy.get('#PlayerName').type('Test');
    cy.get('#PlayerXp').type('3000');
    cy.get('#PlayerType').select('Archer');
    cy.contains('button', 'Save player').click();
});

Cypress.Commands.add('createPlayerWithNewTypeData', () => {
    cy.get('#PlayerName').type('Test');
    cy.get('#PlayerXp').type('3000');
    cy.get('#PlayerType').select('Test');
    cy.contains('button', 'Save player').click();
});
