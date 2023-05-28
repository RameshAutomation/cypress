describe('Login for admin portal',function(){
    it('Login of admin',function(){
        cy.viewport(1920,1080)
        cy.wait(2000)
        cy.visit('https://admin-qa.coyni.com/login')

    })
    it('Enter email and password and click on next', function(){
        cy.viewport(1920,1080)
        cy.wait(2000)
        cy.get('#Email').type('rameshr@ideyalabs.com')
        cy.get('#Password').type('Admin@123')
        cy.contains('Next').click()
    })
    it('Enter Two step authentication', function(){
        cy.viewport(1920,1080)
        cy.wait(2000)
        cy.get('.verification-input  ').eq(0).type('1')
        cy.get('.verification-input  ').eq(1).type('2')
        cy.get('.verification-input  ').eq(2).type('3')
        cy.get('.verification-input  ').eq(3).type('4')
        cy.get('.verification-input  ').eq(4).type('5')
        cy.get('.verification-input  ').eq(5).type('6')
    })
    it('Global search search ',function(){
//search with ID
        cy.viewport(1920,1080)
        cy.wait(2000)
        cy.get('[placeholder="Search coyni admin database"]').click()
        cy.contains('Ex. C-1234 or M-1234').click()
        cy.wait(2000)
        cy.get('[placeholder="Ex. C-1234 or M-1234"]').type('100')
        cy.wait(2000)
        cy.get('span.Header_searchbtn__cNv64').click()
        cy.get('.cell-col-3').click()
   //search with profile details
        cy.wait(5000)
        cy.viewport(1920,1080)
        cy.get('[placeholder="Search coyni admin database"]').click()
        cy.contains('Search first name, last name, DBA, email, or phone').click()
        cy.get('[value="Individuals"]').click()
        cy.get('[placeholder="First name, last name, ph..."]').type('ram')
        cy.get('span.Header_searchbtn__cNv64').click()
        cy.get(':nth-child(3) > .cell-col-2').click()
        //search with reference ID
        cy.wait(5000)
        cy.viewport(1920,1080)
        cy.get('[placeholder="Search coyni admin database"]').click()
        cy.contains('Reference ID:').click()
        cy.get('[placeholder="Ex. 124Dsdfsdf678f90aB43ghfg2"]').type('RPOC65098A393CD63A95B68001AD1EB96')
        cy.get('span.Header_searchbtn__cNv64').click()
        cy.get('.cell-col-4').click()
        // search with first 6 digits of card
        cy.wait(5000)
        cy.viewport(1920,1080)
        cy.get('[placeholder="Search coyni admin database"]').click()
        cy.contains('First 6:').click()
        cy.get('[placeholder="First 6 digits of a debit/credit card"]').type('511111')
        cy.get('span.Header_searchbtn__cNv64').click()
        cy.get(':nth-child(3) > .cell-col-2').click()
        //search with lst 4 digits
        cy.wait(5000)
        cy.viewport(1920,1080)
        cy.get('[placeholder="Search coyni admin database"]').click()
        cy.contains('Last 4:').click()
        cy.get('[placeholder="Last 4 digits of a debit/credit card"]').type('7610')
        cy.get('span.Header_searchbtn__cNv64').click()
        //cy.get(':nth-child(3) > .cell-col-2').click()

        // search with charge back case
        cy.wait(5000)
        cy.viewport(1920,1080)
        cy.get('[placeholder="Search coyni admin database"]').click()
        cy.contains('CBK Case #:').click()
        cy.get('[placeholder="Ex. 123456789054367"]').type('0000')
        cy.get('span.Header_searchbtn__cNv64').click()
       // cy.get('.cell-col-0').click()

        //search with bank number last 4
        cy.wait(5000)
        cy.viewport(1920,1080)
        cy.get('[placeholder="Search coyni admin database"]').click()
        cy.contains('BankNumber:').click()
        cy.get('[placeholder="Last 4 digits of bank account"]').type('0016')
        cy.get('span.Header_searchbtn__cNv64').click()
        cy.get(':nth-child(3) > .cell-col-2').click()

        //search with underwriting case id

        cy.wait(5000)
        cy.viewport(1920,1080)
        cy.get('[placeholder="Search coyni admin database"]').click()
        cy.contains('Underwriting Case ID:').click()
        cy.get('[placeholder="Ex. 123456789054367"]').type('877')
        cy.get('span.Header_searchbtn__cNv64').click()
        cy.get('.cell-col-4').click()

})
})