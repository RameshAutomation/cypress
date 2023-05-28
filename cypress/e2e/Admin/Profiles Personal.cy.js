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
    it('Click on profiles and select personal',function(){
        cy.viewport(1920,1080)
        cy.wait(2000)
        cy.get(':nth-child(4) > .menu-item-button > .justify-between > .flex > .menu-item-label').click()
        cy.wait(5000)
        cy.get(':nth-child(4)  > .subitems-container >.space-y-2 > :nth-child(1) > .flex').click()

        
    })
    it('search with name and details',function(){
        cy.viewport(1920,1080)
        cy.wait(4000)
        cy.get('[placeholder="Search by Name, Email or Phone"]').type('Ram qa')
        cy.get('[class="icon-search"]').click()
        cy.get('.w-64').click({force: true} )
       
        //Admin able to view payment methods for the user
        cy.get('Payment Methods').click()
    })
})