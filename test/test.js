let express = require("express");
let expect = require("chai").expect;
let request = require("request");

describe("Add Two numbers", function(){
    var url = 'http://localhost:3000/cal/addTwoNumbers?number1=4&number2=5'

    it("returns status 200 to check if API works", function(done){
        request(url,function  myFunction(error, response){
            expect(response.statusCode).to.equal(200);
            done();
        } )
    })

       it("returns statuscode key in body to check if API gives right result, should be 200", function(done){
        request(url,function  myFunction(error, response, body){
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200);
            done();
        } )
    })

    it("returns result as number", function(done){
        request(url,function  myFunction(error, response, body){
            body = JSON.parse(body)
            expect(body.data).to.be.a('number');
            done();
        } )
    })
    it("returns result equal to 9", function(done){
        request(url,function  myFunction(error, response, body){
            body = JSON.parse(body)
            expect(body.data).to.equal(9);
            done();
        } )
    })   
    it("returns result not equal to 15", function(done){
        request(url,function  myFunction(error, response, body){
            body = JSON.parse(body)
            expect(body.data).to.not.equal(15);
            done();
        } )
    })  
   
});
describe("Add Two Strings - Negative Test", function(){
    var url = 'http://localhost:3000/cal/addTwoNumbers?number1=A&number2=S'
   
    it("returns status 200 to check if API works", function(done){
        request(url,function  myFunction(error, response){
            expect(response.statusCode).to.equal(200);
            done();
        } )
    })
    it("returns statuscode key in body to check if API gives right result, should be 400", function(done){
        request(url,function  myFunction(error, response, body){
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(400);
            done();
        } )
    })
    it("returns result equal to null", function(done){
        request(url,function  myFunction(error, response, body){
            body = JSON.parse(body)
            expect(body.data).to.be.a('null');
            done();
        } )
    }) 
});

