// Lexical Scoping : A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.

// init is shortcut for initialization.
function init(){
    var firstName = "Atharva";
    function sayFirstName(){
        // console.log(this.firstName); //undefined
        console.log(firstName); //Atharva
    }
    sayFirstName();
}

init();

// console.log(firstName); //It is not availabe due to scope of firstName
