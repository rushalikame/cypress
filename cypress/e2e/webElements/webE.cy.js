///<reference types ="cypress"/>

//click()
describe('web Elements methods',function(){

    // it('click() - click on a function',function(){
    //     cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('[name="first_name"]').type('vrushali')
    //     cy.get('[name="last_name"]').type('kame')
    //     cy.get('[name="email"]').type('vrushk@gmail.com')
    //     cy.get('[name="message"]').type('im learing cypress')
    //     cy.get('[type="submit"]').click()
    //     cy.get('h1').should('exist')
    // })

    it('type() - type on input element',function(){
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type("apurva") // type()
        cy.get('[name="last_name"]').type("shah")
        cy.get('[name="email"]').type("apurvashah@gmail.com")
        cy.get('[name="message"]').type("Im learning python")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('exist')
    
    })

    it('clear() - clearing the element',function(){
        //arrangement
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        //action
        cy.get('[name="first_name"]').as('firstName')
        cy.get('@firstName').type('vrushali kame')
        cy.get('@firstName').clear()
        //assertion
        cy.get('@firstName').should('have.text','')
        
    })

        // <h2 name="contactme" class="section_header">CONTACT US</h2>
        it('getting attribute and verifying attribute',function(){
            //arrangement
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('h2').should('have.attr','name')
            cy.get('h2').should('have.attr','class')
            cy.get('h2').should('have.attr','class','section_header')
            cy.get('h2').should('have.attr','name','contactme')
            cy.get('h2').invoke('attr','class').then(function(){
                cy.get(text)

            })
            cy.get('h2').invoke('attr','name').then(function(){
                cy.get(text)
            })
        })

        it('getting text and verifying the text of element',function(){
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('h2').should('have.text','CONTACT US')
            cy.get('h2').invoke('text').then(function(txt){

                cy.log(txt)
            })

            //element visible or not
            cy.get('h2').should('be.visible')

        })
           //selected or not
        it('element is selected',function(){
            cy.get('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
            cy.get('[value = "pumpkin"]').should('be.checked')

        })
         //enabled or not
        it('element is enabled',function(){
            cy.get('[value = "lettuce"]').should('be.disable')
        })
})

