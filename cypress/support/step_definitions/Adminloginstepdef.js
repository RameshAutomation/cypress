import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor"


Before(() => {
    cy.log("Before Hook....")
})

After(() => {
    cy.log("After Hook....")
})
Given("User is on Login home page", () => {
    cy.visit("https://admin-qa.coyni.com/login")
})
When("user click on email and enter email as {string}",(email)=> {
    cy.get('#Email').type(email)
        
})
When("user click on password and enter password as {string}", (password)=> {
        cy.get('#Password').type(password)
})
When("user Click on Next button", () => {
    cy.contains('Next').click()
})
Then("Application navigates the two step authy screen", () => {
    cy.contains(' Two-Step Authentication').should('be.visible')
})