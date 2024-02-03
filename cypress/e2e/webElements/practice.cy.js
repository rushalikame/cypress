///<reference types ="cypress"/>

describe('traversal methos',function(){

    it('To get children of DOM elements, use the .children() command.',function(){

 
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().should('have.length',4)

    })

    

})

