//TODO: falsy values are as follows
//undefined
//null
//""
//NaN (Not a Number)
//Every value apart from this is true

// var a = 1; //undefined; //""; //null; //NaN;
// if (a) {
//   console.log("True value");
// }

var value = "2";

if (value == 2) {
  //coercion
  console.log("true value");
}

if (value === 2) {
  console.log("true value");
}

if (value === "2") {
  console.log("true value");
}
