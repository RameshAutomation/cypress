describe('if customer forgot the passwaord',function(){
    it('login page amd click on forgot password',function(){
        cy.viewport(1920,1080)
        cy.visit('https://members-qa.coyni.com')
        cy.wait(1000)
        cy.contains('Forgot Password?').click()
        cy.wait(1000)
        cy.get('#Email-id').type('ram2@ideylabs.com')
        cy.wait(1000)
        cy.contains('Next').click()

    })
    it('Enter email verification',function(){
        cy.viewport(1920,1080)
        cy.wait(1000)
        cy.get('.verification-input  ').eq(0).type('1')
        cy.get('.verification-input  ').eq(1).type('2')
        cy.get('.verification-input  ').eq(2).type('3')
        cy.get('.verification-input  ').eq(3).type('4')
        cy.get('.verification-input  ').eq(4).type('5')
        cy.get('.verification-input  ').eq(5).type('6').click()
})
it('Enter new & confirm password',function(){
    cy.viewport(1920,1080)
        cy.wait(1000)
cy.get('#Enter_Password').type('Admin@123')
cy.get('#confirm_Password').type('Admin@123')
cy.get('[type="submit"]').click()
cy.wait(3000)
cy.get('[type="button"]').click()
})

})