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
// Requires a helper function to solve it in with pure recursion and not with a global variable.

const reverseNumberHelper = (n, power) => {
    if(n%10 === n) return n;

    return (n%10)*Math.pow(10, power) 
        + reverseNumberHelper(Math.floor(n/10), power - 1);
}

const reverseNumber = (n) => {
    let power = n.toString().length;
    // console.log(power);

    return reverseNumberHelper(n, power-1)
}

// console.log(reverseNumber(34523));


// TODO: Find if the given number is palindrome or not.

const palindromeHelper = (num, power) => {
    if(num%10 === num) return true;

    if(num%10 === Math.floor(num/Math.pow(10, power))) {
        let cut = (num - ((num%10) + Math.floor((num/Math.pow(10, power)))))%10;
        return palindromeHelper(cut, power - 1);
    }

    return false;
}

const palindrome = (num) => {
    let power = num.toString().length;

    return palindromeHelper(num, power - 1);
}


// TODO: Count the number of zeros in the given number

const zeros = (num, count = 0) => {
    if(num%10 === num) return count;

    if(num%10 === 0)
        return zeros(Math.floor(num/10), ++count)

    else
        return zeros(Math.floor(num/10), count)
}