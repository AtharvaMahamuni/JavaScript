const fib = (num, diary = {}) => {
    if(num in diary) return diary[num];
    if(num == 1 || num == 2) 
        return 1;

    diary[num] = fib(num-1, diary) + fib(num-2, diary);
    return diary[num];
}

console.log(fib(7));
console.log(fib(10));
console.log(fib(50));