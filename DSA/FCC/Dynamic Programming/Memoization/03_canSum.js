// TODO: Write the function which tells that the target sum is possible to generate or not from the given numbers in an array.

// We can use the elements of the array as many times as needed.
// Assume all input numbers are non-negative

// for eg. canSum(7, [5, 3, 4, 7]) -> true
// 3 + 4
// 7

// for eg. canSum(7, [2, 4]) -> false


/*
// Without memo

const canSum = (targetSum, array) => {
    
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    
    for(let val of array) {
        let remainder = targetSum - val;
        if(canSum(remainder, array)) 
            return true;
    }
    return false;
}

console.log(canSum(7, [5,3,4,7]));
console.log(canSum(7, [2, 4]));

*/

function canSum(targetSum, array, diary = {}) {

    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    if(targetSum in diary) {
        return diary[targetSum]
    }

    for(let num of array) {
        let remainder = targetSum - num;
        if(canSum(remainder, array, diary) === true) {
            diary[targetSum] = true;
            return diary[targetSum];
        }
    }

    diary[targetSum] = false
    return diary[targetSum];
}

console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
console.log(canSum(300, [2, 7, 14]));
