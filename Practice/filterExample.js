const arr = [4, 5, 2, 6, 8, 7, 0, 9, 14];

// isEven
console.log(arr.filter(a => a % 2 === 0));

// isOdd
console.log(arr.filter(a => a % 2 === 1));

// greater than 6
console.log(arr.filter(a => a > 6));

// make addition of even numbers
console.log(arr.filter(a => a % 2 == 0).reduce((acc, curr) => {
    acc += curr
    return acc
}, 0))

// make addition of odd numbers
console.log(arr.filter(a => a % 2 == 1).reduce((acc, curr) => {
    acc += curr
    return acc
}, 0))