// TODO: for loop

// for (let i = 0; i <= 10; i++) {
//   console.log(i)
// }

//TODO: looping through array
const myStates = ["Rajasthan", "Maharashtra", 1947, "Assam", "Andhrapradesh", "Goa"];

for(let i=0; i < myStates.length; i++) {
  // console.log(i); //It will print the index numbers

  //FIXME: It will not print the elements which are not string
  if(typeof myStates[i] !== "string") continue; 

  //FIXME: It will stop execution when it encounters first non-string elements
  // if(typeof myStates[i] !== "string") break; 

  // TODO: Print statement
  // console.log(myStates[i]); // It will print the values at index i
}

let i = 0;

// while (i < myStates.length) {
//   console.log(myStates[i]);
//   i++;
// }

i = 10;
do {
  console.log(myStates[i]);
  i++;
} while (i < myStates.length); //length is 6 but still it run when i = 10

