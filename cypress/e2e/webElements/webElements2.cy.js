//test scenario --- verify the contactus form
//testcase 1 --- validate with valid data
//testcase 2 --- validate the reset button functionality
//testcase 3 --- validate with in valid data

describe('Verify the contactus form',function(){

    it('verify the contactus form with valid data',function(){

        //arrangement
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

        
            //action
            cy.get('input[name="first_name"]').type('vrushali')
            cy.get('input[name="last_name"]').type('kame')
            cy.get('input[name="email"]').type('vrushalikame@gmail.com')
            cy.get('textarea[name="message"]').type('im learning cypress')
            cy.get('input[type="submit"]').click()

            //assertion
            cy.get('h1').should('be.visible')
        
        })

        it('verify the functionality of reset button',function(){
            //arrangement
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

            //action
            cy.get('input[name="first_name"]').type('vrushali')
            cy.get('input[name="last_name"]').type('kame')
            cy.get('input[name="email"]').type('vrushalikame@gmail.com')
            cy.get('textarea[name="message"]').type('im learning cypress')
            cy.get('input[type="reset"]').click()

            //assertion
            cy.get('input[name="first_name"]').should('have.text'," ")

        })

        it.only('verify the functionality of contact us form with invalid data',function(){
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
             // Arrangement
             cy.get('input[name="first_name"]').type('vrushali')
             cy.get('input[name="last_name"]').type('kame')
             cy.get('input[name="email"]').type("vrushaligmai.com")
             cy.get('textarea[name="message"]').type('Im learning javascript')
             cy.get('input[type="submit"]').click()
             cy.get('body').should('contain','Error: Invalid email address')
        })
    
    })
