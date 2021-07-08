//Closure: A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function init(){
    var firstName = "Atharva";
    console.log("I am init"); //It will print after call but not firstName

    function sayFirstName(){
        // console.log(this.firstName); //undefined
        console.log(firstName); //Atharva
    }
    return sayFirstName; // It will return the reference of the above function.
}

var value = init();

value(); // This is closure which printed firstName.



// It will give reference first and then do addition.
function doAddition(x){
    return function(y){
        return x+y;
    };
}

var add5 = doAddition(5); //Here we get the reference of function inside doAddition.

console.log(add5(4)); // 9
console.log(add5(10)); // 15

// This concep is known as curring when we use the 2 paranthesis.
console.log(doAddition(3)(2)); // 5