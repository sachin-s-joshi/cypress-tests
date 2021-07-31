/// <reference types="cypress" />


describe('Search Cypress on Google',()=>{


    it('Open google site',()=>{ 
        cy.visit('https://www.google.com/')
    })

    it('search cypress term in search bar',()=>{ 
        cy.get('[name="q"]').should('be.enabled').type('Cypress{enter}')
    })

    it('Check the results of search',()=>{ 
        cy.get('#search').should('be.visible')
        cy.get('#search').contains('Cypress').should('be.visible')
    })


})