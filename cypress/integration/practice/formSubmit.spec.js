describe('Form Submission on LambdaTest', () => {

    it('Fillup details and submit', () => {

        const filePath = 'somefile.txt';

        cy.visit('https://demoqa.com/automation-practice-form')
            .get('#firstName')
            .type('Sachin')
            .get('#lastName').type('Joshi')
            .get('#userEmail').type('test.me@yopmail.com')
            .get('input[value="Male"]').click({force:true})
            .get('#userNumber').type('1231231231')

        cy.get('#dateOfBirth-wrapper')
            .click()
            .get('.react-datepicker__day--013')
            .click()
            .get('#subjectsInput').type('Sports')
            .get('input[type="checkbox"][value="1"]').click({force:true})

        cy.get('#uploadPicture').attachFile(filePath)
        cy.get('#currentAddress').type('This is long text area as you can type \n Multiple \n lines')
        cy.get('#state').type('Rajasthan{enter}')
        cy.get('#city').type('Jaipur')
        cy.get('#submit').click()


    })
})