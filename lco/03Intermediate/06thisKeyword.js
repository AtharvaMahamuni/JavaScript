//TODO: This keyword part 1

console.log(this); // {}
//It gives us the empty scope on node engine which ultimeately supports the V8 engine.

/*****
 * We have this keyword which give us the global context
 * Global context differs as per the situation
 * in node it shows the empty scope and in browser it shows access of windows
 *
 */

// function sayName() {
//   console.log("Athrva here!!!");
//   console.log(this);
// }

// sayName();

// When above code run on a browser it shows the entire window object which contain so many things in it.
