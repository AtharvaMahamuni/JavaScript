// In this functional programming approach we hold entire function as a variable and this is the part of functional programming.

// var sayHello = function(){
//     console.log("I say Hello!");
//     console.log("I again say Hello!");
// }


// Regular function
// function sayHello(){
//     console.log("I say Hello!");
//     console.log("I again say Hello!");
// }

// sayHello();



//self executing annonymous function.
// mostly used in testing and in webscrapping.
// also knon as IIFE (Immediately Invoked Function Expression)
// It will run as soon as it is invoked.
// It doesn't require a call.
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(function (){
    console.log("I say Hello!");
    console.log("I again say Hello!");
})();

