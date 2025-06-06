describe('Main page testing', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.get('#addTypeOption').click();
    });

    describe('Page visibility', () => {

        it('Header is visible', () => {
            cy.contains('h2', 'Fill your desired type below:').should('be.visible');
        });

        it('Label is visible', () => {
            cy.get('label[for="TypeName"]').should('be.visible');
        });

        it('Input is visible', () => {
            cy.get('#TypeName').should('be.visible');
        });

        it('Button is visible', () => {
            cy.contains('button', 'Save type').should('be.visible');
        });

    });

    describe('Creating a type', () => {

        it('Creating with valid data', () => {
            cy.createNewType();
            cy.get('td').should('contain', 'Test');
        });

        it('Creating with no type name', () => {
            cy.contains('button', 'Save type').click();
            cy.on('window:alert', (alertText) => {
                expect(alertText).to.equal('Type name cannot be empty!')
            });
        });

        it('Creating with very long name', () => {
            cy.get('#TypeName').type('TestTestTestTestTestTestTestTestTestTestTestTest');
            cy.contains('button', 'Save type').click();
            cy.get('td').should('not.contain', 'TestTestTestTestTestTestTestTestTestTestTestTest');
        });

        it('Creating with very big integer', () => {
            cy.get('#TypeName').type('1000000000000000000000');
            cy.contains('button', 'Save type').click();
            cy.get('td').should('not.contain', '1000000000000000000000');
        });

        it('Creating with random symbols', () => {
            cy.get('#TypeName').type('!@#!@%$%#%*-+');
            cy.contains('button', 'Save type').click();
            cy.get('td').should('not.contain', '!@#!@%$%#%*-+');
        });

        it('Creating with same data', () => {
            cy.createNewType();
            cy.get('td').should('contain', 'Test');
            cy.get('#addTypeOption').click();
            cy.createNewType();
            cy.on('window:alert', (alertText) => {
                expect(alertText).to.equal('Type name already exists!')
            });
        });


    });
});