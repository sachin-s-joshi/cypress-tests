/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Forms submission in cypress', () => {

    // beforeEach('Launch site', () => {

    // })

    it('Interacting with text fields', () => {
        cy.visit('https://www.automationtestinginsider.com/2019/08/textarea-textarea-element-defines-multi.html')
        cy.get('input[name="firstname"]')
            .type('Sachin')
            .should('have.value', 'Sachin')
            .get('input[name="lastname"]')
            .type('Joshi')
            .should('have.value', 'Joshi')

    })


    it('Interacting with password fields', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
            .get('#divUsername')
            .type("Admin")
            .get('#txtPassword').type('admin123')
            .type('{enter}')
            .get('.head')
            .should('be.visible');
    })

    it('Interacting with radio buttons', () => {
        cy.visit('https://www.automationtestinginsider.com/2019/08/textarea-textarea-element-defines-multi.html')
            .get('input[value="Yes"')
            .click()
            .get('input[value="No"')
            .click()
            .get('input[value="Don\'t Know"')
            .click()

    })

    it('Interacting with checkboxes', () => {
        cy.visit('https://www.automationtestinginsider.com/2019/08/textarea-textarea-element-defines-multi.html')
            .get('input[value="Checkbox1"]')
            .click()
            .get('input[value="Checkbox2"]')
            .click()
            .get('input[value="Checkbox3"]')
            .click()
            .get('input[value="Checkbox1"]')
            .click()  //this to uncheck first one again
    })

    it('Ensure the text limits in text area', () => {
        cy.visit('https://www.automationtestinginsider.com/2019/08/textarea-textarea-element-defines-multi.html')
            .get('textarea')
            .first()
            .clear()
            .type('Row1\n Row2\nRow3\nRow4\nRow5\nRow6\nRow7\nRow8\nRow9\nRow10\nRow11\nRow12')
            .invoke('attr', 'rows')
            .should('eq', '10')
    })

    it.only('Datepicker in form', ()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        .get('#dateOfBirth-wrapper')
        .click()
        .get('.react-datepicker__day--013')
        .click()
        .get('#dateOfBirthInput')
        .should('have.value', '13 Nov 2021') 
    })

    /* it.only('DatePicker by using text typing',()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        .get('#dateOfBirthInput')
        .clear()
        .type('13 Nov 2022 {enter}')
        .should('have.value', '13 Nov 2022')     
    }) */


})

describe('DropDown selection', () => {
    it('Selectboxes using Visible option', () => {
        cy.visit('https://www.automationtestinginsider.com/2019/08/textarea-textarea-element-defines-multi.html')
            .get('select')
            .eq(0)
            .select('Fiat')
            .should('have.value', 'fiat')
    })

    it('Selectboxes using values', () => {
        cy.visit('https://www.automationtestinginsider.com/2019/08/textarea-textarea-element-defines-multi.html')
            .get('select')
            .eq(0)
            .select('fiat')
            .should('have.value', 'fiat')
    })

})

describe('Form submit  and resetbutton', () => {

    it('Form submit with cypress submit() method', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
            .get('#divUsername')
            .type("Admin")
            .get('#txtPassword').type('admin123')
            .get('form#frmLogin')
            .submit()
            .get('.head')
            .should('be.visible');
    })

    it('Form submit with usual click method', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
            .get('#divUsername')
            .type("Admin")
            .get('#txtPassword').type('admin123')
            .get('input[type="submit"]')
            .click()
            .get('.head')
            .should('be.visible');
    })

    it('Form reset after filling up', () => {
        cy.visit('https://www.automationtestinginsider.com/2019/08/textarea-textarea-element-defines-multi.html')
        cy.get('input[name="firstname"]')
            .type('Sachin')
            .should('have.value', 'Sachin')
            .get('input[name="lastname"]')
            .type('Joshi')
            .should('have.value', 'Joshi')
            .get('input[type="reset"]')
            .click()
            .get('input[name="firstname"]')
            .should('have.value', '')
    })


})

describe('File upload in cypress', () => {

    it('Test file upload with valid file extension', () => {

        const filePath='somefile.txt';

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile(filePath)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('somefile')
})
})

