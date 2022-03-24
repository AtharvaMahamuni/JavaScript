// User form

const uid = 'abc123'
// uid = 'xyz123' // We can't change the uid becuase it is const and not a var

var fullName = "Atharva Mahamuni"
var email = "atharva@dev.com" 
var password = "1234"
var confirmPassword = "1234"
var courseCount = 0;
var isLoggedInFromGoogle = false;

// alert & prompt used in browser to take the inputs 
//fullName = prompt("Enter your name");

console.log("Full Name is: " + fullName)
console.log("Email is: ", email)
console.log(`
    With Unique ID: ${uid}
    User is: ${fullName}
    and his email is: ${email}
    and uses the password: ${password}
`)


//assignments
/*
firstName
lastName
fbLogin
googleLongin
country & state 
course count
taken courses
*/