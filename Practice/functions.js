// TODO: function statement or function declaration
function a() {
    console.log("fun");
}

// TODO:  function expression (advantage : hoisting) 
var b = function() {
    console.log("fun");
}

// TODO: anonymus function
// - functions without a name - It can be used directly as an argument inside another function

// function() {
//     console.log("fun");
// }


// TODO: Named function expression
var b = function namedFunction() {
    console.log("fun");
}

// b();
// namedFunction(); // we get reference error


// Parameter and the arguments

var c = function namedFunction(param1, param2) {
    console.log("fun");
}
// c(arg1, arg2)


// TODO: First class function
// Function are treated as values and we can pass them as arguments and recive them as the parameter.
// We have an ability to use as an function and that is what the first class function is.