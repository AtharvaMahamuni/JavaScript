
// FIXME: Arrow function

var isEven = (element) => {
    return element % 2 === 0
}



// FIXME: Regular function
// function isEven(element){
//     // if (element % 2 === 0)
//     //     return true;
//     // else
//     //     return false;

//     return element%2 === 0;
// }

// console.log(isEven(8)) //true
// console.log(isEven(5)) //false



// var result = [2,3,6,8].every(isEven) // Here we are not giving () after isEven because we are only passing the reference.
// console.log(result)  //It will check all the elements and if one of them is false it will return false.

var result2 = [2,3,6,8].every((e) => (e%2 === 0));
console.log(result2);