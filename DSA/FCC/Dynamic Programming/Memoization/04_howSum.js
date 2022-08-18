// TODO: This problem is similar to canSum problem but here we are going to maintain the array of numbers which will give the targetSum.

// We have to return any one combination which can lead to the target sum.

// Return null if there is no combination to generate the target sum.

// FIXME: Outputs should be like the following - 
// for eg. howSum(7, [5, 3, 4, 7]) -> [3, 4] or -> [7]
// for eg. howSum(7, [2, 4]) -> null
// for eg. howSum(0, [1, 2, 4]) -> [] 

function howSum(targetSum, array, diary = {}) {
    // base case
    if(targetSum in diary) 
        return diary[targetSum];

    if(targetSum < 0) 
        return null;

    if(targetSum == 0)
        return [];

    for(let num of array) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, array, diary);
    
        if(remainderResult !== null) {
            diary[targetSum] = [num, ...remainderResult];
            return diary[targetSum];
        }    
    }

    diary[targetSum] = null
    return null;
}

console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
console.log(howSum(300, [2, 14, 50]));