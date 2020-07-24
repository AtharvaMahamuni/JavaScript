tipper("10");

function tipper(a) {
  bill = parseInt(a) + 5;
  //parseInt(a) convert string in int type.
  console.log(bill);
}

//tipper(5);
tipper("5");

// bigTipper(10);
// var bigTipper = function (a) {
//   bill = parseInt(a) + 55;
//   console.log(bill);
// };
//This is the problem which is known as hoisting.

console.log(name);
var name = "Atharva";
console.log(name);

function sayName() {
  console.log(name);
  var name = "mr. X";
  console.log(name);
}
sayName();
