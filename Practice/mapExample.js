const arr = [5, 1, 3, 2, 6];

// const output = arr.map( a => a * a)
// console.log(output);


// function double(num) {
//     return num * 2;
// } 

// const doubleOutput = arr.map(double)
// console.log(doubleOutput);


// function binary(a) {
//    return a.toString(2);
// }

// console.log(binary(10));

// const binaryOutput = arr.map(binary)
// console.log(binaryOutput)  // [ '101', '1', '11', '10', '110' ]

console.log(arr.map( a => a.toString(2)))