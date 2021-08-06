/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Working woth xpath inn Cypress made easy', ()=>{ 

    beforeEach(()=>{ 
        cy.visit('http://automationpractice.com')
    })
    it('Xpath id usages', ()=>{   
        cy.xpath('//*[@id="search_query_top"]')
        .type('Dress')
        .type('{enter}')
        .get('#center_column')
        .should('be.visible')
    })

    it('xpath class usage',()=>{
        cy.xpath('//*[@class="item"]//a')
        .eq(0) //0th element in the array of elements
        .click()

        cy.xpath('//*[contains(@class,"center_column")]') 
        .should('be.visible')

    })

    it('Interact with  Elements using name attribute',()=>{
        cy.xpath('//input[@name="email"]')
        .type('xyz@yopmail.com{enter}')
        .get(".alert")
        .should('contain.text','Newsletter')
    })

    it('Interact with elemnts using text', ()=>{
        cy.xpath('//a[text()="Women"]')
        .should('be.visible')
    })

})