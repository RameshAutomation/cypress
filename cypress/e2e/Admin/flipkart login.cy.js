describe('flipkart', function(){
    it('website flipkart', function () {
       cy.visit('https://www.flipkart.com/')
       cy.viewport(1920,1080)
    })
    // click on login and enter the phone number
it('click on login', function(){
    cy.contains('Login').click()
    cy.wait(6000)
    cy.get('._2IX_2-').type(9347128103)
    cy.contains('Request OTP').click()
})
// otp from the phone number
it('enter otps', function(){

    cy.wait(6000)
    cy.get('.IiD88i').eq(0).type(1)
    cy.get('.IiD88i').eq(1).type(2)
    cy.get('.IiD88i').eq(2).type(3)
    cy.get('.IiD88i').eq(3).type(4)
    cy.get('.IiD88i').eq(4).type(5)
    cy.get('.IiD88i').eq(5).type(6)
    cy.viewport(1920,1080)

    cy.contains('Verify').click()
    
})
// change the phone number
it('change the phone number', function(){
    cy.viewport(1929,1080)
    cy.wait(2000)
    cy.contains('Change').click()
    cy.get('._2IX_2-').clear()
    cy.get('._2IX_2-').type(9133864832)
    cy.contains('Request OTP').click()
})
// otp from the phone number
it('enter otps', function(){

    cy.wait(6000)
    cy.get('.IiD88i').eq(0).type(1)
    cy.get('.IiD88i').eq(1).type(2)
    cy.get('.IiD88i').eq(2).type(3)
    cy.get('.IiD88i').eq(3).type(4)
    cy.get('.IiD88i').eq(4).type(5)
    cy.get('.IiD88i').eq(5).type(6)
    cy.viewport(1920,1080)

    cy.contains('Verify').click()
    
})
    
})