tipper("10");

function tipper(a) {
  bill = parseInt(a) + 5;
  //parseInt(a) convert string in int type.
  console.log(bill);
}
// This will work because tipper is the function.
// In the global context function get scanned and they made available 
//So it is possible to call it before the declaration.


//tipper(5);
tipper("5");

// bigTipper(10);

// var bigTipper = function (a) {
//   bill = parseInt(a) + 55;
//   console.log(bill);
// };
//This is the problem which is known as hoisting.
//In the global context variables are scanned but they are undefined.
//That's why it is showing that bigTipper is the not available.

console.log(name); // undefined
var name = "Atharva";
console.log(name) // Atharva

function sayName() {
  console.log(name); // undefined
  var name = "mr. X";
  console.log(name); // mr. X



  
}
sayName();
