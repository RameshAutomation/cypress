class login{
    elements= {
        resolution: () => cy.viewport(1920,1080),
        url:() => cy.visit('https://admin-qa.coyni.com/'),
        email:() => cy.xpath('//input[@id="Email"]'),
        password:() => cy.xpath('//input[@id="Password"]'),
        NextBtn:()=> cy.contains('Next')

    }
    Login(){

        this.elements.resolution()
        this.elements.url()
        this.elements.email()
        this.elements.password()
        this.elements.NextBtn()
        

    }
}
export default login