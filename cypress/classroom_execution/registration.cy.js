describe('testdesc', () => {
    it('testcase', () => {
        try {
            cy.visit("https://ineuron-courses.vercel.app/signup")
            cy.viewport(1920, 1080)
            /* cy.xpath('//input[@name="name"]').type('Kalyani')
             cy.xpath('//input[@name="email"]').type('kalanyaiini.dec@gmail.com')
             cy.xpath('//input[@type="password"]').type('kalyani')*/

            cy.xpath('//input[@name="name"]').type('Nayan')
            cy.xpath('//input[@name="email"]').type('Nayan.dec@gmail.com')
            cy.xpath('//input[@type="password"]').type('Nayanaa')

            cy.xpath('//input[@type="checkbox"]').click({
                multiple: true
            })
            cy.xpath("//label[text()='Testing']/preceding::input[1]").click()
            cy.xpath('//input[@type="radio"]').check('Male')
            cy.get('select').select("Goa")
            cy.xpath("//button[@type='submit']").click()
            if (cy.get('.errorMessage')) {

                cy.xpath("//a[@href='/login']").click()
            }

        } catch (err) {
            console.log("email is already registered");
        }
    })
    it('testcaselogin', () => {
        //cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get('[name="email1"]').type('Nayan.dec@gmail.com')
        cy.get('[name="password1"]').type('Nayanaa', {
            timeout: 1000
        })
        cy.get('.submit-btn').click()
        cy.xpath("//button[text()='Sign out']").click()
    })




    console.log("complete");
})