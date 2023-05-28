describe("Login flow", () => {

    it("Enterening to the url", () => {
        cy.viewport(1920, 1080)
        cy.visit("https://admin-qa.coyni.com/")
        cy.url().should("contain", "admin")
    })

    it(" not Entereing the Email then show please enter email alert msg", () => {
        cy.viewport(1920, 1080)
        cy.wait(3000)
        cy.xpath('//input[@id="Email"]').should('be.visible')
        cy.xpath('//input[@id="Email"]')
        cy.wait(6000)
        cy.xpath('//input[@id="Password"]').type('Admin@123')
        //cy.contains('Next').click()
        cy.xpath('//input[@id="Password"]').clear()
    })
    it(" entering  email valid and invalid pwd click on next ", () => {
        cy.viewport(1920, 1080)
        cy.wait(6000)
        cy.xpath('//input[@id="Email"]').type("rameshr@ideyalabs.com")
        cy.wait(6000)
        cy.xpath('//input[@id="Password"]').should('be.visible')
        cy.xpath('//input[@id="Password"]').type("Admin@1234")
        cy.contains('Next').click()
        cy.wait(6000)
        cy.xpath('//input[@id="Email"]').clear()
        cy.xpath('//input[@id="Password"]').clear()
    })
    it(" entering both invalid email& pwd click on next ", () => {
        cy.viewport(1920, 1080)
        cy.wait(6000)
        cy.xpath('//input[@id="Email"]').type("ramesh@ideyalabs.com")
        cy.wait(6000)
        cy.xpath('//input[@id="Password"]').type("Admin@1234")
        cy.wait(6000)
        cy.contains('Next').click()
        cy.xpath('//input[@id="Email"]').clear()
        cy.xpath('//input[@id="Password"]').clear()

    })
    it(" entering both valid email& pwd click on next ", () => {
        cy.viewport(1920, 1080)
        cy.wait(6000)

        cy.xpath('//input[@id="Email"]').type("rameshr@ideyalabs.com")
        // cy.wait(6000)
        // expect('email').to.equal('rameshr@ideyalabs.com')
        cy.wait(3000)
        cy.xpath('//input[@id="Password"]').type("Admin@123")
        cy.wait(6000)
        cy.contains('Next').click()

    })
    it("enter the two step autheyntication", () => {
        cy.viewport(1920, 1080)
        cy.wait(2000)
        cy.get('.verification-input  ').eq(0).type('1')
        cy.get('.verification-input  ').eq(1).type('2')
        cy.get('.verification-input  ').eq(2).type('3')
        cy.get('.verification-input  ').eq(3).type('4')
        cy.get('.verification-input  ').eq(4).type('5')
        cy.get('.verification-input  ').eq(5).type('6')
    })

    //***click on Token account under coyni portal , application is navigated the coyni portal token details **/
    it('click on Token account under coyni portal , application is navigated the coyni portal token details', () => {
        cy.viewport(1920, 1080)
        cy.wait(2000)
        cy.xpath('//p[text()="Token Account"]').should('be.visible')
        cy.xpath('//p[text()="Token Account"]').click()
    })
    //*=============Add acogent==============*/
    it("Verify whether view the Withdraw to cogent text under token account page and click it then application shown the No accont cogent exist popup ", () => {
        cy.viewport(1920, 1080)
        cy.wait(2000)
        cy.xpath('//button[text()="Withdraw To Cogent"]').should('be.visible')
        cy.xpath('//button[text()="Withdraw To Cogent"]').click()
    })

    it("verify the text as No Cogent Accounts Exist and descriptions in the popup", () => {
        cy.viewport(1920, 1080)
        cy.wait(2000)
        cy.xpath("//h1[text()='No Cogent Accounts Exist']").should("be.visible")
        cy.xpath("//p[text()='You need to add a']").should("be.visible")
    })
    it('verify the text as Add Cogent Account and click on it in the popup screen, application is navigates the add new cogent account ', () => {
        cy.viewport(1920, 1080)
        cy.wait(2000)
        cy.xpath("//p[text()=' Add Cogent Account']").should("be.visible")
        cy.xpath("//p[text()=' Add Cogent Account']").click()
    })
    it("Verify the addnew cogent text and enter all the mandatory fileds", () => {
        cy.viewport(1920, 1080)
        cy.wait(2000)
        cy.xpath('//h1[text()="Add New Cogent Account"]').should('be.visible')
        cy.xpath('//input[@id="name-on-Cogent"]').should('be.visible')
        cy.wait(3000)
        cy.xpath('//input[@id="name-on-Cogent"]').type("Ramesh R")
        cy.xpath('//label[text()="Cogent Wallet ID"]').should("be.visible")
        cy.xpath('//label[text()="Cogent Wallet ID"]').type("765432345678jhgfdyuiuyt@87654")
        //validate the billing address line 1 text and enter the address
        cy.xpath('//label[text()="Billing Address Line 1"]').should('be.visible')
        cy.xpath('//label[text()="Billing Address Line 1"]').type("Madhapur , Gowrafountain head 1/6")
        //validate the city filed and enter the city
        cy.wait(3000)
        cy.xpath('//input[@id="city"]').should('be.visible')
        cy.xpath('//input[@id="city"]').type("HYD")
        //validate the state dropdown filed and select the state
        cy.wait(2500)
        cy.xpath("//div[text()='State']").should('be.visible')
        cy.xpath("//div[text()='State']").click()
        cy.wait(2000)
        cy.xpath("//div[text()='Alabama']").click()
        // cy.xpath("//div[text()='State']").select('Alaska')
        //select alaska
        // cy.get(".rotate-90").contains('Alaska').click()
        // //cy.get(".rotate-90").type('Alaska').type('{enter}')
        // // cy.wait(5000)
        //cy.get('[height="8"]').click()
        //cy.xpath('//img[@height="8"]').click()
        // cy.get('.z-10 > .FormField_form_select_container__V7mN- > .FormField_form_select__xDxV1 > .FormField_selected_option__7Rw29')
        // cy.wait(9000)
        // cy.get('[tabindex="0"]').contains('Alabama').click()

        //Validate the Zipcode filed and enter the Zipcode
        cy.wait(3000)
        cy.xpath('//input[@id="zip-code"]').should('be.visible')
        cy.xpath('//input[@id="zip-code"]').type("12345")

        //click on save button  then application navigates the withdraw to cogent popup screen 
        cy.wait(6000)
        cy.xpath('//button[@type="submit"]').click()
        //cy.pause()

    })

})
