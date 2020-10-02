// console.log("hello");
// alert("Hello this is atharva!!!");

// var b = "helllllllloooooooo";
// console.log(b);

// var someNumber = 45;
// console.log(someNumber);

//Manipulate DOM with Javascript
/*
......It is way to making changes in html using javascript.
 */

// document.getElementById('someText').innerHTML = 'hello world';

// var age = prompt("What is your age?");
// console.log(age);
// document.getElementById("someText").innerHTML = age;

//Numbers in Javascript
var num1 = 10;
// num1 = num1 + 1;
// console.log(num1);

//Increament num1 by 1
num1++;

//Decreament num1 by 1
num1--;

//Divide /, multiply *, remainder %
num1 += 11;
console.log(num1);

//Functions:
/**
 * 1.Create a function
 * 2.Call the function
 */
//create
function fun() {
  console.log("this is a function");
}
//call
fun();

/*
Let's create a function that take in a name and says hello 
by your name.
*/

function greeting() {
  var name = prompt("What is your name ?");
  var result = "hello " + name; //string concatination
  console.log(result);
}

// greeting();

//How do arguments work in functions?
//How do we add two numbers in function?

// function sumNumbers(num1, num2) {
//   var result = num1 + num2;
//   console.log(result);
// }
// sumNumbers(221, 23);

// //while loops
// var num = 0;

// while (num < 100) {
//   num += 1;
//   console.log(num);
// }

//for loops
// for (let num = 0; num <= 100; num++) {
//   console.log(num);
// }

//Data Types
let yourAge = 18; //number
let yourName = "Bob"; //string
let name = { first: "John", last: "Doe" }; //object

let truth = false; // boolean
let grocceries = ["apple", "banana", "oranges"]; //array
let random; //undefined
let nothing = null; //value null

//Strings in Javascript (common methods)
let fruit = "banana";
let moreFruits = "banana\napple";
console.log(moreFruits);

console.log(fruit.length);
console.log(fruit.indexOf("n"));
console.log(fruit.slice(2, 6));
console.log(fruit.replace("ban", "123"));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);

let fruits = "banana,apple,orange,blackberry";
console.log(fruits.split(",")); //split by comma
