/// <reference types="cypress" />



describe('Cypress Locators in action', ()=>{

    beforeEach(()=>{

        cy.visit('http://automationpractice.com')
    })

    it('Interact with Elements using ID selector', ()=>{
        cy.get('#search_query_top') //in CSS selector/ Jquery Selector ids are identified using # prefix
        .type('Dress')
        .type('{enter}')
        .get('#center_column')
        .should('be.visible')
    })

    it('Interact with Elements using name attribute',()=>{
        cy.get('input[name="search_query"]')
        .type('Tshirt{enter}')
        .get('#center_column')
        .should('be.visible')
    })
    it('Interact with Elements using class selector',()=>{
        cy.get('.item')
        .eq(0) //0th element in the array of elements
        .click()

        cy.get('[class*="center_column"]') 
        .should('be.visible')
    })    

    it('Interact with links or button using partial text',()=>{
        cy.get('a:contains("My orders")')  // similar to partial link text 
        .click()
        cy.get('.page-heading')
        .should('have.text','Authentication')
    })

    it('Interact with  Elements using name attribute',()=>{
        cy.get('input[name="email"]')
        .type('xyz@yopmail.com{enter}')
        .get(".alert")
        .should('contain.text','Newsletter')
        
    })

    it('Class selector short hand',()=>{

        //find class containing value using *=
        cy.get("a[class*='add_to_cart']")
        .eq(0)
        .click()
        .get("#layer_cart")
        .should('be.visible')

        //find class value that start with ^= 
        cy.get("[class^='layer_cart_product']")
        .should('be.visible')
        .get("a[title='Proceed to checkout']")
        .click()

        //find class that ends with... using $=
        cy.get('[class$="_delete"]')
        .click()
        .get('.alert')
        .should('be.visible')

    })

    it('Finding elements using attribute values',()=>{
        cy.get('a[title*="store"]')
        .should('have.length.at.most',1)

        cy.get('a[title*="store" i]')  //case insensitive
        .should('have.length.gt',1)
        .each(i=> console.table([i.attr('href')]))

    })

    it('Find elemnts with first()',()=>{

        cy.get('.item a')
        .first()
        .click()
        .get('.navigation_page')
        .should('contain.text','Price')
        
    })

    it('Working with siblings & parents', ()=>{
        cy.get('#social_block ul li')
        .first()
        .should('have.class','facebook')
        .next() //to next siblings
        .should('have.class','twitter')
        .next() 
        .should('have.class','youtube')
        .next()
        .should('have.class','google-plus')
        .prev() // using prev() back to previous sibling of google-plus which should be 'youtube'
        .should('have.class', 'youtube')  

        cy.get('#social_block').siblings('div')  //siblings() method to check all sibling with <div> tag
        cy.get('#social_block').next('div').should('have.length',1)  //next() to find only next div
        cy.get('#social_block ul').children() //children() method to check sibling

        cy.get('#social_block>>li').next('.youtube') //next() with selector
        cy.get('#social_block').prev('div') //prev() with selector

        cy.get('.youtube').prevAll() //yields all before youtube
        cy.get('.facebook').nextAll() //yields all after facebook

        cy.get('.facebook').nextUntil('.google-plus') //yields twitter and youtube
        cy.get('#social_block').prevUntil('[class*="footer-block"]') // 
    })

    
})

describe('Todo Test',()=>{

    it('Working with last()', ()=>{
        let task='Task at the end'
        cy.visit('https://todomvc.com/examples/react/#/active')
        .get('.new-todo')
        .type(task)
        .type('{enter}')
        .get('.todo-list li')
        .last()
        .should('have.text',task)
    })

})