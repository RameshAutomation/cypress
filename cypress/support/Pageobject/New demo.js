class demo{
    elements= {
        resolution: () => cy.viewport(1920,1080),
        wait:()=>cy.wait(6000),
        url:() => cy.visit('https://admin-qa.coyni.com/'),
        VerifyUrl:() =>cy.visit('https://admin-qa.coyni.com/'),
        email:() => cy.xpath('//input[@id="Email"]'),
        password:() => cy.xpath('//input[@id="Password"]'),
        NextBtn:()=> cy.contains('Next')

    }
    demo(){
        this.elements.resolution()
        this.elements.wait()
        this.elements.url().url.should('be.visible')
        this.elements.VerifyUrl()
        this.elements.email()
        this.elements.password()
        this.elements.NextBtn()
    }
}
    export default demo