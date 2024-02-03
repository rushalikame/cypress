//const { func } = require("assert-plus")

///<reference types = "cypress"/>

//test scenario
//test case

describe('working with web elements',function(){

    it('visit the webpage',function(){

        //vising the url
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

        //type into input elements
        //type()  - methods
        cy.get('input[name="first_name"]').type("vrushali")
        cy.get('input[name="last_name"]').type("kame")
        cy.get('input[ name="email"]').type("vrushalikame@gmail.com")
        cy.get('textarea[name="message"]').type('im learning cypress')

        //click()
        //cy.get('input[type="submit"]').type('click')

        //submit()
        //cy.get('#contact_form').submit()

        //clear()
        cy.get('input[name="last_name"]').clear()

        //get atribute
        //<input name="first_name" type="text" class="feedback-input" placeholder="First Name">
        cy.get('input[name="first_name"]').should('have.attr','name','first_name')
        cy.get('input[name="first_name"]').then(function(el){
            cy.log(el.prop('name'))
            cy.log(el.prop('type'))
            cy.log(el.prop('class'))
            cy.log(el.prop('placeholder'))
        })

        cy.get('input[name= "first_name"]').invoke('attr','name').then(function(str){
            cy.log(str)
         })
         cy.get('input[name= "first_name"]').invoke('prop','name').then(function(str){
           cy.log(str)
        })
    })
})
