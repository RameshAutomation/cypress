import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor"
// import { when } from "cypress/types/jquery"


Before(() => {
    cy.log("Before Hook....")
})

After(() => {
    cy.log("After Hook....")
})

Given("User is on Login home page", () => {
    cy.visit("https://admin-qa.coyni.com/")
})

When("user click on email and enter email as {string}", (email) => {
    cy.get('#Email').type(email)
})
When("user click on password and enter password as {string}", (password) => {
    cy.get('#Password').type(password)
})
When("user Click on Next button", () => {
    cy.wait(3000)
    cy.contains('Next').click({ force: true })
})
Then("Application navigates the two step authy screen", () => {
    cy.contains(' Two-Step Authentication').should('be.visible')
    cy.wait(6000)
})
When("user click on otp boxes and enter otp as {string}", (otp) => {
    cy.get('.relative > :nth-child(1)').type(otp)
})
Then("application navigates to the Dashboard screen", () => {
    cy.wait(3000)
    cy.contains('Commission Account').should('be.visible')
})
//*===================================Feature controls=============================================*//

When("User click on System setting side menu",()=>{
    cy.wait(3500)
    cy.contains('System Settings').click({force:true})
})
Then('in the Dropdown lisr of subfeatures showning',()=>{
    cy.wait(3500)
    cy.contains('Feature Controls').should('be.visible')
})

When('user click on Feature control side menu sub feature',()=>{
    cy.wait(3500)
    cy.contains('Feature Controls').click({force:true})
})
Then('it will be navigating to the features controls details',()=>{
    cy.wait(3000)
    cy.get('.tracking-tight').should('be.visible')
})

When('user disbled all the features controls',()=>{
    cy.wait(3000)
    cy.get('.flex > .react-toggle > .react-toggle-thumb').click({force:true})
})
When('save button is enabled&When we click on Save Button',()=>{
    cy.wait(3000)
    cy.contains('Save').click({force:true})
})
Then('Application is navigating to the Save changes popup',()=>{
    cy.wait(3500)
    cy.contains('Save Changes').should('be.visible')
})

When('user shown the yes button in the popup and click on it',()=>{
    cy.wait(3000)
    cy.contains('Yes').click({force:true})
})
Then('Shown the sucess message&controls should be enabled or disabled',()=>{
    cy.wait(3500)
    cy.contains('You have successfully saved changes.').should('be.visible')
})
// // =====================Merchnat portal===============================//
When('user login with Merchant url', () => {
    cy.wait(3000)
    cy.visit('https://members-qa.coyni.com/login')
})
When('enter email as {string}', (Email) => {
    cy.wait(3500)
    cy.get('#Email').type(Email)
})
When('enter password as {string}', (Pwd) => {
    cy.wait(3500)
    cy.get('#Password').type(Pwd)
})
When('Click on Next btn', () => {
    cy.wait(3500)
    cy.get('[type="submit"]').click({ force: true })
})
Then('application is navigating to the OTP screen', () => {
    cy.wait(3000)
    cy.get('.font-bold').should('be.visible')
})
When('user enter valid otp such as {string}', (Code) => {
    cy.wait(3500)
    cy.get('.relative > :nth-child(1)').type(Code)
})
Then('screen is navigating to the  merchant dash board screen',()=>{
    cy.wait(3500)
    cy.get('.DashboardMenu_menu__UmHk8 > .DashboardMenu_menu_items__WTmN5 > :nth-child(1) > :nth-child(1) > .-mx-1 > .menu-item-button > .justify-between > .flex > .menu-item-label').should('be.visible')
})

When('user click on token account',()=>{
    cy.get('.DashboardMenu_menu__UmHk8 > .DashboardMenu_menu_items__WTmN5 > :nth-child(1) > :nth-child(2) > [data-testid="token-dashboard"] > .w-full > .flex > .leading-10').click({force:true})
})
Then('application naviagtes to the token account details',()=>{
    cy.wait(3000)
    cy.contains('Withdraw to USD').should('be.visible')
})

When('user click on Withdraw to USD text',()=>{
    cy.contains('Withdraw to USD').click({force:true})
})
Then('screen is navigates the Withdraw coyni to USD popup screen',()=>{
    cy.contains('Withdraw coyni to USD').should('be.visible')
})