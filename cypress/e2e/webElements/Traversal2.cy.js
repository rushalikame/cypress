///<reference types="cypress"/>

////children() , prev() , next() , nextAll() , prevAll() ,next(),siblings()

// developer
// javscript ??
// create element 
// update element 
// retrive element 
// delete  element 

// add attribute 
// update attribute 
// delete attribute 
// retrive attribute
// user action

// tester 
//selection of the element 

describe('Traversal method',function(){

    it('revision',function(){

        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')

        //children()
        cy.get('traversal-drinks-list').children().should('have.length',5)
        
        //next()
        cy.get('#coffee').next().should('have.attr',"id","tea")

        //prev()
        cy.get('#milk').next().should('have.attr',"id","tea")

        //prevAll()
        cy.get('#espresso').prevAll().should('have.lengh',3)

        //nextAll()
        cy.get('#coffee').nextAll().should('have.length',4)
 
        //siblings()
        cy.get('#milk').siblings().should('have.length',4)

        })

        //prevUntil()
        it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',function(){

            cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
            cy.get('#espresso').prevUntil('#coffee').should('have.length',2)
        })

        //nextUntil()
        it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command',function(){
            cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
            cy.get('#coffee').nextUntil('#sugar').should('have.length',3)
        })
       
        //first() 
        it('To get the first DOM element within elements, use the .first() command.',function(){
            cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
            cy.get('.traversal-drinks-list').children().first().should('have.attr','id','coffee')
        })
    
        // last()
        it('To get the last DOM element within elements, use the .last() command',function(){
            cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
            cy.get('.traversal-drinks-list').children().last().should('have.attr','id','sugar')
        })
    
        //eq()
        it.only('To get a DOM element at a specific index, use the .eq() command.',function(){
            cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
            cy.get('.traversal-drinks-list').children().eq(2).should('have.attr','id','milk')
        })
    
        // parent()
        it.only('To get parents DOM element of elements, use the .parents() command.',function(){
            cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
            cy.get('#milk').parent().should('have.attr','class','traversal-drinks-list')
    
        })
        
})

