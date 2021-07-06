// var returnValue = Math.max(1,5,1,2,4,5,48,7,1,4,5,4,4,4,4,6,8,7,8,1);

// console.log(returnValue); // 48


// var myObj = {};

// Object.assign(myObj, {a: 1, b: 2, c: 3}, {z:9, y:8, x: 7});

// console.log(myObj); // { a: 1, b: 2, c: 3, z: 9, y: 8, x: 7 }


// TODO: spread and rest operators
function sumOne(a,b){
    return a+b;
}

var myA = [5,4]
console.log(sumOne(...myA)); // ... is a Spread operator


// function sumTwo(...args) { // ... is known as REST operator
//     let sum = 0;
//     // console.log(args); // args comes as an array

//     for (const i of args) {
//         sum = sum + i;
//     }
//     return sum;
// }

function sumTwo(a, b, ...args) { // ... is known as REST operator
    let sum = 0;
    // console.log(args); // args comes as an array

    for (const i of args) {
        sum = sum + i;
    }
    return sum + a + b;
}

console.log(sumTwo(2,3,4,5,6,7));
console.log(sumTwo(2,3));
