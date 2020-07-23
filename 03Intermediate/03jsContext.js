// sayHello();

// function sayHello() {
//   console.log("Hello, Everyone!");
// }
//First function call is acceptable in javaScript due to js context
//which already loaded the function as a global context
//that is why js is aware about all the functions

// var myName = "Atharva";
// if (myName === window.myName) {
//   console.log("It is true");
// }
//This code will give error in IDE but when you run it on browser console
//It run perfectly fine
//It is due to browser has window as a global context
//But node has different global context

//In node , the window object is renamed  as global.
//In simpler words, just like in browser there is a window object in
//which all the global variables reside,in node there is "global" object
//in which all the global variables reside.
