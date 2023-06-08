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
When('user click on Token account text under the coyni portal', () => {
    cy.wait(3000)
    cy.contains('Token Account').click()
})
Then('application is navigating to the token account details', () => {
    cy.wait(3000)
    cy.contains('Token Account').should('be.visible')
})
When('user click on Withdraw to cogent text', () => {
    cy.contains('Withdraw To Cogent').click({ force: true })
})
Then('user navigates the No Cogent Accounts Exist popup screen', () => {
    cy.contains("No Cogent Accounts Exist").should('be.visible')
})
When("user click on add cogent account", () => {
    cy.wait(3000)
    cy.contains(' Add Cogent Account').click({ force: true })
})
Then('application is navigates the Add New Cogent Account popup screen', () => {
    cy.wait(3000)
    cy.contains('Add New Cogent Account').should('be.visible')
})
When('user click on name on the cogent field and enter as {string}', (CogentName) => {
    cy.get('#name-on-Cogent').type(CogentName)
})
When('user click on wallet ID field and enter ID as {string}', (ID) => {
    cy.contains('Cogent Wallet ID').click().type(ID)
})
When('user click on billing address line1 field and enter address as {string}', (Address) => {
    cy.contains('Billing Address Line 1').click().type(Address)

})
When('user click on city field and  enter the city as {string}', (city) => {
    cy.contains('City').click().type(city)
})
When('user click the state', () => {
    cy.wait(3000)
    cy.contains('State').click({ force: true })
})
When('select the state option', () => {
    cy.wait(3000)
    cy.contains('Alabama').click({ force: true })
})
When('user click on ZIPcode field and enter the Zipcode as {string}', (ZIPcode) => {
    cy.contains('Zip Code').click().type(ZIPcode)
})
When('user click on save btn', () => {
    cy.contains('Save').click({ force: true })
})
Then('application is navigates the cogent account added sucessfully popup screen', () => {
    cy.contains('Cogent Account Added').should('be.visible')
})

When('user click on Withdraw Button', () => {
    cy.wait(3000)
    cy.get('.absolute > [data-testid]').click({ force: true })
})
Then('Application is navigates the Withdraw to cogent popup screen', () => {
    cy.wait(3000)
    cy.contains('Withdraw to Cogent Account').should('be.visible')
})

When('user click on Amount filed and enter the amount as {string}', (amount) => {
    cy.get('#amount').click().type(amount)
})
When('user change the amount from $ to usd Click on Symbol', () => {
    cy.wait(3000)
    cy.get('[height="28"]').click({ force: true })
})
When('user click on Next button', () => {
    cy.get('.bottom-6 > [data-testid]').click()
})
Then('application Navigating to the Confir withdraw to cogent account screen', () => {
    cy.contains('Withdraw to Cogent Account').should('be.visible')
})
When('user able to click on confirm btn', () => {
    cy.contains('Confirm').click({ force: true })
})
Then('application is navigates to trhe verify your identity popup screen', () => {
    cy.contains('Verify Your Identity').should('be.visible')
})
When('user click on otp boxes and enter the otp as {string}', (otp) => {
    cy.get('.VerificationInput_verification_input_wrapper__o8Que > .relative > :nth-child(1)').type(otp)
})
Then('application is navigating to the Processing to inprogress popup screen', () => {
    cy.wait(3000)
    cy.get('.flex-col > .text-cm3').should('be.visible')
})
Then('user click on Done button then application is directed to the token account list', () => {
    cy.wait(3000)
    cy.get('.absolute > [data-testid]').click({ force: true })
})
When('Admin click on WITHDRAW TO COGENT text', () => {
    cy.wait(5000)
    cy.contains('Withdraw To Cogent').click({ force: true })
})
When('Screen is navigating to the Withdraw to Cogent Account popup screen', () => {
    cy.contains('Withdraw to Cogent Account').should('be.visible')
})
When('Admin click on Delete icon', () => {
    cy.wait(3000)
    cy.get('[data-for="delete"]').click({ force: true })
})
Then('Screen navigates the Remove Cogent Account', () => {
    cy.wait(3000)
    cy.contains('Remove Cogent Account').should('be.visible')
})
Then('Click on Remove Button,then Cogent Account Removed Successfully screen should be shown', () => {
    cy.wait(3000)
    cy.get('.absolute > [data-testid]').click({ force: true })
})

//*===================================Feature controls=============================================*//

// When("User click on System setting side menu",()=>{
//     cy.wait(3500)
//     cy.contains('System Settings').click({force:true})
// })
// Then('in the Dropdown lisr of subfeatures showning',()=>{
//     cy.wait(3500)
//     cy.contains('Feature Controls').should('be.visible')
// })

// When('user click on Feature control side menu sub feature',()=>{
//     cy.wait(3500)
//     cy.contains('Feature Controls').click({force:true})
// })
// Then('it will be navigating to the features controls details',()=>{
//     cy.wait(3000)
//     cy.get('.tracking-tight').should('be.visible')
// })

// When('user disbled all the features controls',()=>{
//     cy.wait(3000)
//     cy.get('.flex > .react-toggle > .react-toggle-thumb').click({force:true})
// })
// When('save button is enabled&When we click on Save Button',()=>{
//     cy.wait(3000)
//     cy.contains('Save').click({force:true})
// })
// Then('Application is navigating to the Save changes popup',()=>{
//     cy.wait(3500)
//     cy.contains('Save Changes').should('be.visible')
// })

// When('user shown the yes button in the popup and click on it',()=>{
//     cy.wait(3000)
//     cy.contains('Yes').click({force:true})
// })
// Then('Shown the sucess message&controls should be enabled or disabled',()=>{
//     cy.wait(3500)
//     cy.contains('You have successfully saved changes.').should('be.visible')
// })
// // =====================Merchnat portal===============================
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
    cy.contains('Phone Verification').should('be.visible')
})
When('user enter valid otp such as {string}', (Code) => {
    cy.wait(3500)
    cy.get('.relative > :nth-child(1)').type(Code)
})