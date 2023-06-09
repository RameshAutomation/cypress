describe('forgot email',function(){
    it('forgot email flow',function(){
        cy.viewport(1920,1080)
        cy.visit('https://members-qa.coyni.com')
        cy.wait(1000)
        cy.contains('Forgot Email?').click()
        cy.get('#Phone_Number').type('2562690959')
        cy.get('[style="font-size: 18px;"]').click()
    })
    it('enter first name and last name',function(){
        cy.viewport(1920,1080)
        cy.wait(1000)
        cy.get('[for="First-Name"]').type('Riya')
        cy.wait(1000)
        cy.get('#Last-Name').type('riya')
        cy.wait(1000)
        cy.get('[style="font-size: 18px;"]').click()

    })
    it('phone verifications',function(){
        cy.viewport(1920,1080)
        cy.wait(1000)
        cy.get('.verification-input  ').eq(0).type('1')
        cy.get('.verification-input  ').eq(1).type('2')
        cy.get('.verification-input  ').eq(2).type('3')
        cy.get('.verification-input  ').eq(3).type('4')
        cy.get('.verification-input  ').eq(4).type('5')
        cy.get('.verification-input  ').eq(5).type('6').click()
    })
    it('back to login',function(){
        cy.viewport(1920,1080)
        cy.wait(1000)
        cy.get('[index="0"]').click()
    })
})