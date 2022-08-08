//FIXME: falsy values are as follows
//
//undefined
//null
//""
//NaN (Not a Number)
//Every value apart from this is true

// TODO:
// var a = 1; //undefined; //""; //null; //NaN;
// if (a) {
//   console.log("True value");
// }

// Something surprising happens here and javascript think both the values as string and do the concatenation
console.log("2" + 2); //22
console.log(2 + "2"); //22

var value = "2";

if (value == 2) {
  console.log("true value"); //It will get printed.
  //We call it as a coercion
  // == equal sign is loosely 2 not matter where it is a string or number
}

if (value === 2) {
  console.log("true value"); //It will not-print
  // === it will do the strict checking wheter the 2 is string or number
}

if (value === "2") {
  console.log("true value"); //It will get printed.
}
