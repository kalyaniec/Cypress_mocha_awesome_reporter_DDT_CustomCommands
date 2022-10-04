describe('api call ', () => {

    it('getresponse', () => {
        cy.request("https://ineuron-courses.vercel.app/login").then(function (resp) {
            cy.log(resp.status)
            cy.log(resp.body)
            cy.log(resp.duration)
            cy.log(resp.headers)
        })
    });

});