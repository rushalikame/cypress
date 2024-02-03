///<reference types ="cypress"/>

    //structure of it block 
    // it('verify the status code for PUT request',function(){
    //     cy.request({
    //         url:"",
    //         method:""
    //     }).then(function(response){
    //         //assertion
    //     })
    // })

    describe('APIs Testing',function(){
        //LIST OF USERS
        it('verify the status code for GET request',function(){
            cy.request({
                url:"https://reqres.in/api/users?page=2",
                method:"GET"
            }).then(function(response){
                cy.log(response)                      //check resposponse status value
                expect(response.status).to.eq(200)    //assertion
            })
        })
        
        //UPDATE
        it('verify the status code for PUT request',function(){
            cy.request({
                url:"https://reqres.in/api/users/2",
                method:"PUT",
                body:{
                    "name": "vrushali",
                    "job": "Automation tester"
                }
            }).then(function(response){
                cy.log(response)
                expect(response.status).to.eq(200)
            })
        })


        //CREATE
        it('verify the status code for POST request',function(){
            cy.request({
                url:"https://reqres.in/api/users",
                method:"POST",
                body:{
                    "name": "morpheus",
                    "job": "leader"
                }
            }).then(function(response){
                cy.log(response)
                expect(response.status).to.eq(201)
            })
        })

        it('verify the status code for DELETE request',function(){
            cy.request({
                url:"https://reqres.in/api/users/2",
                method:"DELETE"
            }).then(function(response){
                cy.log(response)
                expect(response.status).to.eq(204)
            })
        })

    })

