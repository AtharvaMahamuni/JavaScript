// TODO: Here we have to find the right time to buy and sell the stock to generate the higher return. This problem should be solved in O(n) time complexity.

let array1 = [8, 9, 5, 6, 12, 10, 11]
let array2 = [9, 8, 7, 6, 5, 4]
let array3 = [1, 2, 3, 4, 5, 6]

function maxSellingProblem(array) {
    let globalProfit = 0;
    let globalSmall = array[0];

    for(let i = 1; i<array.length; i++) {
        if(array[i] < globalSmall)
            globalSmall = array[i]
        
        if(array[i]-globalSmall > globalProfit)
            globalProfit = (array[i] - globalSmall)
    }

    return [globalSmall, (globalProfit+globalSmall), globalProfit]
}

console.log(maxSellingProblem(array1))
console.log(maxSellingProblem(array2))
console.log(maxSellingProblem(array3))