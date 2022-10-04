// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', function (email, pw) {
    cy.visit("https://ineuron-courses.vercel.app/login")
    cy.get('[name="email1"]').type(email)
    cy.get('[name="password1"]').type(pw, {
        timeout: 1000
    })
    cy.get('.submit-btn').click()
})
Cypress.Commands.add('logout', function () {
    cy.contains('Sign out').click()
})

Cypress.Commands.add('addUser', function (username, email, password, gender, place) {
    cy.visit("https://ineuron-courses.vercel.app/")
    //cy.wait(5000)
    cy.get('button').contains('Log in ').click()
    cy.get('a[href="/signup"]').click()
    cy.get('input[name="name"]').type(username)
    cy.get('input[name="email"]').type(email)
    cy.get('input[type="password"]').type(password)

    cy.get('label[class="interest"]').contains('Testing').click()

    cy.get('input[type="radio"]').check(gender)
    // cy.get('select[name="state"]').click()
    cy.get('select').select(place)
    cy.get("button[type='submit']").click()
})