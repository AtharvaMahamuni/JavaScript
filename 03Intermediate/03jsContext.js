sayHello();
//This function call maybe not acceptable in some of the programming lanugaes but 
//It is acceptable in JavaScript due the its global context.

function sayHello() {
  console.log("Hello, Everyone!");
}
//First function call is acceptable in javaScript due to js context
//which already loaded the function as a global context
//that is why js is aware about all the functions


// sayHello(); //This function call is acceptable everywere

// var myName = "Atharva";
// if (myName === window.myName) {
//   console.log("It is true");
// }
//javaScript has a context in which everything resides and in this case it is window.

//This code will give error in IDE but when you run it on browser console
//It run perfectly fine
//It is due to browser has window as a global context
//But node has different global context



var myName = "Atharva";
if (myName === myName) {
  console.log("It is true");
}
//In node , the window object is renamed  as global.
//In simpler words, just like in browser there is a window object in
//which all the global variables reside,in node there is "global" object
//in which all the global variables reside.
