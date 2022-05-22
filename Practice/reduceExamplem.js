const arr = [4, 5, 2, 6, 8, 14, 7, 0, 9];

// sum of all elements
function add() {
    let sum = 0;
    arr.forEach(element => {
        sum = sum + element;
    });
    return sum;
}

// console.log(add());
console.log(arr.reduce((acc, curr) => {
    acc += curr
    return acc
}, 0));


// max in given array
console.log(arr.reduce((acc, curr) => {
    if(curr > acc)
        acc = curr
    return acc;
}, 0))


// sol

// let output = arr.reduce((acc, curr) => {
//     if(acc[curr.age])
//         acc[curr.age] += 1;
//     else
//         acc[curr.age] = 1

//     return acc;
// }, {})