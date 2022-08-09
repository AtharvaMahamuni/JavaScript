// TODO: Taks is to print the fibonacci number of the given number. All this should be done with the recurssion and the memoization in DP.


let num1 = 9
let num2 = 35
let num3 = 66

// TODO: findFibo without dp
function findFibo(num) {
    if(num == 1 || num == 2) 
        return 1;
    return findFibo(num-1) + findFibo(num-2);
}

// TODO: findfibo with DP
function findFiboDP(num, myDiary = {1: 1, 2: 1}) {
    if(num in myDiary) {
        return myDiary[num];
    }

    myDiary[num] = findFiboDP(num - 1, myDiary) + findFiboDP(num - 2, myDiary)
    return myDiary[num]
}

// With DP
console.log(findFiboDP(num1));
console.log(findFiboDP(num2));
console.log(findFiboDP(num3));

// Normal
console.log(findFibo(num1));
console.log(findFibo(num2));
console.log(findFibo(num3)); // FIXME: It will take time