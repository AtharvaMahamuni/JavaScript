// TODO: Fibonacci
const fib = (num, diary = {}) => {
    if(num in diary) return diary[num];
    if(num == 1 || num == 2) 
        return 1;

    diary[num] = fib(num-1, diary) + fib(num-2, diary);
    return diary[num];
}

// console.log(fib(7));
// console.log(fib(10));
// console.log(fib(50));


// TODO: gridTraveler
const gridTraveler = (row, col, diary = {}) => {
    let key = row + ',' + col;
    if(key in diary) return diary[key];
    if(row == 0 || col == 0) return 0;
    if(row == 1 && col == 1) return 1;

    diary[key] = gridTraveler(row-1, col, diary) + gridTraveler(row, col-1, diary);
    return diary[key]; 
}

// console.log(gridTraveler(2,2));
// console.log(gridTraveler(2,3));
// console.log(gridTraveler(3,3));
// console.log(gridTraveler(10,10));
// console.log(gridTraveler(25,25));
// console.log(gridTraveler(50,50));


// TODO: canSum
const canSum = (num , array, diary = {}) => {
    if(num in diary) return diary[num];
    if(num === 0) return true;
    if(num < 0) return false;

    for(let n of array) {
        let remainder = num - n;
        if(canSum(remainder, array, diary)) {
            diary[num] = true;
            return true;
        }
    }

    diary[num] = false;
    return false;
}

// console.log(canSum(10, [2, 3, 4, 5]));
// console.log(canSum(10, [7, 4]));
// console.log(canSum(300, [7, 14]));
// console.log(canSum(300, [2, 14]));



// TODO: howSum
const howSum = (num, array) => {
    if(num === 0) return [];
    if(num < 0) return null;

    let combination = null;

    for(n of array) {
        let remainder = num - n;
        let remainderResult = howSum(remainder, array);

        if(remainderResult !== null) {
            combination = [n, ...remainderResult];
        }
    }

    return combination;
}


// console.log(howSum(0, [5, 7, 4, 3]));
// console.log(howSum(7, [5, 7, 4, 3]));
// console.log(howSum(7, [2, 4]));
// console.log(howSum(8, [2, 3, 5]));
// console.log(howSum(300, [7, 14]));
// console.log(howSum(300, [2, 14, 50]));



// TODO: bestSum 

const bestSum = () => {
                    

}
