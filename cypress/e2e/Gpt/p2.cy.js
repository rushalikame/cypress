///<reference types="cypress"/>

describe('verify the test case for GET users API',function(){

    it('should make GET request to retrieve a list of users',function(){
        // Cypress request to make a GET request
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        })
        .then(function(response){
            // Assertion: Verify the status code is 200
            expect(response.status).to.eq(200)
            // Assertion: Verify the actual response body contains to expected data
            expect(response.body).to.have.property('page',2)
            expect(response.body).to.have.property('support')
            expect(response.body).to.have.property('per_page',6)
            expect(response.body).to.have.property('total')
            expect(response.body).to.have.property('total_pages')
            expect(response.body).to.have.property('data').to.be.an('array').that.is.not.empty;
            

        })
    })
})