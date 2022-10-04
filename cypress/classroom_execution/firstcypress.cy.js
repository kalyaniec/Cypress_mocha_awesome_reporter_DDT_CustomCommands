/// <reference types="Cypress" />
describe('', () => {

    it('verify the title', () => {
        cy.visit("https://learn.ineuron.ai/")
        cy.title().should("contain", "iNeuron")
        cy.url().should("eq", "https://account.ineuron.ai/signin?domain=learn.ineuron.ai&redirectUrl=/")
        
    });

});