//function isEven(element) {
//var isEven = function (element) {
// var isEven = (element) => {
//   //   if (element % 2 === 0) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }

//   return element % 2 === 0;
// };

// console.log(isEven(10));

//var result = [2, 5, 6, 8].every(isEven); //false
// var result = [2, 4, 6, 8].every(isEven); //true

// var result = [2, 4, 6, 8].every((e) => {
//   return e % 2 === 0;
// });

var result = [2, 3, 6, 8].every((e) => e % 2 === 0);

console.log(result);
