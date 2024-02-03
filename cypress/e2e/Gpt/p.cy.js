///<reference types="cypress"/>

describe('API test cases',()=>{

    it('should make a POST request',()=>{

        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:{
                "name": "morpheus",
                "job": "tester"
            }
        })
        .then(function(response){
            //cy.log(response)
        // Assertion: Verify the status code is 201 (Created)
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('name','morpheus');
            expect(response.body).to.have.property('job','tester');
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('createdAt')
        })
    })

})