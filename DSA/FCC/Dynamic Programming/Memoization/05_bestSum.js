// TODO: bestSum is the extension of howSum problem where we return the shortest possible combination of targetSum from the given array. All other condtions are similar to the howSum and canSum problems.

// for eg. bestSum(7, [5, 3, 4, 7]) -> [7]

const bestSum = (targetSum, array, diary = {}) => {

    // base case
    if(targetSum in diary) return diary[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestResult = null;

    for(let num of array) {
        const remainder = targetSum - num;
        const remainderResult = bestSum(remainder, array, diary);

        if(remainderResult !== null) {
            const combination = [...remainderResult, num]
            if(shortestResult === null || combination.length < shortestResult.length){
                shortestResult = combination;
            }
        }
    }

    diary[targetSum] = shortestResult;
    return shortestResult;
}


console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(300, [7, 14]));
console.log(bestSum(300, [2, 14, 50]));