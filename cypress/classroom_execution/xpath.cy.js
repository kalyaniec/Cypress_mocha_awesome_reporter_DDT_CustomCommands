describe('testsuit', () => {
    it('test case', () => {

        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.xpath('//ul[@class="todo-list"]//li').should('have.length', 3);
        cy.xpath('//input[@name="email"]').type('ineuron@ineuron.ai')

        cy.xpath('//input[@name="password1"]').type('ineuron')
    })

})