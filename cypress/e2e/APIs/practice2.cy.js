///<reference types="cypress"/>


describe('verify the API for get put post delete',function(){


    it('verify the total number of user per page',function(){

        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        })
        .then(function(response){
            cy.log(response.per_page)
            //cy.log(response.data.length)
            expect(response.body.data.length).to.equal(response.body.per_page)
        })
    })

    it('verify the user with name lindsay',function(){
        let userName = "Lindsay" 
        let flag = false
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        })
        .then(function(response){
            response.body.data.forEach(ele =>{
                if(ele.first_name == userName){
                    flag = true
                    return
                }
            });
        })
        .then(function(){
            expect(flag).to.eq(true)
        })
    })

    it.only('verify the post request',function(){
        let info = {
            "name": "vrushali",
            "job": "js"
        }

        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users?page=2",
            body:info
        })
        .then(function(response){
            cy.log(response.body)
            expect(response.body).to.have.keys(["name","job","id","createdAt"])
            expect(response.body.job).to.eq(info.job)
            expect(response.body.name).to.eq(info.name)
        })
    })   
})

