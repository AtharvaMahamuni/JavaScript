// TODO: Example 1 : Assign a function to a variable

// const myVariable = function () { // Assigning a function to a variable
//     console.log("Inside the function...");
//  }

//  myVariable(); // Invoking the function using the variable


// TODO: Example 2 : Pass function as an Argument

// function wishHappyBirthday() {
//     return "Happy Birthday, ";
// }

// function wishHappyNewYear() {
//     return "Happy New Year, ";
// }
 
// // Here in `wishMessage` we recieve he function as an parameter.
// function wishPerson(wishMessage, name) { 
//    console.log(wishMessage() + name + '!!!');
//  }

//  // Pass `wishHappyBirthday` as an argument to `wishPerson` function
//  wishPerson(wishHappyBirthday, "John Doe");

//  // Pass `wishHappyNewYear` as an argument to `wishPerson` function
//  wishPerson(wishHappyNewYear, "John Doe");


// TODO: Example 3 : Return a function

function sayHello() {
    // returning the function
    return function() {
       console.log("Hello!");
    }
 }

// Calling returned function using double parantheses
sayHello()();

// // Storing the returned function in `newFun` variable
// const newFun = sayHello();

// // Calling the function which returned function with `newFun`
// newFun();