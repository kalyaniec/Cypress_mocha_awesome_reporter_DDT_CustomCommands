 describe('createCourse', () => {


     before(function () {
         cy.fixture('fixtureFile').then(function (data) {
             this.data = data;
         })
     })


     it('createCourseTestCase', function () {

         cy.visit("https://ineuron-courses.vercel.app/login")
         cy.get('[name="email1"]').type(this.data.Email)
         cy.get('[name="password1"]').type(this.data.Password, {
             timeout: 1000
         })
         cy.get('.submit-btn').click()
         cy.wait(3000)



         cy.contains("Manage").realHover()
         cy.wait(6000)
         cy.contains("Manage Courses").click()

         //cy.xpath("//manage-btns[contains(text(),'Add New Course')]").click()
         cy.contains('iNeuron Courses').realHover()
         //cy.xpath("//div[@class='manage-course']//div[@]
         cy.contains("Add New Course").click()
         cy.get('input[type=file]').selectFile('cypress/fixtures/demo.jpeg')
         cy.xpath('//input[@id="name"]').type("CypressAutomation_kalyani")
         cy.xpath('//textarea[@id="description"]').type("testing")
         cy.xpath('//input[@name="instructorName"]').type("Mukhesh")
         cy.xpath("//input[@name='price']").type("2000")
         //cy.xpath("//input[@name='startDate']").click()
         cy.get(':nth-child(1) > .react-datepicker-wrapper > .react-datepicker__input-container > input').click()
         cy.xpath("//div[@class='react-datepicker__month']//div[contains(@aria-label,'September 30th, 2022')]").click()
         cy.get(':nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > input').click()
         cy.xpath("//div[contains(@aria-label,'October 1st, 2022')]").click()
         cy.contains("Select Category").click()
         cy.xpath(" //div[@class='menu-items']//button[contains(text(),'Testing')]").click()
         cy.xpath("//button[contains(text(),'Save')]").click()
         // cy.xpath("div[class='table-responsive']//table//tbody[contains(text(),'CypressAutomation_Javascript')]").should("be.true")

     });
     //Choose Friday, September 30th, 2022


 });