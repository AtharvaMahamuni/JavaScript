// TODO: Print the numbers from n to 1 -

function nTo1(n) {
    if(n === 1) {
        console.log(1);
        return;
    }

    console.log(n);
    nTo1(n-1);
}

// nTo1(5);
// nTo1(50);


// TODO: Print numbers from 1 to n

function oneToN(n) {
    
    if(n === 1) {
        console.log(1)
        return;
    }

    oneToN(n-1);
    console.log(n);
}

// oneToN(5);
// oneToN(50);


// Print the products of n to 1

function nTo1squares(n) {

    if(n === 1) {
        console.log(1);
        return;
    }

    console.log(n*n);
    nTo1Products(n-1);

}

// nTo1Products(5);


// TODO: Find the factorial of the given number n

function factorial(n) {
    if(n === 1) return 1;

    return n * factorial(n-1);

}

// console.log(factorial(3));
// console.log(factorial(5));
// console.log(factorial(8));


// TODO: find the sum of first n digits 

function findSum(n) {
    if(n === 1) return 1;

    return n + findSum(--n);
}

// console.log(findSum(5));
// console.log(findSum(8));



// TODO: Reverse a number

function reversNumber(n) {
    if(n <= 1) return n;

    
}
