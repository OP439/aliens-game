const assert = require("chai").assert;
// const sayHello = require("../app").sayHello;
// const addNumbers = require("../app").addNumbers;
const app = require("../app");

// Results
sayHelloResult = app.sayHello();
addNumberResult = app.addNumbers(5,5);
getRandomColorResult = app.getRandomColor();
getRandomLocXResult = app.getRandomLocX(5000);

describe("App", function(){
    describe("sayHello()", function(){
        it("sayHello should return hello", function(){
            // let result = app.sayHello();
            assert.equal(sayHelloResult, "hello");
        });

        it("sayHello should return type string", function(){
            // let result = app.sayHello();
            assert.typeOf(sayHelloResult, "string");
        });
    });
    
    describe("addNumbers()", function(){

        it("addNumbers should be above 5", function(){
            // let result = app.addNumbers(5,5);
            assert.isAbove(addNumberResult, 5);
        });

        it("addNumbers should return type number", function(){
            // let result = app.addNumbers();
            assert.typeOf(addNumberResult, "number");
        });
    })

    describe("getRandomColors()", function(){
        it("getRandomColor should return type string", function(){
            assert.typeOf(getRandomColorResult, "string");
        });
    });

    describe("getRandomLocX()", function(){

        it("getRandomLocX should return a number below the passed number", function(){
            assert.isBelow(getRandomLocXResult, 5000);
        });

        it("getRanomLocX should return type integer", function(){
            assert.typeOf(getRandomLocXResult, "number");
        });
    });
});
