/// <reference types="Cypress" />

describe('gettestcases', () => {

    it('getTestcase', () => {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get('[name="email1"]').type('ineuron@ineuron.ai')
        cy.get('[name="password1"]').type('ineuron', {
            timeout: 1000
        })
        cy.get('.submit-btn').click()
        cy.get('.nav-menu-item-manage > :nth-child(1)').should('be.visible')
        cy.xpath("//table[contains(@class,'courses')]//tbody//tr").should("have.length", "4")
        cy.contains("Manage").realhover()
        cy.wait(3000)
        cy.contains("Manage Courses").click()


    });
});