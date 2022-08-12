// TODO: The task is to find the fibonacci value for the given number. The task is to use the memoization for reducing the time of finding solution.


// TODO: Fibonacci code without memoization

// function fib(num) {
//     // base case
//     if(num <= 2)
//         return 1;

//     // recurssion case
//     return fib(num-1) + fib(num-2);
// }

// console.log(fib(7));
// console.log(fib(10));
// console.log(fib(50));


// TODO: With memoization
// We will use JS object to keep the records of an objects

function fib(num, diary = {}) {
    if(num in diary) 
        return diary[num];

    if(num <= 2) 
        return 1;

    // adding and returning the diary...
    diary[num] = fib(num-1, diary) + fib(num-2, diary);
    return diary[num];
}

console.log(fib(7));
console.log(fib(10));
console.log(fib(50));
