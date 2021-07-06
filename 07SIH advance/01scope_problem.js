// Why there is let keyword?
// => This become very essential to reesolve the scope issue and then let keyword comes into the picture.


// Scope is a big issue in js => {} This is what we considered as a global scope in node engine.


// console.log(name); //output is : undefined(var) && error(let)

var name = "atharva"; // undefined

// let name = "atharva"; // error


if (true){
    // var lastName = "Mahamuni"; // If we use var then it is available outside the scope as well.
    let lastName = "Mahamuni"; // This is not accessible outside the scope

    console.log(lastName); 
}

// console.log(lastName); 