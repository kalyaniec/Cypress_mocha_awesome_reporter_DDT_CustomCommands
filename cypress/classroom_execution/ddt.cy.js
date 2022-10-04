const testValueFixture = [{

    "name": "fixtureFile1",
    "context": "1"
}, {
    "name": "fixtureFile2",
    "context": "2"
}]

describe("DDT for cypress ", function () {

    testValueFixture.forEach(function (fixture) {
        describe(fixture.context, function () {

            before(function () {
                cy.fixture(fixture.name).then(function (testData) {
                    this.testData = testData

                })



            })

            it("Login  to application ", function () {
                cy.visit("https://ineuron-courses.vercel.app/login")
                // cy.xpath('//input[@name="email1"]').type(this.testData.name)
                cy.xpath('//input[@name="email1"]').type(this.testData.email)
                cy.get('#password1').type(this.testData.password)

                cy.get('.submit-btn').click()
                cy.xpath("//button[text()='Sign out']").click()

            })
        })
    })
})