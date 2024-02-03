describe('verify the API for GET POST PUT DELETE', function () {

    it('verify the total numbner of user per page', function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        })
            .then(function (response) {
                // cy.log(response.per_page)
                // cy.log(response.data.length)
                expect(response.body.data.length).to.equal(response.body.per_page)
            })
    })

    it('verify the user withname lindsay', function () {
        let userName = "Lindsay"
        let flagUser = false
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        })
            .then(function (response) {
                response.body.data.forEach(element => {
                    if(element.first_name == userName){
                        flagUser = true
                        return
                    } 
                });
            })
            .then(function () {
                expect(flagUser).to.eq(true)
            })
    })

    
    it('verify the post request', function () {
        let info = {
            "name": "vrushali",
            "job": "testing"
        }
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users?page=2",
            body:info
        })
        .then(function(response){
            cy.log(response.body)
            expect(response.body).to.have.keys(["name","job","id","createdAt"])
            expect(response.body.name).to.eq(info.name)
            expect(response.body.job).to.eq(info.job)
        })
  
    })

})
